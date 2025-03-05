import { Duration, Stack } from "aws-cdk-lib";
import { type StackProps } from "aws-cdk-lib";
import { S3StaticWebsiteOrigin } from "aws-cdk-lib/aws-cloudfront-origins";
import {
  AllowedMethods,
  CachedMethods,
  CachePolicy,
  Distribution,
  HeadersFrameOption,
  HttpVersion,
  ResponseHeadersPolicy,
  ViewerProtocolPolicy,
} from "aws-cdk-lib/aws-cloudfront";
import {
  ARecord,
  PublicHostedZone,
  RecordTarget,
} from "aws-cdk-lib/aws-route53";
import { CloudFrontTarget } from "aws-cdk-lib/aws-route53-targets";
import {
  Bucket,
  BucketAccessControl,
  ObjectOwnership,
} from "aws-cdk-lib/aws-s3";
import { Construct } from "constructs";

import {
  CDN_DOMAIN,
  DEFAULT_PATH,
  ERROR_PATH,
  ROUTE_53_HOSTED_ZONE_ID,
  ROUTE_53_HOSTED_ZONE_NAME,
  S3_BUCKET_NAME,
} from "./config";
import { CertificateStack } from "./CertificateStack";

export class CdnStack extends Stack {
  constructor(
    scope: Construct,
    id: string,
    certificateStack: CertificateStack,
    props?: StackProps
  ) {
    super(scope, id, props);

    const bucket = new Bucket(this, "Bucket", {
      bucketName: S3_BUCKET_NAME,

      accessControl: BucketAccessControl.PUBLIC_READ,
      blockPublicAccess: {
        blockPublicAcls: false,
        blockPublicPolicy: false,
        ignorePublicAcls: false,
        restrictPublicBuckets: false,
      },
      objectOwnership: ObjectOwnership.OBJECT_WRITER,
      publicReadAccess: true,

      versioned: true,
      websiteErrorDocument: DEFAULT_PATH,
      websiteIndexDocument: ERROR_PATH,
    });

    const origin = new S3StaticWebsiteOrigin(bucket);

    const responseHeadersPolicy = new ResponseHeadersPolicy(
      this,
      "ResponseHeadersPolicy",
      {
        customHeadersBehavior: {
          customHeaders: [
            {
              header: "Cross-Origin-Opener-Policy",
              value: "same-origin",
              override: true,
            },
          ],
        },
        securityHeadersBehavior: {
          frameOptions: {
            frameOption: HeadersFrameOption.SAMEORIGIN,
            override: true,
          },
          strictTransportSecurity: {
            accessControlMaxAge: Duration.days(365),
            includeSubdomains: true,
            override: true,
            preload: true,
          },
        },
      }
    );

    const distribution = new Distribution(this, "Distribution", {
      certificate: certificateStack.certificate,
      defaultBehavior: {
        allowedMethods: AllowedMethods.ALLOW_GET_HEAD_OPTIONS,
        cachedMethods: CachedMethods.CACHE_GET_HEAD_OPTIONS,
        cachePolicy: CachePolicy.CACHING_OPTIMIZED,
        origin,
        responseHeadersPolicy: responseHeadersPolicy,
        viewerProtocolPolicy: ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
      },
      defaultRootObject: DEFAULT_PATH,
      domainNames: [CDN_DOMAIN],
      errorResponses: [403, 404].map((httpStatus) => ({
        httpStatus,
        responseHttpStatus: 200,
        responsePagePath: `/${ERROR_PATH}`,
        ttl: Duration.days(30),
      })),
      httpVersion: HttpVersion.HTTP2_AND_3,
    });

    const hostedZone = PublicHostedZone.fromHostedZoneAttributes(
      this,
      "HostedZone",
      {
        hostedZoneId: ROUTE_53_HOSTED_ZONE_ID,
        zoneName: ROUTE_53_HOSTED_ZONE_NAME,
      }
    );

    new ARecord(this, "AliasRecord", {
      recordName: CDN_DOMAIN,
      target: RecordTarget.fromAlias(new CloudFrontTarget(distribution)),
      zone: hostedZone,
    });
  }
}

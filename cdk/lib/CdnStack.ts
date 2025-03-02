import { Duration, Stack } from "aws-cdk-lib";
import type { StackProps } from "aws-cdk-lib";
import { S3StaticWebsiteOrigin } from "aws-cdk-lib/aws-cloudfront-origins";
import {
  AllowedMethods,
  CachedMethods,
  CachePolicy,
  Distribution,
  HttpVersion,
} from "aws-cdk-lib/aws-cloudfront";
import {
  Bucket,
  BucketAccessControl,
  ObjectOwnership,
} from "aws-cdk-lib/aws-s3";
import { Construct } from "constructs";

import { CDN_DOMAIN, DEFAULT_PATH, S3_BUCKET_NAME } from "./config";
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
    });

    const origin = new S3StaticWebsiteOrigin(bucket);

    new Distribution(this, "Distribution", {
      certificate: certificateStack.certificate,
      defaultBehavior: {
        allowedMethods: AllowedMethods.ALLOW_GET_HEAD_OPTIONS,
        cachedMethods: CachedMethods.CACHE_GET_HEAD_OPTIONS,
        cachePolicy: CachePolicy.USE_ORIGIN_CACHE_CONTROL_HEADERS,
        origin,
      },
      defaultRootObject: DEFAULT_PATH,
      domainNames: [CDN_DOMAIN],
      errorResponses: [403, 404].map((httpStatus) => ({
        httpStatus,
        responseHttpStatus: 200,
        responsePagePath: DEFAULT_PATH,
        ttl: Duration.days(30),
      })),
      httpVersion: HttpVersion.HTTP2_AND_3,
    });
  }
}

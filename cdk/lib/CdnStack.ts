import { Stack } from "aws-cdk-lib";
import type { StackProps } from "aws-cdk-lib";
import { Distribution } from "aws-cdk-lib/aws-cloudfront";
import {
  Bucket,
  BucketAccessControl,
  ObjectOwnership,
} from "aws-cdk-lib/aws-s3";
import { Construct } from "constructs";

import { CDN_DOMAIN, S3_BUCKET_NAME } from "./config";
import { CertificateStack } from "./CertificateStack";

export class CdnStack extends Stack {
  constructor(
    scope: Construct,
    id: string,
    certificateStack: CertificateStack,
    props?: StackProps
  ) {
    super(scope, id, props);

    new Bucket(this, "Bucket", {
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

    new Distribution(this, "Distribution", {
      certificate: certificateStack.certificate,
      defaultBehavior: {
        origin: // TODO:
      },
      domainNames: [CDN_DOMAIN],
    });
  }
}

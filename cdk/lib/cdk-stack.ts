import { Stack, StackProps } from "aws-cdk-lib";
import {
  Bucket,
  BucketAccessControl,
  ObjectOwnership,
} from "aws-cdk-lib/aws-s3";
import { Construct } from "constructs";

export class CdkStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    new Bucket(this, "Bucket", {
      bucketName: "allen-pasch-masonry-grid",

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
  }
}

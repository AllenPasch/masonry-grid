#!/usr/bin/env node

import { App } from "aws-cdk-lib";

import { AWS_ACCOUNT_ID, CertificateStack, CdnStack } from "../lib";

const app = new App();

const certificateStack = new CertificateStack(app, "masonry-grid-certificate", {
  env: { account: AWS_ACCOUNT_ID, region: "us-east-1" },
  crossRegionReferences: true,
});

new CdnStack(app, "masonry-grid", certificateStack, {
  env: { account: AWS_ACCOUNT_ID, region: "eu-central-1" },
  crossRegionReferences: true,
});

#!/usr/bin/env node
import { App } from "aws-cdk-lib";
import { CdkStack } from "../lib/cdk-stack";

const app = new App();

new CdkStack(app, "masonry-grid", {
  env: { account: "119537545461", region: "eu-central-1" },
});

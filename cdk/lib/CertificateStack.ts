import { Stack } from "aws-cdk-lib";
import type { StackProps } from "aws-cdk-lib";
import {
  Certificate,
  CertificateValidation,
} from "aws-cdk-lib/aws-certificatemanager";
import { PublicHostedZone } from "aws-cdk-lib/aws-route53";
import { Construct } from "constructs";

import { CDN_DOMAIN, ROUTE_53_HOSTED_ZONE_ID } from "./config";

export class CertificateStack extends Stack {
  readonly certificate: Certificate;

  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const hostedZone = PublicHostedZone.fromHostedZoneId(
      this,
      "HostedZone",
      ROUTE_53_HOSTED_ZONE_ID
    );

    this.certificate = new Certificate(this, "Certificate", {
      domainName: CDN_DOMAIN,
      validation: CertificateValidation.fromDns(hostedZone),
    });
  }
}

import { Stack } from "aws-cdk-lib";
import type { StackProps } from "aws-cdk-lib";
import {
  Certificate,
  CertificateValidation,
} from "aws-cdk-lib/aws-certificatemanager";
import { Construct } from "constructs";

import { CDN_DOMAIN, CERTIFICATE_VALIDATION_DOMAIN } from "./config";

export class CertificateStack extends Stack {
  readonly certificate: Certificate;

  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    this.certificate = new Certificate(this, "Certificate", {
      domainName: CDN_DOMAIN,
      validation: CertificateValidation.fromEmail({
        CDN_DOMAIN: CERTIFICATE_VALIDATION_DOMAIN,
      }),
    });
  }
}

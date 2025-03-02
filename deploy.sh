#!/bin/bash -e

# Environment Variables
export AWS_PROFILE=masonry

# Deploy Cloud Infrastructure with CDK
(cd cdk && cdk deploy --all)

# Build Application
yarn build

# Deploy Files
aws s3 cp out s3://allen-pasch-masonry-grid \
    --acl public-read \
    --cache-control "must-revalidate" \
    --exclude "*" \
    --include "*.html" \
    --recursive

aws s3 cp out s3://allen-pasch-masonry-grid \
    --acl public-read \
    --cache-control "max-age=2592000" \
    --exclude "*.html" \
    --recursive

aws cloudfront create-invalidation \
    --distribution-id E1K21MT8F2KK0V \
    --paths "/favicon.ico"

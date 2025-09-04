#!/bin/bash

set -e   
set -x

echo "[main.sh] Starting video transcoder worker..."

echo "BucketURL: $BUCKET_URL"

export BUCKET_URL="$BUCKET_URL"
export AWS_REGION="$AWS_REGION"
export SQS_URL="$SQS_URL"


exec node worker.js
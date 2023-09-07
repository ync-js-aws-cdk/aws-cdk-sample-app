#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
//import { SampleAppStack } from '../lib/sample-app-stack';
import { S3BucketStack } from '../lib/S3BucketStack';

const app = new cdk.App();
//new SampleAppStack(app, 'SampleAppStack');
new S3BucketStack(app, 'S3BucketStack', {
  env: {
    region: 'ap-southeast-2',
    account: '049291762274',
  },  
});
app.synth();
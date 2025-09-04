import { SQSClient, ReceiveMessageCommand, DeleteMessageCommand } from "@aws-sdk/client-sqs";
import { S3Client, GetObjectCommand, PutObjectCommand } from "@aws-sdk/client-s3";


// Initializing clients
const REGION = process.env.AWS_REGION || "ap-south-1"
const sqsClient = new SQSClient({ region: REGION });
const s3 = new S3Client({ region: REGION });

const SQS_QRL = process.env.SQS_QRL;


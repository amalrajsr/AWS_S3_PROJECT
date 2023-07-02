const { S3Client,GetObjectCommand } = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/cloudfront-signer");

const region = process.env.BUCKET_REGION;
const accessKeyId = process.env.SECRET_KEY;
const secretAccessKey = process.env.SECRET_ACCESS_KEY;

const s3Client = new S3Client({
  credentials: {
    accessKeyId,
    secretAccessKey,
  },
  region
});

module.exports = {s3Client,GetObjectCommand,getSignedUrl};

# AWS_S3_PROJECT

This repository offers a sample implementation that demonstrates how to create a private S3 bucket and access it through a CloudFront distribution using an Express server. The Express server initiates an API call to acquire a signed URL with a 5-minute expiration time for an image file uploaded to the S3 bucket

## Installation
1. Clone the repository: git clone https://github.com/amalrajsr/AWS_S3_PROJECT.git
2. Navigate to the project directory: cd AWS_S3_PROJECT
3. Install the dependencies: npm install
   
## Usage
1. Start the Express server: npm start
2. Open the  browser and navigate to `http://localhost:3489/signedUrl` to get the signed URL


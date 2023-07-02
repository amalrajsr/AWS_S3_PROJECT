const s3 = require("./config");

const getUrl = async (req, res) => {
  try {
    const signedUrl = s3.getSignedUrl({
      keyPairId: process.env.CLOUDFRONT_KEYPAIR_ID,
      privateKey: process.env.CLOUDFRONT_PRIVATE_KEY,
      url: process.env.IMAGE_URL,
      dateLessThan: new Date(Date.now() + 1000 * 60*5),
    });
    console.log(`Image url ${signedUrl}`);
    res.json({ imageUrl: signedUrl });
  } catch (err) {
    res.status(500).json({ error: "something went wrong" });
  }
};

module.exports = getUrl;

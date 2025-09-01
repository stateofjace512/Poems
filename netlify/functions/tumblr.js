import OAuth from "oauth-1.0a";
import crypto from "crypto";

export async function handler(event) {
  const consumerKey = process.env.TUMBLR_API_KEY;
  const consumerSecret = process.env.TUMBLR_SECRET_KEY;
  const accessToken = process.env.TUMBLR_ACCESS_TOKEN;
  const accessTokenSecret = process.env.TUMBLR_ACCESS_KEY_SECRET;

  const blog = "jrosales19.tumblr.com";
  const url = `https://api.tumblr.com/v2/blog/${blog}/posts`;

  // Init OAuth
  const oauth = new OAuth({
    consumer: { key: consumerKey, secret: consumerSecret },
    signature_method: "HMAC-SHA1",
    hash_function(base_string, key) {
      return crypto.createHmac("sha1", key).update(base_string).digest("base64");
    },
  });

  // Sign request
  const requestData = { url, method: "GET" };
  const headers = oauth.toHeader(
    oauth.authorize(requestData, {
      key: accessToken,
      secret: accessTokenSecret,
    })
  );

  try {
    const res = await fetch(url, { method: "GET", headers });
    if (!res.ok) {
      throw new Error(`Tumblr API error: ${res.status} ${res.statusText}`);
    }
    const data = await res.json();

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data, null, 2),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
}

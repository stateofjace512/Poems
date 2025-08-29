// netlify/functions/tumblr.js

export async function handler(event) {
  const apiKey = process.env.TUMBLR_API_KEY; 
  const blog = "jrosales19.tumblr.com";
  const url = `https://api.tumblr.com/v2/blog/${blog}/posts/text?api_key=${apiKey}`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*", 
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
}

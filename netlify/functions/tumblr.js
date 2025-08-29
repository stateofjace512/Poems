import fetch from "node-fetch";

export async function handler(event) {
  const apiKey = 'zfgzSTPVBDa86jBZtWif8xBqXduItRE4pX3l1tWAtBT8k12qZG';
  const blog = "jrosales19"; // your blog
  const url = `https://api.tumblr.com/v2/blog/${blog}/posts/text?api_key=${apiKey}`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    return {
      statusCode: 200,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify(data),
    };
  } catch (err) {
    return { statusCode: 500, body: err.toString() };
  }
}

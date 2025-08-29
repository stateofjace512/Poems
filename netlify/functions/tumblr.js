export async function handler(event) {
  const apiKey = process.env.TUMBLR_API_KEY;
  const blog = "jrosales19.tumblr.com";

  const url = `https://api.tumblr.com/v2/blog/${blog}/posts?api_key=${apiKey}&npf=true&reblog_info=true&notes_info=true&limit=50`;

  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Tumblr API error: ${res.status} ${res.statusText}`);
    }
    const data = await res.json();

    const filteredPosts = data?.response?.posts?.filter(
      (post) => !post.reblogged_from_id && !post.reblogged_root_id
    ) || [];

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
        {
          ...data,
          response: {
            ...data.response,
            posts: filteredPosts,
          },
        },
        null,
        2
      ),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
}

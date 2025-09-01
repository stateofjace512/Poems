import OAuth from "oauth-1.0a";
import crypto from "crypto";

export async function handler(event) {
  // Add CORS headers for preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "GET, OPTIONS",
      },
      body: '',
    };
  }

  const consumerKey = process.env.TUMBLR_API_KEY;
  const consumerSecret = process.env.TUMBLR_SECRET_KEY;
  const accessToken = process.env.TUMBLR_ACCESS_TOKEN;
  const accessTokenSecret = process.env.TUMBLR_ACCESS_KEY_SECRET;
  
  // Validate environment variables
  if (!consumerKey || !consumerSecret || !accessToken || !accessTokenSecret) {
    console.error('Missing required environment variables');
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        error: "Missing required environment variables",
        required: ["TUMBLR_API_KEY", "TUMBLR_SECRET_KEY", "TUMBLR_ACCESS_TOKEN", "TUMBLR_ACCESS_KEY_SECRET"]
      }),
    };
  }

  const blog = "jrosales19.tumblr.com";
  
  // Add query parameters to get more posts and include content
  const queryParams = new URLSearchParams({
    limit: '20', // Get up to 20 posts instead of default 20
    offset: '0',
    type: '', // Get all post types
    filter: 'raw', // Get raw content instead of formatted
  });
  
  const url = `https://api.tumblr.com/v2/blog/${blog}/posts?${queryParams.toString()}`;
  
  console.log('Fetching from URL:', url);

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
  const authHeader = oauth.toHeader(
    oauth.authorize(requestData, {
      key: accessToken,
      secret: accessTokenSecret,
    })
  );

  // Combine OAuth header with other headers
  const headers = {
    ...authHeader,
    'User-Agent': 'Netlify-Function/1.0',
    'Accept': 'application/json',
  };

  console.log('Request headers (OAuth part only):', authHeader);

  try {
    const res = await fetch(url, { 
      method: "GET", 
      headers 
    });

    console.log('Response status:', res.status);
    console.log('Response headers:', Object.fromEntries(res.headers.entries()));

    if (!res.ok) {
      const errorText = await res.text();
      console.error('Tumblr API error response:', errorText);
      throw new Error(`Tumblr API error: ${res.status} ${res.statusText} - ${errorText}`);
    }

    const data = await res.json();
    
    // Log some basic info about the response
    console.log('Response received with', data.response?.posts?.length || 0, 'posts');
    
    // Log the structure of the first post for debugging
    if (data.response?.posts?.length > 0) {
      const firstPost = data.response.posts[0];
      console.log('First post structure:', {
        id: firstPost.id,
        type: firstPost.type,
        title: firstPost.title,
        hasBody: !!firstPost.body,
        hasContent: !!firstPost.content,
        hasText: !!firstPost.text,
        hasSummary: !!firstPost.summary,
        contentKeys: Object.keys(firstPost),
      });
    }

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        "Cache-Control": "public, max-age=300",
      },
      body: JSON.stringify(data, null, 2),
    };
  } catch (err) {
    console.error('Function error:', err);
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        error: err.message,
        timestamp: new Date().toISOString(),
      }),
    };
  }
}

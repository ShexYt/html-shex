exports.handler = async (event, context) => {
  try {
    // Extract query parameters
    const params = event.queryStringParameters;
    const username = params.username || ''; // Default to an empty string if no username

    // Check if the username is "bacon"
    if (username.toLowerCase() === "bacon") {
      return {
        statusCode: 200,
        headers: {
          "Content-Type": "text/plain",
        },
        body: "hi", // Send plain text response if username is "bacon"
      };
    } else {
      return {
        statusCode: 302,
        headers: {
          Location: "https://example.com", // Redirect to another page if username is wrong
        },
      };
    }
  } catch (error) {
    console.error('Error handling request:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
};

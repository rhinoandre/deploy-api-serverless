'use strict';

module.exports.hello = async ({ queryStringParameters, httpMethod, body }) => {
  if (queryStringParameters && queryStringParameters.name) {
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: `Hey ${queryStringParameters.name}, what's up?`,
      }),
    };
  }

  if (httpMethod === 'POST' && body) {
    const parsedBody = JSON.parse(body);
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Body received!',
        body: parsedBody,
      }),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
    }),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

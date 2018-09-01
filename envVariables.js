'use strict'

// It must return a promise
module.exports.handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      envVariable: process.env.MY_CRAZY_KEY,
      providerVariable: process.env.MAYBE_A_KEY
    }),
  };
}
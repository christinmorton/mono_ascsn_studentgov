export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      origin: ['https://cmtestwebsite7.com', 'http://localhost:3000'],
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
      headers: ['Content-Type', 'Authorization', 'Origin', 'Accept', 'Token'],
      keepHeaderOnError: true,
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  {
    name: 'strapi::session',
    config: {
      key: 'ascsn-token', // Default cookie key
      maxAge: 86400000, // 1 day in milliseconds
      autoCommit: true, // Automatically commit headers
      overwrite: true, // Allow overwriting of cookies
      signed: true, // Sign the cookies
      renew: true, // Renew session if nearing expiration
      secure: process.env.NODE_ENV === 'production', // Use HTTPS in production
    },
  },
  'strapi::favicon',
  'strapi::public',
];

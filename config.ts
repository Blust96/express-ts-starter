require('dotenv').config();

export default {
  server: {
    port: process.env.SERVER_PORT || 3000,
  },
}
const path = require('path')
const cors = require('cors')
const express = require('express');
const app = express();
const devMode = process.env.NODE_ENV !== 'production';
const ViteExpress = require('vite-express');
  ViteExpress.config({ mode: devMode ? 'development' : 'production' });

const router = require('./router.js')
const PORT = process.env.PORT || 3648

ViteExpress.listen(app, PORT, () => {
  console.log(`BucketLab_Gamma Server is spinning on port ${PORT}`);
})
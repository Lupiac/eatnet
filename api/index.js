const app = require('./app.js');

app.listen(3000, () => {
  console.log(`app is running on port ${process.env.API_PORT}`);
})
const express = require('express'), path = require('path'), chalk = require('chalk'), Quote = require('inspirational-quotes'), os = require('os');

const app = express();

const port = 80;
const hostName = os.hostname()
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/src/index.html'));
});


app.use(express.static('src'));

app.listen(port, function () {
  console.log(chalk.blue(`   >>> Server alive at http://${hostName}${(port == 80 ? '' : `:${port}`)}`))
});

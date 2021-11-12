const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/../dist`));

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on port: ${port}!`);
});

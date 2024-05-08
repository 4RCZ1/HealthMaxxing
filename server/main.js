const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello World!'));

const DrugsService = require('./Services/DrugsServices');
const JWTService = require('./Services/JwtService');
const DrugsServices = new DrugsService();
const JWTServices = new JWTService('100pa');
const port = 3001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


app.get('/getUserPrescriptions', async (req, res) => {
  const token = req.headers.authorization;
  const userPrescriptions = await DrugsServices.getUserPrescriptions(token);
  res.send(userPrescriptions);
});


app.post('/generateToken', async (req, res) => {
  const token = await JWTServices.generateToken(1);
  res.send({ token });
});





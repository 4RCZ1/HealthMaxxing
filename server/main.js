const express = require('express');
const app = express();
const cors = require('cors');

app.get('/', (req, res) => res.send('Hello World!'));

const DrugsService = require('./Services/DrugsServices');
const JWTService = require('./Services/JwtService');
const DrugsServices = new DrugsService();
const JWTServices = new JWTService('100pa');
const port = 3001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.use(cors());


app.get('/getClosestPrescription', async (req, res) => {
  const token = await JWTServices.generateToken(1);
  const userPrescriptions = await DrugsServices.getClosestPrescription(token);
  res.send(userPrescriptions);
});


app.get('/addDrugPrescription', async (req, res) => {
    const token = req.headers.authorization;
    const drug = req.body;
    const userPrescriptions = await DrugsServices.addDrugPrescription(drug, token);
    res.send(userPrescriptions);
});

app.post('/generateToken', async (req, res) => {
  const token = await JWTServices.generateToken(1);
  res.send({ token });
});





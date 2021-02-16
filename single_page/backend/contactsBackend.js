const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

const contacts = [
	{id: 1, name: "bruno da silva", phone: "99999-2222", date: new Date(), operator: {name: "Oi", code: 14, category: "Smartphone"}, color: {name: 'Orange', hexa: '#F2B705'}},
	{id: 2, name: "SANDRA de oliveira", phone: "99999-3333", date: new Date(), operator: {name: "Vivo", code: 15, category: "Smartphone"}, color: {name: 'Red', hexa: '#BF0413'}},
	{id: 3, name: "Mariana sANTANA", phone: "99999-9999", date: new Date(), operator: {name: "Tim", code: 41, category: "Smartphone"}, color: {name: 'Blue', hexa: '#549EF7'}}
];
const operators = [
	{name: "Oi", code: 14, category: "Smartphone", price: 0.25},
	{name: "Vivo", code: 15, category: "Smartphone", price: 0.35},
	{name: "Tim", code: 41, category: "Smartphone", price: 0.25},
	{name: "GVT", code: 25, category: "Fixed", price: 0.30},
	{name: "Embratel", code: 21, category: "Fixed", price: 0.50}
];
const colors = [
  {name: 'Red', hexa: '#BF0413'},
  {name: 'Blue', hexa: '#549EF7'},
  {name: 'Orange', hexa: '#F2B705'},
  {name: 'Pupple', hexa: '#78498C'},
];

app.listen(process.env.PORT || 3412);
console.log(`🚀 Server started on port: ${process.env.PORT || 3412}`);

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/contacts', function(req, res) {
  res.json(contacts);
});

app.get('/contacts/:id', function(req, res) {
  contacts.forEach(function (contact) {
    if (contact.id == req.params.id) {
      res.json(contact);
      return;
    }
  });
});

app.post('/contacts', function(req, res) {
  contacts.push(req.body);
  res.json(true);
});

app.get('/operators', function(req, res) {
  res.json(operators);
});

app.get('/colors', function(req, res) {
  res.json(colors);
});
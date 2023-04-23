const express = require('express');


app.use(express.json());



// get all contacts
app.get('/contacts', (req, res) => {
  res.json(phonebook);
});

// get a single contact by name
app.get('/contacts/:name', (req, res) => {
  const contact = phonebook.find(c => c.name === req.params.name);
  if (!contact) return res.status(404).send('Contact not found');
  res.json(contact);
});

// add a new contact
app.post('/contacts', (req, res) => {
  const contact = { name: req.body.name, phone: req.body.phone };
  phonebook.push(contact);
  res.json(contact);
});

// update an existing contact
app.put('/contacts/:name', (req, res) => {
  const contact = phonebook.find(c => c.name === req.params.name);
  if (!contact) return res.status(404).send('Contact not found');
  contact.phone = req.body.phone;
  res.json(contact);
});

// delete a contact
app.delete('/contacts/:name', (req, res) => {
  const index = phonebook.findIndex(c => c.name === req.params.name);
  if (index === -1) return res.status(404).send('Contact not found');
  phonebook.splice(index, 1);
  res.sendStatus(204);
});

// start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

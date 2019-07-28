const express = require('express');
const router = express.Router();

//@route  GET api/contacts
//@desc  get all contacts
//@access  Private
router.post('/', (req, res) => res.send('Get all contacts'))

//@route  POST api/contacts
//@desc  Add a contact
//@access  Private
router.post('/', (req, res) => res.send('Add a contact'))

//@route  PUT api/contacts/:id
//@desc  Updates a contact 
//@access  Private
router.post('/:id', (req, res) => res.send('Update a contact'))

//@route  DELETE api/contacts/:id
//@desc  Deletes a contact
//@access  Private
router.post('/:id', (req, res) => res.send('Delete a contact'))

module.exports = router;
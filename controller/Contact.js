const Contact = require("../model/Contact")

module.exports.CreateContact = async function (req, res) {
      const data = req.body;
      if (!(data.addressOne && data.addressTwo && data.email && data.phone)) {
          return res.json({
              msg: "Inputs are required",
          });
      }

      const inputData = {
          addressOne: data.addressOne,
          addressTwo: data.addressTwo,
          email: data.email,
          phone: data.phone,
      }
  
      const newContact = new Contact(inputData);
  
      await newContact.save();
      return res.json({
          msg: "Contact sent successfully"
      }).status(200)
  }

  module.exports.getContact = async function (req, res) {
    try {
      const contact = await Contact.findOne({});
  
      if (!contact) {
        return res.status(404).json({
          error: 'No contact found',
        });
      }
  
      const data = {
        _id: contact._id,
        addressOne: contact.addressOne,
          addressTwo: contact.addressTwo,
          email: contact.email,
          phone: contact.phone,
      };
  
      return res.status(200).json(data);
    } catch (error) {
      console.error('Error retrieving contact:', error);
      return res.status(500).json({
        error: 'Server error',
      });
    }
  };


  module.exports.updateContact = async function (req, res) {
    const { contactId } = req.params;
    const data = req.body;

    const updatedData = {
        addressOne: data.addressOne,
          addressTwo: data.addressTwo,
          email: data.email,
          phone: data.phone,
    }
  
    try {
      const contact = await Contact.findById(contactId);
  
      if (!contact) {
        return res.status(404).json({ msg: 'Contact not found' });
      }
  
      await Contact.findByIdAndUpdate(contactId, updatedData);
      return res.status(200).json({ msg: 'Contact updated successfully' });
    } catch (error) {
      console.error('Error updating contact:', error);
      return res.status(500).json({ error: 'Server error' });
    }
  };
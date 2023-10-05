const Client = require("../model/Client")

module.exports.CreateClient = async function (req, res) {
      const data = req.body;
      if (!(data.name && data.image && data.position && data.message)) {
          return res.json({
              msg: "Inputs are required",
          });
      }

      const inputData = {
          name: data.name,
          image: data.image,
          position: data.position,
          message: data.message,
      }
  
      const newClient = new Client(inputData);
  
      await newClient.save();
      return res.json({
          msg: "Client sent successfully"
      }).status(200)
  }

  module.exports.getClients = async function (req, res) {
    try {
        const clients = await Client.find({})
        const data = clients.map((client) => ({
            _id: client._id,
            image: client.image,
            name: client.name,
            position: client.position,
            message: client.message,
        }));

        return res.status(200).json({
            clients: data,
        });
    } catch (error) {
        console.error('Error retrieving clients:', error);
        return res.status(500).json({
            error: 'Server error',
        });
    }
}


module.exports.getClient = async function (req, res) {
    const { clientId } = req.params;

    try {
      const client = await Client.findById(clientId);
  
      if (!client) {
        return res.status(404).json({
          error: 'No client found',
        });
      }
  
      const data = {
        _id: client._id,
        image: client.image,
        name: client.name,
        position: client.position,
        message: client.message,
      };
  
      return res.status(200).json(data);
    } catch (error) {
      console.error('Error retrieving client:', error);
      return res.status(500).json({
        error: 'Server error',
      });
    }
  };


  module.exports.updateClient = async function (req, res) {
    const { clientId } = req.params;
    const data = req.body;

    const updatedData = {
        name: data.name,
          image: data.image,
          position: data.position,
          message: data.message,
    }
  
    try {
      const client = await Client.findById(clientId);
  
      if (!client) {
        return res.status(404).json({ msg: 'Client not found' });
      }
  
      await Client.findByIdAndUpdate(clientId, updatedData);
      return res.status(200).json({ msg: 'Client updated successfully' });
    } catch (error) {
      console.error('Error updating client:', error);
      return res.status(500).json({ error: 'Server error' });
    }
  };

  module.exports.deleteClient = async function (req, res) {

    const { clientId } = req.params;

    try {
        const client = await Client.findById(clientId);

        if (!client) {
            return res.status(404).json({ msg: 'Client not found' });
        }

        await Client.findByIdAndDelete(clientId);
        return res.status(200).json({ msg: 'Client deleted successfully' });
    } catch (error) {
        console.error('Error deleting client:', error);
        return res.status(500).json({ error: 'Server error' });
    }
};
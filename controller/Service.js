const Service = require("../model/Service")

module.exports.CreateService = async function (req, res) {
      const data = req.body;
      if (!(data.name && data.image && data.message)) {
          return res.json({
              msg: "Inputs are required",
          });
      }

      const inputData = {
          name: data.name,
          image: data.image,
          message: data.message,
      }
  
      const newService = new Service(inputData);
  
      await newService.save();
      return res.json({
          msg: "Service sent successfully"
      }).status(200)
  }

  module.exports.getServices = async function (req, res) {
    try {
        const services = await Service.find({})
        const data = services.map((service) => ({
            _id: service._id,
            image: service.image,
            name: service.name,
            message: service.message,
        }));

        return res.status(200).json({
            services: data,
        });
    } catch (error) {
        console.error('Error retrieving services:', error);
        return res.status(500).json({
            error: 'Server error',
        });
    }
}


module.exports.getService = async function (req, res) {
    const { serviceId } = req.params;

    try {
      const service = await Service.findById(serviceId);
  
      if (!service) {
        return res.status(404).json({
          error: 'No service found',
        });
      }
  
      const data = {
        _id: service._id,
        image: service.image,
        name: service.name,
        message: service.message,
      };
  
      return res.status(200).json(data);
    } catch (error) {
      console.error('Error retrieving service:', error);
      return res.status(500).json({
        error: 'Server error',
      });
    }
  };


  module.exports.updateService = async function (req, res) {
    const { serviceId } = req.params;
    const data = req.body;

    const updatedData = {
        name: data.name,
          image: data.image,
          position: data.position,
          message: data.message,
    }
  
    try {
      const service = await Service.findById(serviceId);
  
      if (!service) {
        return res.status(404).json({ msg: 'Service not found' });
      }
  
      await Service.findByIdAndUpdate(serviceId, updatedData);
      return res.status(200).json({ msg: 'Service updated successfully' });
    } catch (error) {
      console.error('Error updating service:', error);
      return res.status(500).json({ error: 'Server error' });
    }
  };

  module.exports.deleteService = async function (req, res) {

    const { serviceId } = req.params;

    try {
        const service = await Service.findById(serviceId);

        if (!service) {
            return res.status(404).json({ msg: 'Service not found' });
        }

        await Service.findByIdAndDelete(serviceId);
        return res.status(200).json({ msg: 'Service deleted successfully' });
    } catch (error) {
        console.error('Error deleting service:', error);
        return res.status(500).json({ error: 'Server error' });
    }
};
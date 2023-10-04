const Partner = require("../model/Partner")

module.exports.CreatePartner = async function (req, res) {
    const data = req.body;
    if (!(data.image)) {
        return res.json({
            msg: "Inputs are required",
        });
    }

    const inputData = {
        image: data.image
    }

    const newPartner = new Partner(inputData);

    await newPartner.save();
    return res.json({
        msg: "Partner sent successfully"
    }).status(200)
}

module.exports.getPartners = async function (req, res) {
    try {
        const partners = await Partner.find({})
        const data = partners.map((partner) => ({
            _id: partner._id,
            image: partner.image,
        }));

        return res.status(200).json({
            partners: data,
        });
    } catch (error) {
        console.error('Error retrieving partners:', error);
        return res.status(500).json({
            error: 'Server error',
        });
    }
}

module.exports.deletePartner = async function (req, res) {

    const { partnerId } = req.params;

    try {
        const partner = await Partner.findById(partnerId);

        if (!partner) {
            return res.status(404).json({ msg: 'Partner not found' });
        }

        await Partner.findByIdAndDelete(partnerId);
        return res.status(200).json({ msg: 'Partner deleted successfully' });
    } catch (error) {
        console.error('Error deleting blog:', error);
        return res.status(500).json({ error: 'Server error' });
    }
};
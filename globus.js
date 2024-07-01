const expressGlobus = require('express');
const router = expressGlobus.Router();
const callGetHotelMedia = require('./globusEndpoints/getHotelMedia');

// This controller will handle each of our Globus endpoints

// Each endpoint here will call a method that will be imported from the globusEndpoints 
// method directory.

router.get('/get-hotel-media', async (req, res) => {
    res.send(callGetHotelMedia());
});

// TODO: Need to see if there are any good error handling packages

module.exports = router;
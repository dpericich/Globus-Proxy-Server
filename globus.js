const expressGlobus = require('express');
const router = expressGlobus.Router();
// Endpoint Methods  
const callGetHotelMedia = require('./globusEndpoints/getHotelMedia');
const callGetAllHotelCodes = require('./globusEndpoints/getAllHotelCodes');


// This controller will handle each of our Globus endpoints

// Each endpoint here will call a method that will be imported from the globusEndpoints 
// method directory.

router.get('/get-hotel-media', async (req, res) => {
    res.json({ data: await callGetHotelMedia() });
});

router.get('/get-all-hotel-codes', async (req, res) => {
    res.json({ data: await callGetAllHotelCodes() });
});

// TODO: Need to see if there are any good error handling packages

module.exports = router;
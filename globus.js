const expressGlobus = require('express');
const router = expressGlobus.Router();
// Endpoint Methods  
const callGetHotelMedia = require('./globusEndpoints/getHotelMedia');
const callGetAllHotelCodes = require('./globusEndpoints/getAllHotelCodes');


// This controller will handle each of our Globus endpoints

// Each endpoint here will call a method that will be imported from the globusEndpoints 
// method directory.


//////////////////////////////////////////
//////////////// TOURS  //////////////////
//////////////////////////////////////////

// WIP
router.get('/get-all-available-tours', async (req, res) => {
    res.json({ data: await callGetAllAvailableTours() });
});

// WIP
router.get('/get-tour-day-media', async (req, res) => {
    res.json({ data: await callGetTourDayMedia() });
});

// WIP
router.get('/get-tour-day-media-by-brand', async (req, res) => {
    res.json({ data: await callGetTourDayMediaByBrand() });
});

// WIP
router.get('/get-tour-media', async (req, res) => {
    res.json({ data: await callGetTourMedia() });
});

// WIP
router.get('/get-tour-media-by-brand', async (req, res) => {
    res.json({ data: await callGetTourMediaByBrand() });
});

//////////////////////////////////////////
//////////////// HOTELS //////////////////
//////////////////////////////////////////

router.get('/get-hotel-media', async (req, res) => {
    res.json({ data: await callGetHotelMedia() });
});

router.get('/get-all-hotel-codes', async (req, res) => {
    res.json({ data: await callGetAllHotelCodes() });
});

// WIP
router.get('/get-basic-hotel-media', async (req, res) => {
    res.json({ data: await callGetBasicHotelMedia() });
});

// WIP
router.get('/get-basic-hotel-media-by-location', async (req, res) => {
    res.json({ data: await callGetBasicHotelMediaByLocation() });
});

// WIP
router.get('/get-basic-hotel-media-by-tour', async (req, res) => {
    res.json({ data: await callGetBasicHotelMediaByTour() });
});

// WIP
router.get('/get-hotel-media-by-city-and-tour-code', async (req, res) => {
    res.json({ data: await callGetHotelMediaByCityAndTourCode() });
});

// WIP
router.get('/get-hotel-media-by-tour-code', async (req, res) => {
    res.json({ data: await callGetHotelMediaByTourCode() });
});

//////////////////////////////////////////
////////////// DEPARTURES ////////////////
//////////////////////////////////////////

// WIP
router.get('/get-departures-with-pricing', async (req, res) => {
    res.json({ data: await callGetDeparturesWithPricing() });
});

// WIP
router.get('/get-departure-pricing', async (req, res) => {
    res.json({ data: await callGetDeparturePricing() });
});

// WIP
router.get('/get-departures', async (req, res) => {
    res.json({ data: await callGetDepartures() });
});

// WIP
router.get('/get-departures-by-season', async (req, res) => {
    res.json({ data: await callGetDeparturesBySeason() });
});

// WIP
router.get('/get-group-departures', async (req, res) => {
    res.json({ data: await callGetGroupDepartures() });
});


//////////////////////////////////
//////// OTHER ENDPOINTS /////////
//////////////////////////////////
// GetAllAvailableMediaTours
// GetAvailableGSATours
// GetAvailableMediaTours
// GetAvailableTours
// GetCurrentPromotions
// GetExternalContentApiFile
// GetLocationKeywords
// GetShipMedia
// GetTravelStyleKeywords
// GetVacationsByKeyword
// RetrieveTourMediaHotel

// TODO: Need to see if there are any good error handling packages

module.exports = router;
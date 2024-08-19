const expressGlobus = require('express')
const router = expressGlobus.Router()
// Endpoint Methods
const callGetHotelMedia = require('./globusEndpoints/getHotelMedia')
const callGetAllHotelCodes = require('./globusEndpoints/getAllHotelCodes')
const callGetAllAvailableTours = require('./globusEndpoints/getAllAvailableTours')
const callGetTourDayMediaByBrand = require('./globusEndpoints/getTourDayMediaByBrand')
const callGetDeparturesWithPricing = require('./globusEndpoints/getDeparturesWithPricing')
const callGetDepartures = require('./globusEndpoints/getDepartures')
const callGetTourMediaByBrand = require('./globusEndpoints/getTourMediaByBrand')
const callGetTourMedia = require('./globusEndpoints/getTourMedia')
const callGetTourDayMedia = require('./globusEndpoints/getTourDayMedia')
const callGetGroupDepartures = require('./globusEndpoints/getGroupDepartures')
const callGetBasicHotelMediaByLocation = require('./globusEndpoints/getBasicHotelMediaByLocation')
const callGetHotelMediaByCityAndTourCode = require('./globusEndpoints/getHotelMediaByCityAndTourCode')
const callGetBasicHotelMedia = require('./globusEndpoints/getBasicHotelMedia')
const callGetBasicHotelMediaByTour = require('./globusEndpoints/getBasicHotelMediaByTour')
const callGetHotelMediaByTourCode = require('./globusEndpoints/getHotelMediaByTourCode')

// This controller will handle each of our Globus endpoints

// Each endpoint here will call a method that will be imported from the globusEndpoints
// method directory.

//////////////////////////////////////////
//////////////// TOURS  //////////////////
//////////////////////////////////////////

router.get('/get-all-available-tours', async (req, res) => {
  try {
    const data = await callGetAllAvailableTours();
    res.status(200).json({ data });
  } catch (e) {
    res.status(500).json({ message: "Sorry - Internal Server Errror", error: e });
  }
})

// WIP - Scott
router.get('/get-tour-day-media', async (req, res) => {
  try {
    const data = await callGetTourDayMedia();
    res.status(200).json({ data });
  } catch (e) {
    res.status(500).json({ message: "Sorry - Internal Server Error", error: e });
  };
})

router.get('/get-tour-day-media-by-brand', async (req, res) => {
  try {
    const data = await callGetTourDayMediaByBrand();
    res.status(200).json({ data });
  } catch (e) {
    res.status(500).json({ message: "Sorry - Internal Server Error", error: e });
  };
})

// WIP - Scott
router.post('/get-tour-media', async (req, res) => {
  try {
    const data = await callGetTourMedia(req.body.tourNumber)
    res.status(200).json({ data });
  } catch (e) {
    res.status(500).json({ message: "Sorry - Internal Server Error", error: e });
  };
})

router.get('/get-tour-media-by-brand', async (req, res) => {
  try {
    const data = await callGetTourMediaByBrand();
    res.status(200).json({ data });
  } catch (e) {
    res.status(500).json({ message: "Sorry - Internal Server Errror", error: e });
  }
})

//////////////////////////////////////////
//////////////// HOTELS //////////////////
//////////////////////////////////////////

router.get('/get-hotel-media', async (req, res) => {
  try {
    const data = await callGetHotelMedia();
    res.status(200).json({ data });
  } catch (e) {
    res.status(500).json({ message: "Sorry - Internal Server Errror", error: e });
  }
})

router.get('/get-all-hotel-codes', async (req, res) => {
  try {
    const data = await callGetAllHotelCodes();
    res.status(200).json({ data });
  } catch (e) {
    res.status(500).json({ message: "Sorry - Internal Server Errror", error: e });
  }
})

// WIP - Scott
router.get('/get-basic-hotel-media', async (req, res) => {
  try {
    const data = await callGetBasicHotelMedia();
    res.status(200).json({ data });
  } catch (e) {
    res.status(500).json({ message: "Sorry - Internal Server Errror", error: e });
  }
})

router.get('/get-basic-hotel-media-by-location', async (req, res) => {
  try {
    const data = await callGetBasicHotelMediaByLocation();
    res.status(200).json({ data });
  } catch (e) {
    res.status(500).json({ message: "Sorry - Internal Server Errror", error: e });
  }
})

// WIP - Scott
router.get('/get-basic-hotel-media-by-tour', async (req, res) => {
  try {
    const data = await callGetBasicHotelMediaByTour();
    res.status(200).json({ data });
  } catch (e) {
    res.status(500).json({ message: "Sorry - Internal Server Errror", error: e });
  }
})

router.get('/get-hotel-media-by-city-and-tour-code', async (req, res) => {
  try {
    const data = await callGetHotelMediaByCityAndTourCode();
    res.status(200).json({ data });
  } catch (e) {
    res.status(500).json({ message: "Sorry - Internal Server Errror", error: e });
  }
})

// WIP - Scott
router.get('/get-hotel-media-by-tour-code', async (req, res) => {
  try {
    const data = await callGetHotelMediaByTourCode();
    res.status(200).json({ data });
  } catch (e) {
    res.status(500).json({ message: "Sorry - Internal Server Errror", error: e });
  }
})

//////////////////////////////////////////
////////////// DEPARTURES ////////////////
//////////////////////////////////////////

router.get('/get-departures-with-pricing', async (req, res) => {
  try {
    const data = await callGetDeparturesWithPricing();
    res.status(200).json({ data });
  } catch (e) {
    res.status(500).json({ message: "Sorry - Internal Server Errror", error: e });
  }
})

// WIP - Scott
router.get('/get-departure-pricing', async (req, res) => {
  try {
    const data = await callGetDeparturePricing();
    res.status(200).json({ data });
  } catch (e) {
    res.status(500).json({ message: "Sorry - Internal Server Errror", error: e });
  }
})

router.get('/get-departures', async (req, res) => {
  try {
    const data = await callGetDepartures();
    res.status(200).json({ data });
  } catch (e) {
    res.status(500).json({ message: "Sorry - Internal Server Errror", error: e });
  }
})

// WIP - Scott
router.get('/get-departures-by-season', async (req, res) => {
  try {
    const data = await callGetDeparturesBySeason();
    res.status(200).json({ data });
  } catch (e) {
    res.status(500).json({ message: "Sorry - Internal Server Errror", error: e });
  }
})

// This call is broken
router.get('/get-group-departures', async (req, res) => {
  try {
    const data = await callGetGroupDepartures();
    res.status(200).json({ data });
  } catch (e) {
    res.status(500).json({ message: "Sorry - Internal Server Errror", error: e });
  }
})

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

module.exports = router

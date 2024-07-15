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
  res.json({ data: await callGetAllAvailableTours() })
})

// WIP - Scott
router.get('/get-tour-day-media', async (req, res) => {
  res.json({ data: await callGetTourDayMedia() })
})

router.get('/get-tour-day-media-by-brand', async (req, res) => {
  res.json({ data: await callGetTourDayMediaByBrand() })
})

// WIP - Scott
router.get('/get-tour-media', async (req, res) => {
  res.json({ data: await callGetTourMedia() })
})

router.get('/get-tour-media-by-brand', async (req, res) => {
  res.json({ data: await callGetTourMediaByBrand() })
})

//////////////////////////////////////////
//////////////// HOTELS //////////////////
//////////////////////////////////////////

router.get('/get-hotel-media', async (req, res) => {
  res.json({ data: await callGetHotelMedia() })
})

router.get('/get-all-hotel-codes', async (req, res) => {
  res.json({ data: await callGetAllHotelCodes() })
})

// WIP - Scott
router.get('/get-basic-hotel-media', async (req, res) => {
  res.json({ data: await callGetBasicHotelMedia() })
})

router.get('/get-basic-hotel-media-by-location', async (req, res) => {
  res.json({ data: await callGetBasicHotelMediaByLocation() })
})

// WIP - Scott
router.get('/get-basic-hotel-media-by-tour', async (req, res) => {
  res.json({ data: await callGetBasicHotelMediaByTour() })
})

router.get('/get-hotel-media-by-city-and-tour-code', async (req, res) => {
  res.json({ data: await callGetHotelMediaByCityAndTourCode() })
})

// WIP - Scott
router.get('/get-hotel-media-by-tour-code', async (req, res) => {
  res.json({ data: await callGetHotelMediaByTourCode() })
})

//////////////////////////////////////////
////////////// DEPARTURES ////////////////
//////////////////////////////////////////

router.get('/get-departures-with-pricing', async (req, res) => {
  res.json({ data: await callGetDeparturesWithPricing() })
})

// WIP - Scott
router.get('/get-departure-pricing', async (req, res) => {
  res.json({ data: await callGetDeparturePricing() })
})

router.get('/get-departures', async (req, res) => {
  res.json({ data: await callGetDepartures() })
})

// WIP - Scott
router.get('/get-departures-by-season', async (req, res) => {
  res.json({ data: await callGetDeparturesBySeason() })
})

// This call is broken
router.get('/get-group-departures', async (req, res) => {
  res.json({ data: await callGetGroupDepartures() })
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

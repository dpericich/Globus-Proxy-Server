const convert = require('xml-js')
const fetchSOAP = require('../utils/xmlReqMethod')
const VACA_OVERVIEW = 'Vacation Overview'
const LENGTH_BANNER = 'Length Banner'
const MEALS = 'Meals'
const SMALL_GROUP = 'Small Group'
const VACA_ITINERARY = 'Vacation Itinerary'
const acceptedTypes = [
  LENGTH_BANNER,
  VACA_OVERVIEW,
  MEALS,
  SMALL_GROUP,
  VACA_ITINERARY
]

const call = async xmlBody => {
  const unformattedJSON = await fetchSOAP(xmlBody)
    .then(res => res.data)
    .then(data => {
      const options = { compact: true, spaces: 2 }
      let result = convert.xml2json(data, options)
      let jsonData = JSON.parse(result)

      const tourMediaData = jsonData['soap:Envelope']['soap:Body']['GetTourMediaResponse'][
        'GetTourMediaResult'
      ]['diffgr:diffgram']['NewDataSet']['TourMedia'];


      const dayMediaData = jsonData['soap:Envelope']['soap:Body']['GetTourMediaResponse'][
        'GetTourMediaResult'
      ]['diffgr:diffgram']['NewDataSet']['DayMedia'];

      return {
        tourMediaData,
        dayMediaData
      };
    });

  return serializeGetTourMedia(unformattedJSON)
}

const serializeGetTourMedia = data => {
  let newHash = {}
  // Retrive the Tour Data
  data["tourMediaData"].forEach(record => {
    // console.log('This is the record', record['ContentType']['_text'])
    if (acceptedTypes.find(item => item === record['ContentType']['_text'])) {
      newHash[record['ContentType']['_text']] = record['Content']['_text']
    };
  });

  // Retrive the Itinerary Data
  newHash['Itinerary'] = [];
  data["dayMediaData"].forEach(record => {
    if (record['ContentType']['_text'] === VACA_ITINERARY) {
      newHash['Itinerary'].push(record["Content"]["_text"]);
    };
  });

  // Scott => Remove this code once you have integrated the Itinerary in the FE
  console.log(newHash)

  return newHash
}

const callGetTourMedia = async tourNumber => {
  const xmlBody = `<?xml version="1.0" encoding="utf-8"?>
  <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
    <soap:Body>
      <GetTourMedia xmlns="http://webapi.globusandcosmos.com/">
        <tourCode>${tourNumber}</tourCode>
        <season>2025</season>
        <mediaLanguage>English</mediaLanguage>
      </GetTourMedia>
    </soap:Body>
  </soap:Envelope>`

  const data = await call(xmlBody)

  return data
}

module.exports = callGetTourMedia

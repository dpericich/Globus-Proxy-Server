const convert = require('xml-js')
const fetchSOAP = require('../utils/xmlReqMethod')

const call = async xmlBody => {
  const unformattedJSON = await fetchSOAP(xmlBody)
    .then(res => res.data)
    .then(data => {
      const options = { compact: true, spaces: 2 }
      let result = convert.xml2json(data, options)
      let jsonData = JSON.parse(result)

      return jsonData['soap:Envelope']['soap:Body']['GetDeparturesResponse'][
        'GetDeparturesResult'
      ]['diffgr:diffgram']['NewDataSet']['Table1']
    })

  return serializeGetDepartures(unformattedJSON)
}

const serializeGetDepartures = data => {
  return data.map(departure => {
    return {
      brand: departure['Brand']['_text'],
      name: departure['Name']['_text'],
      airStartDate: departure['AirStartDate']['_text'],
      landStartDate: departure['LandStartDate']['_text'],
      landEndDate: departure['LandEndDate']['_text'],
      landOnlyPrice: departure['LandOnlyPrice']['_text'],
      intraTourAir: departure['IntraTourAir']['_text'],
      intraTourAirTax: departure['IntraTourAirTax']['_text'],
      shipName: departure['ShipName']['_text'],
      single: departure['Single']['_text'],
      triple: departure['Triple']['_text'],
      airStartDateString: departure['AirStartDateString']['_text'],
      landStartDateString: departure['LandStartDateString']['_text'],
      landEndDateString: departure['LandEndDateString']['_text'],
      landSurchage: departure['LandSurcharge']['_text'],
      airSurcharge: departure['AirSurcharge']['_text'],
      guaranteedDeparture: departure['GuaranteedDeparture']['_text'],
      popularDeparture: departure['PopularDeparture']['_text'],
      startCity: departure['StartCity']['_text'],
      endCity: departure['EndCity']['_text'],
      status: departure['Status']['_text'],
      departureCode: departure['DepartureCode']['_text'],
      intraTourAirRequired: departure['IntraTourAirRequired']['_text'],
    }
  })
}

const callGetDepartures = async tourNumber => {
  const xmlBody = `<?xml version="1.0" encoding="utf-8"?>
    <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
      <soap:Body>
        <GetDepartures xmlns="http://webapi.globusandcosmos.com/">
          <brand>Globus</brand>
          <tourCode>${tourNumber}</tourCode>
          <pricingModel>USA</pricingModel>
        </GetDepartures>
      </soap:Body>
    </soap:Envelope>`

  const data = await call(xmlBody)

  return data
}

module.exports = callGetDepartures

const convert = require('xml-js');
const fetchSOAP = require('../utils/xmlReqMethod');

const call = async (xmlBody) => {
  const unformattedJSON = await fetchSOAP(xmlBody)
    .then(res => res.data)
    .then((data) => {
      const options = { compact: true, spaces: 2 };
      let result = convert.xml2json(data, options);
      let jsonData = JSON.parse(result);

      return jsonData["soap:Envelope"]["soap:Body"]["GetDeparturesWithPricingResponse"]["GetDeparturesWithPricingResult"]["DepartureWithPricing"];
    });

  return serializeGetDeparturesWithPricing(unformattedJSON);
};

const serializeGetDeparturesWithPricing = (data) => {
  return data.map(departure => {
    let record = departure["Departure"];

    return {
      brand: record["Brand"]["_text"],
      name: record["Name"]["_text"],
      airStartDate: record["AirStartDate"]["_text"],
      landStartDate: record["LandStartDate"]["_text"],
      landEndDate: record["LandEndDate"]["_text"],
      landOnlyPrice: record["LandOnlyPrice"]["_text"],
      shipName: record["ShipName"]["_text"],
      status: record["Status"]["_text"],
      departureCode: record["DepartureCode"]["_text"],
      guaranteedDeparture: record["GuaranteedDeparture"]["_text"],
      popularDeparture: record["PopularDeparture"]["_text"],
      intraTourAirRequired: record["IntraTourAirRequired"]["_text"],
      intraTourAir: record["IntraTourAir"]["_text"],
      intraTourAirTax: record["IntraTourAirTax"]["_text"],
      single: record["Single"]["_text"],
      triple: record["Triple"]["_text"],
      tourStartAirportCity: record["TourStartAirportCity"]["_text"],
      tourEndAirportCity: record["TourEndAirportCity"]["_text"]
    }
  });
}

const callGetDeparturesWithPricing = async () => {
  const xmlBody = `<?xml version="1.0" encoding="utf-8"?>
    <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
      <soap:Body>
        <GetDeparturesWithPricing xmlns="http://webapi.globusandcosmos.com/">
          <brand>Globus</brand>
          <tourCode>AB</tourCode>
          <pricingModel>USA</pricingModel>
        </GetDeparturesWithPricing>
      </soap:Body>
    </soap:Envelope>`

  const data = await call(xmlBody);

  return data;
};

module.exports = callGetDeparturesWithPricing;
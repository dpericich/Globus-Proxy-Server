const convert = require('xml-js');
const fetchSOAP = require('../utils/xmlReqMethod');

const call = async (xmlBody) => {
    const unformattedJSON = await fetchSOAP(xmlBody)
        .then(res => res.data)
        .then((data) => {
            const options = { compact: true, spaces: 2 };
            let result = convert.xml2json(data, options);
            let jsonData = JSON.parse(result);

            return jsonData["soap:Envelope"]["soap:Body"]["GetBasicHotelMediaByLocationResponse"]["GetBasicHotelMediaByLocationResult"]["BasicHotelMedia"];
        });

    return serializeGetBasicHotelMediaByLocation(unformattedJSON);
};

const serializeGetBasicHotelMediaByLocation = (data) => {
    return {
        basicName: data["BasicName"]["_text"],
        basicLatitude: data["BasicLatitude"]["_text"],
        basicLongitude: data["BasicLongitude"]["_text"],
        basicHotelRating: data["BasicHotelRating"]["_text"],
        basicHotelCode: data["BasicHotelCode"]["_text"],
        locationId: data["LocationId"]["_text"],
        basicSellingLocation: data["BasicSellingLocation"]["_text"],
        hotelCommments: data["HotelCommments"]["_text"],
        priority: data["Priority"]["_text"],
    }
}

const callGetBasicHotelMediaByLocation = async () => {
    const xmlBody = `<?xml version="1.0" encoding="utf-8"?>
    <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
      <soap:Body>
        <GetBasicHotelMediaByLocation xmlns="http://webapi.globusandcosmos.com/">
          <country>United States</country>
          <city>Boston</city>
          <hotelName>Sheraton Boston Hotel</hotelName>
        </GetBasicHotelMediaByLocation>
      </soap:Body>
    </soap:Envelope>`

    const data = await call(xmlBody);

    return data;
};

module.exports = callGetBasicHotelMediaByLocation;
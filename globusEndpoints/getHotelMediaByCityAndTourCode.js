const convert = require('xml-js');
const fetchSOAP = require('../utils/xmlReqMethod');

const call = async (xmlBody) => {
    const unformattedJSON = await fetchSOAP(xmlBody)
        .then(res => res.data)
        .then((data) => {
            const options = { compact: true, spaces: 2 };
            let result = convert.xml2json(data, options);
            let jsonData = JSON.parse(result);

            // return jsonData["soap:Envelope"]["soap:Body"]["GetBasicHotelMediaByLocationResponse"]["GetBasicHotelMediaByLocationResult"]["BasicHotelMedia"];
            // console.log(jsonData["soap:Envelope"]["soap:Body"]["GetHotelMediaByCityAndTourCodeResponse"]["GetHotelMediaByCityAndTourCodeResult"]);
            return jsonData
        });

    return serializeGetHotelMediaByCityAndTourCode(unformattedJSON);
};

const serializeGetHotelMediaByCityAndTourCode = (data) => {
    return {
        // This is not returning for tourCodes
        // I also don't think we'll need this
    }
}

const callGetHotelMediaByCityAndTourCode = async () => {
    const xmlBody = `<?xml version="1.0" encoding="utf-8"?>
    <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
      <soap:Body>
        <GetHotelMediaByCityAndTourCode xmlns="http://webapi.globusandcosmos.com/">
          <tourCode>AB</tourCode>
          <tourYear>2024</tourYear>
          <cityName>Boston</cityName>
        </GetHotelMediaByCityAndTourCode>
      </soap:Body>
    </soap:Envelope>`

    const data = await call(xmlBody);

    return data;
};

module.exports = callGetHotelMediaByCityAndTourCode;
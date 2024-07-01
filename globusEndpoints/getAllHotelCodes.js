const convert = require('xml-js');
const fetchSOAP = require('../utils/xmlReqMethod');

const call = async (xmlBody) => {
    const unformattedJSON = await fetchSOAP(xmlBody)
        .then(res => res.data)
        .then((data) => {
            const options = { compact: true, spaces: 2 };
            let result = convert.xml2json(data, options);
            let jsonData = JSON.parse(result);

            return jsonData["soap:Envelope"]["soap:Body"]["GetAllHotelCodesResponse"]["GetAllHotelCodesResult"]["string"]
        });

    return serializeGetAllHotelCodes(unformattedJSON);
};

const serializeGetAllHotelCodes = (data) => {
    return data.map(el => el["_text"]);
}

const callGetAllHotelCodes = async () => {
    const xmlBody = `<?xml version="1.0" encoding="utf-8"?>
    <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
      <soap:Body>
        <GetAllHotelCodes xmlns="http://webapi.globusandcosmos.com/" />
      </soap:Body>
    </soap:Envelope>`

    const data = await call(xmlBody);

    return data;
};

module.exports = callGetAllHotelCodes;
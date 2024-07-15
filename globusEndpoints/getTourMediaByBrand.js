const convert = require('xml-js');
const fetchSOAP = require('../utils/xmlReqMethod');

const call = async (xmlBody) => {
    const unformattedJSON = await fetchSOAP(xmlBody)
        .then(res => res.data)
        .then((data) => {
            const options = { compact: true, spaces: 2 };
            let result = convert.xml2json(data, options);
            let jsonData = JSON.parse(result);

            return jsonData["soap:Envelope"]["soap:Body"]["GetTourMediaByBrandResponse"]["GetTourMediaByBrandResult"]["diffgr:diffgram"]["NewDataSet"]["TourMedia"];
        });

    return serializeGetDepartures(unformattedJSON);
};

const serializeGetDepartures = (data) => {
    return data.map(record => {
        return {
            contentType: record["ContentType"]["_text"],
            formatType: record["FormatType"]["_text"],
            content: record["Content"]["_text"]
        }
    })
};

const callGetTourMediaByBrand = async () => {
    const xmlBody = `<?xml version="1.0" encoding="utf-8"?>
    <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
      <soap:Body>
        <GetTourMediaByBrand xmlns="http://webapi.globusandcosmos.com/">
          <tourCode>AB</tourCode>
          <season>2024</season>
          <brand>Globus</brand>
          <mediaLanguage>English</mediaLanguage>
        </GetTourMediaByBrand>
      </soap:Body>
    </soap:Envelope>`

    const data = await call(xmlBody);

    return data;
};

module.exports = callGetTourMediaByBrand;
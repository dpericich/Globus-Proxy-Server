const convert = require('xml-js')
const fetchSOAP = require('../utils/xmlReqMethod')

// Create the POST body specifying the resource to retrieve
const call = async xmlBody => {
  const unformattedJSON = fetchSOAP(xmlBody)
    .then(res => res.data)
    .then(data => {
      const options = { compact: true, spaces: 2 }
      let result = convert.xml2json(data, options)
      let jsonData = JSON.parse(result)

      // console.log(
      //   'This',
      //   jsonData['soap:Envelope']['soap:Body'][
      //     'GetHotelMediaByTourCodeResponse'
      //   ]['GetHotelMediaByTourCodeResult']
      // )
      return jsonData['soap:Envelope']['soap:Body'][
        'GetHotelMediaByTourCodeResponse'
      ]['GetHotelMediaByTourCodeResult']
    })

  // TODO: Will have a method to turn the JSON SOAP response to JSON for the Client
  // formatJSON();
  return unformattedJSON
}

const callGetHotelMediaByTourCode = async () => {
  const xmlBody = `<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <GetHotelMediaByTourCode xmlns="http://webapi.globusandcosmos.com/">
      <tourCode>1205</tourCode>
      <tourYear>2025</tourYear>
    </GetHotelMediaByTourCode>
  </soap:Body>
</soap:Envelope>`

  const data = await call(xmlBody)

  return data
}

module.exports = callGetHotelMediaByTourCode

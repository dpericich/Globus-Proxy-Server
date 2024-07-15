const convert = require('xml-js')
const fetchSOAP = require('../utils/xmlReqMethod')

const call = async xmlBody => {
  const unformattedJSON = await fetchSOAP(xmlBody)
    .then(res => res.data)
    .then(data => {
      const options = { compact: true, spaces: 2 }
      let result = convert.xml2json(data, options)
      let jsonData = JSON.parse(result)
      //
      // console.log(
      //   jsonData['soap:Envelope']['soap:Body']['GetTourDayMediaResponse'][
      //     'GetTourDayMediaResult'
      //   ]
      // )

      return jsonData['soap:Envelope']['soap:Body']['GetTourDayMediaResponse'][
        'GetTourDayMediaResult'
      ]
    })

  // return serializeGetTourDayMedia(unformattedJSON)
  return unformattedJSON
}

// const serializeGetTourDayMedia = data => {
//   return data?.map(el => el['_text'])
// }

const callGetTourDayMedia = async () => {
  const xmlBody = `<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <GetTourDayMedia xmlns="http://webapi.globusandcosmos.com/">
      <tourCode>1002</tourCode>
      <season>2025</season>
      <mediaLanguage>English</mediaLanguage>
    </GetTourDayMedia>
  </soap:Body>
</soap:Envelope>`

  const data = await call(xmlBody)

  return data
}

module.exports = callGetTourDayMedia

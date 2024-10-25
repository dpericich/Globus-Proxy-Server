const convert = require('xml-js')
const fetchSOAP = require('../utils/xmlReqMethod')

const call = async xmlBody => {
  const unformattedJSON = await fetchSOAP(xmlBody)
    .then(res => res.data)
    .then(data => {
      const options = { compact: true, spaces: 2 }
      let result = convert.xml2json(data, options)
      let jsonData = JSON.parse(result)

      return jsonData['soap:Envelope']['soap:Body'][
        'GetAllAvailableMediaToursResponse'
      ]['GetAllAvailableMediaToursResult']['diffgr:diffgram']['NewDataSet'][
        'Table1'
      ]
    })

  return serializeGetAllAvailableMediaTours(unformattedJSON)
}

const serializeGetAllAvailableMediaTours = data => {
  return data.map(record => {
    let newHash = {}

    newHash['TourNumber'] = record['TourNumber']['_text']
    newHash['Season'] = record['Season']['_text']
    newHash['Brand'] = record['Brand']['_text']
    newHash['Name'] = record['Name']['_text']
    newHash[
      'CoverImage'
    ] = `https://images.globusfamily.com/vacation/${record['TourNumber']['_text']}.jpg`

    return newHash
  })
}

const callGetAllAvailableMediaTours = async () => {
  const xmlBody = `<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <GetAllAvailableMediaTours xmlns="http://webapi.globusandcosmos.com/" />
  </soap:Body>
</soap:Envelope>

`

  const data = await call(xmlBody)

  return data
}

module.exports = callGetAllAvailableMediaTours

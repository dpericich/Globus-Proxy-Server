const axios = require('axios');

const fetchSOAP = async (xmlBody) => {
    const data = await axios.post(
        'https://contentapi.globusfamily.com/gvitawapi.asmx?WSDL',
        xmlBody,
        {
            headers: {
                'Content-type': 'text/xml'
            },
        }
    );

    return data;
};

module.exports = fetchSOAP;
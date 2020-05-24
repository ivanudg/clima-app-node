const axios = require('axios');
const APiKey = '4c13c3aa358915ee5ff56866d1dc8612';

const getClima = async(lat, lng) => {

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=${ APiKey }&units=metric`;
    const resp = await axios.get(url);
    return resp.data.main.temp;

};

module.exports = {
    getClima
}
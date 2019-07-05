// const { fetchMyIP } = require('./iss-promised');
// const { fetchCoordsByIP } = require('./iss-promised');
// const { fetchISSFlyOverTimes} = require('./iss-promised');
const { nextISSTimesForMyLocation} = require('./iss-promised');


// fetchMyIP()
//   .then(fetchCoordsByIP)
//   .then(fetchISSFlyOverTimes)
//   .then(body => console.log(body));


nextISSTimesForMyLocation()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("It didn't work; ", error.message);
  });
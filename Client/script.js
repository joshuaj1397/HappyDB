const baseUrl = 'http://localhost:3000'

const HappyAPI = {
  get2015DataByCountryName: function(countryName) {
    fetch(baseUrl + '/2015Data/' + countryName)
      .then((res) => res.json())
      .then(
        (result) => {
          return result;
        }
      )
  },

  get2016DataByCountryName: function(countryName) {
    fetch(baseUrl + '/2016Data/' + countryName)
      .then((res) => res.json())
      .then(
        (result) => {
          return result;
        }
      )
  },

  get2017DataByCountryName: function(countryName) {
    fetch(baseUrl + '/2017Data/' + countryName)
      .then((res) => res.json())
      .then(
        (result) => {
          return result;
        }
      )
  },

  getCountryById: function(id) {
    fetch(baseUrl + '/country/' + id)
      .then((res) => res.json())
      .then(
        (result) => {
          return result;
        }
      )
  },

  getRegionById: function(id) {
    fetch(baseUrl + '/region/' + id)
      .then((res) => res.json())
      .then(
        (result) => {
          return result;
        }
      )
  },

}

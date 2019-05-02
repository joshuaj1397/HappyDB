const HappyAPI = {
  get2015DataByCountryName: async function(countryName) {
    const res = await fetch(baseUrl + '/2015Data/' + countryName)
    return await res.json()
  },

  get2016DataByCountryName: async function(countryName) {
    const res = await fetch(baseUrl + '/2016Data/' + countryName)
    return await res.json()
  },

  get2017DataByCountryName: async function(countryName) {
    const res = await fetch(baseUrl + '/2017Data/' + countryName)
    return await res.json()
  },

  getCountryById: async function(id) {
    const res = await fetch(baseUrl + '/country/' + id)
    return await res.json()
  },

  getRegionById: async function(id) {
    const res = await fetch(baseUrl + '/region/' + id)
    return await res.json()
  },
}

export default HappyAPI

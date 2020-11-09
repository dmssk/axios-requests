import axios from "axios";


export default {
  state: {
    countries: [],
    loading: false
  },
  mutations: {
    addCountry(state, country) {
      state.countries.push(country)
    },
    startLoading(state) {
      state.loading = true
    },
    endLoading(state) {
      state.loading = false
    }

  },
  getters: {
    getLastCountry(state) {
      if (state.countries.length) {
        return state.countries[state.countries.length - 1]
      } else {
        return {}
      }
    },
    getLoadingState(state) {
      return state.loading
    }
  },
  actions: {
    getStatistic({commit}, country) {
      commit('startLoading')
      const options = {
        method: 'GET',
        url: 'https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total',
        params: {country: country},
        headers: {
          'x-rapidapi-key': '0ac1d5ebcemshc6a95d52411388ap1ed1e8jsn333758c8800a',
          'x-rapidapi-host': 'covid-19-coronavirus-statistics.p.rapidapi.com'
        }
      };

      axios.request(options).then(function (response) {
        commit('endLoading')
        commit('addCountry', response.data)
      }).catch(function (error) {
        console.error(error)
        commit('endLoading')
      })
    }

  },

}

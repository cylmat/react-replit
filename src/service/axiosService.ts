import axios, { AxiosResponse } from 'axios' // DONT use "{ axios }" !!

// Generic
interface CallbackOneParam<T1, T2 = void> {
  (param1: T1): T2;
}

class AxiosService {
  post(query: string) {

    return axios.get(
      `https://data.opendatasoft.com/api/explore/v2.1/catalog/datasets/tco-bus-circulation-passages-tr@keolis-rennes/records?where=destination%3D%22Chantepie%22&limit=20`
    )

    .then( (res) => { return res.data.results } ) 
  }
  
}

export default new AxiosService()
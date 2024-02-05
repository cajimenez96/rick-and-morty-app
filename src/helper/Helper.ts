import Axios from "../api/Axios"
import { Character, Info } from "../utils/Interfaces"

export const getAllData = (
  params: string,
  setData: (value: Character[]) => void,
  setInfo: (value: Info) => void,
  setLoading: (value: boolean) => void,
  ) => {
  Axios.get(params)
  .then((response) => {
    if (response.status !== 200) throw new Error("Hubo un inconveniente, por favor intenta más tarde.");
    
    setData(response.data.results);
    setInfo(response.data.info)
  })
  .catch((error) => {console.error(error)})
  .finally(() => setLoading(false))
}

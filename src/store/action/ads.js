/* eslint-disable */
import axios from 'axios'
export const ADS = 'ADS'
export const DELETEADS = 'DELETEADS'
export const ADDADS = 'ADDADS'
export const SEARCHADS = 'SEARCHADS'

export const getAds = () => {
  return async (dispatch, getState) => {
    const token = getState().auth.token
    const response = await axios.get('http://127.0.0.1:8000/api/ads/', {
      headers: { Authorization: `Bearer ${token}` },
    })
    dispatch({ type: ADS, payload: { adsList: response.data.annonces } })
  }
}
export const DeleteAds = (id) => {
  return async (dispatch, getState) => {
    const token = getState().auth.token
    const response = await axios.delete(`http://127.0.0.1:8000/api/ads/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })

    dispatch({ type: DELETEADS, payload: { id } })
  }
}
export const AddAds = (title, abs, date, poster, typeliste) => {
  return async (dispatch, getState) => {
    const token = getState().auth.token

    let formData = new FormData()
    formData.append('titre', title)
    formData.append('resume', abs)
    formData.append('date', date)
    if (poster) {
      formData.append('FileName', 'imageTest')
      formData.append('affiche', poster)
    }
    formData.append('typeAnnonce', JSON.stringify(typeliste))
    const response = await axios({
      method: 'POST',
      url: `http://127.0.0.1:8000/api/ads/store`,
      data: formData,
      headers: { Authorization: `Bearer ${token}` },
      'Content-Type': 'multipart/form-data',
    })
  }
}
export const UpdateAds = (title, abs, date, poster, typeliste, id) => {
  return async (dispatch, getState) => {
    const token = getState().auth.token
    let formData = new FormData()
    formData.append('titre', title)
    formData.append('resume', abs)
    formData.append('date', date)
    if (poster!== null) {
      formData.append('FileName', 'imageTest')
      formData.append('affiche', poster)
    }
    formData.append("typeAnnonce[]",""+typeliste);
    formData.append('_method', 'put')
    const response = await axios({
      method: 'POST',
      url: `http://127.0.0.1:8000/api/ads/update/${id}`,
      data: formData,
      headers: { Authorization: `Bearer ${token}` },
      'Content-Type': 'multipart/form-data',
    })

   
  }
}
export const SearchAds = (name) => {
  return async (dispatch, getState) => {
    const token = getState().auth.token

    dispatch({ type: SEARCHADS, payload: { name } })
  }
}

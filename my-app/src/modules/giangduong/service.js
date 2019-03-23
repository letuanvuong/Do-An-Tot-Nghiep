import Axios from 'axios'

const getDsGiangDuong = async () => {
  return await Axios.get('http://localhost:9002/api/v1/get-giangduong')
}

const getGiangDuongById = async (id) => {
  return await Axios.get(`http://localhost:9002/api/v1/getbyid-giangduong/${id}`)
}

const addGiangDuong = async (payload) =>{
  return await Axios.post('http://localhost:9002/api/v1/giangduong',payload)
}
export default {
  getDsGiangDuong,
  getGiangDuongById,
  addGiangDuong
}
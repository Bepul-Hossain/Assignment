import axios from 'axios'

const api = axios.create({
    baseURL: '/api',
})

export const insertTable = (payload)=> api.post('/insertrouter', payload)

export const getAllTable = ()=> api.get(`/getallrouter`)

const apis = {
    insertTable,
    getAllTable,
}

export default apis
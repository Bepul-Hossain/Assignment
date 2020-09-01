import axios from 'axios'

const api = axios.create({
    baseURL: '/api',
})

export const insertTable = (payload)=> api.post('/movierouter', payload)

export const getAllTable = ()=> api.get(`/getmovies`)

const apis = {
    insertTable,
    getAllTable,
}

export default apis
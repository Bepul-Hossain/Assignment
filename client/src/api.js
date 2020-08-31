import axios from 'axios'

const api = axios.create({
    baseURL: '/api',
})

export const insertTable = (payload)=> api.post('/movierouter', payload)
// export const updateMovieById = (id,payload)=>api.put(`/movierouter/${id}`,payload)
// export const deleteMovieById = (id)=>api.delete(`/movierouter/${id}`)

// export const getMovieById=id=> api.get(`/movierouter/${id}`)
export const getAllTable = ()=> api.get(`/getmovies`)

const apis = {
    insertTable,
    getAllTable,
    // deleteMovieById,
    // updateMovieById,
    // getMovieById,
}

export default apis
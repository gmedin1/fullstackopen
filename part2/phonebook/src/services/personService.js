import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(res => res.data)
}

const create = (obj) => {
    const request = axios.post(baseUrl, obj)
    return request.then(res => res.data)
}

const destroy = (id) => {
    return axios.delete(`${baseUrl}/${id}`)
}

const update = (id, obj) => {
    const request = axios.put(`${baseUrl}/${id}`, obj)
    return request.then(res => res.data)
}

const personService = { getAll, create, destroy, update }

export default personService
const baseURL = 'http://localhost:9000/api/pauline/ceramics/'

export const getCeramic=(id)=>{
  return fetch(baseURL + id)
  .then (res=>res.json())
}



export const getCeramics = () => {
    return fetch(baseURL)
        .then(res => res.json())
}

export const addCeramic = (payload) => {
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
}

export const deleteCeramic = (id) => {
    return fetch(baseURL + id, {
        method: 'DELETE'
    })
}

export const updateCeramic = (payload, id) => {
  return fetch(baseURL + id, {
        method: 'PUT',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' }
  })
  .then(res => res.json())
}

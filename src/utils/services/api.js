import axios from "axios";

const token = localStorage.getItem("token")
export const config = {
    headers: { Authorization: 'Bearer ' + token }
}

export const api = axios.create({
    baseURL: "http://localhost:3333"
})

export const logged = async (email, password) => {
    return api.post("/auth/signin", { email, password }) // body req { email, password }
}

export const register = async (signup) => {
    return api.post("/auth/signup",  signup ) // body req ( signup )
}

export const sendPost = async (sendPosts) => {
    const token = localStorage.getItem("token")
    api.defaults.headers.Authorization = `Bearer ${token}` // header req 
    return api.post("/posts",  sendPosts ) // body req ( sendPosts )
}

export const searchCPF = async (cpf) => {
    const token = localStorage.getItem("token")
    api.defaults.headers.Authorization = `Bearer ${token}` // header req 
    return api.get(`/posts/buscas/${cpf}`)
}

export const searchPDF = async (cpf) => {
    const token = localStorage.getItem("token")
    api.defaults.headers.Authorization = `Bearer ${token}` // header req 
    return api.get(`/posts/buscas/${cpf}`)
}

export const putForm = async (cpf, data) => {
    const token = localStorage.getItem("token")
    api.defaults.headers.Authorization = `Bearer ${token}` // header req 
    return api.put(`/posts/buscas/${cpf}`, data)
}
// export const getPost = async (cpf) => {
//     const token = localStorage.getItem("token")
//     api.defaults.headers.Authorization = `Bearer ${token}` // header req 
//     return api.get(`/posts/buscas/${cpf}`) // body req ( sendPosts )
// }


// export const getPosts = async () => {
//     const token = localStorage.getItem("token")
//     api.defaults.headers.Authorization = `Bearer ${token}` // header req 
//     return api.get("/client")
// }

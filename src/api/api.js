import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,)
            .then(response => response.data)
    },
} 

 export const followAPI = {
    getFollowUser(userId){
        return instance.post(`follow/${userId}`,{})
            .then(response => response.data)
    }
}

export const unFollowAPI = {
    getUnFollowUser(userId){
        return instance.delete(`follow/${userId}`)
            .then(response => response.data)
    }
}
export const userProfileAPI = {
    getUserProfile(userId){
        return instance.get(`profile/${userId}`)
            .then(response => response.data)
    }
}

export const authUserAPI = {
    getAuthUser() {
        return instance.get(`auth/me`)       
    }
}
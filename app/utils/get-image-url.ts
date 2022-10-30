import { API_SERVER_URL } from "@/configs/api.config"

export const getImageFullUrl = (url:string | undefined)=>{
	if(typeof url ==='undefined') return null
	return `${API_SERVER_URL}${url}`
}
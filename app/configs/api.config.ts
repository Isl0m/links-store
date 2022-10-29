export const API_URL = `${process.env.APP_URL}/api`
export const API_SERVER_URL = `${process.env.APP_SERVER_URL}`
export const APP_FAST_SERVER_URL = `${process.env.APP_FAST_SERVER_URL}`

export const getProfileApi = (string: string) => `/profile${string}`
export const getTagApi = (string: string) => `/tag${string}`
export const getAuthApi = (string: string) => `/auth${string}`

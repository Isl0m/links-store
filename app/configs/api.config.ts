export const API_URL = `${process.env.APP_URL}/api`
export const API_SERVER_URL = `${process.env.APP_SERVER_URL}`

export const getProfileUrl = (string: string) => `/profile${string}`
export const getAuthUrl = (string: string) => `/auth${string}`

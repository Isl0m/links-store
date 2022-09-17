export const getProfileUrl = (_id: string) => `/profile/${_id}`
export const copyProfileUrl = (_id: string) =>
	`${process.env.APP_URL}/profile/${_id}`

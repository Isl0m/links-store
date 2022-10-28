export const getContentType = () => ({
    'Content-Type':'application/json',
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Origin': '*',

})

export const errorCatch = (error:any):string  => error.response
    && error.response.data ? typeof error.response.data.message === 'object'
    ? error.response.data.message[0]
    : error.response.data.message
    : error.message

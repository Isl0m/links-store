export const getContentType = () => ({
    'Content-Type':'application/json',
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods':'GET,OPTIONS,PATCH,DELETE,POST,PUT',

  'Access-Control-Allow-Headers':
  'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
})

export const errorCatch = (error:any):string  => error.response
    && error.response.data ? typeof error.response.data.message === 'object'
    ? error.response.data.message[0]
    : error.response.data.message
    : error.message

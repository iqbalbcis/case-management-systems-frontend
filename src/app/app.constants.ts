export const API_URL = "http://localhost:8080"
//export const API_URL = "https://www.huberslawpartners.co.uk:8080"

export const TOKEN = 'token'
export const AUTHENTICATED_USER = 'authenticaterUser'

export const PASSWORD_PATTERN = '(?=.*[a-z])(?=.*[A-Z])(?=.*\[0-9])[a-zA-Z0-9\\W]{8,}'
export const EMAIL_PATTERN = '([\\w.-]+)@([a-zA-Z0-9-]+)\\.([a-zA-Z]{2,8})(\\.[a-zA-Z]{2,6})?'

export const USER_LOGIN = 'lawfirm/authenticate'
export const REFRESH_TOKEN = 'lawfirm/refreshToken'
export const SAVE_USER_DETAILS = 'lawfirm/saveUser'
export const UPDATE_USER_PASSWORD = 'lawfirm/updateUserPassword'
export const DELETE_USER = 'lawfirm/deleteAnUser'
export const FIND_USER = 'lawfirm/findAnUser'
export const UPDATE_USER = 'lawfirm/updateUser'
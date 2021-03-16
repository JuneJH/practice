export const SETLOGINUSER = Symbol("set-login-user");

export const createLoginAction = (payload) => ({
    type: SETLOGINUSER,
    payload
})

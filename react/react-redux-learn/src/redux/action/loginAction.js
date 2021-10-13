export const SETLOGINUSER = Symbol("set-login-user");
export const SETTIMEOUT = Symbol("setTimeout");

export const createLoginAction = (payload) => ({
    type: SETLOGINUSER,
    payload
})

export const effect = () => (
    function (dispatch, a, b) {
        console.log("thunk的参数", a, b)
        dispatch(createLoginAction("马上设置"));
        setTimeout(() => {
            dispatch(createLoginAction("延后设置"))
        }, 3000);
    }
)


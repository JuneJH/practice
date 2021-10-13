export const ADDUSER = Symbol("add-user");
export const UPDATEUSER = Symbol("update-user");
export const DELETEUSER = Symbol("delete-user");

export const createAddUserAction = (payload) => ({
    type: ADDUSER,
    payload:{...payload}
})

export const createUpdateUserAction = (id,newUser) => ({
    type: UPDATEUSER,
    payload:{
        ...newUser,
        id,
    }
})

export const createDeleteUserAction = (id) => ({
    type: DELETEUSER,
    payload:id
})




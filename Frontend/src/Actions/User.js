export const registerUser = (avatar, name, email, password, confirmpassword) => async (dispatch) => {
    try {
        dispatch({ type: "registerRequest" })
        let data = await fetch("http://localhost:4000/create/account", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                avatar,
                name,
                email,
                password,
                confirmpassword
            })
        })
        data = await data.json()
        console.log(data)
        if (data.success) {
            return dispatch({ type: "registerSuccess", payload: data.message })
        } else {
            return dispatch({ type: "registerFailure", payload: data.message })
        }
    } catch (error) {
        dispatch({ type: "registerFailure", payload: error.response.data.message })
    }
}

export const loginAccount = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: "loginRequest" })
        let data = await fetch("http://localhost:4000/login/account", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        })
        data = await data.json()
        if (data.success) {
            return dispatch({ type: "loginSuccess", payload: data.message })
        } else {
            return dispatch({ type: "loginFailure", payload: data.message })
        }
    } catch (error) {
        dispatch({ type: "loginFailure", payload: error.response.data.message })
    }
}

export const loadUserAccount = () => async (dispatch) => {
    try {
        dispatch({ type: "userProfileRequest" })
        let data = await fetch("http://localhost:4000/my/profile")
        data = await data.json()
        if (data.success) {
            return dispatch({ type: "userProfileSuccess", payload: data.user })
        } else {
            return dispatch({ type: "userProfileFailure", payload: data.error })
        }

    } catch (error) {
        dispatch({ type: "userProfileFailure", payload: error.response.data.message })
    }
}

export const searchUsers = (name = "") => async (dispatch) => {
    try {
        dispatch({ type: "searchRequest" })
        let data = await fetch(`http://localhost:4000/all/users?name=${name}`)
        data = await data.json()
        if (data.success) {
            return dispatch({ type: "searchSuccess", payload: data.users })
        } else {
            return dispatch({ type: "searchFailure", payload: data.message })
        }
    } catch (error) {
        dispatch({ type: "searchFailure", payload: error.response.data.message })
    }
}

export const requestAccept = (id) => async (dispatch) => {
    try {
        dispatch({ type: "acceptRequest" })
        let data = await fetch(`http://localhost:4000/friend/accept/${id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        })
        data = await data.json()
        console.log(data.message)
        if (data.success) {
            return dispatch({ type: "acceptSuccess", payload: data.message })
        } else {
            return dispatch({ type: "acceptFailure", payload: data.message })
        }
    } catch (error) {
        dispatch({ type: "acceptFailure", payload: error.response.data.message })
    }
}
export const getFriendsToAdd = () => async (dispatch) => {
    try {
        dispatch({ type: "getFriendsToAddRequest" })
        let data = await fetch(`http://localhost:4000/friends/to/add`)
        data = await data.json()
        if (data.success) {
            return dispatch({ type: "getFriendsToAddSuccess", payload: data.users })
        } else {
            return dispatch({ type: "getFriendsToAddFailure", payload: data.message })
        }
    } catch (error) {
        dispatch({ type: "getFriendsToAddFailure", payload: error.response.data.message })
    }
}
export const deleteFriendRequest = (id) => async (dispatch) => {
    try {
        dispatch({ type: "deleteRequest" })
        let data = await fetch(`http://localhost:4000/delete/request/${id}`, {
            method: "DELETE"
        })
        data = await data.json()
        if (data.success) {
            return dispatch({ type: "deleteSuccess", payload: data.users })
        } else {
            return dispatch({ type: "deleteFailure", payload: data.message })
        }
    } catch (error) {
        dispatch({ type: "deleteFailure", payload: error.response.data.message })
    }
}

export const sendARequest = (id) => async (dispatch) => {
    try {
        dispatch({ type: "sendFriendRequestRequest" })
        let data = await fetch(`http://localhost:4000/addfriend/${id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        })
        data = await data.json()
        console.log(data.message)
        if (data.success) {
            return dispatch({ type: "sendFriendRequestSuccess", payload: data.message })
        } else {
            return dispatch({ type: "sendFriendRequestFailure", payload: data.message })
        }
    } catch (error) {
        dispatch({ type: "sendFriendRequestFailure", payload: error.response.data.message })
    }
}
export const updateProfile = (name, email, avatar) => async (dispatch) => {
    try {
        dispatch({ type: "updateProfileRequest" })
        let data = await fetch(`http://localhost:4000/update/profile`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                email,
                avatar
            })
        })
        data = await data.json()
        console.log(data)
        if (data.success) {
            return dispatch({ type: "updateProfileSuccess", payload: data.message })
        } else {
            return dispatch({ type: "updateProfileFailure", payload: data.message })
        }
    } catch (error) {
        dispatch({ type: "updateProfileFailure", payload: error.response.data.message })
    }
}
export const updatePassword = (oldpassword, newpassword) => async (dispatch) => {
    try {
        dispatch({ type: "updatePasswordRequest" })
        let data = await fetch(`http://localhost:4000/update/password`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                oldpassword,
                newpassword
            })
        })
        data = await data.json()

        if (data.success) {
            return dispatch({ type: "updatePasswordSuccess", payload: data.message })
        } else {
            return dispatch({ type: "updatePasswordFailure", payload: data.message })
        }
    } catch (error) {
        dispatch({ type: "updatePasswordFailure", payload: error.response.data.message })
    }
}
export const logout = () => async (dispatch) => {
    try {
        dispatch({ type: "logoutRequest" })
        let data = await fetch(`http://localhost:4000/account/logout`)
        data = await data.json()

        if (data.success) {
            return dispatch({ type: "logoutSuccess", payload: data.message })
        } else {
            return dispatch({ type: "logoutFailure", payload: data.message })
        }
    } catch (error) {
        dispatch({ type: "logoutFailure", payload: error.response.data.message })
    }
}
export const unfriend = (id) => async (dispatch) => {
    try {
        dispatch({ type: "unfriendRequest" })
        let data = await fetch(`http://localhost:4000/friend/unfriend/${id}`, {
            method: "DELETE",
        })
        data = await data.json()

        if (data.success) {
            return dispatch({ type: "unfriendSuccess", payload: data.message })
        } else {
            return dispatch({ type: "unfriendFailure", payload: data.message })
        }
    } catch (error) {
        dispatch({ type: "unfriendFailure", payload: error.response.data.message })
    }
}
export const unsendRequest = (id) => async (dispatch) => {
    try {
        dispatch({ type: "unsendRequestRequest" })
        let data = await fetch(`http://localhost:4000/addfriend/${id}`, {
            method: "POST",
        })
        data = await data.json()

        if (data.success) {
            return dispatch({ type: "unsendRequestSuccess", payload: data.message })
        } else {
            return dispatch({ type: "unsendRequestFailure", payload: data.message })
        }
    } catch (error) {
        dispatch({ type: "unsendRequestFailure", payload: error.response.data.message })
    }
}
export const deleteAccount = () => async (dispatch) => {
    try {
        dispatch({ type: "deleteAccountRequest" })
        let data = await fetch(`http://localhost:4000/delete/my/account`, {
            method: "DELETE",
        })
        data = await data.json()

        if (data.success) {
            return dispatch({ type: "deleteAccountSuccess", payload: data.message })
        } else {
            return dispatch({ type: "deleteAccountFailure", payload: data.message })
        }
    } catch (error) {
        dispatch({ type: "deleteAccountFailure", payload: error.response.data.message })
    }
}

export const getUser = (id) => async (dispatch) => {
    try {
        console.log(id)
        dispatch({ type: "getUserRequest" })
        let data = await fetch(`http://localhost:4000/user/${id}`)
        data = await data.json()

        if (data.success) {
            return dispatch({ type: "getUserSuccess", payload: data.user })
        } else {
            return dispatch({ type: "getUserFailure", payload: data.message })
        }
    } catch (error) {
        dispatch({ type: "getUserFailure", payload: error.response.data.message })
    }
}

export const sendToken = (email) => async (dispatch) => {
    try {
        dispatch({ type: "sendTokenRequest" })
        let data = await fetch(`http://localhost:4000/reset/password`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email
            })
        })
        data = await data.json()

        if (data.success) {
            return dispatch({ type: "sendTokenSuccess", payload: data.message })
        } else {
            return dispatch({ type: "sendTokenFailure", payload: data.message })
        }
    } catch (error) {
        dispatch({ type: "sendTokenFailure", payload: error.response.data.message })
    }
}
export const resetPassword = (token, password) => async (dispatch) => {
    try {
        dispatch({ type: "resetPasswordRequest" })
        let data = await fetch(`http://localhost:4000/api/v1/reset/password/${token}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                password
            })
        })
        data = await data.json()

        if (data.success) {
            return dispatch({ type: "resetPasswordSuccess", payload: data.message })
        } else {
            return dispatch({ type: "resetPasswordFailure", payload: data.message })
        }
    } catch (error) {
        dispatch({ type: "resetPasswordFailure", payload: error.response.data.message })
    }
}
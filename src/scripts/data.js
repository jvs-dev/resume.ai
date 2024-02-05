let datacache = {}

export function setUserData(data) {
    datacache = data
}

export function getUserData() {
    return datacache
}

export function deleteUserData() {
    datacache = {}
}
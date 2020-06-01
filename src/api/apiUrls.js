let apiHost = "http://localhost:3000"

export function getEmployerListLink() {
    return `${apiHost}/employers`;
}

export function getUserListLink() {
    return `${apiHost}/users`;
}

export function getBranchListLink() {
    return `${apiHost}/branches`;
}

export function getEmployerDetailsLink(employerId) {
    return `${apiHost}/employers/${employerId}`;
}

export function getUserDetailsLink(userId) {
    return `${apiHost}/users/${userId}`;
}

export function getBrancheDetailsLink(brancheId) {
    return `${apiHost}/branches/${brancheId}`;
}

export function postEmployerDetailsLink() {
    return `${apiHost}/employer`;
}

export function postUserDetailsLink() {
    return `${apiHost}/user`;
}

export function postBranchDetailsLink() {
    return `${apiHost}/branch`;
}
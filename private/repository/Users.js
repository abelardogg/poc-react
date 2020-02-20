let UsersList = [];

function getUserByEmail(email) {
    return UsersList.find(user => user.email === email)
}
function getUserById(id) {
    return UsersList.find(user => user.id === id)
}

module.exports = { UsersList, getUserByEmail, getUserById };

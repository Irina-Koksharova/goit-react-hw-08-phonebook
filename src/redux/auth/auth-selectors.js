const getIsLoggedIn = state => state.auth.user.isLoggedIn;

const getUsername = state => state.auth.user.name;

export { getIsLoggedIn, getUsername };

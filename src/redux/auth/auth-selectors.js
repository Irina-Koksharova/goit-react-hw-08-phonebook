const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUsername = state => state.auth.user.name;

const getIsFetchingCurrentUser = state => state.auth.isFetchingCurrentUser;

const getIsLoading = state => state.auth.isLoading;

const getError = state => state.auth.error;

export { getIsLoggedIn, getUsername, getIsFetchingCurrentUser, getIsLoading, getError };

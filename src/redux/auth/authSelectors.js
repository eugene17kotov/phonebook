const selectIsLoggedIn = state => state.auth.isLoggedIn;

const selectUser = state => state.auth.user;

const selectIsRefreshing = state => state.auth.isRefreshing;

const selectError = state => state.auth.error;

const selectIsLoading = state => state.auth.isLoading;

const authSelectors = {
  selectIsLoggedIn,
  selectUser,
  selectIsRefreshing,
  selectError,
  selectIsLoading,
};

export default authSelectors;

export const userDetails = state => {
  return state?.userdetails?.userDetails;
};
export const getFavoritesCount = state => {
  return state?.userdetails?.userDetails.filter(user => user.isFavorite).length;
};

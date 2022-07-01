import { createSelector } from "reselect";

const selectAuthBranch = (state) => state.auth;

const selectIsloading = createSelector(selectAuthBranch, (auth) => auth.auth);

const authSelector = {
  selectIsloading,
};

export default authSelector;

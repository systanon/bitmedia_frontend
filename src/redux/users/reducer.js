import { GET_USERS_STATS, GET_USER_STATISTIC } from "./actionTypes";

const initialState = {
  users: [],
  total: 0,
  userId: null,
  userName:[]
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_STATS:
      return {
        ...state,
        users: action.payload.users,
        total: action.payload.total,
      };
    case GET_USER_STATISTIC:
      return {
        ...state,
        userId: action.payload.result,
        userName:action.payload.userName
      };
    default:
      return state;
  }
};

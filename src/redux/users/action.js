import { GET_USERS_STATS, GET_USER_STATISTIC } from "./actionTypes";
import { HttpServices } from "../../services/HttpServices";

export const getUsersStats = (page, limit) => async (dispatch) => {
  const users = await HttpServices.getUsers(page, limit);
  dispatch({
    type: GET_USERS_STATS,
    payload: users,
  });
};
export const getDetailStatistic = (id) => async (dispatch) => {
  const userId = await HttpServices.getUserStatistic(id);
  dispatch({
    type: GET_USER_STATISTIC,
    payload: userId,
  });
};

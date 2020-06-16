import { UserDetailStatistic as UserDetailStatisticsComponent } from "./UserDetailStatistic";
import { connect } from "react-redux";
import { getDetailStatistic } from "../../redux/users/action";

const mapStateToProps = (state) => ({
  userId: state.users.userId,
  userName: state.users.userName,
});
const mapDispatchToProps = {
  getDetailStatistic,
};

export const UserDetailStatistics = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDetailStatisticsComponent);

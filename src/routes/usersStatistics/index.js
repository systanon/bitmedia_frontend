import { UsersStatistics as UsersStatisticsComponent } from "./UsersStatistics";
import { connect } from "react-redux";
import { getUsersStats} from "../../redux/users/action";

const mapStateToProps = (state) => ({
  users: state.users.users,
  total: state.users.total
});
const mapDispatchToProps = {
  getUsersStats,
};

export const UsersStatistics = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersStatisticsComponent);

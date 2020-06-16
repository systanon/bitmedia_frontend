import { Header as HeaderComponent } from "./Header";
import { connect } from "react-redux";
import { getUsersStats } from "../../redux/users/action";

const mapDispatchToProps = {
  getUsersStats,
};

export const Header = connect(null, mapDispatchToProps)(HeaderComponent);

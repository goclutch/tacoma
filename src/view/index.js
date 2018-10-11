import Drawer from './components/drawer';
import Home from './containers/home';
import SignUp from './containers/signUp';
import SignIn from './containers/signIn';
import SignOut from './containers/signOut';
import NoMatch from './components/statusPages/noMatch';
import AppBar from './containers/appBar';
import DashboardContainer from './containers/dashboard';


const Dashboard = Drawer(DashboardContainer);

export default {
  Home,
  SignUp,
  SignIn,
  SignOut,
  NoMatch,
  AppBar,
  Dashboard,
};

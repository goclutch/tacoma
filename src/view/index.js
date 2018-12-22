import Drawer from './components/drawer';
import Home from './components/home';
import SignUp from './components/signUp';
import SignIn from './components/signIn';
import SignOut from './components/signOut';
import NoMatch from './components/statusPages/noMatch';
import AppBar from './components/appBar';
import DashboardContainer from './components/dashboard';

const Dashboard = Drawer(DashboardContainer);

export default {
  Home,
  SignUp,
  SignIn,
  SignOut,
  NoMatch,
  AppBar,
  Dashboard
};

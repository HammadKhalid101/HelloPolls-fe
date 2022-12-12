import { Route, Switch} from "react-router-dom";
import PollsIndexContainer from "./components/polls/polls_index_container";
import PollShowContainer from './components/polls/polls_show_container'
import Landing from "./components/landing/landing";
// import { PrivateRoutes, AuthRoute} from "./utils/session/protectedRoutes";
import LoginFormContainer from "./components/session/login/login_form_container";
import SignupFormContainer from "./components/session/signup/signup_form_container";
import DashboardContainer from "./components/dashboard/dashboard_container";
import { AuthRoute, ProtectedRoute } from "./utils/route_util";
import NavBar from "./components/nav/navbar";
import Footer from "./components/footer/footer";
import SignIn from "./components/session/login/signin";
import SignUp from "./components/session/signup/signup";

function App() {
  return (
    <div className="app">
      <NavBar />

      <Switch>
        <AuthRoute exact path="/login" component={SignIn} />
        <AuthRoute exact path="/signup" component={SignUp} />
        <Route exact path="/polls" component={PollsIndexContainer} />
        <Route exact path="/polls/:poll_id" component={PollShowContainer} />
        {/* <Route element={<PrivateRoutes/>}>
          <Route path='/dashboard' element={<Dashboard/>} />
        </Route> */}
        <ProtectedRoute path="/dashboard" component={DashboardContainer} />
        <Route path="/" component={Landing} />
      </Switch>

      {/* <Footer /> */}
    </div>
  );
}

export default App;
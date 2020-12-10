import "./App.css";
import { Navbar } from "./components/navbar-header/Navbar";
import { SidebarLeft } from "./components/sidebar-left/Sidebar";
import { routes } from "./router.config";
import { Redirect, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { LoginPage } from "./pages/login/login";

function App() {
  const reactRouter = () => {
    return routes.map((route, i) => {
      return <Route path={route.path} key={i} exact={route.exact} component={route.component}/>;
    });
  };
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <Redirect from="/" exact to="/login" />
        <Route path="/">
          <div className="App min-h-screen flex flex-row">
            <SidebarLeft />
            <div className="flex flex-col w-10/12">
              <Navbar />
              <Switch>{reactRouter()}</Switch>
            </div>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}
// function RouteWithSubRoutes(route) {
//   return <Route path={route.path} exact={route.exact}>
//     <route.component routes={route.routes}/>
//   </Route>;
// }
export default App;

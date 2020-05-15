import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LandingPage from "../route/landingPage/LandingPage";
import AdoptionPage from "../route/AdoptionPage/AdoptionPage";

class Root extends React.Component {
  render() {
    return (
      <div>
        <h1>Petful</h1>
        <div>
          <Router>
            <Switch>
              <Route exact path={"/"} component={LandingPage} />
              <Route path={"/adoption"} component={AdoptionPage} />
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

// render() {
//     return (
//       <main className="App">
//         <header>
//           <Header />
//         </header>
//         <section className="section-app">
//           <Switch>
//             <PublicOnlyRoute exact path={"/"} component={LandingPage} />
//             <PublicOnlyRoute path={"/register"} component={RegisterPage} />
//             <PublicOnlyRoute path={"/login"} component={Login} />
//             {/* <PrivateRoute path={"/gatherinfo"} component={InterestPage} /> */}
//             <PrivateRoute
//               path={"/biometricgather"}
//               component={BiometricGather}
//             />
//             <PrivateRoute path={"/dashboard"} component={Dashboard} />
//             <PrivateRoute path={"/charts"} component={Charts} />
//             <PrivateRoute path={"/graphs"} component={Graphs} />
//           </Switch>
//         </section>
//       </main>
//     );
//   }
// }

export default Root;

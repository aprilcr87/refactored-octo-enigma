import "./App.css";
import React, { useState } from "react";
import { Home, Test1, Test2, Test3 } from "./routes";
import Navigation from "./components/Navigation";

const App = () => {
  const [routes] = useState([
    {
      page: 'Home',
      path: '/',
      component: <Home />
    },
    {
      page: 'Test 1',
      path: '/test1',
      component: <Test1 />
    },
    {
      page: 'Test 2',
      path: '/test2',
      component: <Test2 />
    },
    {
      page: 'Test 3',
      path: '/test3',
      component: <Test3 />
    }
  ]);

  return (
    <div className="app-container">
      <Navigation routes={routes} />
      <div>
        {routes.map(r => {
          return(
            <Route path={r.path} key={r.page}>
              {r.component}
            </Route>
          );
        })}
      </div>
    </div>
  );
};

const Route = (props) =>
  window.location.pathname === props.path ? (
    <React.Fragment>{props.children}</React.Fragment>
  ) : null;

export default App;

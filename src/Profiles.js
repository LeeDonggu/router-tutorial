import React from "react";
import { NavLink, Link, Route } from "react-router-dom";
import Profile from "./Profile";
import WithRouterSample from "./WithRouterSample";

const Profiles = () => {
  const activeStyle = {
    background: "black",
    color: "white",
  };
  return (
    <div>
      <h3>사용자 목록:</h3>
      <ul>
        {/* <li>
          <Link to="/profiles/leedonggu">leedonggu</Link>
        </li>
        <li>
          <Link to="/profiles/gildong">gildong</Link>
        </li> */}
        {/* NavLink 적용 */}
        <li>
          <NavLink activeStyle={activeStyle} to="/profiles/leedonggu" active>
            leedonggu
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={activeStyle} to="/profiles/gildong">
            gildong
          </NavLink>
        </li>
      </ul>

      <Route
        path="/profiles"
        exact
        render={() => <div>사용자를 선택해 주세요.</div>}
      />
      <Route path="/profiles/:username" component={Profile} />

      <WithRouterSample />
    </div>
  );
};

export default Profiles;

import React from "react";
import { Route, Link } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Profile from "./Profile";

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about?detail=true">소개</Link>
        </li>
        <li>
          <Link to="/profile/leedonggu">leedonggu 프로필</Link>
        </li>
        <li>
          <Link to="/profile/gildong">gildong 프로필</Link>
        </li>
      </ul>
      <hr />
      <Route path="/" component={Home} exact={true} />
      {/* v5 버전 이전에서 사용되던 하나의 컴포넌트를 여러 경로에서 보여주는 방법 */}
      {/* <Route path="/about" component={About} /> */}
      {/* <Route path="/info" component={About} /> */}
      {/* v5 버전 이후에서 사용되는 하나의 컴포넌트를 여러 경로에서 보여주는 방법 */}
      <Route path={["/about", "/info"]} component={About} />
      <Route path="/profile/:username" component={Profile} />
    </div>
  );
};

export default App;

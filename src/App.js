import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import About from "./About";
import Home from "./Home";
// import Profile from "./Profile";
import Profiles from "./Profiles";
import HistorySample from "./HistorySample";

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
        {/* <li>
          <Link to="/profile/leedonggu">leedonggu 프로필</Link>
        </li>
        <li>
          <Link to="/profile/gildong">gildong 프로필</Link>
        </li> */}
        {/* 서브 라우트 적용된 컴포넌트 */}
        <li>
          <Link to="/profiles">프로필</Link>
        </li>
        <li>
          <Link to="/history">History 예제</Link>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route path="/" component={Home} exact={true} />
        {/* v5 버전 이전에서 사용되던 하나의 컴포넌트를 여러 경로에서 보여주는 방법 */}
        {/* <Route path="/about" component={About} /> */}
        {/* <Route path="/info" component={About} /> */}
        {/* v5 버전 이후에서 사용되는 하나의 컴포넌트를 여러 경로에서 보여주는 방법 */}
        <Route path={["/about", "/info"]} component={About} />
        {/* <Route path="/profile/:username" component={Profile} /> */}
        <Route path="/profiles" component={Profiles} />
        <Route path="/history" component={HistorySample} />

        {/* path를 따로 정의하지 않으면 모든 상황에 렌더링됨 */}
        <Route
          render={({ location }) => (
            <div>
              <h2>이 페이지는 존재하지 않습니다:</h2>
              <p>{location.pathname}</p>
            </div>
          )}
        />
      </Switch>
    </div>
  );
};

export default App;

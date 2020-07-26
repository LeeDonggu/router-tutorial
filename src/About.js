import React from "react";
import qs from "qs";

const About = ({ location }) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true, // 이 설정을 통해 문자열 맨 앞의 ?를 생략합니다.
  });
  const showDetail = query.detail === "true"; // 쿼리의 파싱 결과 값은 문자열입니다.

  // 쿼리를 사용할 때는 문자열을 객체로 파싱하는 과정에서 결과 값은 언제나 문자열이다.
  // "1", "true" 와 같이 문자열 형태로 받아지므로 숫자를 사용해야 하는 경우 parseInt 함수를 통해 숫자로 변환하여햐 하며
  // 논리 자료형 값을 사용해야 하는 경우에는 정확히 "true" 문자열과 일치하는지 비교해야 한다.

  return (
    <div>
      <h1>소개</h1>
      <p>이 프로젝트는 리액트 라우터 기초를 실습해 보는 예제 프로젝트입니다.</p>
      {showDetail && <p>detail 값을 true로 설정하셨군요!</p>}
    </div>
  );
};

export default About;

// @https://css-tricks.com/different-ways-to-write-css-in-react/
// @https://styled-components.com/docs/basics

import "./css-style.scss";
import styled from "styled-components";

const CssSample = () => {
  const style = {
    classA: { borderColor: "black" },
  };
  const WrapperCss = styled.div`
    border-width: 1x;
  `;
  return (
    <div style={{ display: "none" }}>
      <div className="css-sample">a</div>
      <div style={{ color: "green" }}>b</div>
      <div style={style.classA}>c</div>
      <WrapperCss id="blop" className="over">
        d
      </WrapperCss>
    </div>
  );
};

export default CssSample;

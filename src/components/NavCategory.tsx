import { Link } from "react-router-dom";
import styled from "styled-components";
import imgCategories from "../imgs/navCategories.png";

const Category = ["home", "shop", "tv", "welove", "mypage"];

function NavCategory({ type, selected }) {
  function getPosition() {
    let result = "";
    result += type === 0 ? "0" : "-" + type * 56;
    result += "px ";
    result += selected ? "-56px" : "0";
    return result;
  }
  const position = getPosition();
  const Root = styled.a`
    width: 56px;
    height: 56px;
    margin: 0 auto;
    background: ${"url(" + imgCategories + ")"};
    line-height: 100em;
    background-size: 280px;
    vertical-align: top;
    background-position: ${position};
  `;

  return <Root href={Category[type]}></Root>;
}

export default NavCategory;

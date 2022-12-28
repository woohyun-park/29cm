import styled from "styled-components";
import imgIcons from "../imgs/headerIcons.png";
import NavIcon from "./NavIcon";

const HOME = 0;
const SHOP = 1;
const TV = 2;
const WELOVE = 3;
const MY = 4;

function Nav() {
  const Root = styled.div`
    height: 66px;
    background: #efefef;
    position: sticky;
    bottom: 0;
    display: flex;
  `;

  return (
    <Root>
      <NavIcon type={HOME} selected />
      <NavIcon type={SHOP} />
      <NavIcon type={WELOVE} />
      <NavIcon type={MY} />
    </Root>
  );
}

export default Nav;

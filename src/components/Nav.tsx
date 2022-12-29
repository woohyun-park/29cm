import styled from "styled-components";
import NavCategory from "./NavCategory";

enum Category {
  HOME = 0,
  SHOP = 1,
  TV = 2,
  WELOVE = 3,
  MY = 4,
}

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
      <NavCategory type={Category.HOME} selected />
      <NavCategory type={Category.SHOP} />
      <NavCategory type={Category.WELOVE} />
      <NavCategory type={Category.MY} />
    </Root>
  );
}

export default Nav;

import { useLocation } from "react-router-dom";
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
  let location = useLocation();
  console.log(location);
  const Root = styled.div`
    height: 66px;
    background: #efefef;
    position: sticky;
    bottom: 0;
    display: flex;
  `;

  return (
    <Root>
      <NavCategory
        type={Category.HOME}
        selected={location.pathname === "/home"}
      />
      <NavCategory
        type={Category.SHOP}
        selected={location.pathname === "/shop"}
      />
      <NavCategory
        type={Category.WELOVE}
        selected={location.pathname === "/welove"}
      />
      <NavCategory
        type={Category.MY}
        selected={location.pathname === "/mypage"}
      />
    </Root>
  );
}

export default Nav;

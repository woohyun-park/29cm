import styled from "styled-components";
import imgLogo from "../imgs/headerLogo.png";
import imgIcons from "../imgs/headerIcons.png";

enum Image {
  logo = imgLogo,
  icons = imgIcons,
}

function Header() {
  const Root = styled.div`
    width: 100%;
    height: 50px;
    box-sizing: border-box;
    padding: 8px 16px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;

  const Logo = styled.img`
    height: 18px;
  `;

  const Cont = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;

  const Search = styled.div`
    width: 24px;
    height: 24px;
    background: url(${Image.icons});
    background-size: 48px 48px;
    background-position: 0 0;
  `;

  const Cart = styled.div`
    width: 24px;
    height: 24px;
    background-image: url(${Image.icons});
    background-size: 48px 48px;
    background-position: -24px 0;
    margin-left: 16px;
  `;

  return (
    <Root>
      <Logo src={Image.logo} />
      <Cont>
        <Search />
        <Cart />
      </Cont>
    </Root>
  );
}

export default Header;

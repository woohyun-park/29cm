import styled from "styled-components";
import imgLogo from "../imgs/headerLogo.png";
import imgIcons from "../imgs/headerIcons.png";

enum Image {
  logo = imgLogo,
  icons = imgIcons,
}

const SEARCH: number = 0;
const CART: number = 1;

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
    position: sticky;
    top: 0;
  `;

  const Logo = styled.img`
    height: 18px;
  `;

  const Cont = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;

  const Button = styled.div`
    width: 24px;
    height: 24px;
    background: url(${Image.icons});
    background-size: 48px 48px;
    background-position: ${(props) =>
      props.type === SEARCH ? "0 0" : props.type === CART ? "-24px 0" : 0};
    margin-left: ${(props) => (props.type === CART ? "16px" : 0)};
  `;

  return (
    <Root>
      <Logo src={Image.logo} />
      <Cont>
        <Button type={SEARCH} />
        <Button type={CART} />
      </Cont>
    </Root>
  );
}

export default Header;

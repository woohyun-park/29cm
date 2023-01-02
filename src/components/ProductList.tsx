import styled from "styled-components";
import { BsSuitHeart } from "react-icons/bs";

function ProductList({ info }) {
  function calcAndFormatSalePrice(price, sale) {
    let result = "";
    let temp = String(price * sale);
    while (temp.length > 3) {
      result = "," + temp.substring(temp.length - 3, temp.length) + result;
      temp = temp.substring(0, temp.length - 3);
    }
    return temp + result;
  }
  function formatPrice(price, sale) {
    return (
      Math.floor((1 - sale) * 100) +
      "% " +
      calcAndFormatSalePrice(price, sale) +
      "won"
    );
  }

  const Root = styled.div`
    width: 90%;
    display: flex;
    font-size: 11px;
    line-height: 16px;
    text-align: left;
    margin-top: 16px;
    margin-right: 48px;
    > div {
      padding: 8px;
      padding-top: 16px;
    }
  `;
  const Image = styled.img`
    width: 52px;
    height: 52px;
  `;
  const ContentCont = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 16px;
  `;
  const Brand = styled.div`
    font-weight: 800;
  `;
  const Price = styled.div`
    color: #ff4800;
    margin-top: 4px;
  `;
  const LikeCont = styled.div`
    width: 48px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-top: 1px solid #d4d4d4;
    border-left: 1px solid #d4d4d4;
    div {
      margin-top: 4px;
    }
    > svg {
      width: 12px;
      height: 12px;
    }
  `;
  const Cont = styled.div`
    width: calc(100% - 48px);
    display: flex;
    border-top: 1px solid #d4d4d4;
  `;

  return (
    <Root>
      <Cont>
        <Image src={info.image} />
        <ContentCont>
          <Brand>{info.brand}</Brand>
          <div>{info.name}</div>
          <Price>{formatPrice(info.price, info.sale)}</Price>
        </ContentCont>
      </Cont>
      <LikeCont>
        <BsSuitHeart></BsSuitHeart>
        <div>{info.like}</div>
      </LikeCont>
    </Root>
  );
}

export default ProductList;

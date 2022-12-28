import styled from "styled-components";

function ProductList({ info }) {
  function calcSalePrice(price, sale) {
    return price * sale;
  }
  function formatPrice(price, sale) {
    return (
      Math.floor((1 - sale) * 100) + "% " + calcSalePrice(price, sale) + "won"
    );
  }

  const Cont = styled.div`
    display: flex;
    font-size: 11px;
    line-height: 16px;
    text-align: left;
    margin-top: 16px;
    width: 100%;
  `;
  const Image = styled.img`
    width: 52px;
    height: 52px;
  `;
  const ContentCont = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
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
    width: 65px;
  `;
  const Like = styled.svg``;

  return (
    <Cont>
      <Image src={info.image} />
      <ContentCont>
        <Brand>{info.brand}</Brand>
        <div>{info.name}</div>
        <Price>{formatPrice(info.price, info.sale)}</Price>
      </ContentCont>
      <LikeCont></LikeCont>
    </Cont>
  );
}

export default ProductList;

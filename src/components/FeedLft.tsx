import styled from "styled-components";
import ImageBox from "./ImageBox";
import ProductList from "./ProductList";

function FeedLft({ info }) {
  const Root = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  `;
  const Cont = styled.div`
    width: 90%;
  `;
  const ContentCont = styled.div`
    width: 95%;
    word-break: keep-all;
  `;
  const Title = styled.h2`
    font-size: 32px;
    line-height: 36px;
    font-weight: 700;
    margin-top: 10px;
    margin-bottom: 0;
  `;
  const Text = styled.div`
    margin-top: 10px;
    font-size: 16px;
    line-height: 24px;
  `;

  return (
    <Root>
      <Cont>
        <ImageBox src={info.image} />
        <ContentCont>
          <Title>{info.title}</Title>
          <Text>{info.text}</Text>
        </ContentCont>
        {info.items && info.items.map((each) => <ProductList info={each} />)}
      </Cont>
    </Root>
  );
}

export default FeedLft;

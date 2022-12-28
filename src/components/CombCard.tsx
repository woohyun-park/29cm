import styled from "styled-components";

function CombCard({ info }) {
  const Root = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  `;
  const Cont = styled.div`
    width: 90%;
  `;
  const ImageCont = styled.div`
    position: relative;
    &:after {
      position: absolute;
      bottom: 29px;
      left: -20px;
      width: 40px;
      height: 4px;
      background: #000;
      content: "";
    }
  `;
  const Image = styled.img`
    margin-top: 10%;
    width: 100%;
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
        <ImageCont>
          <Image src={info.image} />
        </ImageCont>
        <ContentCont>
          <Title>{info.title}</Title>
          <Text>{info.text}</Text>
        </ContentCont>
      </Cont>
    </Root>
  );
}

export default CombCard;

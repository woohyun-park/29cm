import styled from "styled-components";

function ImageCard({ info }) {
  const Root = styled.div`
    width: 100%;
    display: flex;
    :hover {
      cursor: pointer;
    }
  `;

  const Image = styled.img`
    width: 100%;
  `;

  return (
    <Root>
      <Image src={info.image} />
    </Root>
  );
}

export default ImageCard;

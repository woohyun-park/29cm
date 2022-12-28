import styled from "styled-components";

function ImageBox({ src }) {
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

  return (
    <ImageCont>
      <Image src={src} />
    </ImageCont>
  );
}

export default ImageBox;

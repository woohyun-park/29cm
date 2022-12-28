import styled from "styled-components";

function Home() {
  const Root = styled.div`
    width: 100%;
  `;

  const ImageView = styled.div`
    width: 100%;
    height: 400px;
    border: 1px solid black;
  `;

  return (
    <Root>
      <ImageView></ImageView>
      <ImageView></ImageView>
    </Root>
  );
}

export default Home;

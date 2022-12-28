import styled from "styled-components";
import CombCard from "./CombCard";
import ImageCard from "./ImageCard";

const imageCards = [
  {
    image:
      "https://img.29cm.co.kr/next-contents/2022/12/27/1ccdb45b236f4c2e863b4553bb093f79_20221227161757.jpg?width=1000",
  },
  {
    image:
      "https://img.29cm.co.kr/next-contents/2022/12/27/6242d5df86b34365bdb733a2ed372f80_20221227161725.jpg?width=1000",
  },
  {
    image:
      "https://img.29cm.co.kr/next-contents/2022/12/27/4061994858ac41f8bb0ec217284eb1a4_20221227161655.jpg?width=1000",
  },
];

const combCards = [
  {
    title: "지금이 기회예요",
    text: "패턴과 그래픽이 돋보이는 유즈의 겨울 신상품 할인 혜택은 오늘 종료됩니다. 이 기회를 놓치지 마세요. 단독 5% 할인",
    image:
      "https://img.29cm.co.kr/next-edition/2022/12/27/e245bc1e23584773888445c8fed3e4c9_20221227165008.jpg?width=500",
  },
  {
    title: "스포티보다는 캐주얼하게",
    text: "스포티한 멋보다는 캐주얼한 느낌을 선호하는 세터입니다. 로고 하나로 브랜드 아이덴티티가 돋보이는 세터의 시즌오프 소식을 알려요. ~30% 할인",
    image:
      "https://img.29cm.co.kr/next-edition/2022/12/27/6db9414bd90644fcad1008b7c81681da_20221227164929.jpg?width=500",
  },
  {
    title: "소중한 사람에게 전하는 마음",
    text: "매일 아침, 당신의 몸과 마음을 상쾌하게 할 브라운과 오랄비를 만나보세요. 언제나 깔끔하게 만들어 줄 브라운 제모기부터 전기면도기, 오랄비 전동칫솔까지. 최대 51% 할인으로 만나보세요.",
    image:
      "https://img.29cm.co.kr/next-edition/2022/12/27/b2e321582e324882a1a397c3b3d4ae52_20221227164839.jpg?width=500",
  },
];

function Home() {
  const Root = styled.div`
    width: 100%;
  `;

  return (
    <Root>
      {imageCards.map((each) => (
        <ImageCard info={each} />
      ))}
      {combCards.map((each) => (
        <CombCard info={each} />
      ))}
    </Root>
  );
}

export default Home;

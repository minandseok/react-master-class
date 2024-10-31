import { useParams } from "react-router-dom";

interface RouteParams {
  // React Router의 useParams가 반환하는 객체는 URL 파라미터가 실제로 있을 수도 있고 없을 수도 있기 때문에, 반환되는 각 값은 string | undefined로 처리됩니다.
  coinId?: string;
}

function Coin() {
  // useParams는 현재 react-router-dom v6에서는 제네릭을 지원하지 않기 때문에 아래와 같이 타입을 별도로 설정해 주어야 합니다.
  const { coinId } = useParams() as RouteParams;
  return <h1>Coin: {coinId}</h1>;
}

export default Coin;

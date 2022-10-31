import { useLocation } from "react-router-dom";

const AboutQuery = () => {
  const location = useLocation();
  return (
    <>
      <div>
        <h1>쿼리스트링 소개</h1>
        <p>리액트 많이 사랑해주세요</p>
        <p>쿼리스트링: {location.search}</p>
        <p>
          쿼리스트링 값에서 ?를 지우고, & 문자열로 분리한 뒤 key와 value를
          파싱하는 작업을 해야 한다는데...
        </p>
      </div>
    </>
  );
};
export default AboutQuery;

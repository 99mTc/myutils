import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <p>리액트 라우터를 연습하는 페이지입니다</p>
      <ul>
        <li>
          <h3>Link 컴포넌트</h3>
          <ul>
            <li>
              <Link to="/about">소개</Link>
            </li>
          </ul>
        </li>
        <li>
          <h3>URL 파라미터</h3>
          <ul>
            <li>
              <Link to="/profile/techne">Technetium</Link>
            </li>
            <li>
              <Link to="/profile/inssak">식인새싹</Link>
            </li>
            <li>
              <Link to="/profile/lycoris">Lycoris</Link>
            </li>
            <li>
              <Link to="/profile/417">417</Link>
            </li>
            <li>
              <Link to="/profile/void">존재하지 않는 프로필</Link>
            </li>
          </ul>
        </li>
        <li>
          <h3>쿼리스트링</h3>
          <ul>
            <li>
              <Link to="aboutquery">쿼리스트링 소개</Link>
            </li>
            <li>
              http://localhost:3000/aboutquery?detail=true&mode=1 로 이동해
              보세요
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
};

export default Home;

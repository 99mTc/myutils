import { Route, Routes } from "react-router-dom";
import About from "./About";
import AboutQuery from "./AboutQuery";
import Home from "./Home";
import Profile from "./Profile";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* URL 파라미터 연습
        username이라는 글자는 Profile.js의
        const profile에 있는 username과 똑같이 맞춰주면 된다 */}
        <Route path="/profile/:username" element={<Profile />} />
        <Route path="aboutquery" element={<AboutQuery />} />
      </Routes>
    </>
  );
}

export default App;

import { useParams } from "react-router-dom";

const data = {
  techne: {
    name: "Technetium",
    description: "프론트엔드 개발자",
  },
  inssak: {
    name: "식인새싹",
    description: "디자이너",
  },
  lycoris: {
    name: "Lycoris",
    description: "백엔드 개발자",
  },
  417: {
    name: "417",
    description: "일러스트레이터",
  },
};

const Profile = () => {
  const params = useParams();
  {
    /* username이라는 글자는 App.js의
        Route에 있는 username과 똑같이 맞춰주면 된다 */
  }
  const profile = data[params.username];
  return (
    <div>
      <h1>프로필</h1>
      {/* profile이 true라면 내용을 표시하고,
      false라면 존재하지 않는 어쩌구를 내보낸다 */}
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
        </div>
      ) : (
        <p>존재하지 않는 프로필입니다</p>
      )}
    </div>
  );
};

export default Profile;

import profilePic from "../assets/IMG_20240829_151257.jpg";

function Card() {
  return (
    <div className="card">
      <img src={profilePic} alt="profile picture" className="card-image"></img>
      <h2 className="card-title">Akos</h2>
      <p className="card-text">Programmer</p>
    </div>
  );
}
export default Card;

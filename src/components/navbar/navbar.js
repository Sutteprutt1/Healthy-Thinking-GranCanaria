import "./navbar.scss";
// Navbar component that will display home, user profile and map

export default function Navbar(props) {
  return (
    <div className="navbar">
      <div className="navbar-inner">
        <a href="/">Home</a>
        <a href="/profile">Profile</a>
        <a href="/map">Map</a>
      </div>
    </div>
  );
}

// components/NavBar.js

import NavButton from "./NavButton";

const NavBar = (props) => (
  <div className="NavBar">
    {props.navButtons.map((button) => (
      <NavButton
        key={button.path}
        path={button.path}
        label={button.label}
        icon={button.icon}
      />
    ))}
    <style jsx>{`
      display: flex;
      justify-content: space-around;
      background-color: red;
      color: white;
      width: 100%;
      height: 60px;
    `}</style>
  </div>
);

export default NavBar;

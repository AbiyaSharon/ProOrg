import Link from "next/link";

const Header = (props) => (
  <div className="Header">
    <Link href="/">
      <div className="Header">{props.appTitle}</div>
    </Link>
    <style jsx>{`
      display: flex;
      justify-content: flex-start;
      align-items: center;

      height: 50px;
      width: 100%;

      padding: 0 20px;

      font-family: Arial, sans-serif;
      font-size: 24px;
      font-weight: bold;
      color: white;
      text-transform: uppercase;

      background: crimson;

      cursor: pointer;
    `}</style>
  </div>
);

export default Header;

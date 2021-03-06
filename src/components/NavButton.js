import Link from "next/link";
import { withRouter } from "next/router";

const NavButton = (props) => (
  <Link href={props.path}>
    <div
      className={`NavButton ${
        props.router.pathname === props.path ? "active" : ""
      }`}
    >
      <div className="Icon">{props.icon}</div>
      <span className="Label">{props.label}</span>
      <style jsx>{`
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;

        height: 100%;

        cursor: pointer;

        .active {
          color: blue;
        }

        .Icon {
          font-size: 20px;
        }

        .Label {
          font-size: 12px;
          text-transform: capitalize;
        }
      `}</style>
    </div>
  </Link>
);

export default withRouter(NavButton);

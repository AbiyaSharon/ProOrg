// components/Layout.js

import Head from "next/head";

import Header from "./Header";
import NavBar from "./NavBar";

import navButtons from "../config/buttons";

const Layout = (props) => {
  const appTitle = `> ProOrg`;
  return (
    <div className="Layout">
      <Head>
        <title>ProOrg</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>

      <Header appTitle={appTitle} />
      <div className="Content">{props.children}</div>
      <NavBar navButtons={navButtons} />
      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        html,
        body,
        #__next {
          height: 100%;
          width: 100%;
        }

        body {
          margin: 0;
          padding: 0;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
            "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
            "Helvetica Neue", sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .Layout {
          display: flex;
          flex-direction: column;
          height: 100%;
          width: 100%;
        }

        .Content {
          flex: 1;
          display: flex;
          flex-direction: column;
          font-family: Arial;
        }
      `}</style>
    </div>
  );
};

export default Layout;
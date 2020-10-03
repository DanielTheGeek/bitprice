import Head from "next/head";
import NavBar from "./NavBar";

const Layout = ({ children }) => (
  <div>
    <Head>
      <title>BitPrice</title>
      <link
        rel="stylesheet"
        href="https://bootswatch.com/4/cerulean/bootstrap.min.css"
      />
    </Head>
    <NavBar />
    <div className="container">{children}</div>
  </div>
);

export default Layout;

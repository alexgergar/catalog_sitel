import Head from "next/head";
import SideBarNav from './SideBarNav';
import TitleBar from './TitleBar';

const Layout = props => {
  return (
    <div>
      <Head>
        <title>{props.title}</title>
        <meta
          name="viewport"
          content="initial-scale=1.2, width=device-width"
          key="viewport"
        />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossorigin="anonymous"
        />
      </Head>
      <div className="layoutContainer">
        <SideBarNav />
        <div className="mainLayoutContainer">
          <TitleBar {...props} />
          <div className="layoutDivider" />
          <div className="p-4">{props.children}</div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
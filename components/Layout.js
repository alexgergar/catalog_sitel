import React, { Component } from "react";
import Head from "next/head";
import styles from "./Layout.module.css";
import SideBarNav from './SideBarNav';
import TitleBar from './TitleBar';

export default class Layout extends Component {
  static defaultProps = {
    paddingForContent: true,
  };

  render() {
    let contentPadding = this.props.paddingForContent ? "p-4" : "p-0"
    return (
      <div>
        <Head>
          <title>{this.props.title}</title>
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
        <div className={styles.layoutContainer}>
          <SideBarNav />

          <div className={styles.mainContainer}>
            <TitleBar {...this.props} />
            <div className={styles.divider} />
            <div className={contentPadding}>{this.props.children}</div>
          </div>
        </div>
      </div>
    );
  }
}
import React, { Component } from "react";
import Link from "next/link";
import {
  ChevronsLeft,
  Home,
  Activity,
  User,
  Search,
  BookOpen,
  Calendar,
  Mail,
} from "react-feather";

const Username = () => {
  return "Alexandra";
};

export default class SideBarNav extends Component {
  state = {
      navOpen: true,
    };

  handleNavButtonClick = () => {
    this.setState({navOpen: !this.state.navOpen})
  };

  render() {
    const {navOpen} = this.state;
    let navClassName = navOpen
      ? "sidebarcontainer"
      : "smsidebarcontainer";
    let navIconClassName = navOpen ? "col-5 text-right" : "col text-center";
    let navTextClassName = navOpen ? "col pl-0" : "d-none";
    let navIconButtonClassName = navOpen ? 'navIconButton' : 'navIconButtonClosed'
    return (
      <nav className={navClassName}>
        <div
          onClick={this.handleNavButtonClick}
          className={navIconButtonClassName}
        >
          <div className="navButtonContainer">
            <ChevronsLeft />
          </div>
        </div>
        <div className="brandLogoNav">
          <img
            src="/medstar-health.png"
            className="img-fluid p-3"
            alt="Medstar Health logo"
          />
        </div>

        <div>
          <ul className="nav-links p-0">
            <div className="row pb-4 navIcon">
              <div className={navIconClassName}>
                <Home />
              </div>
              <div className={navTextClassName}>
                <Link href="/">
                  <a className="py-0">Your Hosptial</a>
                </Link>
              </div>
            </div>
            <div className="row pb-4 navIcon">
              <div className={navIconClassName}>
                <Activity />
              </div>
              <div className={navTextClassName}>
                <Link href="/">
                  <a className="py-0">Activity</a>
                </Link>
              </div>
            </div>
            <div className="row pb-4 navIcon">
              <div className={navIconClassName}>
                <User />
              </div>
              <div className={navTextClassName}>
                <Link href="/">
                  <a className="py-0">
                    <Username />
                  </a>
                </Link>
              </div>
            </div>
            <div className="row pb-4 navIcon">
              <div className={navIconClassName}>
                <Search />
              </div>
              <div className={navTextClassName}>
                <Link href="/search">
                  <a className="py-0">Search</a>
                </Link>
              </div>
            </div>
            <div className="row pb-4 navIcon">
              <div className={navIconClassName}>
                <BookOpen />
              </div>
              <div className={navTextClassName}>
                <Link href="/">
                  <a className="py-0">Courses</a>
                </Link>
              </div>
            </div>
            <div className="row pb-4 navIcon">
              <div className={navIconClassName}>
                <Calendar />
              </div>
              <div className={navTextClassName}>
                <Link href="/">
                  <a className="py-0">Calendar</a>
                </Link>
              </div>
            </div>
            <div className="row pb-4 navIcon">
              <div className={navIconClassName}>
                <Mail />
              </div>
              <div className={navTextClassName}>
                <Link href="/">
                  <a className="py-0">Messages</a>
                </Link>
              </div>
            </div>
          </ul>
        </div>
      </nav>
    );
  }
}

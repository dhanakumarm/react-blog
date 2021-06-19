import DashboardNavbar from "./DashboardNavbar";
import Footer from "./Footer";
import RightSideNavBar from "./RightSideNavBar";

const DashboardLayout = (props) => {
  return (
    <div>
      <nav className="white" role="navigation">
        <div className="nav-wrapper container">
          <a id="logo-container" href="/" className="brand-logo">
            Logo
          </a>
          <DashboardNavbar />

          <ul id="nav-mobile" className="sidenav">
            <li>
              <a href="/">Navbar Link</a>
            </li>
          </ul>
          <a href="/" data-target="nav-mobile" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
        </div>
      </nav>

      <div className="container">
        <div className="section">
          <div className="row">
            <div className="col s12">
              <div className="row flex-s">
                {/* col s12 m8 offset-m1 xl7 offset-xl1 */}
                <div className="col s12 m8 offset-m1 xl8  box-a">
                  <div>{props.children}</div>
                </div>

                <div className="col s12 m8 offset-m1 xl3 offset-xl1   box-b">
                  <RightSideNavBar />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DashboardLayout;

import DashboardNavbar from "./DashboardNavbar";
import Footer from "./Footer";
const DashboardLayout = (props) => {
  return (
    <div>
      <nav class="white" role="navigation">
        <div class="nav-wrapper container">
          <a id="logo-container" href="#" class="brand-logo">
            Logo
          </a>
          <DashboardNavbar />

          <ul id="nav-mobile" class="sidenav">
            <li>
              <a href="/">Navbar Link</a>
            </li>
          </ul>
          <a href="/" data-target="nav-mobile" class="sidenav-trigger">
            <i class="material-icons">menu</i>
          </a>
        </div>
      </nav>

      <div class="container">
        <div class="section">
          <div class="row">
            <div class="col s12 center">
              <h3>
                <i class="mdi-content-send brown-text"></i>
              </h3>
              <h4>Contact Us</h4>
              <div>{props.children}</div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DashboardLayout;

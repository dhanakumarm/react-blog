import Footer from "./Footer";

const MainLayout = (props) => {
  return (
    <div>
      <nav className="white" role="navigation">
        <div className="nav-wrapper container">
          <a id="logo-container" href="/" className="brand-logo">
            Logo
          </a>

          <a href="/" data-target="nav-mobile" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
        </div>
      </nav>

      <div className="container">
        <div className="section">
          <div className="row">
            <div className="col s12 center">
              
              <div>{props.children}</div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MainLayout;

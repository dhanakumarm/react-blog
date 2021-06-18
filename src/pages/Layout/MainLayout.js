import Footer from "./Footer";

const MainLayout = (props) => {
  return (
    <div>
      <nav class="white" role="navigation">
        <div class="nav-wrapper container">
          <a id="logo-container" href="/" class="brand-logo">
            Logo
          </a>

          <a href="/" data-target="nav-mobile" class="sidenav-trigger">
            <i class="material-icons">menu</i>
          </a>
        </div>
      </nav>

      <div class="container">
        <div class="section">
          <div class="row">
            <div class="col s12 center">
              
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

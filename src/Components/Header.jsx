import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function Header() {
  const [data, setData] = useState({ menu: [], isloading: false }); //yeu cau lay API
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((kQ) => setData({ menu: kQ.data, isloading: true }))
      .catch((e) => console.error(e));
  }, []);
  if (data.isloading) {
    return (
      <>
        <div>
          {/* Topbar Start */}
          <div className="container-fluid">
            <div className="row bg-secondary py-2 px-xl-5">
              <div className="col-lg-6 d-none d-lg-block">
                <div className="d-inline-flex align-items-center">
                  <a className="text-dark" href>
                    FAQs
                  </a>
                  <span className="text-muted px-2">|</span>
                  <a className="text-dark" href>
                    Help
                  </a>
                  <span className="text-muted px-2">|</span>
                  <a className="text-dark" href>
                    Support
                  </a>
                </div>
              </div>
              <div className="col-lg-6 text-center text-lg-right">
                <div className="d-inline-flex align-items-center">
                  <a className="text-dark px-2" href>
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a className="text-dark px-2" href>
                    <i className="fab fa-twitter" />
                  </a>
                  <a className="text-dark px-2" href>
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a className="text-dark px-2" href>
                    <i className="fab fa-instagram" />
                  </a>
                  <a className="text-dark pl-2" href>
                    <i className="fab fa-youtube" />
                  </a>
                </div>
              </div>
            </div>
            <div className="row align-items-center py-3 px-xl-5">
              <div className="col-lg-3 d-none d-lg-block">
                <span href className="text-decoration-none">
                  <Link to={"/"}>
                    <h1 className="m-0 display-5 font-weight-semi-bold">
                      <span className="text-primary font-weight-bold border px-3 mr-1">E</span>Shopper
                    </h1>
                  </Link>
                </span>
              </div>
              <div className="col-lg-6 col-6 text-left">
                <form action>
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search for products" />
                    <div className="input-group-append">
                      <span className="input-group-text bg-transparent text-primary">
                        <i className="fa fa-search" />
                      </span>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-lg-3 col-6 text-right">
                <a href className="btn border">
                  <i className="fas fa-heart text-primary" />
                  <span className="badge">0</span>
                </a>
                <Link to={"/gio-hang"} className="btn border">
                  <i className="fas fa-shopping-cart text-primary" />
                  <span className="badge">0</span>
                </Link>
              </div>
            </div>
          </div>
          {/* Topbar End */}
          {/* Navbar Start */}
          <div className="container-fluid">
            <div className="row border-top px-xl-5">
              <div className="col-lg-3 d-none d-lg-block">
                <a
                  className="btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100"
                  data-toggle="collapse"
                  href="#navbar-vertical"
                  style={{ height: 65, marginTop: "-1px", padding: "0 30px" }}>
                  <h6 className="m-0">Categories</h6>
                  <i className="fa fa-angle-down text-dark" />
                </a>
                <nav
                  className="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0 bg-light"
                  id="navbar-vertical"
                  style={{ width: "calc(100% - 30px)", zIndex: 1 }}>
                  <div className="navbar-nav w-100 overflow-hidden" style={{ height: 410 }}>
                    <div className="nav-item dropdown">
                      <a href="#" className="nav-link" data-toggle="dropdown">
                        Dresses <i className="fa fa-angle-down float-right mt-1" />
                      </a>
                      <div className="dropdown-menu position-absolute bg-secondary border-0 rounded-0 w-100 m-0">
                        <a href className="dropdown-item">
                          Men's Dresses
                        </a>
                        <a href className="dropdown-item">
                          Women's Dresses
                        </a>
                        <a href className="dropdown-item">
                          Baby's Dresses
                        </a>
                      </div>
                    </div>
                    <a href className="nav-item nav-link">
                      Shirts
                    </a>
                    <a href className="nav-item nav-link">
                      Jeans
                    </a>
                    <a href className="nav-item nav-link">
                      Swimwear
                    </a>
                    <a href className="nav-item nav-link">
                      Sleepwear
                    </a>
                    <a href className="nav-item nav-link">
                      Sportswear
                    </a>
                    <a href className="nav-item nav-link">
                      Jumpsuits
                    </a>
                    <a href className="nav-item nav-link">
                      Blazers
                    </a>
                    <a href className="nav-item nav-link">
                      Jackets
                    </a>
                    <a href className="nav-item nav-link">
                      Shoes
                    </a>
                  </div>
                </nav>
              </div>
              <div className="col-lg-9">
                <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
                  <a href className="text-decoration-none d-block d-lg-none">
                    <h1 className="m-0 display-5 font-weight-semi-bold">
                      <span className="text-primary font-weight-bold border px-3 mr-1">E</span>Shopper
                    </h1>
                  </a>
                  <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon" />
                  </button>
                  <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                    <div className="navbar-nav mr-auto py-0">
                      <Link to={"/"} className="nav-item nav-link active">
                        Home
                      </Link>
                      {data.menu.map((v, i) =>
                        i < 6 ? (
                          <Link to={`/${v.slug}`} key={v.slug} className="nav-item nav-link">
                            {v.name}
                          </Link>
                        ) : (
                          ""
                        )
                      )}
                      <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">
                          Pages
                        </a>
                        <div className="dropdown-menu rounded-0 m-0">
                          <Link to={"/gio-hang"} className="dropdown-item">
                            Shopping Cart
                          </Link>
                          <Link to={"/thanh-toan"} className="dropdown-item">
                            Checkout
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="navbar-nav ml-auto py-0">
                      <Link to={"/dang-nhap"}  className="nav-item nav-link">Login</Link>
                      <a href className="nav-item nav-link">
                        Register
                      </a>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
          {/* Navbar End */}
        </div>
      </>
    );
  }
}

export default Header;

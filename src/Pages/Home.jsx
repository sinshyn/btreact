import { useEffect, useState } from "react";
import ItemProduct from "./ItemProduct";
import axios from "axios";

function Home() {
  const [data, setData] = useState({ product: [], isloading: false });
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((kQ) => setData({ product: kQ.data.products, isloading: true }))
      .catch((e) => console.error(e));
  }, []);
  return (
    <>
      <div>
        <div id="header-carousel" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active" style={{ height: 410 }}>
              <img className="img-fluid" src="img/carousel-1.jpg" alt="Image" />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: 700 }}>
                  <h4 className="text-light text-uppercase font-weight-medium mb-3">10% Off Your First Order</h4>
                  <h3 className="display-4 text-white font-weight-semi-bold mb-4">Fashionable Dress</h3>
                  <a href className="btn btn-light py-2 px-3">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
            <div className="carousel-item" style={{ height: 410 }}>
              <img className="img-fluid" src="img/carousel-2.jpg" alt="Image" />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: 700 }}>
                  <h4 className="text-light text-uppercase font-weight-medium mb-3">10% Off Your First Order</h4>
                  <h3 className="display-4 text-white font-weight-semi-bold mb-4">Reasonable Price</h3>
                  <a href className="btn btn-light py-2 px-3">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#header-carousel" data-slide="prev"></a>
          <a className="carousel-control-next" href="#header-carousel" data-slide="next"></a>
        </div>
        {/* Navbar End */}
        {/* Featured Start */}
        <div className="container-fluid pt-5">
          <div className="row px-xl-5 pb-3">
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
              <div className="d-flex align-items-center border mb-4" style={{ padding: 30 }}>
                <h1 className="fa fa-check text-primary m-0 mr-3" />
                <h5 className="font-weight-semi-bold m-0">Quality Product</h5>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
              <div className="d-flex align-items-center border mb-4" style={{ padding: 30 }}>
                <h1 className="fa fa-shipping-fast text-primary m-0 mr-2" />
                <h5 className="font-weight-semi-bold m-0">Free Shipping</h5>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
              <div className="d-flex align-items-center border mb-4" style={{ padding: 30 }}>
                <h1 className="fas fa-exchange-alt text-primary m-0 mr-3" />
                <h5 className="font-weight-semi-bold m-0">14-Day Return</h5>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
              <div className="d-flex align-items-center border mb-4" style={{ padding: 30 }}>
                <h1 className="fa fa-phone-volume text-primary m-0 mr-3" />
                <h5 className="font-weight-semi-bold m-0">24/7 Support</h5>
              </div>
            </div>
          </div>
        </div>
        {/* Featured End */}

        {/* Products Start */}
        <div className="container-fluid pt-5">
          <div className="text-center mb-4">
            <h2 className="section-title px-5">
              <span className="px-2">Just Arrived</span>
            </h2>
          </div>
          <div className="row px-xl-5 pb-3">
            {data.isloading ? data.product.map((v, i) => (i < 8 ? <ItemProduct key={v.id} sanpham={v} /> : "")) : ""}
            
          </div>
        </div>
        {/* Products End */}
      </div>
    </>
  );
}

export default Home;

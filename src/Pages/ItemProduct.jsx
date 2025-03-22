import { useDispatch } from "react-redux";
import { addUpdateItem } from "../Components/Reduce/CartSlice.js";
function ItemProduct({ sanpham }) {
  const dispatch = useDispatch();

  const addCart = (event) => {
    event.preventDefault();
    dispatch(
      addUpdateItem({
        id: sanpham.id,
        image: sanpham.images[0],
        name: sanpham.title,
        price: sanpham.price,
        quantity: 1,
      })
    );

    // Hiển thị thông báo SweetAlert
    Swal.fire({
      title: "Added to Cart!",
      text: `${sanpham.title} has been added to your cart.`,
      icon: "success",
      showConfirmButton: false,
      timer: 2000, // Tự động đóng sau 2 giây
      position: "top", // Hiển thị thông báo ở góc trên
      toast: true, // Kiểu thông báo nhỏ gọn
    });
  };

  return (
    <>
      <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
        <div className="card product-item border-0 mb-4">
          <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
            <a href={`/${sanpham.category}/${sanpham.id}`}>
              <img className="img-fluid w-100" src={sanpham.thumbnail} alt={sanpham.title} />
            </a>
          </div>
          <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
            <h6 className="text-truncate mb-3">{sanpham.title}</h6>
            <div className="d-flex justify-content-center">
              <h6>${sanpham.price}</h6>
              <h6 className="text-muted ml-2">
                <del>${(sanpham.price + 1).toFixed(2)}</del>
              </h6>
            </div>
          </div>
          <div className="card-footer d-flex justify-content-between bg-light border">
            <a href className="btn btn-sm text-dark p-0">
              <i className="fas fa-eye text-primary mr-1" />
              View Detail
            </a>
            <a onClick={addCart} href="#" className="btn btn-sm text-dark p-0">
              <i className="fas fa-shopping-cart text-primary mr-1" />
              Add To Cart
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemProduct;

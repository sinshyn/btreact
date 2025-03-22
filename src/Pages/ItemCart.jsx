import { useDispatch, useSelector } from "react-redux";
import { addUpdateItem } from "../Components/Reduce/CartSlice.js";
import { removeItem } from "../Components/Reduce/CartSlice.js";

function ItemCart({ data }) {
  const dispatch = useDispatch();

  const showNotification = (message, type = "success") => {
    Swal.fire({
      title: message,
      icon: type,
      showConfirmButton: false,
      timer: 2000, // Tự động ẩn sau 2 giây
      position: "top",
      toast: true, // Dùng kiểu thông báo nhỏ gọn (toast)
    });
  };

  const updateCartItem = (difference) => {
    dispatch(
      addUpdateItem({
        id: data.id,
        price: data.price,
        quantity: difference,
      })
    );
    showNotification("Cart updated successfully!");
  };

  const handleInputChange = (event) => {
    event.preventDefault();
    const newValue = parseInt(event.target.value) || 0;
    const difference = newValue - data.quantity;

    const newQuantity = newValue < 0 ? 0 : newValue;
    updateCartItem(newQuantity - data.quantity);
  };

  const handleButtonClick = (type) => {
    const difference = type === "increase" ? 1 : -1;
    const newQuantity = data.quantity + difference;
    if (newQuantity >= 0) {
      updateCartItem(difference);
    }
  };

  const xoasanpham = (event) => {
    event.preventDefault();
    dispatch(removeItem({ id: data.id }));
    showNotification("Item removed from cart!", "error");
  };

  return (
    <tr>
      <td className="align-middle">
        <img src={data.image} style={{ width: 50 }} alt="product" />
        {data.name}
      </td>
      <td className="align-middle">${data.price}</td>
      <td className="align-middle">
        <div className="input-group quantity mx-auto" style={{ width: 100 }}>
          <div className="input-group-btn">
            <button className="btn btn-sm btn-primary btn-minus" onClick={() => handleButtonClick("decrease")}>
              <i className="fa fa-minus" />
            </button>
          </div>
          <input type="text" className="form-control form-control-sm bg-secondary text-center" value={data.quantity} onChange={handleInputChange} />
          <div className="input-group-btn">
            <button className="btn btn-sm btn-primary btn-plus" onClick={() => handleButtonClick("increase")}>
              <i className="fa fa-plus" />
            </button>
          </div>
        </div>
      </td>
      <td className="align-middle">${data.itemTotal.toFixed(2)}</td>
      <td className="align-middle">
        <button className="btn btn-sm btn-primary" onClick={xoasanpham}>
          <i className="fa fa-times" />
        </button>
      </td>
    </tr>
  );
}

export default ItemCart;

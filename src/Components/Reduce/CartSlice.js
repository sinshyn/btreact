import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  //gía trị khởi tạo ban đầu
  initialState: {
    items: [],
    total: 0,
    quantity: 0,
  },
  reducers: {
    //them va cap nhat san pham
    addUpdateItem: (state, action) => {
      let item = action.payload; // giá trị được gửi vào sản phẩm
      let existItem = state.items.find((i) => i.id === item.id); //sản phẩm đã tìm thấy trong giỏ hàng
      if (!existItem) {
        //chưa có và Thêm sản phẩm vào giỏ hàng
        state.items.push({ ...item, itemTotal: item.quantity * item.price });
        state.quantity++;
        state.total += Number(item.quantity * item.price);
      } else {
        // Đã có sản phẩm trong giỏ hàng
        existItem.quantity += item.quantity;
        existItem.itemTotal += item.quantity * item.price;
        state.total += Number(item.quantity * item.price);
      }
      
    },
    // Xóa sản phẩm khỏi giỏ hàng
    removeItem: (state, action) => {
      let item = action.payload; // action.payload là giá trị được gửi vào (sản phẩm)
      let remove = false; // Chưa xóa

      state.items.find((v, i) => {
        if (!remove) {
          if (v.id === item.id) {
            state.total -= state.items.price;
            state.items.splice(i, 1); // Xóa phần tử khỏi mảng
            remove = true;
          }
        }
      });
    },
  },
});
export const { addUpdateItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";
import Green from "../assets/1.jpg";
import Pink from "../assets/2.jpg";
import White from "../assets/3.jpg";
import LightBlue from "../assets/4.jpg";
import DarkBlue from "../assets/5.jpg";
import Grey from "../assets/6.jpg";
import Red from "../assets/7.jpg";
import LightBlue1 from "../assets/8.jpg";
export const reducer = createSlice({
  name: "E-commerce",
  initialState: {
    items: [
      {
        hoodieType: "Green",
        quantity: 1,
        price: 10,
        hoodieImage: Green,
        index: 0,
      },
      {
        hoodieType: "Pink",
        quantity: 1,
        price: 10,
        hoodieImage: Pink,
        index: 1,
      },
      {
        hoodieType: "White",
        quantity: 1,
        price: 10,
        hoodieImage: White,
        index: 2,
      },
      {
        hoodieType: "LightBlue",
        quantity: 1,
        price: 10,
        hoodieImage: LightBlue,
        index: 3,
      },
      {
        hoodieType: "DarkBlue",
        quantity: 1,
        price: 10,
        hoodieImage: DarkBlue,
        index: 4,
      },
      {
        hoodieType: "Grey",
        quantity: 1,
        price: 10,
        hoodieImage: Grey,
        index: 5,
      },
      { hoodieType: "Red", quantity: 1, price: 10, hoodieImage: Red, index: 6 },
      {
        hoodieType: "LightBlue1",
        quantity: 1,
        price: 10,
        hoodieImage: LightBlue1,
        index: 7,
      },
    ],
    cart: [],
    total: 0,
  },
  reducers: {
    add(state, action) {
      const { index } = action.payload;
      const selectedItemIndex = state.cart.findIndex(
        (item) => item.index === index
      );
      if (selectedItemIndex === -1) {
        state.cart.push(state.items[index]);
      } else state.cart[selectedItemIndex].quantity += 1;
      state.total = state.cart.reduce(
        (acc, ind) => acc + ind.price * ind.quantity,
        0
      );
    },
    remove(state, action) {
      const { index } = action.payload;
      const selectedItemIndex = state.cart.findIndex((i) => i.index === index);
      if (
        selectedItemIndex !== -1 &&
        state.cart[selectedItemIndex].quantity > 1
      ) {
        state.cart[selectedItemIndex].quantity -= 1;
      } else state.cart = state.cart.filter((item) => item.index !== index);
      state.total = state.cart.reduce(
        (acc, ind) => acc + ind.price * ind.quantity,
        0
      );
    },
  },
});
export const { add, remove } = reducer.actions;

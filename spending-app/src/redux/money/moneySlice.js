import { createSlice } from "@reduxjs/toolkit";

export const moneySlice = createSlice({
  name: "money",
  initialState: {
    amount: 100000000,
    items: [
      {
        photoUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsAzPH-dc_My6oaGQT4RnKVAhUWMLp2pV7J_wFqgcL2TY7pvwI5BofXBG1wO-FI3I9kxU&usqp=CAU",
        name: "VolksWagen Passat",
        pay: 2500000,
        count: 0,
      },
      {
        photoUrl:
          "https://upload.wikimedia.org/wikipedia/commons/8/86/2017_Honda_Civic_EX_VTEC_CVT_1.0_Front.jpg",
        name: "Honda Civic",
        pay: 1600000,
        count: 0,
      },
      {
        photoUrl:
          "https://i.pinimg.com/originals/77/ec/07/77ec07e451bf4222092d6f95604f05c0.jpg",
        name: "Ford Taunus",
        pay: 250000,
        count: 0,
      },
      {
        photoUrl:
          "https://cdn.group.renault.com/ren/tr/new-cars/taliant-ljf-ph1/yeni-hero/tr-renault-yeni-taliant-yeni-hero-01.jpg.ximg.xsmall.jpg/d78e14fb85.jpg",
        name: "Renault Taliant",
        pay: 650000,
        count: 0,
      },
      {
        photoUrl:
          "https://arabam-blog.mncdn.com/wp-content/uploads/2020/11/2020-hyundai-elantra-tanitildi-15-1068x601.jpg",
        name: "Hyundai Elantra",
        pay: 1000000,
        count: 0,
      },
      {
        photoUrl:
          "https://www.eniyi5ler.com/wp-content/uploads/2021/09/Volvo-XC90.jpg",
        name: "Volvo XC90",
        pay: 5250000,
        count: 0,
      },
    ],
  },
  reducers: {
    buyProduct: (state, action) => {
      state.amount = state.amount - action.payload;
    },
    sellProduct: (state, action) => {
      state.amount = state.amount + action.payload;
    },
    incrementCount: (state, action) => {
      state.items[action.payload].count++;
      console.log(action.payload);
    },
    decrementCount: (state, action) => {
      if (state.items[action.payload].count > 0) {
        state.items[action.payload].count--;
      }
    },
  },
});

export const { buyProduct, sellProduct, incrementCount, decrementCount } =
  moneySlice.actions;
export default moneySlice.reducer;

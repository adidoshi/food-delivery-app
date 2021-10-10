export const cartReducer = (state, action) => {
  switch (action.type) {
    case "Add_To_Cart":
      return {
        ...state,
        cartList: [...state.cartList, { ...action.payLoad, qty: 1 }],
      };
    case "Remove_From_Cart":
      return {
        ...state,
        cartList: state.cartList.filter((c) => c.id !== action.payLoad.id),
      };
    case "Change_Cart_Qty":
      return {
        ...state,
        cartList: state.cartList.filter((c) =>
          c.id === action.payLoad.id ? (c.qty = action.payLoad.qty) : c.qty
        ),
      };
    default:
      return state;
  }
};

export const filterReducer = (state, action) => {
  switch (action.type) {
    case "Sort_By_Price":
      return { ...state, sort: action.payLoad };

    case "Filter_By_Avail":
      return { ...state, availability: !state.availability };

    case "Filter_By_Delivery":
      return { ...state, freeDeliv: !state.freeDeliv };

    case "Filter_By_Rating":
      return { ...state, byRating: action.payLoad };

    case "Filter_By_Search":
      return { ...state, searchQuery: action.payLoad };

    case "Clear_Filters":
      return {
        availability: false,
        freeDeliv: false,
        byRating: 0,
      };
    default:
      return state;
  }
};

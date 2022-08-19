import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
  // Finds if cartItems contains productToAdd

  const existingCartItem = cartItems.find(function (element) {
    return element.id === productToAdd.id;
  });
  // If found, increment quantity
  if (existingCartItem) {
    return cartItems.map((element) =>
      element.id === productToAdd.id
        ? { ...element, quantity: element.quantity + 1 }
        : element
    );
  }
  // Return new array with modified cartItesm/ new quantity item
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeItem = (cartItems, productToRemove) => {
  if (productToRemove.quantity === 1) {
    return cartItems.filter((element) => {
      return element.id !== productToRemove.id;
    });
  }
  // If found, increment quantity
  return cartItems.map((element) =>
    element.id === productToRemove.id
      ? { ...element, quantity: element.quantity - 1 }
      : element
  );
};

const ClearCartItem = (cartItems, productToClear) => {
  return cartItems.filter((element) => element.id !== productToClear.id);
};

// as the actual value you want to access
// Initialiced as an empty value
export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemToCart: () => {},
  clearItemFromCart: () => {},
  cartCount: 0,
  cartTotal: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemToCart = (productToRemove) => {
    setCartItems(removeItem(cartItems, productToRemove));
  };

  const clearItemFromCart = (productToClear) => {
    setCartItems(ClearCartItem(cartItems, productToClear));
  };

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    setCartTotal(newCartTotal);
  }, [cartItems]);

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    removeItemToCart,
    clearItemFromCart,
    cartItems,
    cartCount,
    cartTotal,
  };

  // Pasing the value will allow to the children to acces it
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

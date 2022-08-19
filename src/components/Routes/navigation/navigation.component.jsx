import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";

import CartIcon from "../../cart-icon/cart-icon.component";
import CartDropdown from "../../cart-dropdown/cart-dropdown.component";

import { UserContext } from "../../../contexts/user.context";
import { CartContext } from "../../../contexts/cart.context";

import { ReactComponent as CrwnLogo } from "../../../assets/crown.svg";
import { signOutUser } from "../../../utils/firebase/firebase.utils";

import {
  NavigationContainer,
  NavLink,
  NavLinks,
  LogoContainer,
} from "./navigation.styles";

function Navigation() {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  //console.log(currentUser);
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>

        <NavLinks>
          <NavLink to="/shop">Shop</NavLink>
          {
            // If there is user render the sign out otherwise render the Sign in
            currentUser ? (
              <NavLink as="span" onClick={signOutUser}>
                Sign Out
              </NavLink>
            ) : (
              <NavLink to="/auth">Sign In</NavLink>
            )
          }

          <CartIcon />
        </NavLinks>
        {
          // If cart is true then render the element
          isCartOpen && <CartDropdown />
        }
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
}

export default Navigation;

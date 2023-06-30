import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import {
  CartItems,
  Link,
  Links,
  Navbar,
  ShoppingCartIcon,
  ShoppingCartLink,
  Title,
} from "./navbar.styles";

import { selectTotalCartItems } from "../../state/cart/selectors";

const NavbarComponent = () => {
  const totalItems = useSelector(selectTotalCartItems);

  useEffect(() => {}, []);

  const navigate = useNavigate();

  return (
    <Navbar>
      <Title onClick={() => navigate("/")}>Kick'N It</Title>
      <Links>
        <Link to="/shoes/jordan">Jordan</Link>
        <Link to="/shoes/nike">Nike</Link>
        <Link to="/shoes/adidas">Adidas</Link>
        <Link to="/shoes/new_balance">New Balance</Link>
        <Link to="/shoes/puma">PUMA</Link>
        <Link to="/shoes/vans">Vans</Link>
        <Link to="/shoes/converse">Converse</Link>
        <ShoppingCartLink to="/cart">
          <ShoppingCartIcon className="fa-solid fa-cart-shopping"></ShoppingCartIcon>
          <CartItems>
            <span>{totalItems}</span>
          </CartItems>
        </ShoppingCartLink>
      </Links>
    </Navbar>
  );
};

export default NavbarComponent;

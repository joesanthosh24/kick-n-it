import { Link, Links, Navbar, ShoppingBagIcon, ShoppingBagLink, Title } from "./navbar.styles";
import { useNavigate } from "react-router-dom";

const NavbarComponent = () => {
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
        <ShoppingBagLink to="/cart">
          <ShoppingBagIcon className="fa-solid fa-bag-shopping"></ShoppingBagIcon>
        </ShoppingBagLink>
      </Links>
    </Navbar>
  );
};

export default NavbarComponent;

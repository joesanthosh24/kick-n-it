import { Link, Links, Navbar, Title } from "./navbar.styles";

const NavbarComponent = () => {
  return (
    <Navbar>
      <Title>Kick'N It</Title>
      <Links>
        <Link>Jordan</Link>
        <Link>Nike</Link>
        <Link>Adidas</Link>
        <Link>New Balance</Link>
        <Link>PUMA</Link>
        <Link>Vans</Link>
        <Link>Converse</Link>
      </Links>
    </Navbar>
  )
};

export default NavbarComponent;

import { StyledNavLink } from "./AppBar.styled";

const AppBar = () => {
    
    return (
      <header>
        <nav>
          <StyledNavLink to="/">Головна</StyledNavLink>
          <StyledNavLink to="/register">Регістрація</StyledNavLink>
          <StyledNavLink to="/login">Логін</StyledNavLink>
          <StyledNavLink to="/contacts">Контакти</StyledNavLink>
          <hr />
        </nav>
      </header>
    );
}

export default AppBar;
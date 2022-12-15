import { useSelector } from "react-redux";
import { StyledNavLink } from "./AppBar.styled";

const AppBar = () => {
  const user = useSelector(state => state.auth.user);
  const isUserLoggedIn = Boolean(user?.token);
    return (
      <header>
        <nav>
          {isUserLoggedIn ?  <StyledNavLink to="/contacts">Контакти</StyledNavLink> :
            <>
              <StyledNavLink to="/">Головна</StyledNavLink>
              <StyledNavLink to="/register">Регістрація</StyledNavLink>
              <StyledNavLink to="/login">Логін</StyledNavLink>
            </>
          }

         
          <hr />
        </nav>
      </header>
    );
}

export default AppBar;
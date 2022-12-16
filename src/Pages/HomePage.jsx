import AppBar from "components/AppBar/AppBar";
import UserMenu from "components/UserMenu";
import { Link } from "react-router-dom";

function HomePage() {
const token = localStorage.getItem('token');
  return (
    <>
      <AppBar />
      {token ? <UserMenu /> : <p>Ви не авторизувались</p>}
      <h1>Вітаю у застосунку "Книга контактів"!</h1>
      <p></p>
      <Link to="/register">Ще не зареєстрований? Тисни!</Link>
    </>
  );
}
export default HomePage;

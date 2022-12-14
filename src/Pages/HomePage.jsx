import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <h1>Вітаю у застосунку "Книга контактів"!</h1>
      <p></p>
      <Link to="/register">Ще не зареєстрований? Тисни!</Link>
    </>
  );
}
export default HomePage;

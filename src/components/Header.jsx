import pizarra from "../assets/pizarron.png";
import "../App.css";

function Header() {
  return (
    <>
      <section className="header">
        <article className="header-blok">
          <img src={pizarra} alt="Img_Pizzara-header" />
          <h2>Cuentas Claras!</h2>
        </article>
      </section>
    </>
  );
}
export default Header;

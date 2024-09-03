import "primeicons/primeicons.css";
import "./Footer.css";

function Footer() {
  return (
    <footer className="app-footer">
      <div className="contact-info text-center">
        <p>(51) 1234-5678 | email@eden.com</p>
      </div>
      <br />
      <div className="social-media flex justify-center space-x-4">
        <a href="#">
          <i
            className="pi pi-facebook text-white"
            style={{ fontSize: "2rem" }}
          ></i>
        </a>
        <a href="#">
          <i
            className="pi pi-instagram text-white"
            style={{ fontSize: "2rem" }}
          ></i>
        </a>
        <a href="#">
          <i
            className="pi pi-youtube text-white"
            style={{ fontSize: "2rem" }}
          ></i>
        </a>
        <a href="#">
          <i
            className="pi pi-pinterest text-white"
            style={{ fontSize: "2rem" }}
          ></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;

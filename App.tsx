import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "./App.css";

import { Galleria } from "primereact/galleria";
import { Button } from "primereact/button";
import { PhotoService } from "./service/PhotoService.tsx";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import LogoEden from "./assets/logoBranco.png";
import Footer from "./components/Footer/Footer";

function App() {
  const [images, setImages] = useState(null);

  useEffect(() => {
    PhotoService.getImages().then((data) => setImages(data));
  }, []);

  const itemTemplate = (item) => {
    return (
      <img
        src={item.itemImageSrc}
        alt={item.alt}
        style={{ width: "100%", height: "100vh", objectFit: "cover" }}
      />
    );
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <a href="/">
          <img src={LogoEden} className="logo" />
        </a>

        <h1 className="textCenter">
          Folhagens
          <br /> Permanentes
        </h1>

        <Link to="/login">
          <Button
            severity="secondary"
            text
            raised
            label="Login"
            icon="pi pi-user"
            size="large"
            className="login-button p-button-outlined p-button-white"
          />
        </Link>
      </header>

      <Galleria
        value={images}
        item={itemTemplate}
        circular
        autoPlay
        showItemNavigators
        showItemNavigatorsOnHover
        showIndicatorsOnItem
        showThumbnails={false}
        transitionInterval={4000}
        style={{ width: "100%", height: "100%" }}
      />

      <Footer />
    </div>
  );
}

export default App;

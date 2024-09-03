import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "./Authentication.css";

import { Galleria } from "primereact/galleria";
import { Button } from "primereact/button";
import { Menu } from "primereact/menu";
import { StyleClass } from "primereact/styleclass";

import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import LogoEden from "../../assets/logoBranco.png";
import AvatarImage from "../../assets/avatar.jpg";

import { PhotoService } from "../../service/PhotoService";
import { Menubar } from "primereact/menubar";
import { Sidebar } from "primereact/sidebar";
import { Avatar } from "primereact/avatar";
import { Ripple } from "primereact/ripple";
import { PanelMenu } from "primereact/panelmenu";
import { Toast } from "primereact/toast";

function Authentication() {
  const [images, setImages] = useState(null);
  const [visible, setVisible] = useState(false);
  const btnRef1 = useRef(null);
  const btnRef2 = useRef(null);
  const btnRef3 = useRef(null);
  const btnRef4 = useRef(null);
  const toast = useRef(null);

  const items2 = [
    {
      label: "Meu Dados",
      icon: "pi pi-user",
    },
    {
      label: "Meu Pedidos",
      icon: "pi pi-cart-plus",
    },
    {
      label: "Minhas Compras",
      icon: "pi pi-dollar",
    },
    {
      label: "Sair",
      icon: "pi pi-sign-out",
      command: () => {
        window.location.href = "/";
      },
    },
  ];

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

  const items = [
    {
      label: "Dicas de Venda",
      icon: "pi pi-lightbulb",
    },
    {
      label: "Produtos",
      icon: "pi pi-star",
    },
    {
      label: "FAQ",
      icon: "pi pi-question",
    },
    {
      label: "Fale Conosco",
      icon: "pi pi-envelope",
    },
    {
      label: "Sair",
      icon: "pi pi-sign-out",
      command: () => {
        window.location.href = "/";
      },
    },
  ];

  return (
    <div className="app-container">
      <header className="app-header">
        <a href="/">
          <img src={LogoEden} className="logo" />
        </a>

        <Menubar model={items} />

        <div className="flex gap-2 justify-content-center">
          <Avatar
            image={AvatarImage}
            shape="circle"
            size="large"
            onClick={() => setVisible(true)}
            className="cursor-pointer"
          />
        </div>
      </header>

      <Sidebar
        visible={visible}
        position="right"
        onHide={() => setVisible(false)}
        className="custom-sidebar"
      >
        <div className="p-4">
          <div className="user-profile flex align-items-center mb-4">
            <Avatar
              image={AvatarImage}
              shape="circle"
              size="large"
              className="mr-3"
            />
            <div>
              <h5 className="mb-1">Nome do Usuário</h5>
              <p className="text-sm text-secondary">email@exemplo.com</p>
            </div>
          </div>

          <PanelMenu model={items2} className="mb-4" />
        </div>
      </Sidebar>

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
    </div>
  );
}

export default Authentication;

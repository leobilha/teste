import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Card } from "primereact/card";
import { Divider } from "primereact/divider";
import { Button } from "primereact/button";
import { FloatLabel } from "primereact/floatlabel";
import { InputMask } from "primereact/inputmask";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import MainImage from "../../assets/folhagens-tropicais.jpg";
import LogoEden from "../../assets/logo.png";
import { Password } from "primereact/password";

function Login() {
  const [showRequestAccess, setShowRequestAccess] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const toggleForm = () => {
    setShowRequestAccess(!showRequestAccess);
  };

  const handleLogin = async () => {
    try {
      // const response = await axios.post("http://localhost:5000/login", {
      //   email,
      //   password,
      // });
      // Armazenar token ou dados de sessão
      // localStorage.setItem("token", response.data.token);
      console.log("Login bem-sucedido");
      // Redirecionar para a página Authentication
      navigate("/authentication");
    } catch (error) {
      console.error("Erro de autenticação", error);
    }
  };

  function setValue(value: string): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="login-container">
      <div
        className={`login-form transition-all duration-500 transform ${
          showRequestAccess
            ? "-translate-x-full opacity-0"
            : "translate-x-0 opacity-100"
        }`}
      >
        <Card className="login-card">
          <a href="/">
            <img src={LogoEden} className="logo" alt="Logo Eden" />
          </a>
          <FloatLabel>
            <InputText
              id="email"
              className="login-input"
              size="large"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="email">Endereço de e-mail</label>
          </FloatLabel>
          <br />
          <FloatLabel>
            <InputText
              id="password"
              className="login-input"
              size="large"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <label htmlFor="password">Senha</label>
          </FloatLabel>
          <br />
          <Button
            label="Login"
            className="login-button"
            onClick={handleLogin}
          />
          <Divider />
          <p className="login-link">
            <a href="#!" className="forgot-password">
              Esqueceu sua senha?
            </a>
          </p>
          <p className="login-link">
            Não tem uma conta?{" "}
            <a href="#!" className="register-here" onClick={toggleForm}>
              Solicitar Acesso
            </a>
          </p>
        </Card>
      </div>

      <div
        className={`request-access-form transition-all duration-500 transform ${
          showRequestAccess
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0"
        }`}
      >
        <Card className="login-card">
          <a href="/">
            <img src={LogoEden} className="logo" alt="Logo Eden" />
          </a>
          <FloatLabel>
            <InputText id="name" className="login-input" size="large" />
            <label htmlFor="name">Nome</label>
          </FloatLabel>
          <br />
          <FloatLabel>
            <InputText id="cpf" className="login-input" size="large" />
            <label htmlFor="cpf">CPF</label>
          </FloatLabel>
          <br />
          <FloatLabel>
            <InputText id="cnpj" className="login-input" size="large" />
            <label htmlFor="cnpj">CNPJ</label>
          </FloatLabel>
          <br />
          <FloatLabel>
            <InputText id="email" className="login-input" size="large" />
            <label htmlFor="email">Endereço de e-mail</label>
          </FloatLabel>
          <br />
          <FloatLabel>
            <InputText id="email" className="login-input" size="large" />
            <label htmlFor="email">Digite novamente endereço de e-mail</label>
          </FloatLabel>
          <br />
          <FloatLabel>
            <InputText
              id="password"
              className="login-input"
              size="large"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="password">Senha</label>
          </FloatLabel>
          <br />
          <FloatLabel>
            <InputText
              id="password"
              className="login-input"
              size="large"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="password">Digite novamente senha</label>
          </FloatLabel>
          <br />
          <Button label="Solicitar Acesso" className="login-button" />
          <Button
            label="Voltar"
            className="back-button"
            severity="secondary"
            onClick={toggleForm}
          />
        </Card>
      </div>

      <div className="login-image">
        <img src={MainImage} alt="Login" className="object-cover" />
      </div>
    </div>
  );
}

export default Login;

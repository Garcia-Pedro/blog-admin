/* eslint-disable import/no-anonymous-default-export */
import React from "react";

/*----------------- CSS -------------------*/
import "./css/addUser.css";

/*----------------- Images -------------------*/
import logoHero from "../assets/images/logo-hero.svg";

/*-------------- Components --------------*/
import Title from "../components/Title";
import UserForm from "../components/UserForm";

export default () => {
  return (
    <div className="page-auth">
      <aside>
        <img src={logoHero} alt="logoImage" />
      </aside>

      <main>
        <Title value="Cadastrar Usuário" />

        <UserForm />
        <br />
      </main>
    </div>
  );
};

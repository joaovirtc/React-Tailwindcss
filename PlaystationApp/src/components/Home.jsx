import { Link } from "react-router-dom";
//
import Menus from "./Menus";
import Perfil from "./Perfil";
// IMAGENS
import logoStore from "../img/Store.png";
import logoPlaystation from "../img/playstationLogo.svg";
import Dashboard from "../img/dashboard.svg";
import Comunidade from "../img/comunidades.svg";
import Mensagens from "../img/mensagens.svg";
import Config from "../img/config.svg";
import Biblioteca from "../img/jogos.svg";
//
const Home = () => {
  return (
    <main>
      <div className="h-screen w-screen bg-gray-900 relative ">
        <div className="h-full w-64 bg-black absolute sm:w-20 md:w-64">
          {/* ------------------ LOGO ---------------  */}
          <div className="w-full h-16 border-b border-white flex items-center cursor-pointer justify-center mt-4">
            <img
              src={logoPlaystation}
              alt=""
              className="cursor-pointer sm:w-[10px],h-[10px] md:w-[80px] h-[80px] "
            />
          </div>
          {/* ------------------ PERFIL ---------------  */}
          <Perfil />
          {/* ------------------ MENU PRINCIPAL ---------------  */}
          <div className="w-full flex items-center justify-center mt-3 mb-2">
            <span className="text-xs text-white/25 sm:hidden md:block">
              Menu Principal
            </span>
          </div>
          <div className="w-full h-48 flex items-center flex-col justify-evenly">
            <Menus Nome="Playstation Store" Img={logoStore} />
            <Menus Nome="Dashboard" Img={Dashboard} />
            <Menus Nome="Comunidades" Img={Comunidade} />
          </div>
          {/* ------------------ MENU PERFIL ---------------  */}
          <div className="w-full flex items-center justify-center mt-3 mb-2">
            <span className="text-xs text-white/25 sm:hidden md:block">
              Meu Perfil
            </span>
          </div>
          <div className="w-full h-48 flex items-center flex-col justify-evenly">
            <Menus Nome="Mensagens" Img={Mensagens} />
            <Menus Nome="Configurações" Img={Config} />
            <Menus Nome="Blibioteca" Img={Biblioteca} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;

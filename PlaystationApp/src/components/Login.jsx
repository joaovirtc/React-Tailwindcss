import { Link } from "react-router-dom";
import Logo from "../img/logo.png";
const Login = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      {/* ------------------------------------------------------------------------- */}
      <div className="w-[99%] h-[99%] flex justify-center items-center ">
        <div className="w-[35rem] h-[35rem] flex justify-center flex-col items-center">
          <div className="h-[4rem] w-full flex flex-col justify-center items-center mb-5">
            <img src={Logo} alt="" className="w-16 h-14  " />
          </div>
          <h1 className=" text-[23px] font-semibold text-white">
            Conecte-se com sua conta Playstation
          </h1>
          <div className="relative w-[99%] h-[10rem] flex justify-evenly flex-col items-center">
            <input
              className=" h-[3.0rem] w-[26rem] px-4 text-lg text-white bg-transparent border-white border  border-opacity-50 outline-none hover:border-blue-600 focus:border-blue-600 placeholder-gray-300  transition duration-200"
              type="text"
              placeholder="ID de incicio de sessão"
            />
            <input
              className=" border h-[3.0rem] w-[26rem] px-4 text-lg text-white bg-black border-white border-opacity-50 outline-none hover:border-blue-600 focus:border-blue-600 placeholder-gray-300  transition duration-200"
              type="password"
              placeholder="Senha"
            />
          </div>
          <div className="w-[26rem] h- mb-2 flex flex-row items-center">
            <input
              className="justify-start w-5 h-9 cursor-pointer"
              type="checkbox"
            />
            <span className=" px-2 text-lg text-center">
              Mantenha-me conectado
            </span>
          </div>
          <div className="w-full h-[8rem] flex justify-evenly items-center flex-col">
            <Link to="/Home">
              <a className="font-semibold text-lg cursor-pointer bg-blue-600 uppercase gap-2 w-[26rem]  text-center transition-colors h-11 hover:bg-blue-700 flex justify-center items-center">
                Entrar
              </a>
            </Link>
            <a className=" font-semibold text-lg cursor-pointer border border-blue-600 uppercase gap-2 w-[26rem]  text-center transition-colors h-11 hover:border-blue-700 flex justify-center items-center">
              Criar conta
            </a>
          </div>
          <div className="w-[26rem] h-10 flex">
            <a className="cursor-pointer justify-start  font-bold text-blue-600 transition-colors hover:text-blue-700">
              Esqueci minha senha
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

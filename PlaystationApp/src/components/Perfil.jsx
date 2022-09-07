import logoPlus from "../img/plus.svg";
import Perfil from "../img/perfil.png";

export default function perfil() {
  const perfilProps = {
    nome: "João Victor",
    nickname: "joao_xvic",
  };

  return (
    <>
      <div className="mt-5 w-full h-20 flex flex-row items-center justify-evenly">
        <a className="w-[30%] border border-white rounded-full cursor-pointer transition-colors hover:border-blue-600 sm:w-[80%] md:w-[30%]">
          <img src={Perfil} alt="" className="w-full rounded-full h-full" />
        </a>
        <div className="w-[60%] flex flex-col justify-center sm:hidden md:block">
          <div className="w-full flex items-center">
            <span className=" cursor-default font-bold sm:hidden md:block">
              {perfilProps.nome}
            </span>
            <img
              src={logoPlus}
              alt=""
              className="ml-6 h-4 w-4 sm:hidden md:block"
            />
          </div>
          <span className="cursor-default text-white/25 text-xs sm:hidden md:block">
            {perfilProps.nickname}
          </span>
        </div>
      </div>
    </>
  );
}

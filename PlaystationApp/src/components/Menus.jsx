// import logoStore from "../../img/Store.png";

export default function Store(props) {
  return (
    <div className="w-[100%] flex-1 h-12 flex flex-row items-center transition-colors hover:bg-blue-600 cursor-pointer ">
      <img
        className="h-[25px] w-[23px] ml-8 cursor-pointer"
        src={props.Img}
        alt=""
      />

      <p className="ml-5 text-cursor-pointer sm:hidden md:block">
        {props.Nome}
      </p>
    </div>
  );
}

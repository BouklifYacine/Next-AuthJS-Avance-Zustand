export default function Home() {
  return (
    <>
      <nav className="flex justify-between bg-gray-500 h-14 mt-3 w-3/4 mx-auto rounded-2xl">
        <div className="bg-red-500 mx-4">Logo 1 </div>

        <div className="bg-purple-400 flex gap-x-5">
          <a href="">Lien 1 </a>
          <a href="">Lien 2 </a>
          <a href="">Lien 3 </a>
          <a href=""> Lien 4 </a>
        </div>

        <div className="bg-blue-500 mx-4">
          <button className="rounded-2xl"> Bouton </button>
        </div>
      </nav>

      <div className="flex gap-x-5">
        <button className="bg-black text-white text-lg w-32 rounded-xl border border-gray-300 h-11 cursor-pointer">
          {" "}
          Youtube{" "}
        </button>
        <button className="bg-white text-blue-500 text-lg w-32 rounded-xl border border-black h-11 cursor-pointer">
          {" "}
          Youtube{" "}
        </button>
      </div>

      <div className="bg-gray-500 w-1/3 mx-auto h-48 rounded-2xl">
        <div className="flex justify-between mx-10 pt-6 ">
          <a href="">Voici La card </a>
          <a href="">Card numéro </a>
        </div>

        <div>
          <p className="p-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quasi eaque molestias distinctio numquam omnis beatae iusto ducimus dolore libero.
          </p>

        </div>

        <div className="flex justify-end gap-x-5 mr-9 ">
        <button className="bg-blue-500 border border-black rounded-xl w-24 h-12 text-white font-bold hover:bg-blue-700 transition-all duration-200 ease-in-out shadow-2xl">
  Editer
</button>
          <button className="bg-red-500 border border-black rounded-2xl w-24 h-12 font-bold">Supprimer </button>
        </div>
      </div>
    </>
  );
}

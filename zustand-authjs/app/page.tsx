

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

 <button className="bg-red-500 text-blue-500 text-2xl w-32 rounded-xl border-none h-10 hover:text-green-400 cursor-pointer"> Youtube </button>
  </>
  );
}

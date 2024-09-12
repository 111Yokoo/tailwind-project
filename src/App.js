import React from "react";

function App() {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <header className="flex justify-around bg-pink-950 p-2">
        <h1 className="text-white font-black text-xl">SENAI NEWS</h1>
        <nav className="flex gap-5">
          <a href="#" className="font-semibold text-white" >Home</a>
          <a href="#" className="font-semibold text-white" >Sobre</a>
          <a href="#" className="font-semibold text-white" >Contato</a>
          </nav>
      </header>
      <main className="mx-6 flex-1">
        <h2 className="mt-4">Principais notícias</h2>
        <div className="flex justify-around gap-4 flex-wrap">
          <div className="flex justify-around">
            <div className="flex flex-col justify-center items-center rounded border-gray-700">
              <img src="https://th.bing.com/th/id/OIP.Z38XWl08bhjKeY_HLx8egwHaE8?w=259&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt=""/>
              <h3>
                Animes da temporada
              </h3>
              <p>
                Novos animes
              </p>
              <a href="#" className="bg-pink-950 p-2 text-white">Ver mais</a>
            </div>
          </div>
          <div className="flex justify-around">
            <div className="flex flex-col justify-center items-center rounded border-gray-700">
              <img src="https://th.bing.com/th/id/OIP.Kqg5ktIQamlmLMuDbC3XMAHaF_?w=206&h=167&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt=""/>
              <h3>
                Michael jackson em 2025
              </h3>
              <p>
              Michael jackson faz show no Brasil em 2025
              </p>
              <a href="#" className="bg-pink-950 p-2 text-white">Ver mais</a>
            </div>
          </div>
          <div className="flex justify-around">
            <div className="flex flex-col justify-center items-center rounded border-gray-700">
              <img src="https://th.bing.com/th/id/OIP.28-WwBfqSbt2js2wEvzdWQHaEK?w=291&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt=""/>
              <h3>
               Jogos da temporada
              </h3>
              <p>
                Novos jogos
              </p>
              <a href="#" className="bg-pink-950 p-2 text-white">Ver mais</a>
            </div>
          </div>
          <div className="flex justify-around">
            <div className="flex flex-col justify-center items-center rounded border-gray-700">
              <img src="https://th.bing.com/th/id/OIP._03cy6TqEUV8jM5fLZJOnQHaDm?w=325&h=170&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt=""/>
              <h3>
                Filmes da temporada
              </h3>
              <p>
                Novos filmes 
              </p>
              <a href="#" className="bg-pink-950 p-2 text-white">Ver mais</a>
            </div>
          </div>
          <div className="flex justify-around">
            <div className="flex flex-col justify-center items-center rounded border-gray-700">
              <img src="https://th.bing.com/th/id/OIP.HWRBE3BicU71PnGXyG48AwHaDt?w=324&h=175&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt=""/>
              <h3>
                Séries da temporada
              </h3>
              <p>
                Novas séries
              </p>
              <a href="#" className="bg-pink-950 p-2 text-white">Ver mais</a>
            </div>
          </div>
          <div className="flex justify-around">
            <div className="flex flex-col justify-center items-center rounded border-gray-700">
              <img src="https://th.bing.com/th/id/OIP.RK3-FRq-C73kFk134AIqvQHaD4?w=329&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt=""/>
              <h3>
                Livros da temporada
              </h3>
              <p>
                Novos livros
              </p>
              <a href="#" className="bg-pink-950 p-2 text-white">Ver mais</a>
            </div>
          </div>
          <div className="flex justify-around">
            <div className="flex flex-col justify-center items-center rounded border-gray-700">
              <img src="https://th.bing.com/th/id/OIP.bZra4Jlg1wAsDtpgMQ2RQQHaEK?w=285&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt=""/>
              <h3>
                Mangas da temporada 
              </h3>
              <p>
                Novos mangas
              </p>
              <a href="#" className="bg-pink-950 p-2 text-white">Ver mais</a>
            </div>
          </div>
          <div className="flex justify-around">
            <div className="flex flex-col justify-center items-center rounded border-gray-700">
              <img src="https://th.bing.com/th/id/OIP.rmoCBaM9gMkIq7anUBg3mAHaEZ?w=292&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt=""/>
              <h3>
                Hq's da temporada
              </h3>
              <p>
                Novos hq's
              </p>
              <a href="#" className="bg-pink-950 p-2 text-white">Ver mais</a>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-red-600 p-2 text-white text-center">
        <h2>Todos os direitos reservados - 2024</h2>
      </footer>
    </div>
  );
}

export default App;

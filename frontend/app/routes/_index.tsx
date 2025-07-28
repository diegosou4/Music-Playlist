import type { Route } from "./+types/home";
import coldplay from '../../assets/images/album.jpg'
import derek from '../../assets/images/derek.jpg'
import cacife from '../../assets/images/cacife.jpg'
import pecaos from '../../assets/images/pecaos.jpg'


export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
    
  ];
}

export default function Home() {
  return (
    <>
    
    <section className="relative w-full h-screen overflow-hidden">
  <video 
    className="absolute top-0 left-0 w-full h-full object-cover z-0"
    autoPlay 
    loop 
    muted 
    playsInline
  >
    <source src="/assets/videos/testesite.mp4" type="video/mp4" />
  </video>

<div className="relative z-10 flex items-center justify-center w-screen h-screen bg-slate-900/30 backdrop-blur-[1px]">
  <div className="flex flex-col w-full h-full">
    <div className="flex flex-row w-full h-full items-center justify-end gap- ">
      <div className="flex flex-col  p-5 w-2/5 h-1/2 bg-blue-300/70 rounded-2xl  ">
        <div className="flex flex-col ">
          <h1 className="text-2xl text-shadow-xs text-white text-center mb-10">Music Playlist</h1>
        </div>
        <div className="flex flex-col justify-center items-center ">
          <div className="w-48 h-48">
             <img src={cacife} alt="Album Cover" className="w-full h-full cursor-pointer rounded-xl" />
          </div>
        </div>
       <div className="flex flex-col items-center justify-center ">
        <div className="w-2/4 ">
					<div className="flex justify-between">
					</div>
					<div className="flex justify-between items-center mt-8">
						<div className="text-grey-darker cursor-pointer">
							<svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M6.59 12.83L4.4 15c-.58.58-1.59 1-2.4 1H0v-2h2c.29 0 .8-.2 1-.41l2.17-2.18 1.42 1.42zM16 4V1l4 4-4 4V6h-2c-.29 0-.8.2-1 .41l-2.17 2.18L9.4 7.17 11.6 5c.58-.58 1.59-1 2.41-1h2zm0 10v-3l4 4-4 4v-3h-2c-.82 0-1.83-.42-2.41-1l-8.6-8.59C2.8 6.21 2.3 6 2 6H0V4h2c.82 0 1.83.42 2.41 1l8.6 8.59c.2.2.7.41.99.41h2z"/></svg>
						</div>
						<div className="text-grey-darker cursor-pointer">
							<svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M4 5h3v10H4V5zm12 0v10l-9-5 9-5z"/></svg>
						</div>
						<div className="text-white p-4 rounded-full bg-red-light shadow-md cursor-pointer">
							<svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5 4h3v12H5V4zm7 0h3v12h-3V4z"/></svg>
						</div>
						<div className="text-grey-darker cursor-pointer">
							<svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 5h3v10h-3V5zM4 5l9 5-9 5V5z"/></svg>
						</div>
						<div className="text-grey-darker cursor-pointer">
							<svg className="w-6 h-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5 4a2 2 0 0 0-2 2v6H0l4 4 4-4H5V6h7l2-2H5zm10 4h-3l4-4 4 4h-3v6a2 2 0 0 1-2 2H6l2-2h7V8z"/></svg>
						</div>
					</div>
				</div>
      	<div className="w-2/4">
				<div className="flex justify-between text-sm text-grey-darker">
					<p>0:40</p>
					<p>4:20</p>
				</div>
				<div className="mt-1">
					<div className="h-1 bg-grey-dark rounded-full">
						<div className="w-1/5 h-1 bg-red-light rounded-full relative">
							<span className="w-4 h-4 bg-red absolute pin-r pin-b -mb-1 rounded-full shadow"></span>
						</div>
					</div>
				</div>
			</div>

       </div>
      </div>
      <div className="flex flex-row w-2/9 h-1/2 p-5 bg-blue-500 rounded-2xl">
        <div className="flex flex-col w-full h-full justify-center items-center gap-3 ">




        <div className="flex flex-col ">
            <h1 className="text-2xl text-shadow-xs text-white text-center">Recentes Adicionadas</h1>
        </div>
        <div className="flex flex-col w-8/9 h-10/12 overflow-y-auto bg-gray-600 rounded-xl">
          <div className="flex flex-col w-full h-full p-2 gap-2">
              <div className="flex flex-row items-center justify-between bg-gray-700 p-2 rounded-lg">
                <div className="flex items-center gap-2 ">
                  <img src={coldplay} alt="Album Cover" className="w-13 h-13 rounded-full cursor-pointer" />
                     <span className="text-white text-sm">Coldplay - Yellow </span>
                </div>
             <span className="text-gray-400">3:45</span>
              </div>
            <div className="flex flex-row items-center justify-between bg-gray-700 p-2 rounded-lg">
                <div className="flex items-center gap-2 ">
                  <img src={derek} alt="Album Cover" className="w-13 h-13 rounded-full cursor-pointer" />
                     <span className="text-white text-sm">Derek feat. Sue Sue - Será que um dia você volta? "Interlúdio"</span>
                </div>
             <span className="text-gray-400">3:45</span>
              </div>
              <div className="flex flex-row items-center justify-between bg-gray-700 p-2 rounded-lg">
                <div className="flex items-center gap-2 ">
                  <img src={cacife} alt="Album Cover" className="w-13 h-13 rounded-full cursor-pointer" />
                     <span className="text-white text-sm">Cacife Clandestino - Tira Do Papel (Prod. Rick Beatz)</span>
                </div>
             <span className="text-gray-400">3:45</span>
              </div>
              <div className="flex flex-row items-center justify-between bg-gray-700 p-2 rounded-lg cursor-pointer">
                <div className="flex items-center gap-2 ">
                  <img src={pecaos} alt="Album Cover" className="w-13 h-13 rounded-full" />
                     <span className="text-white  text-sm">Pecaos - Parece Morte, Mas é Só a Vida</span>
                </div>
             <span className="text-gray-400">3:45</span>
              </div>
              
            </div>
        </div>
      </div>
      </div>
      <div className="flex flex-row items-center justify-center w-1/5 h-96 bg-transparent">
 
      </div>
    </div>
  </div>
</div>
</section>



    </>

  );
}

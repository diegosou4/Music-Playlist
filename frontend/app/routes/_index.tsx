import type { Route } from "./+types/home";
import coldplay from '../../assets/images/album.jpg'
import derek from '../../assets/images/derek.jpg'
import Player from "./home/components/Player";
import pecaos from '../../assets/images/pecaos.jpg'
import useFetch from "../../hooks/useFecth";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
    
  ];
}

export default function Home() {

  const { data: recentsMusics, isFetching, isLoading } = useFetch<any>({
    endpoint: 'http://localhost:3000/track/recent-tracks',
    queryKeys: ['recents'],
    method: 'GET',
  });

  console.log(recentsMusics);


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
    <div className="flex flex-row w-full h-full items-center justify-end gap-3 ">
      <div className="flex flex-col  p-5 w-2/5 h-1/2 bg-blue-300/70 rounded-2xl  ">
        <div className="flex flex-col ">
          <h1 className="text-2xl text-shadow-xs text-white text-center mb-10">Music Playlist</h1>
        </div>

      <Player currentTrack={'http://localhost:3000/media/cme01kp6z000529kps65v8zxd'} albumCover="http://localhost:3000/album/image/cmd7naevk0001zp0vgjo97q7d" />
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
                  <img src={'http://localhost:3000/album/image/cmd7naevk0001zp0vgjo97q7d'} alt="Album Cover" className="w-13 h-13 rounded-full cursor-pointer" />
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

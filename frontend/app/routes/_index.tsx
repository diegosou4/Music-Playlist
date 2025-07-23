import type { Route } from "./+types/home";
import coldplay from '../../assets/images/album.jpg'
import MediaThemeSutroAudio from 'player.style/sutro-audio/react';

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

  <div className="relative z-10 flex  items-end w-screen h-screen bg-slate-900/30 backdrop-blur-[1px]">
  <div className="flex flex-col w-full " >
         <MediaThemeSutroAudio  >
        <audio
          slot="media"
          src="http://localhost:3000/media/cmdd9vmhv00034y0w26gmdo5d"
          playsInline
          crossOrigin="anonymous"
        ></audio>
      </MediaThemeSutroAudio>
 </div>
    
  </div>
</section>



    </>

  );
}

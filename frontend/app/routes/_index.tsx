import type { Route } from "./+types/home";
import coldplay from '../../assets/images/album.jpg'

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
    <div className="flex flex-col items-center justify-center w-4/12 h-3/6 bg-sky-400/70 rounded-lg shadow-lg ">
        <div      
        style={{ backgroundImage: `url(${coldplay})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
         }}
      className="h-48 w-48 rounded-md shadow-md">
        </div>
        <div>
            <h1 className="mt-2 text-2xl text-shado-sm">Coldplay - Paradaise</h1>
        </div>
        
    </div>
    
  </div>
</section>



    </>

  );
}

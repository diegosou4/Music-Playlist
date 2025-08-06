import type { Route } from "./+types/home";
import { ITrack} from "../../types/Tracks";
import Player from "./home/components/Player";
import useFetch from "../../hooks/useFecth";
import ListRecents from "./home/components/ListRecents";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
    
  ];
}

export default function Home() {

  const { data: recentsMusics, isFetching, isLoading } = useFetch<ITrack[] | ITrack>({
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
      {recentsMusics && <ListRecents recentsMusics={recentsMusics} />}
      <div className="flex flex-row items-center justify-center w-1/5 h-96 bg-transparent">
 
      </div>
    </div>
  </div>
</div>
</section>



    </>

  );
}

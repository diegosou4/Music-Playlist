// @ts-ignore
import type { Route } from "./+types/home";
import Navbar from "./home/components/navbar";
import Carrossel from "./home/components/carrossel";
import useFetch from '../../hooks/useFecth';
import { ITrack } from '../../types/Tracks';




export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
    
  ];
}

export default function Home() {
   const { data: recentsMusics } = useFetch<ITrack[] | ITrack>({
    endpoint: 'http://localhost:3000/track/recent-tracks',
    queryKeys: ['recents'],
    method: 'GET',
  });
  
  
  return (
    <>
    <section className="w-screen h-screen overflow-y-auto overflow-x-hidden no-scrollbar" style={{ backgroundColor: '#171719' }}>
      <div className="flex flex-row  h-screen ">
        <Navbar />

    { recentsMusics &&
         <Carrossel recentsMusics={recentsMusics} />
    }
    
      </div>
    </section>
</>
  );
}


import { ITrack} from '../../../../types/Tracks';
import './carrossel.css'
import { IoMdSearch } from "react-icons/io";
import { Player } from './Player';

interface CarrosselProps {
    recentsMusics: ITrack[] | ITrack;
}

export default function Carrossel({ recentsMusics }: CarrosselProps){

    if(!recentsMusics) return null;

    return(
        <div className="flex flex-col w-full ml-10">
            <div className="flex flex-row justify-end mt-5 w-11/12 items-center">
                <div className="relative w-full max-w-xs">
                    <input
                        type="text"
                        placeholder="Search"
                        className="p-1 pl-10 rounded-md w-full border-1 border-gray-400 text-gray-400"
                        style={{ backgroundColor: '#1F1F22' }}
                    />
                    <IoMdSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
            </div>
            <h1 className="text-white text-3xl mt-10">Daily Recommendations</h1>
        <div className="flex flex-row gap-10 ">
            {Array.isArray(recentsMusics) ? (
                recentsMusics.map((music) => (
           <div key={music.id} className="p-4 w-52 justify-center items-center flex flex-col *:cursor-pointer">
                    <div className="w-52 h-52 mb-4 overflow-hidden rounded-xl shadow-lg transform transition hover:scale-105 ">
                        <img
                            src={`http://localhost:3000/media/${music.album.image}`}
                            alt="Album Cover"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="overflow-hidden text-center w-full ">
                        <h2 className="text-white whitespace-nowrap overflow-hidden block hover:animate-marquee">
                            {music.name}
                        </h2>
                    </div>
                    <p className="text-gray-400 truncate text-center">{music.artist.name}</p>
                </div>
                    ))
                ) : <></>}
                </div>

               <div className="fixed bottom-0 left-0 w-full bg-[#1F1F22] p-6 shadow-lg ">
                    <Player />
                    </div>

                </div>
    );

    
};
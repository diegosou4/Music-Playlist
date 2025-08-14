
import { ITrack} from '../../../../types/Tracks';
import './carrossel.css'
import { IoMdSearch } from "react-icons/io";
import Player  from './player';
import Slide from './slide';

interface CarrosselProps {
    recentsMusics: ITrack[] | ITrack;
}

export default function Carrossel({ recentsMusics }: CarrosselProps){

    if(!recentsMusics) return null;

    return(
        <div className="flex flex-col w-10/12 ml-10">
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
            <h1 className="text-white text-3xl">Daily Recommendations</h1>
             {recentsMusics && 
                     <Slide recentsMusics={recentsMusics} />
              }   
               <div className="fixed bottom-0 left-0 w-full bg-[#1F1F22] p-6 shadow-lg ">
                    <Player />
                    </div>

                </div>
    );

    
};

import { ITrack } from "../../../../types/Tracks";


interface ListRecentsProps {
    recentsMusics: ITrack | ITrack[];
}

const ListRecents = ({ recentsMusics } : ListRecentsProps) => {

    return(
        <div className="flex flex-row w-2/9 h-1/2 p-5 bg-blue-500 rounded-2xl">
            <div className="flex flex-col w-full h-full justify-center items-center gap-3 ">
            <div className="flex flex-col ">
                <h1 className="text-2xl text-shadow-xs text-white text-center">Recentes Adicionadas</h1>
            </div>
            <div className="flex flex-col w-8/9 h-10/12 overflow-y-auto bg-gray-600 rounded-xl">
          <div className="flex flex-col w-full h-full p-2 gap-2">
            {(Array.isArray(recentsMusics) ? recentsMusics : [recentsMusics]).map((track: ITrack) => (
                <div key={track.id} className="flex flex-row items-center justify-between bg-gray-700 p-2 rounded-lg">
                    <div className="flex items-center gap-2 ">
                        <img src={`http://localhost:3000/media/${track.album.image}`} alt="Album Cover" className="w-13 h-13 rounded-full cursor-pointer" />
                        <span className="text-white text-sm">{track.artist.name} - {track.name}</span>
                    </div>
                    <span className="text-gray-400">{Math.floor(track.duration / 60)}:{('0' + (track.duration % 60)).slice(-2)}</span>
                </div>
            ))}
           
        </div>
      </div>
      </div>
      </div>

    )

}


export default ListRecents;
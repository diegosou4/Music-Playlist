


import React from 'react';
import { ITrack } from '../../../../types/Tracks';

interface PlayerProps {
    currentTrack: ITrack;
}

const Player = ({ currentTrack }: PlayerProps) =>{

    const [currentTime, setCurrentTime] = React.useState(0);
    const [duration, setDuration] = React.useState(currentTrack.duration);
    const [isPlaying, setIsPlaying] = React.useState(false);
    const audioRef = React.useRef<HTMLAudioElement | null>(null);


    const handleSeek = (e : React.ChangeEvent<HTMLInputElement>) => {

        if (audioRef.current) {
            audioRef.current.currentTime = Number(e.target.value);
        }if (audioRef.current) {
            setCurrentTime(Number(e.target.value));
        }
    }

    const handleTimeUpdate = () => {
        if (audioRef.current) {
            setCurrentTime(audioRef.current.currentTime);
            setDuration(audioRef.current.duration);
        }
    }

    const handlePlayPause = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    React.useEffect(() => {
        audioRef.current?.addEventListener('timeupdate', handleTimeUpdate);
        return () => {
            audioRef.current?.removeEventListener('timeupdate', handleTimeUpdate);
        };
    }, []);

    return(
        <>
         <audio 
              slot="media"
              ref={audioRef}
              src={`http://localhost:3000/${currentTrack.url}`}
              playsInline
              crossOrigin="anonymous"
              style={{ display: 'none' }}>
            </audio>
        <div className="flex flex-col justify-center items-center ">
          <div className="w-48 h-48">
             <img src={`http://localhost:3000/media/${currentTrack.album.image}`} alt="Album Cover" className="w-full h-full cursor-pointer rounded-xl" />
          </div>
        </div>
        <div className="text-white text-lg text-center font-bold mt-4">{currentTrack.name}</div>
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
                                <div className="text-white p-4 rounded-full bg-red-light shadow-md cursor-pointer" id="play-pause" onClick={() => {handlePlayPause();}}>
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
                            <input type="range" min="0" max={duration} value={currentTime} onChange={handleSeek}/>
               
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
               </>
    
    )

}

export default Player;
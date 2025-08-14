
import { TbPlayerPlayFilled } from "react-icons/tb";
import { MdSkipNext } from "react-icons/md";
import { MdSkipPrevious } from "react-icons/md";
import { LuRepeat } from "react-icons/lu";
import { LiaRandomSolid } from "react-icons/lia";
import { FaVolumeHigh } from "react-icons/fa6";
import { MdOutlinePause } from "react-icons/md";

import {ITrack} from '../../../../types/Tracks';
import React from "react";

interface PlayerProps {
    recentsMusics: ITrack[] | ITrack;
    currentMusicId: string | null;
    setCurrentMusicId: React.Dispatch<React.SetStateAction<string | null>>;
}


export default function Player({ recentsMusics, currentMusicId, setCurrentMusicId }: PlayerProps) {

        console.log(recentsMusics);
        const [currentMusic,setCurrentMusic] = React.useState<ITrack | null>(null);
        const [duration, setDuration] = React.useState(0);
        const [isPlaying, setIsPlaying] = React.useState(false);
        const [currentTime, setCurrentTime] = React.useState(0);
        const [volume, setVolume] = React.useState(100);

        const audioRef = React.useRef<HTMLAudioElement | null>(null);

        function setNextMusic()
        {
            if (Array.isArray(recentsMusics)) {
                const currentIndex = recentsMusics.findIndex((track: ITrack) => track.id === currentMusicId);
                const nextIndex = (currentIndex + 1) % recentsMusics.length;
                const nextMusic = recentsMusics[nextIndex];
                setCurrentMusicId(nextMusic.id);
            }
        }
        function setPreviousMusic()
        {
            if (Array.isArray(recentsMusics)) {
                const currentIndex = recentsMusics.findIndex((track: ITrack) => track.id === currentMusicId);
                const previousIndex = (currentIndex - 1 + recentsMusics.length) % recentsMusics.length;
                const previousMusic = recentsMusics[previousIndex];
                setCurrentMusicId(previousMusic.id);
            }
        }

        React.useEffect(() => {
            if (currentMusicId) {
                if(Array.isArray(recentsMusics)) {
                const music = recentsMusics.find((track: ITrack) => track.id === currentMusicId) || null;
                setCurrentMusic(music);
            }
            }
        }, [currentMusicId, recentsMusics]);

        React.useEffect(() => {
            if (audioRef.current) {
                audioRef.current.volume = volume / 100;
            }
        }, [volume]);

        React.useEffect(() => {
            if(isPlaying === true && audioRef.current) {
                audioRef.current.play();
            }
        }, [currentMusic]);

        React.useEffect(() => {
                const handleLoadedMetadata = () => {
                    if (audioRef.current) {
                        setDuration(audioRef.current.duration);
                        if(isPlaying === true) {
                            audioRef.current.play();
                        }
                    }
                };

                const handleTimeUpdate = () => {
                    if (audioRef.current) {
                        setCurrentTime(audioRef.current.currentTime);
                    }
                };

                const audioElement = audioRef.current;
                if (audioElement) {
                    audioElement.addEventListener('loadedmetadata', handleLoadedMetadata);
                    audioElement.addEventListener('timeupdate', handleTimeUpdate);
                }

                return () => {
                    if (audioElement) {
                        audioElement.removeEventListener('loadedmetadata', handleLoadedMetadata);
                        audioElement.removeEventListener('timeupdate', handleTimeUpdate);
                    }
                };
            }, [currentMusic]); 

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

    
        return (
            <div className="flex flex-col">
                {currentMusic && (
                    <audio
                        slot="media"
                        ref={audioRef}
                        src={`http://localhost:3000/${currentMusic.url}`}
                        playsInline
                        crossOrigin="anonymous"
                        style={{ display: 'none' }}>
            </audio>
                )}

                <div className="flex flex-row justify-between gap-20 items-center w-full ">
                    <div className="flex flex-row w-full">
                        {currentMusic && (
                            <>
                                <div className="w-18 h-18">
                                    <img alt="Album Cover" className="w-full h-full object-cover rounded-md" src={`http://localhost:3000/media/${currentMusic.album.image}`} />
                                </div>
                                <div className="flex flex-col ml-4 justify-center items-center">
                                    <p className="text-white">{currentMusic.name}</p>
                                    <p className="text-gray-400">{currentMusic.artist.name}</p>
                                </div>
                                </>
                            )}
                    </div>
                    <div className="flex flex-row items-center justify-center w-full">
                        <div className="flex flex-col gap-4 w-11/12 justify-center">
                            <div className="flex flex-row justify-center items-center gap-4 *:cursor-pointer *:text-white text-2xl">
                                <LiaRandomSolid />
                                <MdSkipPrevious onClick={() => {setPreviousMusic();}} />
                                {isPlaying === true ? (
                                    <MdOutlinePause id="play-pause" onClick={() => {handlePlayPause();}} />
                                ) : (
                                    <TbPlayerPlayFilled id="play-pause" onClick={() => {handlePlayPause();}} />
                                )}
                                <MdSkipNext onClick={() => {setNextMusic();}} />
                                <LuRepeat style={{ color: "#9898A6" }} />
                            </div>
                            <div className="flex items-center justify-between ">
                                    <input type="range" value={currentTime} max={duration} min="0" className="w-full h-1 bg-[#4C4E54] rounded-sm appearance-none range-no-thumb" 
                                        onChange={(e) => {
                                            const newTime = Number(e.target.value);
                                            setCurrentTime(newTime);
                                            if (audioRef.current) {
                                                audioRef.current.currentTime = newTime;
                                            }
                                        }}
                                    style={{
                                        background: `linear-gradient(to right, #10B981 0%, #10B981 ${currentTime}%, #4C4E54 ${currentTime}%, #4C4E54 100%)`
                                    }}   />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-center w-full">
                        <div className="flex flex-col gap-4 w-5/12 justify-center">
                            <div className="flex items-center justify-between gap-2 w-8/12">
                                <FaVolumeHigh className="text-white text-3xl cursor-pointer" />
                                    <input type="range" min={0} max={100} value={volume} onChange={(e) => setVolume(Number(e.target.value))}
                                      className="w-full h-1 rounded-sm appearance-none range-no-thumb cursor-pointer"
                                    style={{
                                        background: `linear-gradient(to right, #10B981 0%, #10B981 ${volume}%, #4C4E54 ${volume}%, #4C4E54 100%)`
                                    }}    />
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
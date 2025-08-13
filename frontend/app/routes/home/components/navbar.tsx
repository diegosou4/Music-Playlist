import { IoHomeOutline } from "react-icons/io5";
import { BsBroadcast } from "react-icons/bs";
import { CgPlayList } from "react-icons/cg";
import { MdLibraryMusic } from "react-icons/md";
import { MdAudiotrack } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";


export default function Navbar(){

    return(
      <div className="h-screen w-2/12 flex pt-30 justify-center" style={{ backgroundColor : '#212124'}} >
        <div className="flex flex-col w-full">
            <div className="flex flex-col  text-center gap-5 mb-20 *:text-xl w-full  *:cursor-pointer ">
                <h1 className="text-white">Logo</h1>
              <div className="flex items-center justify-center gap-2 group">
                <IoHomeOutline className="inline-block text-white group-hover:text-purple-700" />
                <p className="text-white group-hover:text-purple-700">Home</p>
              </div>
          <div className="flex items-center justify-center gap-2 group">
            <BsBroadcast className="inline-block text-white text-xl group-hover:text-purple-700" />
              <p className="text-white group-hover:text-purple-700">Explore</p>
              </div>
            </div>
            <div  className="flex flex-col  text-center gap-5 mb-20 *:text-xl w-full *:cursor-pointer ">
                <div className="flex items-center justify-center gap-2 group">
                  <CgPlayList className="inline-block text-white text-xl group-hover:text-purple-700" />
                  <p className="text-white group-hover:text-purple-700">Playlist</p>  
                </div>
                 <div className="flex items-center justify-center gap-2 group">
                   <MdLibraryMusic className="inline-block text-white text-xl group-hover:text-purple-700" />
                   <p className="text-white group-hover:text-purple-700">Album</p>
               </div>
                <div className="flex items-center justify-center gap-2 group">
                  <MdAudiotrack className="inline-block text-white text-xl group-hover:text-purple-700" />
                  <p className="text-white group-hover:text-purple-700">Tracks</p>
                </div>
                        <div className="flex items-center justify-center gap-2 group">
                          <IoPersonOutline className="inline-block text-white text-xl group-hover:text-purple-700" />
                          <p className="text-white group-hover:text-purple-700">Artists</p>
                        </div>
            </div>
             {/* <div  className="flex flex-col  text-center gap-5 *:text-lg w-full *:cursor-pointer ">
               <div className="flex items-center justify-center gap-5 group">
                <p className="text-white group-hover:text-purple-700">Account</p>
              </div>
            </div> */}
        </div>
        </div>

    )



}
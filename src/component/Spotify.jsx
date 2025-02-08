import React, { useState,useEffect, useRef} from 'react'
import axios from 'axios'
import myImage from "../assets/image/spotify-removebg-preview.png"

const Spotify = () => {
  
    const [data, setData] = useState([])
    const [isLoading, setIsloading] = useState(false)
    const [error, setError] = useState(false)
    const [isPlaying, setIsPlaying] = useState(false)
    const [currentAudio, setCurrentAudio] = useState(null);
    const [currentTrack, setCurrentTrack] = useState(null);


    useEffect(() => {
        const fecthData = async()=>{
            try {
                setIsloading(true)
               const response = await axios.get("https://robo-music-api.onrender.com/music/my-api")
               setData(response.data)
               console.log(data)
               setIsloading(false)
            } catch (error) {
                setError(error)
            }

        }

        fecthData()
    
    }, [])

   const audioRef = useRef(null);

        const playAudio = (i) => {
        if (audioRef.current) {
            audioRef.current.play();
        }
        };

    //     const playAudio = (id) =>{
    //         console.log(id)
    //         let oneAudio = data.find((e)=> e.id == id)
    //         console.log( oneAudio)

    //         if (currentTrack === id && isPlaying) {
    //         pauseAudio();
    //         return;
    //     }
            
    //         if (currentAudio) {
    //            currentAudio.pause();
    //         }

    //         let audio = new Audio(oneAudio.songUrl);
    //         setCurrentAudio(audio);
    //         setIsPlaying(true);
    //         setCurrentTrack(id);

    //         audio.play();
    //     audio.onended = () => {
    //         setIsPlaying(false);
    //         setCurrentTrack(null);
    //     };

    //     }

    //   const pauseAudio = () => {
    //     if (currentAudio) {
    //         currentAudio.pause();
    //         setIsPlaying(false);
    //     }
    // };





    return (
        <div>
        <div class="div-drid grid lg:grid-cols-12 md:grid-cols-12 ">
            <div class="lg:col-span-3 md:col-span-4 " >
            <div class="bg-neutral-900 text-[17px] h-[20vh] text-white font-[700] flex  mx-auto flex-col w-[95%] rounded-[10px]">
                <div class=" flex pt-[20px] pl-[25px] items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                    <span class="ml-[22px]">
                        Home
                    </span>
                </div>
                <div class=" flex pt-[22px] pl-[25px] items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                    <span class="ml-[22px]">
                        Search
                    </span>
                </div>
            </div>

            <div class=" bg-neutral-900 text-[17px] h-[70vh] mt-[5px] font-[700] text-white flex  mx-auto flex-col w-[95%] rounded-[10px]">
            
                
               
                
                <button  class=" bg-slate-800 h-[40px] mt-[10px]">Add to playlist</button>

            </div>

            </div>

       

        <div class="bg-neutral-800 lg:col-span-9 md:col-span-8">
            <div class="bg-neutral-600 pb-[20px]">
                <div class="w-[95%] mx-auto flex items-center justify-between text-[17px] h-[10vh]">
                    <div class="flex items-center ">
                        <button class=" bg-black text-white rounded-[50%] h-[30px] w-[30px] flex  items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                          </svg>
                        </button>
                        <button class=" bg-black text-white ml-[5px] rounded-[50%] h-[30px] w-[30px] text-center flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mx-auto">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                          </svg>
                        </button>
                    </div>
                    <div class="flex items-center text-[11px] sm:text-[14px] font-[700] gap-3">
                        <a class="px-[10px] sm:px-[20px] sm:py-[5px] py-[3px] bg-white text-black rounded-[20px]" href="">Explore Premium</a>
                        <a class="px-[10px] sm:px-[20px] sm:py-[5px] py-[3px] bg-black text-white rounded-[20px]" href="">Install App</a>
                        <button class=" bg-black text-white rounded-[50%] h-[30px] w-[30px] text-center flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mx-auto">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                          </svg>
                          </button>
                        <button class=" bg-black text-white rounded-[50%] h-[30px] w-[30px] text-center flex items-center">
                        <img src={myImage} alt="" />
                            
                          </button>
                    </div>
    
                </div>

                <div class="w-[95%] mx-auto mt-[6vh] flex">
                    <div class=" text-neutral-600 bg-zinc-800 sm:w-[12vw] w-[auto] h-[25vh] flex flex-col  items-start">
                      
                       <span class="text-[24px] font-[700] w-[50%] leading-6 mt-[5px] ml-[5px]">
                        Top Songs Global
                       </span>
                       <span class="text-[11px] font-[700] mt-[30px]">
                        Weekly Music Charts
                       </span>
                    </div>
                    <div class=" Top-Songs-Global2 flex flex-col items-start ml-[20px] text-white">
                        <span class="text-[14px]">Playlist</span>
                        <span class="lg:text-[65px] md:text-[50px] text-[30px] font-[800] sm:leading-10 leading-8 mt-[5px] sm:mt-[17px]">Top Songs-Global</span>
                        <span class="text-[14px] mt-[10px] sm:mt-[25px]">Your weekly update of the most played tracks right now - Global.</span>
                        <div class="text-[14px] font-[600] mt-[5px]">
                            <a class="font-[700]" href="">Spotify</a>
                            <span>. 1,394,646 likes</span>
                            <span>. 11 new entries</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="div-playlist overflow-y-auto h-[50vh] flex flex-col mx-auto w-[95%]">
    
                <div class="flex mt-[20px] justify-between text-white">
                    <span class="sm:hidden font-[700] text-[18px] w-[40%]">#  Songs</span>
                    <span class=" sm:block hidden w-[40%]">#  Title</span>
                    <span class="sm:block hidden w-[20%]">Release Date</span>
                    <span class="sm:block hidden w-[20%]">Album</span>
                    <span class="font-[700] text-[18px] sm:font-[400] sm:text-[16px]">Delete</span>
                </div>
                <div class="div-line bg-white h-[1px] mt-[5px] mb-[10px]"></div>

                {data.map((item, index)=>(
                    
                    <div  key={item.id} class=" text-white relative border-b-[1px] border-white pt-[15px] pb-[15px] flex items-center h-[10vh] rounded-[5px]">
                    <span class="w-[2%] ">{1 + index}</span>

                    <button  onClick={()=>playAudio(index)} class=' bg-slate-600 ml-4 absolute left-[2px]'>

                    {isPlaying?
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
                      </svg>
                      :
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="svgPlay size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                      </svg>

                    }
                    

                    </button>
                    
                    
                    <div class="flex items-center sm:w-[40%] w-[80%] ml-[15px]">
                    <audio ref={el=> audioRef.current[index] == el} src={item.songUrl} />
                    <img class="h-[40px] w-[40px] ml-[10px] rounded-[5px]" src={item.songImage} alt=""></img>
                        <div class="flex flex-col ml-[10px] leading-5 sm:block ">
                            <span class="font-[600] text-[15px] sm:text-[18px]">{item.songTitle}</span>
                            <span> - </span>
                            <span>{item.artistName}</span>
                        </div>
                        <div class="flex flex-col ml-[10px] leading-5 sm:hidden">
                            <div class="font-[700] text-[16px] sm:text-[18px]">{item.songTitle}</div>
                            <div><span>{item.artistName}</span><span class=" ml-[10px]">{item.releaseDate}</span></div>
                        </div>
                    </div>
                    <span class="w-[25%] ml-[20px] sm:block hidden">{item.releaseDate}</span>
                    <span class="w-[28%] sm:block hidden">{item.albumName}</span>
                    <button class="">Delete</button>
             
                </div>

                ))
                    
                }
                
               </div>
            </div>
        </div>
        </div>
       
  
       
    );
};

export default Spotify;

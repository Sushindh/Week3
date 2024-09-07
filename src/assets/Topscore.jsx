import React from "react";
import Crown from "../images/Crown.png"
import Fir from "../images/First.png"
import Sec from "../images/Second.png"
import Thi from "../images/Third.png"
import Fpic from "../images/Firpic.png"
import Spic from "../images/Secpic.png"
import Tpic from "../images/Thipic.png"

const Topscore=({data})=>{

    const Felement=data[0];
    const Selement=data[1];
    const Telement=data[2];

    return(
        <div className="flex justify-center items-end sm:pb-48 sm:h-screen sm:w-[80%] max-sm:h-screen max-sm:w-screen sm:pl-20 max-sm:justify-center  " >
            
            <div dir="ltr" className="h-[30%] w-[20%] max-sm:h-[50%] max-sm:w-[30%] rounded-s-3xl bg-[#3B5987] flex flex-col items-center justify-center ">
                <div className="absolute flex flex-col items-center top-[60%] max-sm:top-[30%] " >
                    <img src={Spic} className="h-24 w-24 max-sm:h-16 max-sm:w-16  " />
                    <img src={Sec} className="w-10 h-10 absolute top-[75%] max-sm:w-8 max-sm:h-8 " />
                </div>
                <div className="" ><p className="text-lg text-white font-medium max-sm:text-base " >{Selement.Members}</p></div>
                <div className="" ><p className="text-lg text-white font-medium max-sm:text-base" >{Selement.point}</p></div>
            </div>
            <div className="h-[50%] w-[20%] max-sm:h-[60%] max-sm:w-[30%] rounded-t-[20%] bg-[#3B5987] border-2 border-white flex flex-col items-center justify-center" >
                <div className="absolute flex flex-col items-center top-[35%] max-sm:top-[18%]" >
                    <img src={Crown} className="w-14 h-14  " />
                    <img src={Fpic} className="w-32 h-32  max-sm:w-20 max-sm:h-20 " />
                    <img src={Fir} className="w-10 h-10 max-sm:w-8 max-sm:h-8 absolute top-[85%] " />
                </div>
                <div className="" ><p className="text-lg text-white font-medium max-sm:text-base" >{Felement.Members}</p></div>
                <div className="" ><p className="text-lg text-white font-medium max-sm:text-base" >{Felement.point}</p></div>
            </div>
            <div dir="rtl" className="h-[30%] w-[20%] max-sm:h-[50%] max-sm:w-[30%] rounded-s-3xl bg-[#3B5987] flex flex-col items-center justify-center" >
                <div className="absolute flex flex-col items-center top-[60%] max-sm:top-[30%] " >
                    <img src={Tpic} className="h-24 w-24 max-sm:h-16 max-sm:w-16  " />
                    <img src={Thi} className="w-10 h-10 absolute top-[75%] max-sm:w-8 max-sm:h-8 " />
                </div>
                <div className=""><p className="text-lg text-white font-medium max-sm:text-base" >{Telement.Members}</p></div>
                <div className=""><p className="text-lg text-white font-medium max-sm:text-base" >{Telement.point}</p></div>
            </div>
        </div>
    );
}

export default Topscore
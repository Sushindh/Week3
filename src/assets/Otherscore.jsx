import In from "../images/inc.png"
import De from "../images/dec.png"
import React from "react";

const Otherscore=({data1,data2})=>{



    return(
        <div className="flex justify-end h-full w-[35%] md:pt-14 md:pr-20  max-sm:h-screen max-sm:w-screen max-sm:justify-end " >
            <div className="bg-[#3B5987] max-sm:overflow-y-scroll h-[70%] w-[90%] max-lg:w-[75%] rounded-[10%] max-sm:h-[100%] max-sm:w-[100%] max-sm:rounded-b max-sm:flex-col " >
                <div>
                    {data1.map((item,index)=>{
                        const oldPoint=data2.find(old=>old.Members===item.Members);
                        const pntDifference=(item.point-oldPoint.point)>0?In:De;
                        const lastIn=(index===4)?0:"border-t-2 border-white my-3 w-4/5";
                        return(
                            <>
                                <div className="flex gap-10 items-center pl-5 pt-1 " >
                                    <div className="h-16 w-16 border-white border-4 rounded-full flex justify-center items-center " key={index} >
                                        <p className="text-white font-semibold text-3xl" >#{index+4}</p>
                                    </div>
                                    <p className="text-white font-normal text-base" >{item.Members}</p>
                                    <div className="flex flex-col items-end gap-1 pr-4 " >
                                        <p className="text-white font-medium text-sm" >{item.point}</p>
                                        <div className="pl-2" ><img src={pntDifference} alt="increase or decrease"/></div>
                                    </div> 
                                </div>
                                <div className="pl-10" >
                                    <div className={lastIn}>
                                        {/* Line */}
                                    </div>
                                </div>
                            </>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Otherscore
import React, { useState } from "react";

function Options(){

    const [opt,setOpt]=useState(null);

    const newOpt = (option) => {
        setOpt(option);
    };

    return(
        <div className="flex justify-center items-center pt-4 max-sm:pt-8  " >
            <div className="w-[30%] max-sm:max-w-xs max-sm:w-[80%] max-sm:h-12 max-sm:rounded-lg h-16 bg-white rounded-2xl flex justify-around items-center " >
                <button className={`font-Inter font-medium text-xl max-sm:text-lg max-sm:font-medium text-[#2C2C2C] ${opt === 'organization' ? 'underline underline-offset-8 decoration-[#3B5987] decoration-4' : ''}`}
                    onClick={() => newOpt('organization')}>Organization</button>
                <button className={`font-Inter font-medium text-xl max-sm:text-lg max-sm:font-medium text-[#2C2C2C] ${opt === 'department' ? 'underline underline-offset-8 decoration-[#3B5987] decoration-4' : ''}`}
                    onClick={() => newOpt('department')}>Department</button>
            </div>
        </div>
    );
}

export default Options
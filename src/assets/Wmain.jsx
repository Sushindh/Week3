import Tops from "../assets/Topscore.jsx"
import Others from "../assets/Otherscore.jsx"
import Opt from "../assets/Options.jsx"
import Nav from "../assets/Navbar.jsx"
import React from 'react'
import { useState} from "react"

function Wmain(){

    const [oldItems,oldSetItems]=useState([
        { Members: "Eiden", point: 2430 },
        { Members: "Jackson", point: 1847 },
        { Members: "Emma Aria", point: 1674 },
        { Members: "Sebastion", point: 995 },
        { Members: "Jason", point: 945 },
        { Members: "Natalie", point: 763 },
        { Members: "Serenity", point: 700 },
        { Members: "Hannah", point: 600 },
    ]);

    const [items,setItems]=useState([
        { Members: "Eiden", point: 2430 },
        { Members: "Emma Aria", point: 1674 },
        { Members: "Jason", point: 875 },
        { Members: "Jackson", point: 1847 },
        { Members: "Natalie", point: 774 },
        { Members: "Sebastion", point: 1124 },
        { Members: "Serenity", point: 723 },
        { Members: "Hannah", point: 559 },
    ]);

    const sortItem=[...items].sort((a,b)=>b.point-a.point);

    const fPart=sortItem.slice(0,3);
    const nPart=sortItem.slice(3);


    return(
        // Background
        <div className="bg-[#E7F0FE] h-screen w-screen " >
            {/* Leadertitle Navbar */}
            <Nav />
            {/* Options page */}
            <Opt />
            <div className="flex justify-between max-xl:gap-10 max-sm:justify-center w-full h-screen max-sm:flex-col max-sm:items-center max-sm:gap-7 " >
                {/* Top Scorer board */}
                <Tops data={fPart} />
                {/* Other Score Board */}
                <Others data1={nPart} data2={oldItems} />
            </div>
        </div>
    );
}

export default Wmain
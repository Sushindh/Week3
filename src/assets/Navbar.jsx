import Larr from "../images/Larrow.png"
import Icon from "../images/Icon4.png"

function Navbar(){
    
    

    return(
        <div className=" flex justify-between items-center w-[100%] pt-4 max-sm:pt-5 " >
            <div className="pl-6" ><img src={Larr} alt="Left arrow" className="h-6 w-4 max-sm:h-6 max-sm:w-4 "/></div>
            <div className="" ><h2 className="font-Inter font-semibold text-2xl " >Leaderboard</h2></div>
            <div className="pr-8 " ><img src={Icon} alt="menu" className="h-6 w-6" /></div>
        </div>
    );
}

export default Navbar
import { KanbanSquare,Text } from "lucide-react";

const Navbar = () => {
    return ( 
        <div className=" flex  justify-between bg-gray-800 w-1/3 mx-auto mt-8 rounded-lg px-4 py-2 shadow-md">
          
          <div className=" flex items-center border border-slate-400 px-2 border-l-0 border-r-8">
          <KanbanSquare className=" h-5 w-5 text-white"/>
          <p className="ml-1 capitalize text-sm font-semibold text-white">irfan</p>
            </div>
            <Text className=" h-5 w-5 text-white"/>

        </div>
        
     );
}
 
export default Navbar;
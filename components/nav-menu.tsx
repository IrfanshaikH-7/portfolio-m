import Link from "next/link";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Text } from "lucide-react";

const NavMenu = () => {
    return ( 
        <div className="flex flex-col justify-center items-center h-auto w-auto space-y-3 rounded-md bg-slate-500/50 p-5">
                
                <DropdownMenu >
          <DropdownMenuTrigger className="flex uppercase items-center">menu<Text className=" h-5 w-5  text-white" /></DropdownMenuTrigger>
          <DropdownMenuContent className="flex  px-8 backdrop-blur-sm border-slate-600 bg-transparent">
            <DropdownMenuSeparator />
            <DropdownMenuItem className= "group hover:bg-blue-300/80 hover:text-slate-900 transition-all duration-300">
              <Link href='/portfolio' id="linnk" className="linnk uppercase text-xs font-semibold text-slate-300 group-hover:text-slate-900 transition-all duration-300">
                Portfolio
              </Link>
            </DropdownMenuItem>

            <DropdownMenuItem className= "group hover:bg-amber-200/80 hover:text-slate-900 transition-all duration-300">
              <Link href='/about' id="linnk1" className="linnk uppercase text-xs font-semibold text-slate-300 group-hover:text-slate-900 transition-all duration-300">
                About
              </Link>
            </DropdownMenuItem>

            <DropdownMenuItem className= "group hover:bg-purple-300/80 hover:text-slate-900 transition-all duration-300">
              <Link href='/contact' id="linnk2" className="linnk uppercase text-xs font-semibold text-slate-300 group-hover:text-slate-900 transition-all duration-300">
                Contact
              </Link>
            </DropdownMenuItem>

            <DropdownMenuItem className= "group hover:bg-pink-300/80 hover:text-slate-900 transition-all duration-300">
              <Link href='/blog' id="linnk3" className="linnk uppercase text-xs font-semibold text-slate-300 group-hover:text-slate-900 transition-all duration-300">
                Blog
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
                </div>
     );
}
 
export default NavMenu;
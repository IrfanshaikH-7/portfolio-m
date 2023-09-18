import { KanbanSquare, Text } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from 'next/link'
import {redirect} from 'next/navigation'
import { ModeToggle } from "./ui/mode-toggle";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  return (
    <>
   
      <div className="  flex items-center justify-between mx-auto mt-8 bg-gradient-to-r from-blue-400 dark:via-black dark:to-pink-300 via-white to-pink-300 w-1/3 rounded-lg px-4 py-2 shadow-md">

        <div onClick={()=> router.push('/')} className=" cursor-pointer flex justify-self-center items-center border border-slate-400 px-2 border-l-0 border-r-8">
          <KanbanSquare className=" h-5 w-5 text-white" />
          <p className="ml-1 capitalize text-sm font-semibold text-white">irfan</p>
        </div>
      <div className="flex items-center ">
        <DropdownMenu >
          <DropdownMenuTrigger><Text className=" h-5 w-5  text-white" /></DropdownMenuTrigger>
          <DropdownMenuContent className="flex mr-32 px-8 backdrop-blur-sm border-slate-600 bg-transparent">
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

            <DropdownMenuItem className= "group hover:bg-amber-200/80 hover:text-slate-900 transition-all duration-300">
              <Link href='/admin' id="linnk1" className="linnk uppercase text-xs font-semibold text-slate-300 group-hover:text-slate-900 transition-all duration-300">
                Admin
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <div className="ml-2">
          <ModeToggle />
        </div>
        
        </div>

        
        
      </div>
      
      
    </>
  );
}

export default Navbar;
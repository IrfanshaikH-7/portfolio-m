import { KanbanSquare,Text } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from 'next/link'

const Navbar = () => {
    return ( 
        <div className=" flex  justify-between bg-gray-800 w-1/3 mx-auto mt-8 rounded-lg px-4 py-2 shadow-md">
          
          <div className=" flex items-center border border-slate-400 px-2 border-l-0 border-r-8">
          <KanbanSquare className=" h-5 w-5 text-white"/>
          <p className="ml-1 capitalize text-sm font-semibold text-white">irfan</p>
            </div>

            <DropdownMenu>
  <DropdownMenuTrigger><Text className=" h-5 w-5 text-white"/></DropdownMenuTrigger>
  <DropdownMenuContent className="flex mr-32 px-8">
    <DropdownMenuSeparator />
<DropdownMenuItem>
  <Link href='/portfolio' id="linnk" className="linnk uppercase text-xs font-semibold text-slate-700">
    Portfolio
  </Link>
</DropdownMenuItem>

<DropdownMenuItem>
  <Link href='/about' id="linnk1"  className="linnk uppercase text-xs font-semibold text-slate-700">
    About
  </Link>
</DropdownMenuItem>

<DropdownMenuItem>
  <Link href='/contact' id="linnk2" className="linnk uppercase text-xs font-semibold text-slate-700">
    Contact
  </Link>
</DropdownMenuItem>

<DropdownMenuItem>
  <Link href='/blog' id="linnk3" className="linnk uppercase text-xs font-semibold text-slate-700">
    Blog
  </Link>
</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
            

        </div>
        
     );
}
 
export default Navbar;
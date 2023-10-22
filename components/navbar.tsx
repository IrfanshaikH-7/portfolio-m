"use client"
import { Code2, KanbanSquare, Text } from "lucide-react";
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
import Image from "next/image";

const Navbar = () => {
  const router = useRouter();
  
  return (

    <>
      <div className="w-full h-12 flex items-center justify-between mx-auto mt-8 bg-transparent  border-2 backdrop-blur-sm border-slate-500 dark:border-white rounded-[80px] px-8  py-2 shadow-md">

        <div onClick={()=> router.push('/')} className=" h-10 w-28 cursor-pointer flex justify-self-center items-center relative">
          <p className="capitalize"><span className="text-rose-600 text-xl">I</span><span className="text-rose-600">rf</span>anshaikH-7</p>
        </div>
         <Code2 className=" text-slate-700 dark:text-white h-7 w-7 animate-pulse" />
      <div className="flex items-center ">
        <DropdownMenu >
          <DropdownMenuTrigger className="flex justify-center items-center"><div className="flex justify-center items-center"><span className="uppercase text-slate-600 dark:text-white">Menu</span><Text className=" h-5 w-5  text-slate-600 dark:text-white" /></div></DropdownMenuTrigger>
          <DropdownMenuContent className="flex mr-4 md:mr-32 px-4 md:px-8 mt-4 md:mt-2 bg-white backdrop-blur-sm border-slate-600 dark:border-white bg-transparent rounded-[50px]">
            <DropdownMenuSeparator />
            <DropdownMenuItem className= "group hover:bg-blue-300/80 hover:text-slate-900 transition-all duration-300">
              <a href='/portfolio' id="linnk" className="linnk uppercase text-xs font-semibold text-slate-600 dark:text-slate-300 group-hover:text-slate-900 transition-all duration-300">
                Portfolio
              </a>
            </DropdownMenuItem>

            <DropdownMenuItem className= "group hover:bg-amber-200/80 hover:text-slate-900 transition-all duration-300">
              <a href='/about' id="linnk1" className="linnk uppercase text-xs font-semibold text-slate-600 dark:text-slate-300 group-hover:text-slate-900 transition-all duration-300">
                About
              </a>
            </DropdownMenuItem>

            <DropdownMenuItem className= "group hover:bg-purple-300/80 hover:text-slate-900 transition-all duration-300">
              <a href='/contact' id="linnk2" className="linnk uppercase text-xs font-semibold text-slate-600 dark:text-slate-300 group-hover:text-slate-900 transition-all duration-300">
                Contact
              </a>
            </DropdownMenuItem>

            <DropdownMenuItem className= "group hover:bg-pink-300/80 hover:text-slate-900 transition-all duration-300">
              <a href='/blog' id="linnk3" className="linnk uppercase text-xs font-semibold text-slate-600 dark:text-slate-300 group-hover:text-slate-900 transition-all duration-300">
                Blog
              </a>
            </DropdownMenuItem>

            <DropdownMenuItem className= "group hover:bg-amber-200/80 hover:text-slate-900 transition-all duration-300">
              <Link href='/admin' id="linnk1" className="linnk uppercase text-xs font-semibold text-slate-600 dark:text-slate-300 group-hover:text-slate-900 transition-all duration-300">
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

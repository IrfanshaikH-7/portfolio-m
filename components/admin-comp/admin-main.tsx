 "use client"
 import { UserButton } from "@clerk/nextjs";
import { Text } from "lucide-react";
Link
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useEffect, useState } from "react";
import Link from "next/link";
import FormZone from "../upload-things/upload-zone";
import { cn } from "@/lib/utils";
import AchievementForm from "./achievement-form";


const AdminDB = () => {
    const [state, setState ] = useState('')
    return ( 
        <section className="flex  justify-center items-center w-11/12 h-[90%] ">
          <div className="w-1/4 h-full rounded-sm bg-zinc-800/70">
            <div className=" m-2 flex flex-col justify-center items-center h-auto w-auto space-y-3 rounded-md bg-zinc-800/70 p-5">
              <UserButton afterSignOutUrl="/portfolio" />

              <DropdownMenu >
                <DropdownMenuTrigger className="flex uppercase items-center">menu<Text className=" h-5 w-5  text-white" /></DropdownMenuTrigger>
                <DropdownMenuContent className="flex  px-8 backdrop-blur-sm border-slate-600 bg-transparent">
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="group hover:bg-blue-300/80 hover:text-slate-900 transition-all duration-300">
                    <Link href='/portfolio' id="linnk" className="linnk uppercase text-xs font-semibold text-slate-300 group-hover:text-slate-900 transition-all duration-300">
                      Portfolio
                    </Link>
                  </DropdownMenuItem>

                  <DropdownMenuItem className="group hover:bg-amber-200/80 hover:text-slate-900 transition-all duration-300">
                    <Link href='/about' id="linnk1" className="linnk uppercase text-xs font-semibold text-slate-300 group-hover:text-slate-900 transition-all duration-300">
                      About
                    </Link>
                  </DropdownMenuItem>

                  <DropdownMenuItem className="group hover:bg-purple-300/80 hover:text-slate-900 transition-all duration-300">
                    <Link href='/contact' id="linnk2" className="linnk uppercase text-xs font-semibold text-slate-300 group-hover:text-slate-900 transition-all duration-300">
                      Contact
                    </Link>
                  </DropdownMenuItem>

                  <DropdownMenuItem className="group hover:bg-pink-300/80 hover:text-slate-900 transition-all duration-300">
                    <Link href='/blog' id="linnk3" className="linnk uppercase text-xs font-semibold text-slate-300 group-hover:text-slate-900 transition-all duration-300">
                      Blog
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="m-2 flex flex-col justify-center items-center h-auto w-auto space-y-3 rounded-md bg-zinc-800/70 p-5">
                <p className={cn("text-sm uppercase cursor-pointer h-full w-full  py-2 rounded-sm text-center ", state == 'project'? 'bg-gray-400': '')} onClick={() => setState('project')} >Projects</p>
                <p className={cn("text-sm uppercase cursor-pointer h-full w-full  py-2 rounded-sm text-center ", state == 'achievement'? 'bg-gray-400': '')} onClick={() => setState('achievement')} >achievement</p>


            </div>
          </div>

          { state == 'project' &&
            <div className=" flex justify-center items-center ml-2 w-full px-24 h-full bg-zinc-800/70 rounded-sm">
            <FormZone />
          </div>
          }
          { state == 'achievement' &&
            <div className="flex justify-center items-center ml-2 w-3/4 px-24 h-full bg-zinc-800/70 rounded-sm">
            <AchievementForm />
          </div>
          }
          
          
         
          
        </section>
     );
}
 
export default AdminDB;
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
import { cn } from "@/lib/utils";
import AchievementForm from "./achievement-form";
import Navbar from "../navbar";
import FormZone from "./upload-zone";


const AdminDB = () => {
    const [state, setState ] = useState('project')
    return ( 
      <>
      <div className='w-80 lg:w-1/3 flex mx-auto z-50 fixed bg-transparent h-auto transition-opacity'>
            <Navbar />
          </div>
        <section className="flex gap-4 py-24 flex-col md:flex-row  justify-center items-center w-full  h-full md:h-screen px-4">
          
          <div className="w-full md:w-1/4   h-full rounded-3xl bg-slate-400/70 dark:bg-zinc-800/70">
            <div className=" m-2  md:mt-4  flex flex-col justify-center items-center h-auto w-auto space-y-3 rounded-3xl bg-slate-300 dark:bg-zinc-800/70 p-5">
              <UserButton afterSignOutUrl="/portfolio" />
            </div>
            <div className="m-2 flex flex-col justify-center items-center h-auto w-auto space-y-3 rounded-3xl bg-slate-300 dark:bg-zinc-800/70 p-5">
                <p className={cn("text-sm uppercase cursor-pointer h-full w-full  py-2 rounded-3xl text-center ", state == 'project'? 'bg-slate-400/70': '')} onClick={() => setState('project')} >Projects</p>
                <p className={cn("text-sm uppercase cursor-pointer h-full w-full  py-2 rounded-3xl text-center ", state == 'achievement'? 'bg-slate-400/70': '')} onClick={() => setState('achievement')} >achievement</p>

                {/* uQqZW.!>Q=$+L3) */}
            </div>
          </div>

          { state === "project" &&
            <div className="flex justify-center items-center w-full md:w-3/4  h-full bg-slate-50 dark:bg-zinc-800/50 rounded-3xl">
            <FormZone />
          </div>
          }
          { state === "achievement" &&
            <div className="flex justify-center items-center  w-full md:w-3/4 md:p-24  h-full   bg-slate-50 dark:bg-zinc-800/50 rounded-3xl">
            <AchievementForm />
          </div>
          }
          
          
         
          
        </section>
        </>
     );
}
 
export default AdminDB;
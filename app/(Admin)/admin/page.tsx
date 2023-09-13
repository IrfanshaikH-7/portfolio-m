
import { UserButton } from "@clerk/nextjs";
import { KanbanSquare, Text } from "lucide-react";
Link
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";
import { currentUser, redirectToSignIn } from "@clerk/nextjs";
import { db } from "@/lib/db";
import Link from "next/link";
const Page = async () => {

    const user = await currentUser();
    const admin1 = await db.admin.findUnique({
        where: {
            adminId : user?.id,
        }

    })
    // const admin = await db.admin.create({
    //     data: {
    //         adminId: user?.id,
    //         email: user?.emailAddresses[0].emailAddress,
    //         name: `${user?.firstName} ${user?.lastName}`

    //     }
    // })
    // console.log("created")
    

    if(admin1) {
        return (
            <div className="flex flex-col justify-center items-center h-full w-full">
                <p className="text-7xl text-emerald-400 font-cute font-extrabold">
                    Greetings Mr.{admin1.name}
                    </p>
                
                <div className="flex justify-center items-center h-12 w-48 rounded-md bg-slate-500">
                <UserButton afterSignOutUrl="/portfolio" />
                </div>
            </div>
        )
    }




    return (
        <div className="flex flex-col justify-center items-center h-full w-full">
            <p className="text-white text-5xl font-cute text-center" ><span className="text-8xl text-yellow-600 font-cute ">Congrats!</span><br /> You have been pranked.</p>
                <p className=" text-center text-xl text-red-800  font-cute font-extrabold">
                    <span className="bg-red-300 px-5 rounded-md">i.e. you are not the admin!!</span><br /><span className="text-4xl ">😒</span>
                </p>
                
                <div className=" m-2 flex flex-col justify-center items-center h-auto w-auto space-y-3 rounded-md bg-slate-500/50 p-5">
                <UserButton afterSignOutUrl="/portfolio" />
                <p className="text-sm" >Explore my porfolio by logging out or.</p>
                
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
            </div>
    )




}

export default Page;
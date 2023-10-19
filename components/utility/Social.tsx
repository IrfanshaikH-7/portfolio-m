import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { Github, Linkedin, Menu, Twitter, X } from "lucide-react";
import Link from "next/link";
const Social = () => {
    return (
        <div className="h-7 w-7 flex absolute bg-white rounded-2xl rounded-tl-sm overflow-hidden z-50 ">
            <DropdownMenu>
                <DropdownMenuTrigger className="flex justify-center items-center  h-full w-full px-1"><Menu className="text-black h-4 w-4 " /></DropdownMenuTrigger>
                <DropdownMenuContent className=" gap-4 mt-2 flex flex-col items-center justify-center  bg-transparent border-none shadow-none w-full px-1 ">
                    <DropdownMenuItem className="h-6 w-6 bg-white dark:bg-slate-500 rounded-full rounded-tl-sm rotate-45  flex items-center justify-center">
                        <TooltipProvider>
                            <Tooltip  >
                                <TooltipTrigger className="flex justify-start items-center"><a href="https://github.com/IrfanshaikH-7"><Github  className="dark:fill-black dark:text-black text-slate-600 fill-slate-600 p-[6px] -rotate-45"/></a></TooltipTrigger>
                                <TooltipContent side="right" className="bg-transparent backdrop-blur-sm border-0 border-r border-slate-300 px-3 py-1">
                                    <p>Featured</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="h-6 w-6 bg-white dark:bg-slate-500 rounded-full rounded-tl-sm rotate-45  flex items-center justify-center">
                    <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger className="flex justify-start items-center"><a href="#linkedIn"><Linkedin  className="dark:fill-black dark:text-black text-slate-600 fill-slate-600 p-[6px] -rotate-45"/></a></TooltipTrigger>
                                <TooltipContent side="right" className="bg-transparent backdrop-blur-sm border-0 border-r border-slate-300 px-3 py-1 ">
                                    <p>All projects</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="h-6 w-6 bg-white dark:bg-slate-500 rounded-full rounded-tl-sm rotate-45  flex items-center justify-center">
                    <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger className="flex justify-start items-center"><a href="#twitter"><Twitter  className="dark:fill-black dark:text-black text-slate-600 fill-slate-600 p-[6px] -rotate-45"/></a></TooltipTrigger>
                                <TooltipContent side="right" className="bg-transparent backdrop-blur-sm border-0 border-r border-slate-300 px-3 py-1 ">
                                    <p>Skills</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}

export default Social;
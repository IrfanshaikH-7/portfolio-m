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
import { Menu } from "lucide-react";
import Link from "next/link";
const Pnav = () => {
    return (
        <div className="h-8 w-8 flex  absolute top-24 right-24 z-50 bg-white rounded-3xl overflow-hidden">
            <DropdownMenu>
                <DropdownMenuTrigger className="flex justify-center items-center bg-slate-500 h-full w-full"><Menu className="text-black" /></DropdownMenuTrigger>
                <DropdownMenuContent className=" gap-2 flex flex-col items-center justify-center  bg-transparent border-none shadow-none">
                    <DropdownMenuItem className="w-8 h-8 bg-slate-500 rounded-full  flex items-center justify-center">
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>F</TooltipTrigger>
                                <TooltipContent>
                                    <p>Featured</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="w-8 h-8 bg-slate-500 rounded-full flex items-center justify-center">
                    <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger><a href="#all">S</a></TooltipTrigger>
                                <TooltipContent>
                                    <p>All projects</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="w-8 h-8 bg-slate-500 rounded-full flex items-center justify-center">
                    <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger><a href="#skill">S</a></TooltipTrigger>
                                <TooltipContent>
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

export default Pnav;
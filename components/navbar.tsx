"use client"
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
   
      <div className="w-full h-12 flex items-center justify-between mx-auto mt-8 bg-gradient-to-r from-indigo-400 to-sky-500  border border-slate-400 rounded-[80px] px-8  py-2 shadow-md">

        <div onClick={()=> router.push('/')} className=" cursor-pointer flex justify-self-center items-center border border-slate-400 px-2 border-l-0 border-r-8">
          <KanbanSquare className=" h-6 w-6 text-white" />
          <p className="ml-1 capitalize text-sm font-semibold text-white">irfan</p>
        </div>
      <div className="flex items-center ">
        <DropdownMenu >
          <DropdownMenuTrigger><Text className=" h-5 w-5  text-white" /></DropdownMenuTrigger>
          <DropdownMenuContent className="flex mr-32 px-8 backdrop-blur-sm border-slate-600 bg-transparent">
            <DropdownMenuSeparator />
            <DropdownMenuItem className= "group hover:bg-blue-300/80 hover:text-slate-900 transition-all duration-300">
              <a href='/portfolio' id="linnk" className="linnk uppercase text-xs font-semibold text-slate-300 group-hover:text-slate-900 transition-all duration-300">
                Portfolio
              </a>
            </DropdownMenuItem>

            <DropdownMenuItem className= "group hover:bg-amber-200/80 hover:text-slate-900 transition-all duration-300">
              <a href='/about' id="linnk1" className="linnk uppercase text-xs font-semibold text-slate-300 group-hover:text-slate-900 transition-all duration-300">
                About
              </a>
            </DropdownMenuItem>

            <DropdownMenuItem className= "group hover:bg-purple-300/80 hover:text-slate-900 transition-all duration-300">
              <a href='/contact' id="linnk2" className="linnk uppercase text-xs font-semibold text-slate-300 group-hover:text-slate-900 transition-all duration-300">
                Contact
              </a>
            </DropdownMenuItem>

            <DropdownMenuItem className= "group hover:bg-pink-300/80 hover:text-slate-900 transition-all duration-300">
              <a href='/blog' id="linnk3" className="linnk uppercase text-xs font-semibold text-slate-300 group-hover:text-slate-900 transition-all duration-300">
                Blog
              </a>
            </DropdownMenuItem>

            <DropdownMenuItem className= "group hover:bg-amber-200/80 hover:text-slate-900 transition-all duration-300">
              <Link href='/admin' id="linnk1" className="linnk uppercase text-xs font-semibold text-slate-300 group-hover:text-slate-900 transition-all duration-300">
                Admin
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        {/* <DropdownMenu>
  <DropdownMenuTrigger><Text className=" h-5 w-5  text-white" /></DropdownMenuTrigger>
  <DropdownMenuContent className="flex  mr-32 px-8 backdrop-blur-sm border-slate-600 bg-transparent">
    <DropdownMenuSeparator />
    <DropdownMenuItem className= "group hover:bg-blue-300/80 hover:text-slate-900 transition-all duration-300">
              <a href='/portfolio' id="linnk" className="linnk uppercase text-xs font-semibold text-slate-300 group-hover:text-slate-900 transition-all duration-300">
                Portfolio
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem className= "group hover:bg-blue-300/80 hover:text-slate-900 transition-all duration-300">
              <a href='/portfolio' id="linnk" className="linnk uppercase text-xs font-semibold text-slate-300 group-hover:text-slate-900 transition-all duration-300">
                Portfolio
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem className= "group hover:bg-blue-300/80 hover:text-slate-900 transition-all duration-300">
              <a href='/portfolio' id="linnk" className="linnk uppercase text-xs font-semibold text-slate-300 group-hover:text-slate-900 transition-all duration-300">
                Portfolio
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem className= "group hover:bg-blue-300/80 hover:text-slate-900 transition-all duration-300">
              <a href='/portfolio' id="linnk" className="linnk uppercase text-xs font-semibold text-slate-300 group-hover:text-slate-900 transition-all duration-300">
                Portfolio
              </a>
            </DropdownMenuItem>

  </DropdownMenuContent>
</DropdownMenu> */}
        <div className="ml-2">
          <ModeToggle />
        </div>
        
        </div>

        
        
      </div>
      
      
    </>
  );
}

export default Navbar;

// import { Button } from "@/components/ui/button"
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuGroup,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuPortal,
//   DropdownMenuSeparator,
//   DropdownMenuShortcut,
//   DropdownMenuSub,
//   DropdownMenuSubContent,
//   DropdownMenuSubTrigger,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
 
// export function DropdownMenuDemo() {
//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger asChild>
//         <Button variant="outline">Open</Button>
//       </DropdownMenuTrigger>
//       <DropdownMenuContent className="w-56">
//         <DropdownMenuLabel>My Account</DropdownMenuLabel>
//         <DropdownMenuSeparator />
//         <DropdownMenuGroup>
//           <DropdownMenuItem>
//             <User className="mr-2 h-4 w-4" />
//             <span>Profile</span>
//             <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
//           </DropdownMenuItem>
//           <DropdownMenuItem>
//             <CreditCard className="mr-2 h-4 w-4" />
//             <span>Billing</span>
//             <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
//           </DropdownMenuItem>
//           <DropdownMenuItem>
//             <Settings className="mr-2 h-4 w-4" />
//             <span>Settings</span>
//             <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
//           </DropdownMenuItem>
//           <DropdownMenuItem>
//             <Keyboard className="mr-2 h-4 w-4" />
//             <span>Keyboard shortcuts</span>
//             <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
//           </DropdownMenuItem>
//         </DropdownMenuGroup>
//         <DropdownMenuSeparator />
//         <DropdownMenuGroup>
//           <DropdownMenuItem>
//             <Users className="mr-2 h-4 w-4" />
//             <span>Team</span>
//           </DropdownMenuItem>
//           <DropdownMenuSub>
//             <DropdownMenuSubTrigger>
//               <UserPlus className="mr-2 h-4 w-4" />
//               <span>Invite users</span>
//             </DropdownMenuSubTrigger>
//             <DropdownMenuPortal>
//               <DropdownMenuSubContent>
//                 <DropdownMenuItem>
//                   <Mail className="mr-2 h-4 w-4" />
//                   <span>Email</span>
//                 </DropdownMenuItem>
//                 <DropdownMenuItem>
//                   <MessageSquare className="mr-2 h-4 w-4" />
//                   <span>Message</span>
//                 </DropdownMenuItem>
//                 <DropdownMenuSeparator />
//                 <DropdownMenuItem>
//                   <PlusCircle className="mr-2 h-4 w-4" />
//                   <span>More...</span>
//                 </DropdownMenuItem>
//               </DropdownMenuSubContent>
//             </DropdownMenuPortal>
//           </DropdownMenuSub>
//           <DropdownMenuItem>
//             <Plus className="mr-2 h-4 w-4" />
//             <span>New Team</span>
//             <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
//           </DropdownMenuItem>
//         </DropdownMenuGroup>
//         <DropdownMenuSeparator />
//         <DropdownMenuItem>
//           <Github className="mr-2 h-4 w-4" />
//           <span>GitHub</span>
//         </DropdownMenuItem>
//         <DropdownMenuItem>
//           <LifeBuoy className="mr-2 h-4 w-4" />
//           <span>Support</span>
//         </DropdownMenuItem>
//         <DropdownMenuItem disabled>
//           <Cloud className="mr-2 h-4 w-4" />
//           <span>API</span>
//         </DropdownMenuItem>
//         <DropdownMenuSeparator />
//         <DropdownMenuItem>
//           <LogOut className="mr-2 h-4 w-4" />
//           <span>Log out</span>
//           <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
//         </DropdownMenuItem>
//       </DropdownMenuContent>
//     </DropdownMenu>
//   )
// }
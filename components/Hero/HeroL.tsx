import { FileText, MoveRight } from "lucide-react";
import Link from "next/link";
const HeroL = () => {
    return (
        <div className=' flex flex-1 flex-col justify-center items-start   '>
            <div className="flex flex-col items-center justify-evenly p-8 w-full">
                <div>
                <h1 className="font-syne text-7xl lg:text-8xl lg:self-start bg-gradient-to-r from-blue-600 via-pink-500 to bg-purple-600 bg-clip-text text-transparent shadow-md">Greetings!!</h1>
                <p className="font-syne text-sm text-center "> <span className="bg-gradient-to-r from-blue-500 to bg-pink-500 bg-clip-text text-transparent font-semibold text-base ">I'm Irfan,</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Fugit nesciunt dolorem doloribus vero</p>

                </div>
                <div className="flex gap-8 p-2 relative">
                   <Link href='/contact' className="heroR-link group relative text-sm px-4  bg-gradient-to-r from-blue-500 to bg-pink-500 py-1 hover:bg-blue-400  text-slate-300 border border-slate-300">
                    Connect
                    <MoveRight className="absolute group-hover:-right-4 -right-3 transition-all duration-300" />
                </Link>
                <Link href='/contact' className="heroR-link group relative text-sm px-4  bg-gradient-to-r from-blue-500 to bg-pink-500 py-1 hover:bg-blue-400  text-slate-300 border border-slate-300">
                    Resume
                    <FileText className="absolute group-hover:-right-6 invisible group-hover:visible -right-5 transition-all ease-out" />
                </Link> 
                </div>
                
            </div>
        </div>
    );
}

export default HeroL;

/*
<svg
*/ 
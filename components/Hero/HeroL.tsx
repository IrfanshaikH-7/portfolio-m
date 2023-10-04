import { FileText, MoveRight } from "lucide-react";
import Link from "next/link";
const HeroL = () => {
    return (
        <div className=' flex flex-1 flex-col justify-center items-end'>
            <div className="flex flex-col items-start justify-evenly p-8 w-full ">
                <div>
                <h1 className="font-syne  text-7xl xl:text-8xl text-start lg:self-start  ">
                    Greetings!!
                </h1>
                <p className="font-syne text-sm px-12 xl:text-lg mt-2 "> <span className=" font-semibold text-base lg:text-2xl">I'm Irfan, 
                </span>
                 &nbsp; Lorem ipsum dolor sit amet conse nesciunt dolorem doloribus vero
                </p>

                </div>
                <div className="flex gap-8 p-2 relative">
                   <Link href='/contact' className="heroR-link w- group relative text-sm px-8 py-4 font-semibold font-syne  bg-gradient-to-r from-blue-500 to bg-pink-500 hover:bg-blue-400  text-slate-300 border border-slate-300">
                    Connect
                    <MoveRight className="absolute group-hover:-right-4 -right-3 transition-all duration-300" />
                </Link>
                <Link href='/contact' className="heroR-link group relative text-sm px-8 py-4 font-semibold font-syne  bg-gradient-to-r from-blue-500 to bg-pink-500 hover:bg-blue-400  text-slate-300 border border-slate-300">
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
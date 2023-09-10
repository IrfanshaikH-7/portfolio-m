import { MoveRight } from "lucide-react";
import Link from "next/link";
const HeroL = () => {
    return (
        <div className=' flex flex-1 flex-col justify-center items-center '>
            <div className="flex flex-col items-center justify-center -mt-3">
                <h3 className='font-cute text-8xl px-2 text-slate-500 '>Irfan</h3>
                <p className=" text-center -mt-4 px-4 text-slate-300">
                    <span className="text-red-100">Greetings,</span>
                    I'm a web developer who loves crafing elegent<br /> and dynamic websites.</p>

                <Link href='/contact' className="heroR-link group relative text-sm px-4 py-1 bg-slate-700 hover:bg-slate-500 hover:scale-105 text-slate-300 ">
                    Connect
                    <MoveRight className="absolute group-hover:-right-4 -right-3 transition-all duration-300" />
                </Link>
            </div>
        </div>
    );
}

export default HeroL;
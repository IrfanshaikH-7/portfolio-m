import Link from "next/link";

const LandingS = () => {
    return (
        <div className="p-8">
            <h1 className=" text-3xl text-blue-200 font-semibold">
                Quicklinks...
            </h1>
            <section className="flex p-2 flex-col gap-2 w-1/2">
            <Link href='/portfolio' className=" flex justify-center items-center w-full h-36 hover:scale-110  bg-gradient-to-r from-purple-400 to-purple-500 rounded-lg hover:border-white border-2 border-blue-200 transition-all duration-300 p-3"><p className=" p-2 transition-all text-base uppercase text-white">welcome</p></Link>
            <div className=" w-full h-24 flex gap-2">
                <Link href='/about' className="w-1/2 h-full hover:w-[400px] transition-all duration-300 bg-gradient-to-r from-rose-400 to-rose-500 rounded-lg"><p className=" p-2 transition-all text-base uppercase text-white">About</p></Link>
            <Link href='/blog' className="w-1/2 h-full hover:w-[500px] transition-all duration-300 bg-gradient-to-r from-yellow-300 to-yellow-500 rounded-lg"><p className=" p-2 transition-all text-base uppercase text-white">Blog</p></Link>
            </div>
            
            <Link href='/contact' className="w-2/3 h-32 hover:w-full transition-all bg-gradient-to-r from-emerald-300 to-emerald-500 rounded-lg"><p className=" p-2 transition-all text-base uppercase text-white">contact</p></Link>
            </section>
            
        </div>

    );
}

export default LandingS;
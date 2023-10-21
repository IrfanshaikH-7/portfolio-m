import { db } from "@/lib/db";
import Projectabs from "./Projectabs";


const MoreProjects = async() => {

    const fullstack = await db.project.findMany( {where: {category: 'fullstack' } } );
    const frontend = await db.project.findMany( {where: {category: 'frontend' } } );
    const backend = await db.project.findMany( {where: {category: 'backend' } } );
    const others = await db.project.findMany( {where: {category: 'others ' } } );

    
    return (
        <div className="flex flex-col lg:flex-row gap-2  justify-start lg:justify-center items-center h-full w-full p-4 ">
            <div className="md:w-full lg:w-20 lg:h-full p-2">
                <div className="flex lg:flex-col justify-center items-center h-full">
                    <div className="h-60 hidden lg:block w-[2px] rounded-lg bg-emerald-400 ml-2 " />
                    <p className="xl:text-5xl justify-self-start text-4xl px-8 md:px-0 md:py-0 uppercase border-2 md:border-none md:rounded-none rounded-3xl lg:-rotate-90  lg:mt-24">projects</p>
                    {/* <p className="xl:text-5xl lg:text-xl text-4xl py-2 px-8 md:px-0 md:py-0 uppercase border-2 rounded-3xl lg:-rotate-90 mt-6 lg:mt-24 ">Projects</p> */}

                </div>
            </div>

            <div className="h-5/6 lg:h-full w-full mt-4  ">
                <Projectabs fullstack={fullstack} frontend={frontend} backend={backend} others={others} />
                
            </div>
        </div>
    );
}

export default MoreProjects;
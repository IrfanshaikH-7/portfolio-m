import { db } from "@/lib/db"
import { format } from "date-fns";
import Image from "next/image";

const Achievements = async() => {

    const achievements = await db.achievement.findMany();

    
  return (
    <section className="mx-auto h-full w-full md:w-[90%] xl:w-[72%] p-4">
        <h3 className="text-center py-4 text-4xl">Achievements & certifications</h3>
        <div className="grid grid-cols-2 gap-4 h-full w-full overflow-y-auto p-4
        
        ">
        {
            achievements.map((achievement) => (
                <div key={achievement.title} className="relative h-full w-full aspect-video group">
                    <Image 
                    src={achievement.imgUrl[0]}
                    alt="img"
                    fill
                    className="aspect-video h-full w-full rounded-lg shadow-md shadow-slate-600 border-2 border-emerald-400 dark:border-white"
                    />
                    <div className="hidden group-hover:flex bg-black/60  h-full w-full absolute flex-col justify-start items-start p-4">
                        <p className=" text-md md:text-xl font-semibold">{achievement.title}</p>
                        <p className=" text-xs text-start">{format(achievement.createdAt,'dd-MM-yyyy')}</p>
                        
                    </div>
                    <p>{achievement.title}</p>
                </div>
            ))
        }
       
        </div>
    </section>
  )
}

export default Achievements


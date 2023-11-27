import { db } from "@/lib/db"
import Image from "next/image";

const Achievements = async() => {

    const achievements = await db.achievement.findMany();

  return (
    <section className="mx-auto h-full w-full md:w-[90%] xl:w-[72%] p-4">
        <div className="grid grid-cols-2 gap-4 h-full w-full overflow-y-auto ">
        {
            achievements.map((achievement) => (
                <div key={achievement.title} className="relative h-full w-full aspect-video">
                    <Image 
                    src={achievement.imgUrl[0]}
                    alt="img"
                    fill
                    className="aspect-video h-full w-full"
                    />
                    <p>{achievement.title}</p>
                </div>
            ))
        }
        </div>
    </section>
  )
}

export default Achievements


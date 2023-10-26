'use client'
import { Project } from "@prisma/client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from 'framer-motion'

type Props = {
    cardDetails: Project[]
}
const ProjectCard = ({ cardDetails }: Props) => {
    const router = useRouter()
    if (!cardDetails || cardDetails.length < 1) {
        return (
            <div className="h-full w-full flex items-center justify-center">
                <p className="text-slate-400 font-semibold text-2xl">No projects yet...</p>
            </div>
        )
    }
    return (
        <>
            <motion.section className="grid sm:grid-cols-2 h-full gap-3 py-8 px-4"
                initial={{ opacity: 0, y: 100}}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3, type: 'tween', delayChildren:2, staggerChildren:3 }  }}
                viewport={{ once: true }}
            >




                {
                    // h-40 md:h-60  xl:h-68 
                    cardDetails.map((item) => (
                        <motion.div key={item.id} className=" flex items-center  justify-center rounded-lg shadow-md w-full bg-slate-900 border border-slate-300  md:aspect-square relative"
                        initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, transition: { duration: 0.3, delay: 0.3, type: 'tween', delayChildren:1, staggerChildren:2 } }}
                
                        >
                            <div className=" bg-slate-300 dark:bg-slate-800 rounded-lg h-full w-full px-2">

                                <div className="relative h-full w-full space-y-1 md:space-y-3 py-2">
                                    <div className="aspect-video w-full relative cursor-pointer" onClick={() => router.push(`/portfolio/${item.id}`)}>
                                        <Image
                                            src={item.imgUrl[0]}
                                            alt="projectImg"
                                            fill
                                            className=" z-10 py-2 rounded-2xl"
                                        />
                                        <div className="h-12 w-40 bg-white absolute rounded-xl bottom-1 right-1" />
                                    </div>

                                    <div className="flex gap-2 sm:gap-1 xl:gap-1 bg-white rounded-3xl px-2 py-1 sm:py-[2px] xl:py-1 ">
                                        {
                                            item.tags.map((tag) => (
                                                <p key={tag} className="text-[9px] xl:text-[11px] text-slate-600 ">#{tag}</p>

                                            ))
                                        }
                                    </div>

                                    <div >
                                        <p className="px-4 text-xs xl:text-base text-slate-700 dark:text-slate-300 font-semibold text-center"><span className="font-semibold ">⪧{" "}</span>{item.note}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))
                }
            </motion.section>
        </>

    );
}

export default ProjectCard;

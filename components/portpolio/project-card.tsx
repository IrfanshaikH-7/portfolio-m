import { Project } from "@prisma/client";
import Image from "next/image";

type Props = {
    cardDetails: Project[]
}
const ProjectCard = ({ cardDetails }: Props) => {
    if (!cardDetails || cardDetails.length < 1) {
        return (
            <div className="h-full w-full flex items-center justify-center">
                <p className="text-slate-400 font-semibold text-2xl">No projects yet...</p>
            </div>
        )
    }
    return (
        <>
            <section className="grid sm:grid-cols-2 h-full gap-3 py-8 px-4">




                {
                    // h-40 md:h-60  xl:h-68 
                    cardDetails.map((item) => (
                        <div key={item.id} className=" flex items-center  justify-center rounded-lg shadow-md w-full bg-slate-900 border border-slate-300  md:aspect-square relative">
                            <div className=" bg-gray-900 rounded-lg h-full w-full px-2">

                                <div className="relative h-full w-full space-y-1 md:space-y-3 py-2">
                                    <div className="aspect-video w-full relative">
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
                                                <p className="text-sm sm:text-[9px] xl:text-[11px] text-slate-600 ">#{tag}</p>

                                            ))
                                        }
                                    </div>
                                    <div >
                                        <p className="px-4 text-slate-300 font-semibold text-center"><span className="font-semibold ">⪧{" "}</span>{item.note}</p>
                                    </div>

                                </div>

                            </div>
                        </div>
                    ))
                }



            </section>
        </>

    );
}

export default ProjectCard;
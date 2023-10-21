import AllProjects from "@/components/portpolio/AllProjects";
import { db } from "@/lib/db";
import { format } from "date-fns";
import { Asterisk, Dot, LucideArrowBigLeftDash } from "lucide-react";
import Image from "next/image";

interface ProjectPageProps {
    params: {
        projectId: string
    }
}

const ProjectPage = async ({ params }: ProjectPageProps) => {
    const project = await db.project.findUnique({ where: { id: params.projectId } })
    const projects = await db.project.findMany();
    const fillteredProjects = projects.filter((prj) => (
        prj.id !== project?.id
    ))
    return (
        <>
            <section className="h-full md:h-screen w-full px-4 md:px-12">
                <div className="px-4 pt-24 md:py-0 h-full min-w-full flex flex-col md:flex-row items-center gap-2 ">
                    <div className=" relative md:w-4/5 w-full aspect-video bg-slate-400 rounded-2xl overflow-hidden min-w-max">
                        <Image
                            src={project?.imgUrl[0]!}
                            alt="project img"
                            fill
                            className="object-fill"
                        />
                    </div>
                    <div className="md:px-12 py-8 md:py-0 group">
                        <h1 className="text-4xl">{project?.title} <LucideArrowBigLeftDash size={24} className="group-hover:rotate-180 inline-block fill-black dark:fill-white transition-all duration-300" /></h1>
                        <h3 className="text-2xl text-slate-700 dark:text-slate-400">{project?.note}</h3>
                        <div className="flex gap-6">
                            <p className="text-slate-500 text-xs"> - {format(project?.updatedAt!, 'MMM dd yyyy')}</p>
                            <p className="text-slate-500 text-xs capitalize"> Type: {project?.category}</p>
                        </div>
                        <div className="py-4">
                            <h3 className="text-2xl text-slate-800 dark:text-slate-400">Techs used -</h3>
                            <div className="flex gap-2">
                                {
                                    project!.tags.map((tag, index) => (
                                        <p className=" bg-emerald-500 text-white text-sm rounded-lg px-3 py-1">{tag}</p>
                                    ))
                                }
                            </div>
                        </div>

                        <div className="py-4">
                            <h3 className="text-2xl text-slate-800 dark:text-slate-400 ">Features implemented.</h3>
                            {
                                project?.pointers.split('.').map((point) => (
                                    <>
                                        <div key={point} className="flex items-center gap-1 ">
                                            <Dot className="h-4 w-4 border-2 rounded-3xl " />
                                            <p>{point}.</p>
                                        </div>
                                    </>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
            <AllProjects projects={fillteredProjects} />
        </>
    )
}

export default ProjectPage;
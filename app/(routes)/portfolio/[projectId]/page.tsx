import AllProjects from "@/components/portpolio/AllProjects";
import { db } from "@/lib/db";
import { format } from "date-fns";
import { Asterisk, CornerDownRight, CornerRightDown, Dot, Github, GithubIcon, Link2, LucideArrowBigLeftDash } from "lucide-react";
import { Url } from "next/dist/shared/lib/router/router";
import Image from "next/image";
import Link from "next/link";

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
                    <div className=" relative md:min-w-min md:w-3/5 w-full  aspect-video bg-slate-400 rounded-2xl overflow-hidden border-2 group transition-all">
                        <Image
                            src={project?.imgUrl[0]!}
                            alt="project img"
                            fill
                            className="object-fill"
                        />
                        <div className="absolute z-10 bg-black/80 h-full w-full transition  duration-300 hidden group-hover:flex">
                                <Link
                                    href={project?.githublink as Url}
                                    className="text-2xl text-slate-200 font-semibold flex flex-1 justify-center items-center hover:bg-black/50 transition duration-300"

                                >
                            <GithubIcon className="h-8 w-8  p-1 rounded-full"/>

                                    Code
                                </Link>
                                <Link
                                    href={project?.livelink as Url}
                                    className="text-2xl text-slate-200 font-semibold flex flex-1 justify-center items-center hover:bg-black/50 transition duration-300"

                                >
                                <Link2 className="h-8 w-8 "/>

                                    Live demo
                                </Link>
                        </div>

                    </div>

                    <div className="md:px-12 py-8 md:py-0 group md:w-2/5 w-auto md:self-auto self-start">
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
                                        <p key={index + tag} className=" bg-emerald-500 text-white text-sm rounded-lg px-3 py-1">{tag}</p>
                                    ))
                                }
                            </div>
                        </div>

                        <div className="py-4">
                            <h3 className="text-2xl text-slate-800 dark:text-slate-400 pb-2">Features implemented.</h3>
                            <div className="flex flex-col gap-1">
                                {
                                    project?.pointers.split('.').map((point, i) => (
                                        <>
                                            <div key={i} className="flex items-start justify-start h-11  gap-2">
                                                <Dot className="h-5 w-5 font-semibold" />
                                                <p className="break-words text-sm md:text-base w-full ">{point}.</p>
                                            </div>
                                        </>
                                    ))
                                }
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <AllProjects projects={fillteredProjects} />
        </>
    )
}

export default ProjectPage;
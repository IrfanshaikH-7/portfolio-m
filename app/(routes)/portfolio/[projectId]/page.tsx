import { db } from "@/lib/db";
import Image from "next/image";

interface ProjectPageProps {
    params : {
        projectId: string
    }
}

const ProjectPage = async({params}: ProjectPageProps) => {
    const project = await db.project.findUnique({where: {id: params.projectId}})
    console.log(project)
    return (
        <section className="h-full md:h-screen w-full px-4 md:px-12">
            <div className=" h-full w-full flex items-center gap-2 ">
                <div className="relative h-3/5 aspect-video bg-slate-400 rounded-2xl animate-pulse">
                    <Image
                    src={project?.imgUrl[0]!}
                    alt="project img"
                    fill
                    className="object-cover"
                    />
                </div>
            </div>
        </section>

        // to do -> store projects in data base 
        //on home projects page find the project and its id 
        //  and redirect to this page with backtick sepcial dymamic object 
        // example: `/portfolio/${projectId}`
    )
}

export default ProjectPage;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ProjectCard from "./project-card";
import { Triangle } from "lucide-react";
import { db } from "@/lib/db";


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
                    <p className="xl:text-5xl justify-self-start text-2xl font-syne lg:-rotate-90  lg:mt-24">projects</p>
                </div>
            </div>

            <div className="h-5/6 lg:h-full w-full mt-4  ">

                <Tabs defaultValue="fullstack" className="w-full h-full justify-end md:flex items-center ">
                    <TabsContent value="fullstack">
                        <section className="h-full w-full overflow-y-scroll bg-blue relative no-scrollbar">
                            <div className="flex flex-col items-center justify-center mb-12 py-2">
                                <h3 className="text-3xl text-center justify-center font-syne uppercase ">Fullstack</h3>
                                <Triangle className="rotate-180 fill-black dark:fill-white h-4 w-4" />
                            </div>
                            <ProjectCard cardDetails={fullstack}/>
                        </section>
                    </TabsContent>
                    <TabsContent value="frontend">
                        <section className="h-full w-full overflow-y-scroll no-scrollbar">
                            <div className="flex flex-col items-center justify-center mb-12 py-2">
                                <h3 className="text-3xl text-center justify-center font-syne uppercase ">frontend</h3>
                                <Triangle className="rotate-180 fill-black dark:fill-white h-4 w-4" />
                            </div>
                            <ProjectCard cardDetails={frontend}/>
                        </section>
                    </TabsContent>
                    <TabsContent value="python">
                        <section className="h-full w-full  overflow-y-scroll no-scrollbar">
                            <div className="flex flex-col items-center justify-center mb-12 py-2">
                                <h3 className="text-3xl text-center justif
                                center font-syne uppercase ">python</h3>
                                <Triangle className="rotate-180 fill-black dark:fill-white h-4 w-4" />
                            </div>
                            <ProjectCard cardDetails={backend}/>
                        </section>
                    </TabsContent>
                    <TabsContent value="others">
                        <section className="h-full w-full  overflow-y-scroll no-scrollbar">
                            <div className="flex flex-col items-center justify-center mb-12 py-2">
                                <h3 className="text-3xl text-center justify-center font-syne uppercase ">Others</h3>
                                <Triangle className="rotate-180 fill-black dark:fill-white h-4 w-4" />
                            </div>

                            <ProjectCard cardDetails={others}/>
                        </section>
                    </TabsContent>
                    <TabsList className="flex md:flex-col xl:w-2/5 mt-2 md:mt-0 md:h-full md:px-12">
                        <TabsTrigger className="" value="fullstack">Full stack</TabsTrigger>
                        <TabsTrigger value="frontend">Frontend</TabsTrigger>
                        <TabsTrigger value="python">Python</TabsTrigger>
                        <TabsTrigger value="others">others</TabsTrigger>
                    </TabsList>
                </Tabs>
            </div>
        </div>
    );
}

export default MoreProjects;
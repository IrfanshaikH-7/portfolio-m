
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ProjectCard from "./project-card";


const MoreProjects = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-2  justify-start lg:justify-center items-center h-full w-full p-4 ">
            <div className="md:w-full lg:w-20 lg:h-full p-2">
                <div className="flex lg:flex-col justify-center items-center h-full">
                <div className="h-60 hidden lg:block w-1 rounded-lg bg-slate-600 ml-2 " />
                <p className="xl:text-5xl justify-self-start text-2xl font-syne lg:-rotate-90 mt-12 lg:mt-24">projects</p>
                </div>
            </div>

            <div className="h-3/4 lg:h-full w-full mt-4  ">
                <Tabs defaultValue="fullstack" className="w-full h-full justify-end md:flex items-center ">
                    <TabsContent value="fullstack">
                        <section className="h-full w-full overflow-y-scroll bg-blue relative">
                            <ProjectCard />
                        </section>
                    </TabsContent>
                    <TabsContent value="frontend">
                        <section className="h-full w-full overflow-y-scroll">
                            <ProjectCard />
                        </section>
                    </TabsContent>
                    <TabsContent value="python">
                        <section className="h-full w-full  overflow-y-scroll">
                            <ProjectCard />
                        </section>
                    </TabsContent>
                    <TabsContent value="others">
                        <section className="flex h-full w-full  overflow-y-scroll">
                            <ProjectCard />
                        </section>
                    </TabsContent>
                    <TabsList className="flex md:flex-col xl:w-1/4 mt-2 md:mt-0 md:h-full md:px-12">
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
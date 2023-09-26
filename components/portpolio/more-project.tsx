
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ProjectCard from "./project-card";


const MoreProjects = () => {
    return (
        <div className="h-full w-full flex p-4 mt-28">
            <Tabs defaultValue="fullstack" className="w-full md:flex">
                <TabsContent value="fullstack">
                    <section className="h-full w-full overflow-y-scroll bg-blue">
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
                <TabsList className="flex">
                    <TabsTrigger className="" value="fullstack">Full stack</TabsTrigger>
                    <TabsTrigger value="frontend">Frontend</TabsTrigger>
                    <TabsTrigger value="python">Python</TabsTrigger>
                    <TabsTrigger value="others">others</TabsTrigger>
                </TabsList>
            </Tabs>

        </div>
    );
}

export default MoreProjects;
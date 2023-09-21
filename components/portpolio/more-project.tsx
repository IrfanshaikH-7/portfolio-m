
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ProjectCard from "./project-card";


const MoreProjects = () => {
    return (
        <div className="h-full w-full flex p-4 mt-28">
            <Tabs defaultValue="fullstack" className="w-full flex flex-col items-start ">
                <TabsList className="flex w-[500px] bg-slate-200/20 backdrop-blur-md border-b border-slate-500">
                    <TabsTrigger className="" value="fullstack">Full stack</TabsTrigger>
                    <TabsTrigger value="hobby">Hobby</TabsTrigger>
                    <TabsTrigger value="others">Others</TabsTrigger>
                </TabsList>
                <TabsContent value="fullstack">
                    <section className="h-full w-full overflow-hidden">
                        <ProjectCard />
                    </section>

                </TabsContent>
                <TabsContent value="hobby">
                <section className="h-full w-full overflow-hidden">
                        <ProjectCard />
                    </section>
                </TabsContent>
                <TabsContent value="others">
                <section className="h-full w-full  overflow-hidden">
                        <ProjectCard />
                    </section>
                </TabsContent>
            </Tabs>
            
        </div>
    );
}

export default MoreProjects;
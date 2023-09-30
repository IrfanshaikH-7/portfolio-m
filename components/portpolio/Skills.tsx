import { languages } from "@/public/data/skills";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
const Skills = () => {

    return (
        <main className="h-full w-full  flex justify-center items-center">
            <section className=" h-[85%] w-[85%] ">
                <div className="flex md:flex-row flex-col h-full">
                    
                <div className="flex lg:flex-col justify-center items-center h-full">
                <div className="h-60 hidden lg:block w-1 rounded-lg bg-slate-600 ml-2 " />
                <p className="xl:text-5xl lg:text-xl text-base font-syne lg:-rotate-90 mt-6 lg:mt-16 ">Skills</p>
                </div>

                    <div className="flex-1 ">
                        
                        <Tabs defaultValue="languages" className=" h-full w-full relative p-2">
                            <TabsList className="">
                                <TabsTrigger className="" value="languages">Languages</TabsTrigger>
                                <TabsTrigger value="frontend">Frontend</TabsTrigger>
                                <TabsTrigger value="backend">Python</TabsTrigger>
                                <TabsTrigger value="others">others</TabsTrigger>
                            </TabsList>
                            <TabsContent value="languages" className="mt-2">
                                <div className="grid grid-cols-2 gap-2 aspect-square  p-1 ">
                                    {
                                        languages.map((lan) => (
                                            <div className="bg-zinc-800 border border-gray-500 aspect-square first:h-32 lg:first:h-40 xl:first:h-44 first:self-end first:justify-self-end last:h-32 last:lg:h-40 xl:last:h-44 rounded-sm ">
                                                <p>{lan.lan}</p>
                                            </div>
                                        ))
                                    }
                                </div>

                            </TabsContent>
                            <TabsContent value="frontend" className="mt-2">
                                <div className="grid grid-cols-2 gap-2 aspect-square  p-1">
                                    {
                                        languages.map((lan) => (
                                            <div className="bg-zinc-800 aspect-square first:h-32 lg:first:h-48 xl:first:h-56 first:self-end first:justify-self-end last:h-32 last:lg:h-48 xl:last:h-56 rounded-sm ">
                                                <p>{lan.lan}</p>
                                            </div>
                                        ))
                                    }
                                </div>

                            </TabsContent>
                            <TabsContent value="backend" className="mt-2">
                                <div className="grid grid-cols-2 gap-2 aspect-square p-1">
                                    {
                                        languages.map((lan) => (
                                            <div className="bg-zinc-800 aspect-square first:h-32 lg:first:h-48 xl:first:h-56 first:self-end first:justify-self-end last:h-32 last:lg:h-48 xl:last:h-56 rounded-sm ">
                                                <p>{lan.lan}</p>
                                            </div>
                                        ))
                                    }
                                </div>

                            </TabsContent>
                            <TabsContent value="others" className="mt-2">
                                <div className="grid grid-cols-2 gap-2 aspect-square p-1">
                                    {
                                        languages.map((lan) => (
                                            <div className="bg-zinc-800 aspect-square first:h-32 lg:first:h-48 xl:first:h-56 first:self-end first:justify-self-end last:h-32 last:lg:h-48 xl:last:h-56 rounded-sm ">
                                                <p>{lan.lan}</p>
                                            </div>
                                        ))
                                    }
                                </div>

                            </TabsContent>

                        </Tabs>
                    </div>
                    <div className="flex-1 flex flex-col p-2">
                    <h3 className="text-sm md:text-base lg:text-lg self-center">Achievements</h3>
                        
                        <div className="flex flex-col items-center justify-center py-6  relative ">

                            <div className="flex max-w-[300px] lg:max-w-md overflow-x-scroll gap-2 xl:max-w-xl px-2">
                                <div className="aspect-video h-40 bg-zinc-700 lg:h-60 xl:h-64  ">

                                </div>
                                <div className="aspect-video h-40 bg-zinc-700 lg:h-60 xl:h-64 ">

                                </div>
                                <div className="aspect-video h-40 bg-zinc-700 lg:h-60 xl:h-64 ">

                                </div>
                                <div className="aspect-video bg-zinc-700 h-40 lg:h-60 xl:h-64 ">

                                </div>



                            </div>
                        </div>
                    </div>

                </div>

            </section>
        </main>
    );
}

export default Skills

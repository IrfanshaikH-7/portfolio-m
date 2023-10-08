import { backend, frontend, languages, others, techs } from "@/public/data/skills";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image";
const Skills = () => {

    return (
        <main className="h-full w-full  flex justify-center items-center">
            <section className=" h-[80%] w-[80%] ">
                <div className="flex md:flex-row flex-col h-full">

                    <div className="flex lg:flex-col justify-center items-center h-full">
                        <div className="h-60 hidden lg:block w-[2px] rounded-lg bg-emerald-400 ml-2 " />
                        <p className="xl:text-5xl lg:text-xl text-base font-syne lg:-rotate-90 mt-6 lg:mt-16 ">Skills</p>
                    </div>

                    <div className="flex-1 ">

                        <Tabs defaultValue="languages" className=" h-full w-full relative p-2 bg-blue-400">
                            <TabsList className="">
                                <TabsTrigger className="" value="languages">Languages</TabsTrigger>
                                <TabsTrigger value="frontend">Frontend</TabsTrigger>
                                <TabsTrigger value="backend">Backend</TabsTrigger>
                                <TabsTrigger value="others">others</TabsTrigger>
                            </TabsList>
                            <TabsContent value="languages" className="mt-2">
                                <div className="grid grid-cols-2 gap-2 aspect-square p-1 md:p-7  bg-blue-300">
                                    {
                                        languages.map((language) => (
                                            <div key={language.lan} className=" relative text-2xl flex items-center justify-center rounded-md border border-white">
                                                <Image
                                                    src={language.img}
                                                    alt="skill"
                                                    fill
                                                    className=" p-4 opacity-40 object-contain"
                                                />
                                                <p className="z-10 font-semibold uppercase">{language.lan}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                            </TabsContent>

                            <TabsContent value="frontend" className="mt-2">
                                <div className="grid grid-cols-2 gap-2 aspect-square p-1 md:p-7 ">
                                    {
                                        frontend.map((skill) => (
                                            <div key={skill.skill} className=" relative text-2xl flex items-center justify-center rounded-md border border-white">
                                                <Image
                                                    src={skill.img}
                                                    alt="skill"
                                                    fill
                                                    className=" p-4 opacity-40 object-contain"
                                                />
                                                <p className="z-10 font-semibold uppercase">{skill.skill}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                            </TabsContent>

                            <TabsContent value="backend" className="mt-2">
                                <div className="grid grid-cols-2 gap-2 aspect-square p-1 md:p-7 ">
                                    {
                                        backend.map((skill) => (
                                            <div key={skill.skill} className=" relative text-2xl flex items-center justify-center rounded-md border border-white">
                                                <Image
                                                    src={skill.img}
                                                    alt="skill"
                                                    fill
                                                    className=" p-4 opacity-40 object-contain"
                                                />
                                                <p className="z-10 font-semibold uppercase">{skill.skill}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                            </TabsContent>

                            <TabsContent value="others" className="mt-2">
                                <div className="grid grid-cols-2 gap-2 aspect-square p-1 md:p-7 ">
                                    {
                                        others.map((skill) => (
                                            <div key={skill.skill} className=" relative text-2xl flex items-center justify-center rounded-md border border-white">
                                                <skill.icon className="h-full w-full absolute p-16 text-slate-600/40" />
                                                <p className="z-10 font-semibold uppercase">{skill.skill}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                            </TabsContent>

                        </Tabs>
                    </div>
                    <div className="flex-1 flex flex-col px-2 py-2 ">
                        <div className="flex w-full items-center justify-center p-2 gap-4">
                        <h3 className="text-sm md:text-base text-white lg:text-lg self-center capitalize">Techs I've been work with</h3>
                            <svg height="2" width="180" className="">
                                <line x1="0" y1="0" x2="200" y2="0" stroke="#34d399" strokeWidth={2} className="text-emerald-400" />
                            </svg>
                        </div>
                       
                        <div className="flex-1 flex-col items-center justify-center mt-2 relative overflow-hidden">

                            {/* <div className="flex max-w-[300px] lg:max-w-md overflow-x-scroll gap-2 xl:max-w-xl px-2">
                                <div className="aspect-video h-40 bg-zinc-700 lg:h-60 xl:h-64  ">

                                </div>
                                <div className="aspect-video h-40 bg-zinc-700 lg:h-60 xl:h-64 ">

                                </div>
                                <div className="aspect-video h-40 bg-zinc-700 lg:h-60 xl:h-64 ">

                                </div>
                                <div className="aspect-video bg-zinc-700 h-40 lg:h-60 xl:h-64 ">

                                </div>



                            </div> */}
                            <div className="grid grid-cols-4 gap-3 aspect-square p-6 h-full">
                                {
                                techs.map((tech) => (
                                    <div className="flex justify-center items-center bg-emerald-400 rounded-xl p-6 aspect-square">
                                        <div className="bg-slate-500 h-full w-full relative">
                                           <Image 
                                           src={tech.tech}
                                           alt="skill"
                                           fill
                                           className="object-contain"
                                           />
                                        </div>
                                    </div>
                                ))
                            }
                            </div>
                            
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
}

export default Skills

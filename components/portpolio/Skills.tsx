"use client"
import { backend, frontend, languages, others, techs } from "@/public/data/skills";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image";
import { motion } from 'framer-motion'
import { Kanban } from "lucide-react";

const Skills = () => {

    return (
        <motion.main className="h-full w-full  flex flex-col lg:flex-row justify-between items-center p-4 gap-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3, type: 'tween' } }}
        >

            <div className=" md:w-full lg:w-20 lg:h-full ">
                <div className="flex lg:flex-col justify-center items-center h-full ">
                    <div className="h-60 hidden lg:block w-[2px] rounded-lg bg-emerald-400 ml-2 " />
                    <div className="flex justify-center items-center xl:text-5xl lg:text-xl text-4xl py-2 px-8 md:px-0 md:py-0 uppercase border-2 md:border-none md:rounded-none rounded-3xl lg:-rotate-90 mt-6 lg:mt-16 text-white group">
                        Skills
                        <Kanban className="h-8 w-8 text-white dark:text-white group-hover:rotate-180 transition-all duration-300" />
                    </div>
                </div>
            </div>



            <div className="flex flex-1 md:flex-row flex-col h-full w-full mt-4">
                <div className="flex-1 ">

                    <Tabs defaultValue="languages" className=" h-full w-full relative p-2 ">
                        <TabsList className="flex gap-2 w-">
                            <TabsTrigger className="" value="languages">Languages</TabsTrigger>
                            <TabsTrigger value="frontend">Frontend</TabsTrigger>
                            <TabsTrigger value="backend">Backend</TabsTrigger>
                            <TabsTrigger value="others">others</TabsTrigger>
                        </TabsList>

                        <TabsContent value="languages" className="mt-2">
                            <div className="grid grid-cols-2 gap-2 aspect-square p-1 md:p-7  ">
                                {
                                    languages.map((language) => (
                                        <div key={language.lan} className=" relative text-2xl flex items-center justify-center rounded-md border-2  dark:border border-white">
                                            <Image
                                                src={language.img}
                                                alt="skill"
                                                fill
                                                className=" p-4 opacity-40 hover:opacity-100 object-contain transition-all duration-300"
                                            />
                                            <p className="z-10 font-semibold uppercase text-sm sm:text-base text-white">{language.lan}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </TabsContent>

                        <TabsContent value="frontend" className="mt-2">
                            <div className="grid grid-cols-2 gap-2 aspect-square p-1 md:p-7  ">
                                {
                                    frontend.map((language) => (
                                        <div key={language.skill} className=" relative text-2xl flex items-center justify-center rounded-md border-2  dark:border border-white">
                                            <Image
                                                src={language.img}
                                                alt="skill"
                                                fill
                                                className=" p-4 opacity-40 hover:opacity-100 object-contain transition-all duration-300"
                                            />
                                            <p className="z-10 font-semibold uppercase text-sm sm:text-base text-white">{language.skill}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </TabsContent>

                        <TabsContent value="backend" className="mt-2">
                            <div className="grid grid-cols-2 gap-2 aspect-square p-1 md:p-7 ">
                                {
                                    backend.map((skill) => (
                                        <div key={skill.skill} className="relative text-2xl flex items-center justify-center rounded-md border-2  dark:border border-white">
                                            <Image
                                                src={skill.img}
                                                alt="skill"
                                                fill
                                                className=" p-4 opacity-40 hover:opacity-100 object-contain transition-all duration-300"
                                            />
                                            <p className="z-10 font-semibold uppercase text-sm sm:text-base text-white">{skill.skill}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </TabsContent>

                        <TabsContent value="others" className="mt-2">
                            <div className="grid grid-cols-2 gap-2 aspect-square p-1 md:p-7 ">
                                {
                                    others.map((skill) => (
                                        <div key={skill.skill} className=" relative text-2xl flex items-center justify-center rounded-md border-2  dark:border border-white">
                                            <skill.icon className="h-full w-full absolute p-16 text-slate-600/40 hover:text-slate-600 transition-all duration-300" />
                                            <p className="z-10 font-semibold uppercase text-sm sm:text-base text-white">{skill.skill}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
                <div className="flex-1 flex flex-col px-2 py-2 ">
                    <div className="flex w-full items-center justify-center p-2 gap-4">
                        <h3 className="text-sm md:text-base text-white lg:text-lg self-center capitalize">Techs I&lsquo;ve been work with</h3>
                        <svg height="2" width="180" className="">
                            <line x1="0" y1="0" x2="200" y2="0" stroke="#34d399" strokeWidth={2} className="text-emerald-400" />
                        </svg>
                    </div>

                    <div className="flex-1 flex-col items-center justify-center mt-2 relative overflow-hidden px-3">
                        <div className="grid grid-cols-4 grid-rows-4 gap-6 md:gap-4 aspect-square p-2 lg:p-16 ">
                            {
                                // hover:shadow-[0px_10px_20px_rgba(256,256,256)]
                                techs.map((tech) => (
                                    <div key={tech.tech} className=" relative aspect-square rounded-full border border-white dark:border-slate-400  hover:-translate-y-[2px] hover:shadow-[0px_22px_24px_0px_#FFFFFF24] transition-all duration-300">
                                        <Image
                                            src={tech.tech}
                                            alt="skill"
                                            fill
                                            className="object-contain p-3.5 lg:p-4 "
                                        />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </motion.main>
    );
}

export default Skills

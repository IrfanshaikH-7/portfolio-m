"use client"
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Triangle } from "lucide-react";
import { Project } from '@prisma/client';
import { motion } from 'framer-motion'
import ProjectCard from './Project-card';

type Props = {
    fullstack: Project[],
    frontend: Project[],
    backend: Project[],
    others: Project[]
}
const Projectabs = ({
    fullstack,
    frontend,
    backend,
    others
}: Props) => {
    return (
        <motion.div className='h-full w-full'
        initial={{ opacity: 0, y: 100 }} 
 whileInView={{ opacity: 1, y: 0, transition:{duration:0.5,delay:0.3, type:'tween'}  }} 
        >
            <Tabs defaultValue="fullstack" className="w-full h-full justify-end md:flex items-center ">
            <TabsList className="sm:hidden flex md:flex-col xl:w-2/5 mt-2 md:mt-0 md:h-full md:px-12 bg-transparent border border-slate-400 backdrop-blur-md">
                    <TabsTrigger className="" value="fullstack">Full stack</TabsTrigger>
                    <TabsTrigger value="frontend">Frontend</TabsTrigger>
                    <TabsTrigger value="python">Python</TabsTrigger>
                    <TabsTrigger value="others">others</TabsTrigger>
                </TabsList>
                <TabsContent value="fullstack" className='sm:mt-0 mt-4'>
                    <section className="h-full w-full overflow-y-scroll bg-blue relative no-scrollbar ">
                        <div className="flex flex-col items-center justify-center mb-12 py-2">
                            <h3 className="text-3xl text-center justify-center  uppercase ">Fullstack</h3>
                            <Triangle className="rotate-180 fill-black dark:fill-white h-4 w-4" />
                        </div>
                        <ProjectCard cardDetails={fullstack} />
                    </section>
                </TabsContent>
                <TabsContent value="frontend" className='sm:mt-0 mt-4'>
                    <section className="h-full w-full overflow-y-scroll no-scrollbar">
                        <div className="flex flex-col items-center justify-center mb-12 py-2">
                            <h3 className="text-3xl text-center justify-center  uppercase ">frontend</h3>
                            <Triangle className="rotate-180 fill-black dark:fill-white h-4 w-4" />
                        </div>
                        <ProjectCard cardDetails={frontend} />
                    </section>
                </TabsContent>
                <TabsContent value="python" className='sm:mt-0 mt-4'>
                    <section className="h-full w-full  overflow-y-scroll no-scrollbar">
                        <div className="flex flex-col items-center justify-center mb-12 py-2">
                            <h3 className="text-3xl text-center justif
                                center  uppercase ">python</h3>
                            <Triangle className="rotate-180 fill-black dark:fill-white h-4 w-4" />
                        </div>
                        <ProjectCard cardDetails={backend} />
                    </section>
                </TabsContent>
                <TabsContent value="others" className='sm:mt-0 mt-4'>
                    <section className="h-full w-full  overflow-y-scroll no-scrollbar">
                        <div className="flex flex-col items-center justify-center mb-12 py-2">
                            <h3 className="text-3xl text-center justify-center  uppercase ">Others</h3>
                            <Triangle className="rotate-180 fill-black dark:fill-white h-4 w-4" />
                        </div>

                        <ProjectCard cardDetails={others} />
                    </section>
                </TabsContent>
                <TabsList className="hidden sm:flex md:flex-col xl:w-2/5 mt-2 md:mt-0 md:h-full md:px-12 bg-transparent border border-slate-400 backdrop-blur-md">
                    <TabsTrigger className="" value="fullstack">Full stack</TabsTrigger>
                    <TabsTrigger value="frontend">Frontend</TabsTrigger>
                    <TabsTrigger value="python">Python</TabsTrigger>
                    <TabsTrigger value="others">others</TabsTrigger>
                </TabsList>
                
            </Tabs>
        </motion.div>
    )
}

export default Projectabs

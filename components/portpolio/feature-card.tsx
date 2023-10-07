"use client"
import { useFeatureStore } from "@/lib/store";
import { cn } from "@/lib/utils"
import Image from "next/image";
import { motion } from 'framer-motion'
import { ExternalLink, ExternalLinkIcon, Github, GithubIcon, LucideGithub } from "lucide-react";
import Link from "next/link";



type FeatureCardProps = {
    gradient: string,
    children: React.ReactNode,
} & CardProps

type CardProps = {
    title: string;
    id: string;
    imgUrl: string;
    note: string;
    tags: string[];
    githublink: string;
    livelink: string;
    discription: string;

}
const FeatureCard = ({ children, gradient, id }: FeatureCardProps) => {
    const isInViewF = useFeatureStore((state) => state.inViewF)

    return (
        <div className={cn(" absolute inset-0 h-full w-full bg-gradient-to-br  p-1 border rounded-[50px] transition-all duration-300",
            gradient,
            isInViewF === id ? 'opacity-100' : 'opacity-0'
        )}>
            {children}
        </div>
    )
}

export const Discord = ({ id, title, imgUrl, note, tags, githublink, livelink, discription }: CardProps) => {
    return (
        <FeatureCard id={id} gradient="from-black to-slate-700"
            title={title}
            imgUrl=""
            note={note}
            tags={tags}
            githublink={githublink}
            livelink={livelink}
            discription={discription}
        >
            <div className="h-full w-full flex items-center justify-center  text-2xl font-semibold text-black font-syne case !z-30 ">
                <div className="hidden xl:flex absolute space-y-4 p-1 xl:p-4  items-center justify-start h-full w-full bg-gradient-to-r from-emerald-300  to-emerald-400 opacity-0 group-hover:opacity-100 group-hover:-translate-x-72 hover:-translate-x-72 xl:group-hover:-translate-x-96 xl:hover:-translate-x-96 transition-all duration-500 rounded-[50px]">
                    <div className="  h-full w-4/5 xl:w-2/3 bg-white py-6 px-3 overflow-hidden rounded-[50px] relative ">
                    <h3 className="text-xs xl:text-sm font-mono text-slate-800">introduction -</h3>
                    <p className="text-xs md:text-[10px] xl:text-xs font-mono indent-6 break-words text-slate-700 ">
                    We know discord, My discord clone application is a project that aims to replicate the core features and functionality of discord. It is built using Next.js, Socket.io, TypeScript, and SQL. Some of the features that my discord clone application offers are:
                    </p>
                        <p className="text-xs md:text-[8px] xl:text-xs font-mono break-words text-slate-700 mt-1 overflow-hidden">
                        {discription}
                             </p>
                    </div>
                </div>
                <section className="hidden xl:flex h-full w-full  flex-col gap-4 justify-start items-center">
                    <div className="w-5/6 h-4/6 bg-white rounded-xl mt-8 relative overflow-hidden p-2">
                        <Image
                        src={imgUrl}
                        fill
                        alt="project"
                        className="p-[2px] rounded-xl"
                        />
                    </div>
                    <div className="flex gap-1 xl:gap-3 flex-wrap z-30">
                        {
                            tags.map((tag) => (
                                <p key={tag} className="xl:text-xs font-mono text-[10px] h-fit text-indigo-800 md:bg-sky-400 px-1 xl:px-2 rounded-md">{tag}</p>

                            ))
                        }
                    </div>
                </section>
                                <div className=" xl:hidden absolute space-y-4 p-1 xl:p-4 flex items-end justify-start h-full w-full bg-gradient-to-r from-emerald-300  to-emerald-400 opacity-0 group-hover:opacity-100 group-hover:translate-y-72 hover:translate-y-72 lg:group-hover:translate-y-64 lg:hover:translate-y-64 transition-all duration-500 rounded-[50px]">
                    <div className="  h-[90%] w-full bg-white py-6 px-3 overflow-hidden rounded-[50px] relative ">
                    <h3 className="text-sm  font-mono text-slate-800">introduction -</h3>
                    <p className="text-xs font-mono indent-6 break-words text-slate-700 ">
                    We know discord, My discord clone application is a project that aims to replicate the core features and functionality of discord. It is built using Next.js, Socket.io, TypeScript, and SQL. Some of the features that my discord clone application offers are:
                    </p>
                        <p className="text-xs font-mono break-words text-slate-700 mt-1 overflow-hidden">
                        {discription}
                             </p>
                    </div>
                </div>
                <section className=" xl:hidden h-full w-full flex flex-col gap-4 justify-start items-center">
                    <div className="w-5/6 h-4/6 bg-white rounded-xl mt-8 relative overflow-hidden p-2">
                        <Image
                        src={imgUrl}
                        fill
                        alt="project"
                        className="p-[2px] rounded-xl"
                        />
                    </div>
                    <div className="flex gap-1 xl:gap-3 flex-wrap z-30">
                        {
                            tags.map((tag) => (
                                <p key={tag} className=" font-mono text-xs h-fit text-indigo-800 md:bg-sky-400 px-2 rounded-md">{tag}</p>

                            ))
                        }
                    </div>
                </section>
            </div >
        </FeatureCard>
    );
}
export const Saas = ({ id, title, imgUrl, note, tags, githublink, livelink, discription }: CardProps) => {
    return (
        <FeatureCard id={id} gradient="from-white to-blue-400"
            title={title}
            imgUrl=""
            note={note}
            tags={tags}
            githublink={githublink}
            livelink={livelink}
            discription={discription}
        >
           <div className="h-full w-full flex items-center justify-center  text-2xl font-semibold text-black font-syne case !z-30 ">
                <div className="hidden xl:flex absolute space-y-4 p-1 xl:p-4  items-center justify-start h-full w-full bg-gradient-to-r from-emerald-300  to-emerald-400 opacity-0 group-hover:opacity-100 group-hover:-translate-x-72 hover:-translate-x-72 xl:group-hover:-translate-x-96 xl:hover:-translate-x-96 transition-all duration-500 rounded-[50px]">
                    <div className="  h-full w-4/5 xl:w-2/3 bg-white py-6 px-3 overflow-hidden rounded-[50px] relative ">
                    <h3 className="text-xs xl:text-sm font-mono text-slate-800">introduction -</h3>
                    <p className="text-xs md:text-[10px] xl:text-xs font-mono indent-6 break-words text-slate-700 ">
                    We know discord, My discord clone application is a project that aims to replicate the core features and functionality of discord. It is built using Next.js, Socket.io, TypeScript, and SQL. Some of the features that my discord clone application offers are:
                    </p>
                        <p className="text-xs md:text-[8px] xl:text-xs font-mono break-words text-slate-700 mt-1 overflow-hidden">
                        {discription}
                             </p>
                    </div>
                </div>
                <section className="hidden xl:flex h-full w-full  flex-col gap-4 justify-start items-center">
                    <div className="w-5/6 h-4/6 bg-white rounded-xl mt-8 relative overflow-hidden p-2">
                        <Image
                        src={imgUrl}
                        fill
                        alt="project"
                        className="p-[2px] rounded-xl"
                        />
                    </div>
                    <div className="flex gap-1 xl:gap-3 flex-wrap z-30">
                        {
                            tags.map((tag) => (
                                <p key={tag} className="xl:text-xs font-mono text-[10px] h-fit text-indigo-800 md:bg-sky-400 px-1 xl:px-2 rounded-md">{tag}</p>

                            ))
                        }
                    </div>
                </section>
                                <div className=" xl:hidden absolute space-y-4 p-1 xl:p-4 flex items-end justify-start h-full w-full bg-gradient-to-r from-emerald-300  to-emerald-400 opacity-0 group-hover:opacity-100 group-hover:translate-y-72 hover:translate-y-72 lg:group-hover:translate-y-64 lg:hover:translate-y-64 transition-all duration-500 rounded-[50px]">
                    <div className="  h-[90%] w-full bg-white py-6 px-3 overflow-hidden rounded-[50px] relative ">
                    <h3 className="text-sm  font-mono text-slate-800">introduction -</h3>
                    <p className="text-xs font-mono indent-6 break-words text-slate-700 ">
                    We know discord, My discord clone application is a project that aims to replicate the core features and functionality of discord. It is built using Next.js, Socket.io, TypeScript, and SQL. Some of the features that my discord clone application offers are:
                    </p>
                        <p className="text-xs font-mono break-words text-slate-700 mt-1 overflow-hidden">
                        {discription}
                             </p>
                    </div>
                </div>
                <section className=" xl:hidden h-full w-full flex flex-col gap-4 justify-start items-center">
                    <div className="w-5/6 h-4/6 bg-white rounded-xl mt-8 relative overflow-hidden p-2">
                        <Image
                        src={imgUrl}
                        fill
                        alt="project"
                        className="p-[2px] rounded-xl"
                        />
                    </div>
                    <div className="flex gap-1 xl:gap-3 flex-wrap z-30">
                        {
                            tags.map((tag) => (
                                <p key={tag} className=" font-mono text-xs h-fit text-indigo-800 md:bg-sky-400 px-2 rounded-md">{tag}</p>

                            ))
                        }
                    </div>
                </section>
            </div >
        </FeatureCard>
    );
}
export const NewLife = ({ id, title, imgUrl, note, tags, githublink, livelink, discription }: CardProps) => {
    return (
        <FeatureCard id={id} gradient="from-white to-green-400"
            title={title}
            imgUrl=""
            note={note}
            tags={tags}
            githublink={githublink}
            livelink={livelink}
            discription={discription}
        >
            <div className="h-full w-full flex items-center justify-center  text-2xl font-semibold text-black font-syne case !z-30 ">
                <div className="hidden xl:flex absolute space-y-4 p-1 xl:p-4  items-center justify-start h-full w-full bg-gradient-to-r from-emerald-300  to-emerald-400 opacity-0 group-hover:opacity-100 group-hover:-translate-x-72 hover:-translate-x-72 xl:group-hover:-translate-x-96 xl:hover:-translate-x-96 transition-all duration-500 rounded-[50px]">
                    <div className="  h-full w-4/5 xl:w-2/3 bg-white py-6 px-3 overflow-hidden rounded-[50px] relative ">
                    <h3 className="text-xs xl:text-sm font-mono text-slate-800">introduction -</h3>
                    <p className="text-xs md:text-[10px] xl:text-xs font-mono indent-6 break-words text-slate-700 ">
                    We know discord, My discord clone application is a project that aims to replicate the core features and functionality of discord. It is built using Next.js, Socket.io, TypeScript, and SQL. Some of the features that my discord clone application offers are:
                    </p>
                        <p className="text-xs md:text-[8px] xl:text-xs font-mono break-words text-slate-700 mt-1 overflow-hidden">
                        {discription}
                             </p>
                    </div>
                </div>
                <section className="hidden xl:flex h-full w-full  flex-col gap-4 justify-start items-center">
                    <div className="w-5/6 h-4/6 bg-white rounded-xl mt-8 relative overflow-hidden p-2">
                        <Image
                        src={imgUrl}
                        fill
                        alt="project"
                        className="p-[2px] rounded-xl"
                        />
                    </div>
                    <div className="flex gap-1 xl:gap-3 flex-wrap z-30">
                        {
                            tags.map((tag) => (
                                <p key={tag} className="xl:text-xs font-mono text-[10px] h-fit text-indigo-800 md:bg-sky-400 px-1 xl:px-2 rounded-md">{tag}</p>

                            ))
                        }
                    </div>
                </section>
                                <div className=" xl:hidden absolute space-y-4 p-1 xl:p-4 flex items-end justify-start h-full w-full bg-gradient-to-r from-emerald-300  to-emerald-400 opacity-0 group-hover:opacity-100 group-hover:translate-y-72 hover:translate-y-72 lg:group-hover:translate-y-64 lg:hover:translate-y-64 transition-all duration-500 rounded-[50px]">
                    <div className="  h-[90%] w-full bg-white py-6 px-3 overflow-hidden rounded-[50px] relative ">
                    <h3 className="text-sm  font-mono text-slate-800">introduction -</h3>
                    <p className="text-xs font-mono indent-6 break-words text-slate-700 ">
                    We know discord, My discord clone application is a project that aims to replicate the core features and functionality of discord. It is built using Next.js, Socket.io, TypeScript, and SQL. Some of the features that my discord clone application offers are:
                    </p>
                        <p className="text-xs font-mono break-words text-slate-700 mt-1 overflow-hidden">
                        {discription}
                             </p>
                    </div>
                </div>
                <section className=" xl:hidden h-full w-full flex flex-col gap-4 justify-start items-center">
                    <div className="w-5/6 h-4/6 bg-white rounded-xl mt-8 relative overflow-hidden p-2">
                        <Image
                        src={imgUrl}
                        fill
                        alt="project"
                        className="p-[2px] rounded-xl"
                        />
                    </div>
                    <div className="flex gap-1 xl:gap-3 flex-wrap z-30">
                        {
                            tags.map((tag) => (
                                <p key={tag} className=" font-mono text-xs h-fit text-indigo-800 md:bg-sky-400 px-2 rounded-md">{tag}</p>

                            ))
                        }
                    </div>
                </section>
            </div >
        </FeatureCard>
    );
}
export const Port = ({ id, title, imgUrl, note, tags, githublink, livelink, discription }: CardProps) => {
    return (
        <FeatureCard id={id} gradient="from-white to-emerald-400"
            title={title}
            imgUrl=""
            note={note}
            tags={tags}
            githublink={githublink}
            livelink={livelink}
            discription={discription}
        >
           <div className="h-full w-full flex items-center justify-center  text-2xl font-semibold text-black font-syne case !z-30 ">
                <div className="hidden xl:flex absolute space-y-4 p-1 xl:p-4  items-center justify-start h-full w-full bg-gradient-to-r from-emerald-300  to-emerald-400 opacity-0 group-hover:opacity-100 group-hover:-translate-x-72 hover:-translate-x-72 xl:group-hover:-translate-x-96 xl:hover:-translate-x-96 transition-all duration-500 rounded-[50px]">
                    <div className="  h-full w-4/5 xl:w-2/3 bg-white py-6 px-3 overflow-hidden rounded-[50px] relative ">
                    <h3 className="text-xs xl:text-sm font-mono text-slate-800">introduction -</h3>
                    <p className="text-xs md:text-[10px] xl:text-xs font-mono indent-6 break-words text-slate-700 ">
                    We know discord, My discord clone application is a project that aims to replicate the core features and functionality of discord. It is built using Next.js, Socket.io, TypeScript, and SQL. Some of the features that my discord clone application offers are:
                    </p>
                        <p className="text-xs md:text-[8px] xl:text-xs font-mono break-words text-slate-700 mt-1 overflow-hidden">
                        {discription}
                             </p>
                    </div>
                </div>
                <section className="hidden xl:flex h-full w-full  flex-col gap-4 justify-start items-center">
                    <div className="w-5/6 h-4/6 bg-white rounded-xl mt-8 relative overflow-hidden p-2">
                        <Image
                        src={imgUrl}
                        fill
                        alt="project"
                        className="p-[2px] rounded-xl"
                        />
                    </div>
                    <div className="flex gap-1 xl:gap-3 flex-wrap z-30">
                        {
                            tags.map((tag) => (
                                <p key={tag} className="xl:text-xs font-mono text-[10px] h-fit text-indigo-800 md:bg-sky-400 px-1 xl:px-2 rounded-md">{tag}</p>

                            ))
                        }
                    </div>
                </section>
                                <div className=" xl:hidden absolute space-y-4 p-1 xl:p-4 flex items-end justify-start h-full w-full bg-gradient-to-r from-emerald-300  to-emerald-400 opacity-0 group-hover:opacity-100 group-hover:translate-y-72 hover:translate-y-72 lg:group-hover:translate-y-64 lg:hover:translate-y-64 transition-all duration-500 rounded-[50px]">
                    <div className="  h-[90%] w-full bg-white py-6 px-3 overflow-hidden rounded-[50px] relative ">
                    <h3 className="text-sm  font-mono text-slate-800">introduction -</h3>
                    <p className="text-xs font-mono indent-6 break-words text-slate-700 ">
                    We know discord, My discord clone application is a project that aims to replicate the core features and functionality of discord. It is built using Next.js, Socket.io, TypeScript, and SQL. Some of the features that my discord clone application offers are:
                    </p>
                        <p className="text-xs font-mono break-words text-slate-700 mt-1 overflow-hidden">
                        {discription}
                             </p>
                    </div>
                </div>
                <section className=" xl:hidden h-full w-full flex flex-col gap-4 justify-start items-center">
                    <div className="w-5/6 h-4/6 bg-white rounded-xl mt-8 relative overflow-hidden p-2">
                        <Image
                        src={imgUrl}
                        fill
                        alt="project"
                        className="p-[2px] rounded-xl"
                        />
                    </div>
                    <div className="flex gap-1 xl:gap-3 flex-wrap z-30">
                        {
                            tags.map((tag) => (
                                <p key={tag} className=" font-mono text-xs h-fit text-indigo-800 md:bg-sky-400 px-2 rounded-md">{tag}</p>

                            ))
                        }
                    </div>
                </section>
            </div >
        </FeatureCard>
    );
}
export const Animata = ({ id, title, imgUrl, note, tags, githublink, livelink, discription }: CardProps) => {
    return (
        <FeatureCard id={id} gradient="from-white to-rose-400"
            title={title}
            imgUrl=""
            note={note}
            tags={tags}
            githublink={githublink}
            livelink={livelink}
            discription={discription}
        >
           <div className="h-full w-full flex items-center justify-center  text-2xl font-semibold text-black font-syne case !z-30 ">
                <div className="hidden xl:flex absolute space-y-4 p-1 xl:p-4  items-center justify-start h-full w-full bg-gradient-to-r from-emerald-300  to-emerald-400 opacity-0 group-hover:opacity-100 group-hover:-translate-x-72 hover:-translate-x-72 xl:group-hover:-translate-x-96 xl:hover:-translate-x-96 transition-all duration-500 rounded-[50px]">
                    <div className="  h-full w-4/5 xl:w-2/3 bg-white py-6 px-3 overflow-hidden rounded-[50px] relative ">
                    <h3 className="text-xs xl:text-sm font-mono text-slate-800">introduction -</h3>
                    <p className="text-xs md:text-[10px] xl:text-xs font-mono indent-6 break-words text-slate-700 ">
                    We know discord, My discord clone application is a project that aims to replicate the core features and functionality of discord. It is built using Next.js, Socket.io, TypeScript, and SQL. Some of the features that my discord clone application offers are:
                    </p>
                        <p className="text-xs md:text-[8px] xl:text-xs font-mono break-words text-slate-700 mt-1 overflow-hidden">
                        {discription}
                             </p>
                    </div>
                </div>
                <section className="hidden xl:flex h-full w-full  flex-col gap-4 justify-start items-center">
                    <div className="w-5/6 h-4/6 bg-white rounded-xl mt-8 relative overflow-hidden p-2">
                        <Image
                        src={imgUrl}
                        fill
                        alt="project"
                        className="p-[2px] rounded-xl"
                        />
                    </div>
                    <div className="flex gap-1 xl:gap-3 flex-wrap z-30">
                        {
                            tags.map((tag) => (
                                <p key={tag} className="xl:text-xs font-mono text-[10px] h-fit text-indigo-800 md:bg-sky-400 px-1 xl:px-2 rounded-md">{tag}</p>

                            ))
                        }
                    </div>
                </section>
                                <div className=" xl:hidden absolute space-y-4 p-1 xl:p-4 flex items-end justify-start h-full w-full bg-gradient-to-r from-emerald-300  to-emerald-400 opacity-0 group-hover:opacity-100 group-hover:translate-y-72 hover:translate-y-72 lg:group-hover:translate-y-64 lg:hover:translate-y-64 transition-all duration-500 rounded-[50px]">
                    <div className="  h-[90%] w-full bg-white py-6 px-3 overflow-hidden rounded-[50px] relative ">
                    <h3 className="text-sm  font-mono text-slate-800">introduction -</h3>
                    <p className="text-xs font-mono indent-6 break-words text-slate-700 ">
                    We know discord, My discord clone application is a project that aims to replicate the core features and functionality of discord. It is built using Next.js, Socket.io, TypeScript, and SQL. Some of the features that my discord clone application offers are:
                    </p>
                        <p className="text-xs font-mono break-words text-slate-700 mt-1 overflow-hidden">
                        {discription}
                             </p>
                    </div>
                </div>
                <section className=" xl:hidden h-full w-full flex flex-col gap-4 justify-start items-center">
                    <div className="w-5/6 h-4/6 bg-white rounded-xl mt-8 relative overflow-hidden p-2">
                        <Image
                        src={imgUrl}
                        fill
                        alt="project"
                        className="p-[2px] rounded-xl"
                        />
                    </div>
                    <div className="flex gap-1 xl:gap-3 flex-wrap z-30">
                        {
                            tags.map((tag) => (
                                <p key={tag} className=" font-mono text-xs h-fit text-indigo-800 md:bg-sky-400 px-2 rounded-md">{tag}</p>

                            ))
                        }
                    </div>
                </section>
            </div >
        </FeatureCard>
    );
}
export const LMS = ({ id, title, imgUrl, note, tags, githublink, livelink, discription }: CardProps) => {
    return (
        <FeatureCard id={id} gradient="from-white to-yellow-600"
            title={title}
            imgUrl=""
            note={note}
            tags={tags}
            githublink={githublink}
            livelink={livelink}
            discription={discription}
        >
            <div className="h-full w-full flex items-center justify-center  text-2xl font-semibold text-black font-syne case !z-30 ">
                <div className="hidden xl:flex absolute space-y-4 p-1 xl:p-4  items-center justify-start h-full w-full bg-gradient-to-r from-emerald-300  to-emerald-400 opacity-0 group-hover:opacity-100 group-hover:-translate-x-72 hover:-translate-x-72 xl:group-hover:-translate-x-96 xl:hover:-translate-x-96 transition-all duration-500 rounded-[50px]">
                    <div className="  h-full w-4/5 xl:w-2/3 bg-white py-6 px-3 overflow-hidden rounded-[50px] relative ">
                    <h3 className="text-xs xl:text-sm font-mono text-slate-800">introduction -</h3>
                    <p className="text-xs md:text-[10px] xl:text-xs font-mono indent-6 break-words text-slate-700 ">
                    We know discord, My discord clone application is a project that aims to replicate the core features and functionality of discord. It is built using Next.js, Socket.io, TypeScript, and SQL. Some of the features that my discord clone application offers are:
                    </p>
                        <p className="text-xs md:text-[8px] xl:text-xs font-mono break-words text-slate-700 mt-1 overflow-hidden">
                        {discription}
                             </p>
                    </div>
                </div>
                <section className="hidden xl:flex h-full w-full  flex-col gap-4 justify-start items-center">
                    <div className="w-5/6 h-4/6 bg-white rounded-xl mt-8 relative overflow-hidden p-2">
                        <Image
                        src={imgUrl}
                        fill
                        alt="project"
                        className="p-[2px] rounded-xl"
                        />
                    </div>
                    <div className="flex gap-1 xl:gap-3 flex-wrap z-30">
                        {
                            tags.map((tag) => (
                                <p key={tag} className="xl:text-xs font-mono text-[10px] h-fit text-indigo-800 md:bg-sky-400 px-1 xl:px-2 rounded-md">{tag}</p>

                            ))
                        }
                    </div>
                </section>
                                <div className=" xl:hidden absolute space-y-4 p-1 xl:p-4 flex items-end justify-start h-full w-full bg-gradient-to-r from-emerald-300  to-emerald-400 opacity-0 group-hover:opacity-100 group-hover:translate-y-72 hover:translate-y-72 lg:group-hover:translate-y-64 lg:hover:translate-y-64 transition-all duration-500 rounded-[50px]">
                    <div className="  h-[90%] w-full bg-white py-6 px-3 overflow-hidden rounded-[50px] relative ">
                    <h3 className="text-sm  font-mono text-slate-800">introduction -</h3>
                    <p className="text-xs font-mono indent-6 break-words text-slate-700 ">
                    We know discord, My discord clone application is a project that aims to replicate the core features and functionality of discord. It is built using Next.js, Socket.io, TypeScript, and SQL. Some of the features that my discord clone application offers are:
                    </p>
                        <p className="text-xs font-mono break-words text-slate-700 mt-1 overflow-hidden">
                        {discription}
                             </p>
                    </div>
                </div>
                <section className=" xl:hidden h-full w-full flex flex-col gap-4 justify-start items-center">
                    <div className="w-5/6 h-4/6 bg-white rounded-xl mt-8 relative overflow-hidden p-2">
                        <Image
                        src={imgUrl}
                        fill
                        alt="project"
                        className="p-[2px] rounded-xl"
                        />
                    </div>
                    <div className="flex gap-1 xl:gap-3 flex-wrap z-30">
                        {
                            tags.map((tag) => (
                                <p key={tag} className=" font-mono text-xs h-fit text-indigo-800 md:bg-sky-400 px-2 rounded-md">{tag}</p>

                            ))
                        }
                    </div>
                </section>
            </div >
        </FeatureCard>
    );
}
export const Thread = ({ id, title, imgUrl, note, tags, githublink, livelink, discription }: CardProps) => {
    return (
        <FeatureCard id={id} gradient="from-white to-pink-600"
            title={title}
            imgUrl=""
            note={note}
            tags={tags}
            githublink={githublink}
            livelink={livelink}
            discription={discription}
        >
            <div className="h-full w-full flex items-center justify-center  text-2xl font-semibold text-black font-syne case !z-30 ">
                <div className="hidden xl:flex absolute space-y-4 p-1 xl:p-4  items-center justify-start h-full w-full bg-gradient-to-r from-emerald-300  to-emerald-400 opacity-0 group-hover:opacity-100 group-hover:-translate-x-72 hover:-translate-x-72 xl:group-hover:-translate-x-96 xl:hover:-translate-x-96 transition-all duration-500 rounded-[50px]">
                    <div className="  h-full w-4/5 xl:w-2/3 bg-white py-6 px-3 overflow-hidden rounded-[50px] relative ">
                    <h3 className="text-xs xl:text-sm font-mono text-slate-800">introduction -</h3>
                    <p className="text-xs md:text-[10px] xl:text-xs font-mono indent-6 break-words text-slate-700 ">
                    We know discord, My discord clone application is a project that aims to replicate the core features and functionality of discord. It is built using Next.js, Socket.io, TypeScript, and SQL. Some of the features that my discord clone application offers are:
                    </p>
                        <p className="text-xs md:text-[8px] xl:text-xs font-mono break-words text-slate-700 mt-1 overflow-hidden">
                        {discription}
                             </p>
                    </div>
                </div>
                <section className="hidden xl:flex h-full w-full  flex-col gap-4 justify-start items-center">
                    <div className="w-5/6 h-4/6 bg-white rounded-xl mt-8 relative overflow-hidden p-2">
                        <Image
                        src={imgUrl}
                        fill
                        alt="project"
                        className="p-[2px] rounded-xl"
                        />
                    </div>
                    <div className="flex gap-1 xl:gap-3 flex-wrap z-30">
                        {
                            tags.map((tag) => (
                                <p key={tag} className="xl:text-xs font-mono text-[10px] h-fit text-indigo-800 md:bg-sky-400 px-1 xl:px-2 rounded-md">{tag}</p>

                            ))
                        }
                    </div>
                </section>
                                <div className=" xl:hidden absolute space-y-4 p-1 xl:p-4 flex items-end justify-start h-full w-full bg-gradient-to-r from-emerald-300  to-emerald-400 opacity-0 group-hover:opacity-100 group-hover:translate-y-72 hover:translate-y-72 lg:group-hover:translate-y-64 lg:hover:translate-y-64 transition-all duration-500 rounded-[50px]">
                    <div className="  h-[90%] w-full bg-white py-6 px-3 overflow-hidden rounded-[50px] relative ">
                    <h3 className="text-sm  font-mono text-slate-800">introduction -</h3>
                    <p className="text-xs font-mono indent-6 break-words text-slate-700 ">
                    We know discord, My discord clone application is a project that aims to replicate the core features and functionality of discord. It is built using Next.js, Socket.io, TypeScript, and SQL. Some of the features that my discord clone application offers are:
                    </p>
                        <p className="text-xs font-mono break-words text-slate-700 mt-1 overflow-hidden">
                        {discription}
                             </p>
                    </div>
                </div>
                <section className=" xl:hidden h-full w-full flex flex-col gap-4 justify-start items-center">
                    <div className="w-5/6 h-4/6 bg-white rounded-xl mt-8 relative overflow-hidden p-2">
                        <Image
                        src={imgUrl}
                        fill
                        alt="project"
                        className="p-[2px] rounded-xl"
                        />
                    </div>
                    <div className="flex gap-1 xl:gap-3 flex-wrap z-30">
                        {
                            tags.map((tag) => (
                                <p key={tag} className=" font-mono text-xs h-fit text-indigo-800 md:bg-sky-400 px-2 rounded-md">{tag}</p>

                            ))
                        }
                    </div>
                </section>
            </div >
        </FeatureCard>
    );
}

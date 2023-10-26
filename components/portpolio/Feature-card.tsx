"use client"
import { useFeatureStore } from "@/lib/store";
import { cn } from "@/lib/utils"
import Image from "next/image";
import { GithubIcon,ListVideo } from "lucide-react";
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
        <div className={cn(" absolute inset-0 h-full w-full bg-gradient-to-br  p-1 border-none dark:border rounded-2xl md:rounded-[50px] transition-all duration-300",
            gradient,
            isInViewF === id ? 'opacity-100' : 'opacity-0'
            )}
            
        >
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
            <div className="h-full w-full flex items-center justify-center  text-2xl font-semibold text-black case !z-30 "
            
            >
            <div className="flex flex-col items-center justify-center p-2 gap-2 absolute top-1/4 -right-3 sm:-right-7 h-20 sm:h-28 w-8 sm:w-14 bg-white z-50 rounded-[50px]">
                    <Link href={githublink} className="h-4 sm:h-8 w-4 sm:w-8 flex items-center justify-center"><GithubIcon className="fill-black text-black"/></Link>
                    <Link href={livelink} className="h-4 sm:h-8 w-4 sm:w-8 flex items-center justify-center"><ListVideo className="text-black"/></Link>
                </div>
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
                
                <div className=" xl:hidden absolute space-y-4 p-1 xl:p-4 flex items-end justify-start h-full w-full bg-gradient-to-r from-emerald-300  to-emerald-400 opacity-0 group-hover:opacity-100 group-hover:translate-y-52 hover:translate-y-52 sm:group-hover:translate-y-72 sm:hover:translate-y-72 lg:group-hover:translate-y-64 lg:hover:translate-y-64 transition-all duration-500 rounded-2xl md:rounded-[50px]">
                    <div className="  h-[90%] w-full bg-white py-6 px-3 overflow-hidden rounded-2xl md:rounded-[50px] relative ">
                        <h3 className="text-xs sm:text-sm  font-mono text-slate-800">introduction -</h3>
                        <p className="text-[9px] sm:text-xs font-mono indent-6 leading-snug sm:leading-normal sm:break-words text-slate-700 ">
                            We know discord, My discord clone application is a project that aims to replicate the core features and functionality of discord. It is built using Next.js, Socket.io, TypeScript, and SQL. Some of the features that my discord clone application offers are:
                        </p>
                        <p className="text-[9px] sm:text-xs leading-snug sm:leading-normal font-mono break-words text-slate-700 mt-1 overflow-hidden">
                            {discription}
                        </p>
                    </div>
                </div>
                <section className=" xl:hidden h-full w-full flex flex-col gap-2 sm:gap-4 justify-start items-center">
                    <div className="w-full md:w-5/6 h-4/6 dark:bg-slate-700 bg-emerald-400 rounded-xl mt-8 relative overflow-hidden p-px">
                        <Image
                            src={imgUrl}
                            fill
                            alt="project"
                            className="p-[2px] rounded-xl"
                        />
                    </div>
                    <div className="flex gap-1 xl:gap-3 flex-wrap z-30 w-56 sm:w-full justify-center items-center ">
                        {
                            tags.map((tag) => (
                                <p key={tag} className="text-[10px] leading-tight sm:leading-normal sm:text-xs h-fit  text-slate-500  bg-white px-2 rounded-md">{tag}</p>

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
            <div className="h-full w-full flex items-center justify-center  text-2xl font-semibold text-black case !z-30 ">
            <div className="flex flex-col items-center justify-center p-2 gap-2 absolute top-1/4 -right-3 sm:-right-7 h-20 sm:h-28 w-8 sm:w-14 bg-white z-50 rounded-[50px]">
                    <Link href={githublink} className="h-4 sm:h-8 w-4 sm:w-8 flex items-center justify-center"><GithubIcon className="fill-black text-black"/></Link>
                    <Link href={livelink} className="h-4 sm:h-8 w-4 sm:w-8 flex items-center justify-center"><ListVideo className="text-black"/></Link>
                </div>
                <div className="hidden xl:flex absolute space-y-4 p-1 xl:p-4  items-center justify-start h-full w-full bg-gradient-to-r from-emerald-300  to-emerald-400 opacity-0 group-hover:opacity-100 group-hover:-translate-x-72 hover:-translate-x-72 xl:group-hover:-translate-x-96 xl:hover:-translate-x-96 transition-all duration-500 rounded-[50px]">
                    <div className="  h-full w-4/5 xl:w-2/3 bg-white py-6 px-3 overflow-hidden rounded-2xl md:rounded-[50px]relative ">
                        <h3 className="text-xs xl:text-sm font-mono text-slate-800">introduction -</h3>
                        <p className="text-xs md:text-[10px] xl:text-xs font-mono indent-6 break-words text-slate-700 ">
                            We know discord, My discord clone application is a project that aims to replicate the core features and functionality of discord. It is built using Next.js, Socket.io, TypeScript, and SQL. Some of the features that my discord clone application offers are:
                        </p>
                        <p className="text-xs md:text-[8px] xl:text-xs font-mono break-words text-slate-700 mt-1 overflow-hidden">
                            {discription}
                        </p>
                    </div>
                </div>
                <section className="hidden xl:flex h-full w-full  flex-col gap-4 justify-start items-center ">

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
                <div className=" xl:hidden absolute space-y-4 p-1 xl:p-4 flex items-end justify-start h-full w-full bg-gradient-to-r from-emerald-300  to-emerald-400 opacity-0 group-hover:opacity-100 group-hover:translate-y-52 hover:translate-y-52 sm:group-hover:translate-y-72 sm:hover:translate-y-72 lg:group-hover:translate-y-64 lg:hover:translate-y-64 transition-all duration-500 rounded-2xl md:rounded-[50px]">
                    <div className="  h-[90%] w-full bg-white py-6 px-3 overflow-hidden rounded-2xl md:rounded-[50px] relative ">
                        <h3 className="text-xs sm:text-sm  font-mono text-slate-800">introduction -</h3>
                        <p className="text-[9px] sm:text-xs font-mono indent-6 leading-snug sm:leading-normal sm:break-words text-slate-700 ">
                            We know discord, My discord clone application is a project that aims to replicate the core features and functionality of discord. It is built using Next.js, Socket.io, TypeScript, and SQL. Some of the features that my discord clone application offers are:
                        </p>
                        <p className="text-[9px] sm:text-xs leading-snug sm:leading-normal font-mono break-words text-slate-700 mt-1 overflow-hidden">
                            {discription}
                        </p>
                    </div>
                </div>
                <section className=" xl:hidden h-full w-full flex flex-col gap-2 sm:gap-4 justify-start items-center">
                    <div className="w-full md:w-5/6 h-4/6 dark:bg-slate-700 bg-emerald-400 rounded-xl mt-8 relative overflow-hidden p-px">
                        <Image
                            src={imgUrl}
                            fill
                            alt="project"
                            className="p-[2px] rounded-xl"
                        />
                    </div>
                    <div className="flex gap-1 xl:gap-3 flex-wrap z-30 w-56 sm:w-full justify-center items-center ">
                        {
                            tags.map((tag) => (
                                <p key={tag} className="text-[10px] leading-tight sm:leading-normal sm:text-xs h-fit  text-slate-500  bg-whitepx-2 rounded-md">{tag}</p>

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
            <div className="h-full w-full flex items-center justify-center  text-2xl font-semibold text-black case !z-30 ">
            <div className="flex flex-col items-center justify-center p-2 gap-2 absolute top-1/4 -right-3 sm:-right-7 h-20 sm:h-28 w-8 sm:w-14 bg-white z-50 rounded-[50px]">
                    <Link href={githublink} className="h-4 sm:h-8 w-4 sm:w-8 flex items-center justify-center"><GithubIcon className="fill-black text-black"/></Link>
                    <Link href={livelink} className="h-4 sm:h-8 w-4 sm:w-8 flex items-center justify-center"><ListVideo className="text-black"/></Link>
                </div>

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
                
                <div className=" xl:hidden absolute space-y-4 p-1 xl:p-4 flex items-end justify-start h-full w-full bg-gradient-to-r from-emerald-300  to-emerald-400 opacity-0 group-hover:opacity-100 group-hover:translate-y-52 hover:translate-y-52 sm:group-hover:translate-y-72 sm:hover:translate-y-72 lg:group-hover:translate-y-64 lg:hover:translate-y-64 transition-all duration-500 rounded-2xl md:rounded-[50px]">
                    <div className="  h-[90%] w-full bg-white py-6 px-3 overflow-hidden rounded-2xl md:rounded-[50px] relative ">
                        <h3 className="text-xs sm:text-sm  font-mono text-slate-800">introduction -</h3>
                        <p className="text-[9px] sm:text-xs font-mono indent-6 leading-snug sm:leading-normal sm:break-words text-slate-700 ">
                            We know discord, My discord clone application is a project that aims to replicate the core features and functionality of discord. It is built using Next.js, Socket.io, TypeScript, and SQL. Some of the features that my discord clone application offers are:
                        </p>
                        <p className="text-[9px] sm:text-xs leading-snug sm:leading-normal font-mono break-words text-slate-700 mt-1 overflow-hidden">
                            {discription}
                        </p>
                    </div>
                </div>
                <section className=" xl:hidden h-full w-full flex flex-col gap-2 sm:gap-4 justify-start items-center">
                    <div className="w-full md:w-5/6 h-4/6 dark:bg-slate-700 bg-emerald-400 rounded-xl mt-8 relative overflow-hidden p-px">
                        <Image
                            src={imgUrl}
                            fill
                            alt="project"
                            className="p-[2px] rounded-xl"
                        />
                    </div>
                    <div className="flex gap-1 xl:gap-3 flex-wrap z-30 w-56 sm:w-full justify-center items-center ">
                        {
                            tags.map((tag) => (
                                <p key={tag} className="text-[10px] leading-tight sm:leading-normal sm:text-xs h-fit  text-slate-500  bg-white px-2 rounded-md">{tag}</p>

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
            <div className="h-full w-full flex items-center justify-center  text-2xl font-semibold text-black case !z-30 ">
            <div className="flex flex-col items-center justify-center p-2 gap-2 absolute top-1/4 -right-3 sm:-right-7 h-20 sm:h-28 w-8 sm:w-14 bg-white z-50 rounded-[50px]">
                    <Link href={githublink} className="h-4 sm:h-8 w-4 sm:w-8 flex items-center justify-center"><GithubIcon className="fill-black text-black"/></Link>
                    <Link href={livelink} className="h-4 sm:h-8 w-4 sm:w-8 flex items-center justify-center"><ListVideo className="text-black"/></Link>
                </div>
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
                <div className=" xl:hidden absolute space-y-4 p-1 xl:p-4 flex items-end justify-start h-full w-full bg-gradient-to-r from-emerald-300  to-emerald-400 opacity-0 group-hover:opacity-100 group-hover:translate-y-52 hover:translate-y-52 sm:group-hover:translate-y-72 sm:hover:translate-y-72 lg:group-hover:translate-y-64 lg:hover:translate-y-64 transition-all duration-500 rounded-2xl md:rounded-[50px]">
                    <div className="  h-[90%] w-full bg-white py-6 px-3 overflow-hidden rounded-2xl md:rounded-[50px] relative ">
                        <h3 className="text-xs sm:text-sm  font-mono text-slate-800">introduction -</h3>
                        <p className="text-[9px] sm:text-xs font-mono indent-6 leading-snug sm:leading-normal sm:break-words text-slate-700 ">
                            We know discord, My discord clone application is a project that aims to replicate the core features and functionality of discord. It is built using Next.js, Socket.io, TypeScript, and SQL. Some of the features that my discord clone application offers are:
                        </p>
                        <p className="text-[9px] sm:text-xs leading-snug sm:leading-normal font-mono break-words text-slate-700 mt-1 overflow-hidden">
                            {discription}
                        </p>
                    </div>
                </div>
                <section className=" xl:hidden h-full w-full flex flex-col gap-2 sm:gap-4 justify-start items-center">
                    <div className="w-full md:w-5/6 h-4/6 dark:bg-slate-700 bg-emerald-400 rounded-xl mt-8 relative overflow-hidden p-px">
                        <Image
                            src={imgUrl}
                            fill
                            alt="project"
                            className="p-[2px] rounded-xl"
                        />
                    </div>
                    <div className="flex gap-1 xl:gap-3 flex-wrap z-30 w-56 sm:w-full justify-center items-center ">
                        {
                            tags.map((tag) => (
                                <p key={tag} className="text-[10px] leading-tight sm:leading-normal sm:text-xs h-fit  text-slate-500  bg-white px-2 rounded-md">{tag}</p>

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
            <div className="h-full w-full flex items-center justify-center  text-2xl font-semibold text-black  case !z-30 ">
            <div className="flex flex-col items-center justify-center p-2 gap-2 absolute top-1/4 -right-3 sm:-right-7 h-20 sm:h-28 w-8 sm:w-14 bg-white z-50 rounded-[50px]">
                    <Link href={githublink} className="h-4 sm:h-8 w-4 sm:w-8 flex items-center justify-center"><GithubIcon className="fill-black text-black"/></Link>
                    <Link href={livelink} className="h-4 sm:h-8 w-4 sm:w-8 flex items-center justify-center"><ListVideo className="text-black"/></Link>
                </div>
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
                <div className=" xl:hidden absolute space-y-4 p-1 xl:p-4 flex items-end justify-start h-full w-full bg-gradient-to-r from-emerald-300  to-emerald-400 opacity-0 group-hover:opacity-100 group-hover:translate-y-52 hover:translate-y-52 sm:group-hover:translate-y-72 sm:hover:translate-y-72 lg:group-hover:translate-y-64 lg:hover:translate-y-64 transition-all duration-500 rounded-2xl md:rounded-[50px]">
                    <div className="  h-[90%] w-full bg-white py-6 px-3 overflow-hidden rounded-2xl md:rounded-[50px] relative ">
                        <h3 className="text-xs sm:text-sm  font-mono text-slate-800">introduction -</h3>
                        <p className="text-[9px] sm:text-xs font-mono indent-6 leading-snug sm:leading-normal sm:break-words text-slate-700 ">
                            We know discord, My discord clone application is a project that aims to replicate the core features and functionality of discord. It is built using Next.js, Socket.io, TypeScript, and SQL. Some of the features that my discord clone application offers are:
                        </p>
                        <p className="text-[9px] sm:text-xs leading-snug sm:leading-normal font-mono break-words text-slate-700 mt-1 overflow-hidden">
                            {discription}
                        </p>
                    </div>
                </div>
                <section className=" xl:hidden h-full w-full flex flex-col gap-2 sm:gap-4 justify-start items-center">
                    <div className="w-full md:w-5/6 h-4/6 dark:bg-slate-700 bg-emerald-400 rounded-xl mt-8 relative overflow-hidden p-px">
                        <Image
                            src={imgUrl}
                            fill
                            alt="project"
                            className="p-[2px] rounded-xl"
                        />
                    </div>
                    <div className="flex gap-1 xl:gap-3 flex-wrap z-30 w-56 sm:w-full justify-center items-center ">
                        {
                            tags.map((tag) => (
                                <p key={tag} className="text-[10px] leading-tight sm:leading-normal sm:text-xs h-fit  text-slate-500  bg-white px-2 rounded-md">{tag}</p>

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
            <div className="h-full w-full flex items-center justify-center  text-2xl font-semibold text-black  case !z-30 ">
            <div className="flex flex-col items-center justify-center p-2 gap-2 absolute top-1/4 -right-3 sm:-right-7 h-20 sm:h-28 w-8 sm:w-14 bg-white z-50 rounded-[50px]">
                    <Link href={githublink} className="h-4 sm:h-8 w-4 sm:w-8 flex items-center justify-center"><GithubIcon className="fill-black text-black"/></Link>
                    <Link href={livelink} className="h-4 sm:h-8 w-4 sm:w-8 flex items-center justify-center"><ListVideo className="text-black"/></Link>
                </div>
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
                
                
                <div className=" xl:hidden absolute space-y-4 p-1 xl:p-4 flex items-end justify-start h-full w-full bg-gradient-to-r from-emerald-300  to-emerald-400 opacity-0 group-hover:opacity-100 group-hover:translate-y-52 hover:translate-y-52 sm:group-hover:translate-y-72 sm:hover:translate-y-72 lg:group-hover:translate-y-64 lg:hover:translate-y-64 transition-all duration-500 rounded-2xl md:rounded-[50px]">
                    <div className="  h-[90%] w-full bg-white py-6 px-3 overflow-hidden rounded-2xl md:rounded-[50px] relative ">
                        <h3 className="text-xs sm:text-sm  font-mono text-slate-800">introduction -</h3>
                        <p className="text-[9px] sm:text-xs font-mono indent-6 leading-snug sm:leading-normal sm:break-words text-slate-700 ">
                            We know discord, My discord clone application is a project that aims to replicate the core features and functionality of discord. It is built using Next.js, Socket.io, TypeScript, and SQL. Some of the features that my discord clone application offers are:
                        </p>
                        <p className="text-[9px] sm:text-xs leading-snug sm:leading-normal font-mono break-words text-slate-700 mt-1 overflow-hidden">
                            {discription}
                        </p>
                    </div>
                </div>
                <section className=" xl:hidden h-full w-full flex flex-col gap-2 sm:gap-4 justify-start items-center">
                    <div className="w-full md:w-5/6 h-4/6 dark:bg-slate-700 bg-emerald-400 rounded-xl mt-8 relative overflow-hidden p-px">
                        <Image
                            src={imgUrl}
                            fill
                            alt="project"
                            className="p-[2px] rounded-xl"
                        />
                    </div>
                    <div className="flex gap-1 xl:gap-3 flex-wrap z-30 w-56 sm:w-full justify-center items-center ">
                        {
                            tags.map((tag) => (
                                <p key={tag} className="text-[10px] leading-tight sm:leading-normal sm:text-xs h-fit  text-slate-500  bg-white px-2 rounded-md">{tag}</p>

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
            <div className="h-full w-full flex items-center justify-center  text-2xl font-semibold text-black  case !z-30 ">
            <div className="flex flex-col items-center justify-center p-2 gap-2 absolute top-1/4 -right-3 sm:-right-7 h-20 sm:h-28 w-8 sm:w-14 bg-white z-50 rounded-[50px]">
                    <Link href={githublink} className="h-4 sm:h-8 w-4 sm:w-8 flex items-center justify-center"><GithubIcon className="fill-black text-black"/></Link>
                    <Link href={livelink} className="h-4 sm:h-8 w-4 sm:w-8 flex items-center justify-center"><ListVideo className="text-black"/></Link>
                </div>

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


                <div className=" xl:hidden absolute space-y-4 p-1 xl:p-4 flex items-end justify-start h-full w-full bg-gradient-to-r from-emerald-300  to-emerald-400 opacity-0 group-hover:opacity-100 group-hover:translate-y-52 hover:translate-y-52 sm:group-hover:translate-y-72 sm:hover:translate-y-72 lg:group-hover:translate-y-64 lg:hover:translate-y-64 transition-all duration-500 rounded-2xl md:rounded-[50px] ">
                    <div className="  h-[90%] w-full bg-white py-6 px-3 overflow-hidden rounded-2xl md:rounded-[50px] relative ">
                        <h3 className="text-xs sm:text-sm  font-mono text-slate-800">introduction -</h3>
                        <p className="text-[9px] sm:text-xs font-mono indent-6 leading-snug sm:leading-normal sm:break-words text-slate-700 ">
                            We know discord, My discord clone application is a project that aims to replicate the core features and functionality of discord. It is built using Next.js, Socket.io, TypeScript, and SQL. Some of the features that my discord clone application offers are:
                        </p>
                        <p className="text-[9px] sm:text-xs leading-snug sm:leading-normal font-mono break-words text-slate-700 mt-1 overflow-hidden">
                            {discription}
                        </p>
                    </div>
                </div>
                <section className=" xl:hidden h-full w-full flex flex-col gap-2 sm:gap-4 justify-start items-center">
                    <div className="w-full md:w-5/6 h-4/6 dark:bg-slate-700 bg-emerald-400 rounded-xl mt-8 relative overflow-hidden p-px">
                        <Image
                            src={imgUrl}
                            fill
                            alt="project"
                            className="p-[2px] rounded-xl"
                        />
                    </div>
                    <div className="flex gap-1 xl:gap-3 flex-wrap z-30 w-56 sm:w-full justify-center items-center ">
                        {
                            tags.map((tag) => (
                                <p key={tag} className=" text-[10px] leading-tight sm:leading-normal sm:text-xs h-fit  text-slate-500  bg-white py-px  px-2 rounded-sm">{tag}</p>

                            ))
                        }
                    </div>
                </section>
            </div >
        </FeatureCard>
    );
}

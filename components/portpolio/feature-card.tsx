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
        <div className={cn(" absolute inset-0 h-full w-full bg-gradient-to-br transition-opacity p-1  ",
            gradient,
            isInViewF === id ? 'opacity-100' : 'opacity-0'
        )}>
            {children}
        </div>
    )
}

export const Discord = ({ id, title, imgUrl, note, tags, githublink, livelink, discription }: CardProps) => {
    return (
        <FeatureCard id={id} gradient="from-white to-orange-400"
            title={title}
            imgUrl=""
            note={note}
            tags={tags}
            githublink={githublink}
            livelink={livelink}
            discription={discription}
        >
            <div className="h-full w-full flex items-center justify-center   text-2xl font-semibold text-black font-syne case">

                <div className="h-full w-full relative p-2 peer">
                    <Image
                        src={imgUrl}
                        fill
                        alt="img"
                        className=" object-right-bottom peer bg-blue-300  rounded-md "
                    />
                </div>
                {/* translate-x-[800px] group-hover:translate-x-0  */}
                <div className=" flex flex-col items-end img-Con absolute z-10 bg-gradient-to-r from-orange-200/30 via-orange-300 to-orange-400 right-0 w-full h-full translate-x-[800px] group-hover:translate-x-0  transition-all duration-200 ease-in-out py-8 px-12 ">
                    <div className=" flex flex-col flex-1 gap-3">
                        <Link target="_blank" href={githublink} >
                            <GithubIcon className="text-black bg-orange-500 h-9 w-14 p-2 rounded-xl fill-black hover:bg-slate-50 hover:-translate-y-1 translate-x-[800px] group-hover:translate-x-0 delay-200 transition-all duration-300" />
                        </Link>
                        <Link target="_blank" href={livelink} >
                            <ExternalLinkIcon className="text-black bg-orange-500 h-9 w-14 p-2 rounded-xl fill-black hover:bg-slate-50 hover:-translate-y-1 translate-x-[800px] group-hover:translate-x-0 delay-300 transition-all duration-300" />
                        </Link>
                    </div>
                    <div className="flex-1 flex flex-col self-start justify-between">
                        <p className="text-white capitalize stroke-black stroke-2">{note}</p>
                        <div className="text-white">
                            Techs:
                            <div className="flex gap-2">

                            {
                                tags.map((tag) => (
                                    <div key={tag} className=" text-zinc-900 text-xs capitalize px-2 py-1 bg-gradient-to-r from-transparent to-orange-200 rounded-md" >
                                        #{tag} 
                                    </div>
                                ))
                            }

                        </div>
                        </div>
                        
                    </div>
                </div>

            </div>

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
            <div className="h-full w-full flex items-center justify-center   text-2xl font-semibold text-black font-syne case">

<div className="h-full w-full relative p-2 peer">
    <Image
        src={imgUrl}
        fill
        alt="img"
        className=" object-right-bottom peer bg-blue-300  rounded-md "
    />
</div>
{/* translate-x-[800px] group-hover:translate-x-0  */}
<div className=" flex flex-col items-end img-Con absolute z-10 bg-gradient-to-r from-blue-200/30 via-blue-300 to-blue-500 right-0 w-full h-full translate-x-[800px] group-hover:translate-x-0  transition-all duration-200 ease-in-out py-8 px-12 ">
    <div className=" flex flex-col flex-1 gap-3">
        <Link target="_blank" href={githublink} >
            <GithubIcon className="text-black bg-blue-400 h-9 w-14 p-2 rounded-xl fill-black hover:bg-slate-50 hover:-translate-y-1 translate-x-[800px] group-hover:translate-x-0 delay-200 transition-all duration-300" />
        </Link>
        <Link target="_blank" href={livelink} >
            <ExternalLinkIcon className="text-black bg-blue-400 h-9 w-14 p-2 rounded-xl fill-black hover:bg-slate-50 hover:-translate-y-1 translate-x-[800px] group-hover:translate-x-0 delay-300 transition-all duration-300" />
        </Link>
    </div>
    <div className="flex-1 flex flex-col self-start justify-between">
        <p className="text-white capitalize stroke-black stroke-2">{note}</p>
        <div className="text-white">
            Techs:
            <div className="flex gap-2">

            {
                tags.map((tag) => (
                    <div key={tag} className=" text-zinc-900 text-xs capitalize px-2 py-1 bg-gradient-to-r from-transparent to-orange-200 rounded-md" >
                        #{tag} 
                    </div>
                ))
            }

        </div>
        </div>
        
    </div>
</div>

</div>
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
            <div className="h-full w-full flex items-center justify-center   text-2xl font-semibold text-black font-syne case">

<div className="h-full w-full relative p-2 peer">
    <Image
        src={imgUrl}
        fill
        alt="img"
        className=" object-right-bottom peer  rounded-md "
    />
</div>
{/* translate-x-[800px] group-hover:translate-x-0  */}
<div className=" flex flex-col items-end img-Con absolute z-10 bg-gradient-to-r from-green-200/30 via-green-300 to-green-500 right-0 w-full h-full translate-x-[800px] group-hover:translate-x-0  transition-all duration-200 ease-in-out py-8 px-12 ">
    <div className=" flex flex-col flex-1 gap-3">
        <Link target="_blank" href={githublink} >
            <GithubIcon className="text-black bg-green-400 h-9 w-14 p-2 rounded-xl fill-black hover:bg-slate-50 hover:-translate-y-1 translate-x-[800px] group-hover:translate-x-0 delay-200 transition-all duration-300" />
        </Link>
        <Link target="_blank" href={livelink} >
            <ExternalLinkIcon className="text-black bg-green-400 h-9 w-14 p-2 rounded-xl fill-black hover:bg-slate-50 hover:-translate-y-1 translate-x-[800px] group-hover:translate-x-0 delay-300 transition-all duration-300" />
        </Link>
    </div>
    <div className="flex-1 flex flex-col self-start justify-between">
        <p className="text-white capitalize stroke-black stroke-2">{note}</p>
        <div className="text-white">
            Techs:
            <div className="flex gap-2">

            {
                tags.map((tag) => (
                    <div key={tag} className=" text-zinc-900 text-xs capitalize px-2 py-1 bg-gradient-to-r from-transparent to-orange-200 rounded-md" >
                        #{tag} 
                    </div>
                ))
            }

        </div>
        </div>
        
    </div>
</div>

</div>
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
            <div className="h-full w-full flex items-center justify-center   text-2xl font-semibold text-black font-syne case">

<div className="h-full w-full relative p-2 peer">
    <Image
        src={imgUrl}
        fill
        alt="img"
        className=" object-right-bottom peer  rounded-md "
    />
</div>
{/* translate-x-[800px] group-hover:translate-x-0  */}
<div className=" flex flex-col items-end img-Con absolute z-10 bg-gradient-to-r from-emerald-200/30 via-emerald-300 to-emerald-400 right-0 w-full h-full translate-x-[800px] group-hover:translate-x-0  transition-all duration-200 ease-in-out py-8 px-12 ">
    <div className=" flex flex-col flex-1 gap-3">
        <Link target="_blank" href={githublink} >
            <GithubIcon className="text-black bg-emerald-300 h-9 w-14 p-2 rounded-xl fill-black hover:bg-slate-50 hover:-translate-y-1 translate-x-[800px] group-hover:translate-x-0 delay-200 transition-all duration-300" />
        </Link>
        <Link target="_blank" href={livelink} >
            <ExternalLinkIcon className="text-black bg-emerald-300 h-9 w-14 p-2 rounded-xl fill-black hover:bg-slate-50 hover:-translate-y-1 translate-x-[800px] group-hover:translate-x-0 delay-300 transition-all duration-300" />
        </Link>
    </div>
    <div className="flex-1 flex flex-col self-start justify-between">
        <p className="text-white capitalize stroke-black stroke-2">{note}</p>
        <div className="text-white">
            Techs:
            <div className="flex gap-2">

            {
                tags.map((tag) => (
                    <div key={tag} className=" text-zinc-900 text-xs capitalize px-2 py-1 bg-gradient-to-r from-transparent to-orange-200 rounded-md" >
                        #{tag} 
                    </div>
                ))
            }

        </div>
        </div>
        
    </div>
</div>

</div>
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
            <div className="h-full w-full flex items-center justify-center   text-2xl font-semibold text-black font-syne case">

<div className="h-full w-full relative p-2 peer">
    <Image
        src={imgUrl}
        fill
        alt="img"
        className=" object-right-bottom peer rounded-md "
    />
</div>
{/* translate-x-[800px] group-hover:translate-x-0  */}
<div className=" flex flex-col items-end img-Con absolute z-10 bg-gradient-to-r from-rose-200/30 via-rose-300 to-rose-500 right-0 w-full h-full translate-x-[800px] group-hover:translate-x-0  transition-all duration-200 ease-in-out py-8 px-12 ">
    <div className=" flex flex-col flex-1 gap-3">
        <Link target="_blank" href={githublink} >
            <GithubIcon className="text-black bg-rose-400 h-9 w-14 p-2 rounded-xl fill-black hover:bg-slate-50 hover:-translate-y-1 translate-x-[800px] group-hover:translate-x-0 delay-200 transition-all duration-300" />
        </Link>
        <Link target="_blank" href={livelink} >
            <ExternalLinkIcon className="text-black bg-rose-400 h-9 w-14 p-2 rounded-xl fill-black hover:bg-slate-50 hover:-translate-y-1 translate-x-[800px] group-hover:translate-x-0 delay-300 transition-all duration-300" />
        </Link>
    </div>
    <div className="flex-1 flex flex-col self-start justify-between">
        <p className="text-white capitalize stroke-black stroke-2">{note}</p>
        <div className="text-white">
            Techs:
            <div className="flex gap-2">

            {
                tags.map((tag) => (
                    <div key={tag} className=" text-zinc-900 text-xs capitalize px-2 py-1 bg-gradient-to-r from-transparent to-orange-200 rounded-md" >
                        #{tag} 
                    </div>
                ))
            }

        </div>
        </div>
        
    </div>
</div>

</div>
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
            <div className="h-full w-full flex items-center justify-center   text-2xl font-semibold text-black font-syne case">

<div className="h-full w-full relative p-2 peer">
    <Image
        src={imgUrl}
        fill
        alt="img"
        className=" object-right-bottom peer bg-blue-300  rounded-md "
    />
</div>
{/* translate-x-[800px] group-hover:translate-x-0  */}
<div className=" flex flex-col items-end img-Con absolute z-10 bg-gradient-to-r from-yellow-200/30 via-yellow-400 to-yellow-600 right-0 w-full h-full translate-x-[800px] group-hover:translate-x-0  transition-all duration-200 ease-in-out py-8 px-12 ">
    <div className=" flex flex-col flex-1 gap-3">
        <Link target="_blank" href={githublink} >
            <GithubIcon className="text-black bg-yellow-400 h-9 w-14 p-2 rounded-xl fill-black hover:bg-slate-50 hover:-translate-y-1 translate-x-[800px] group-hover:translate-x-0 delay-200 transition-all duration-300" />
        </Link>
        <Link target="_blank" href={livelink} >
            <ExternalLinkIcon className="text-black bg-yellow-400 h-9 w-14 p-2 rounded-xl fill-black hover:bg-slate-50 hover:-translate-y-1 translate-x-[800px] group-hover:translate-x-0 delay-300 transition-all duration-300" />
        </Link>
    </div>
    <div className="flex-1 flex flex-col self-start justify-between">
        <p className="text-white capitalize stroke-black stroke-2">{note}</p>
        <div className="text-white">
            Techs:
            <div className="flex gap-2">

            {
                tags.map((tag) => (
                    <div key={tag} className=" text-zinc-900 text-xs capitalize px-2 py-1 bg-gradient-to-r from-transparent to-orange-200 rounded-md" >
                        #{tag} 
                    </div>
                ))
            }

        </div>
        </div>
        
    </div>
</div>

</div>
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
            <div className="h-full w-full flex items-center justify-center   text-2xl font-semibold text-black font-syne case">

<div className="h-full w-full relative p-2 peer">
    <Image
        src={imgUrl}
        fill
        alt="img"
        className=" object-right-bottom peer   rounded-md "
    />
</div>
{/* translate-x-[800px] group-hover:translate-x-0  */}
<div className=" flex flex-col items-end img-Con absolute z-10 bg-gradient-to-r from-purple-400/30 via-purple-400 to-purple-600 right-0 w-full h-full translate-x-[800px] group-hover:translate-x-0  transition-all duration-200 ease-in-out py-8 px-12 ">
    <div className=" flex flex-col flex-1 gap-3">
        <Link target="_blank" href={githublink} >
            <GithubIcon className="text-black bg-purple-400 h-9 w-14 p-2 rounded-xl fill-black hover:bg-slate-50 hover:-translate-y-1 translate-x-[800px] group-hover:translate-x-0 delay-200 transition-all duration-300" />
        </Link>
        <Link target="_blank" href={livelink} >
            <ExternalLinkIcon className="text-black bg-purple-400 h-9 w-14 p-2 rounded-xl fill-black hover:bg-slate-50 hover:-translate-y-1 translate-x-[800px] group-hover:translate-x-0 delay-300 transition-all duration-300" />
        </Link>
    </div>
    <div className="flex-1 flex flex-col self-start justify-between">
        <p className="text-white capitalize stroke-black stroke-2">{note}</p>
        <div className="text-white">
            Techs:
            <div className="flex gap-2">

            {
                tags.map((tag) => (
                    <div key={tag} className=" text-zinc-900 text-xs capitalize px-2 py-1 bg-gradient-to-r from-transparent to-orange-200 rounded-md" >
                        #{tag} 
                    </div>
                ))
            }

        </div>
        </div>
        
    </div>
</div>

</div>
        </FeatureCard>
    );
}

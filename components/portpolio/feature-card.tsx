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
            <div className="h-full w-full flex items-center justify-center  text-2xl font-semibold text-black font-syne case">

                <div className="h-full w-full relative p-2 peer">
                    <Image
                        src={imgUrl}
                        fill
                        alt="img"
                        className=" object-right-bottom peer bg-blue-300  rounded-md "
                    />
                </div>
                {/* translate-x-[800px] group-hover:translate-x-0  | translate-x-[800px] group-hover:translate-x-0 */}
                <div className=" flex flex-col items-end img-Con absolute z-10 bg-gradient-to-r from-orange-200/30 via-orange-300 to-orange-400 right-0 translate-x-[800px] group-hover:translate-x-0 w-full h-full  transition-all duration-200 ease-in-out py-4 xl:py-8 px-4 xl:px-12 ">
                    <div className=" flex flex-col flex-1 gap-3">
                        <Link target="_blank" href={githublink} >
                            <GithubIcon className="text-black bg-orange-500 h-7 w-10 xl:h-9 xl:w-14 p-2 rounded-xl fill-black hover:bg-slate-50 hover:-translate-y-1  translate-x-[800px] group-hover:translate-x-0 delay-200 transition-all duration-300" />
                        </Link>
                        <Link target="_blank" href={livelink} >
                            <ExternalLinkIcon className="text-black bg-orange-500 h-7 w-10 xl:h-9 xl:w-14 p-2 rounded-xl fill-black hover:bg-slate-50 hover:-translate-y-1 translate-x-[800px] group-hover:translate-x-0 delay-300 transition-all duration-300" />
                        </Link>
                    </div>
                    <div className="flex-1 flex flex-col self-start justify-between">
                    <p className=" text-white text-sm xl:text-xl">{note}</p>
                        <div className="text-white xl:text-lg text-sm">
                            Techs:
                            <div className="flex flex-wrap">
                                {
                                    tags.map((tag) => (
                                        <div key={tag} className=" text-zinc-900 text-[8px] leading-none self-center text-center xl:text-xs  capitalize px-2  bg-gradient-to-r from-transparent to-orange-200 rounded-md" >
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
                {/* translate-x-[800px] group-hover:translate-x-0  | translate-x-[800px] group-hover:translate-x-0 */}
                <div className=" flex flex-col items-end img-Con absolute z-10 bg-gradient-to-r from-orange-200/30 via-orange-300 to-orange-400 right-0 translate-x-[800px] group-hover:translate-x-0 w-full h-full  transition-all duration-200 ease-in-out py-4 xl:py-8 px-4 xl:px-12 ">
                    <div className=" flex flex-col flex-1 gap-3">
                        <Link target="_blank" href={githublink} >
                            <GithubIcon className="text-black bg-orange-500 h-7 w-10 xl:h-9 xl:w-14 p-2 rounded-xl fill-black hover:bg-slate-50 hover:-translate-y-1  translate-x-[800px] group-hover:translate-x-0 delay-200 transition-all duration-300" />
                        </Link>
                        <Link target="_blank" href={livelink} >
                            <ExternalLinkIcon className="text-black bg-orange-500 h-7 w-10 xl:h-9 xl:w-14 p-2 rounded-xl fill-black hover:bg-slate-50 hover:-translate-y-1 translate-x-[800px] group-hover:translate-x-0 delay-300 transition-all duration-300" />
                        </Link>
                    </div>
                    <div className="flex-1 flex flex-col self-start justify-between">
                    <p className=" text-white text-sm xl:text-xl">{note}</p>
                        <div className="text-white xl:text-lg text-sm">
                            Techs:
                            <div className="flex flex-wrap">

                                {
                                    tags.map((tag) => (
                                        <div key={tag} className=" text-zinc-900 text-[8px] leading-none self-center text-center xl:text-xs  capitalize px-2  bg-gradient-to-r from-transparent to-orange-200 rounded-md" >
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
                        className=" object-right-bottom peer bg-blue-300  rounded-md "
                    />
                </div>
                {/* translate-x-[800px] group-hover:translate-x-0  | translate-x-[800px] group-hover:translate-x-0 */}
                <div className=" flex flex-col items-end img-Con absolute z-10 bg-gradient-to-r from-orange-200/30 via-orange-300 to-orange-400 right-0 translate-x-[800px] group-hover:translate-x-0 w-full h-full  transition-all duration-200 ease-in-out py-4 xl:py-8 px-4 xl:px-12 ">
                    <div className=" flex flex-col flex-1 gap-3">
                        <Link target="_blank" href={githublink} >
                            <GithubIcon className="text-black bg-orange-500 h-7 w-10 xl:h-9 xl:w-14 p-2 rounded-xl fill-black hover:bg-slate-50 hover:-translate-y-1  translate-x-[800px] group-hover:translate-x-0 delay-200 transition-all duration-300" />
                        </Link>
                        <Link target="_blank" href={livelink} >
                            <ExternalLinkIcon className="text-black bg-orange-500 h-7 w-10 xl:h-9 xl:w-14 p-2 rounded-xl fill-black hover:bg-slate-50 hover:-translate-y-1 translate-x-[800px] group-hover:translate-x-0 delay-300 transition-all duration-300" />
                        </Link>
                    </div>
                    <div className="flex-1 flex flex-col self-start justify-between">
                    <p className=" text-white text-sm xl:text-xl">{note}</p>
                        <div className="text-white xl:text-lg text-sm">
                            Techs:
                            <div className="flex flex-wrap">

                                {
                                    tags.map((tag) => (
                                        <div key={tag} className=" text-zinc-900 text-[8px] leading-none self-center text-center xl:text-xs  capitalize px-2  bg-gradient-to-r from-transparent to-orange-200 rounded-md" >
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
                        className=" object-right-bottom peer bg-blue-300  rounded-md "
                    />
                </div>
                {/* translate-x-[800px] group-hover:translate-x-0  | translate-x-[800px] group-hover:translate-x-0 */}
                <div className=" flex flex-col items-end img-Con absolute z-10 bg-gradient-to-r from-orange-200/30 via-orange-300 to-orange-400 right-0 translate-x-[800px] group-hover:translate-x-0 w-full h-full  transition-all duration-200 ease-in-out py-4 xl:py-8 px-4 xl:px-12 ">
                    <div className=" flex flex-col flex-1 gap-3">
                        <Link target="_blank" href={githublink} >
                            <GithubIcon className="text-black bg-orange-500 h-7 w-10 xl:h-9 xl:w-14 p-2 rounded-xl fill-black hover:bg-slate-50 hover:-translate-y-1  translate-x-[800px] group-hover:translate-x-0 delay-200 transition-all duration-300" />
                        </Link>
                        <Link target="_blank" href={livelink} >
                            <ExternalLinkIcon className="text-black bg-orange-500 h-7 w-10 xl:h-9 xl:w-14 p-2 rounded-xl fill-black hover:bg-slate-50 hover:-translate-y-1 translate-x-[800px] group-hover:translate-x-0 delay-300 transition-all duration-300" />
                        </Link>
                    </div>
                    <div className="flex-1 flex flex-col self-start justify-between">
                        <p className=" text-white text-sm xl:text-xl">{note}</p>
                        <div className="text-white xl:text-lg text-sm">
                            Techs:
                            <div className="flex flex-wrap">

                                {
                                    tags.map((tag) => (
                                        <div key={tag} className=" text-zinc-900 text-[8px] leading-none self-center text-center xl:text-xs  capitalize px-2  bg-gradient-to-r from-transparent to-orange-200 rounded-md" >
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
                        className=" object-right-bottom peer bg-blue-300  rounded-md "
                    />
                </div>
                {/* translate-x-[800px] group-hover:translate-x-0  | translate-x-[800px] group-hover:translate-x-0 */}
                <div className=" flex flex-col items-end img-Con absolute z-10 bg-gradient-to-r from-orange-200/30 via-orange-300 to-orange-400 right-0 translate-x-[800px] group-hover:translate-x-0 w-full h-full  transition-all duration-200 ease-in-out py-4 xl:py-8 px-4 xl:px-12 ">
                    <div className=" flex flex-col flex-1 gap-3">
                        <Link target="_blank" href={githublink} >
                            <GithubIcon className="text-black bg-orange-500 h-7 w-10 xl:h-9 xl:w-14 p-2 rounded-xl fill-black hover:bg-slate-50 hover:-translate-y-1  translate-x-[800px] group-hover:translate-x-0 delay-200 transition-all duration-300" />
                        </Link>
                        <Link target="_blank" href={livelink} >
                            <ExternalLinkIcon className="text-black bg-orange-500 h-7 w-10 xl:h-9 xl:w-14 p-2 rounded-xl fill-black hover:bg-slate-50 hover:-translate-y-1 translate-x-[800px] group-hover:translate-x-0 delay-300 transition-all duration-300" />
                        </Link>
                    </div>
                    <div className="flex-1 flex flex-col self-start justify-between">
                    <p className=" text-white text-sm xl:text-xl">{note}</p>
                        <div className="text-white xl:text-lg text-sm">
                            Techs:
                            <div className="flex flex-wrap">

                                {
                                    tags.map((tag) => (
                                        <div key={tag} className=" text-zinc-900 text-[8px] leading-none self-center text-center xl:text-xs  capitalize px-2  bg-gradient-to-r from-transparent to-orange-200 rounded-md" >
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
                {/* translate-x-[800px] group-hover:translate-x-0  | translate-x-[800px] group-hover:translate-x-0 */}
                <div className=" flex flex-col items-end img-Con absolute z-10 bg-gradient-to-r from-orange-200/30 via-orange-300 to-orange-400 right-0 translate-x-[800px] group-hover:translate-x-0 w-full h-full  transition-all duration-200 ease-in-out py-4 xl:py-8 px-4 xl:px-12 ">
                    <div className=" flex flex-col flex-1 gap-3">
                        <Link target="_blank" href={githublink} >
                            <GithubIcon className="text-black bg-orange-500 h-7 w-10 xl:h-9 xl:w-14 p-2 rounded-xl fill-black hover:bg-slate-50 hover:-translate-y-1  translate-x-[800px] group-hover:translate-x-0 delay-200 transition-all duration-300" />
                        </Link>
                        <Link target="_blank" href={livelink} >
                            <ExternalLinkIcon className="text-black bg-orange-500 h-7 w-10 xl:h-9 xl:w-14 p-2 rounded-xl fill-black hover:bg-slate-50 hover:-translate-y-1 translate-x-[800px] group-hover:translate-x-0 delay-300 transition-all duration-300" />
                        </Link>
                    </div>
                    <div className="flex-1 flex flex-col self-start justify-between">
                    <p className=" text-white text-sm xl:text-xl">{note}</p>
                        <div className="text-white xl:text-lg text-sm">
                            Techs:
                            <div className="flex flex-wrap">

                                {
                                    tags.map((tag) => (
                                        <div key={tag} className=" text-zinc-900 text-[8px] leading-none self-center text-center xl:text-xs  capitalize px-2  bg-gradient-to-r from-transparent to-orange-200 rounded-md" >
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
                        className=" object-right-bottom peer bg-blue-300  rounded-md "
                    />
                </div>
                {/* translate-x-[800px] group-hover:translate-x-0  | translate-x-[800px] group-hover:translate-x-0 */}
                <div className=" flex flex-col items-end img-Con absolute z-10 bg-gradient-to-r from-orange-200/30 via-orange-300 to-orange-400 right-0 translate-x-[800px] group-hover:translate-x-0 w-full h-full  transition-all duration-200 ease-in-out py-4 xl:py-8 px-4 xl:px-12 ">
                    <div className=" flex flex-col flex-1 gap-3">
                        <Link target="_blank" href={githublink} >
                            <GithubIcon className="text-black bg-orange-500 h-7 w-10 xl:h-9 xl:w-14 p-2 rounded-xl fill-black hover:bg-slate-50 hover:-translate-y-1  translate-x-[800px] group-hover:translate-x-0 delay-200 transition-all duration-300" />
                        </Link>
                        <Link target="_blank" href={livelink} >
                            <ExternalLinkIcon className="text-black bg-orange-500 h-7 w-10 xl:h-9 xl:w-14 p-2 rounded-xl fill-black hover:bg-slate-50 hover:-translate-y-1 translate-x-[800px] group-hover:translate-x-0 delay-300 transition-all duration-300" />
                        </Link>
                    </div>
                    <div className="flex-1 flex flex-col self-start justify-between">
                    <p className=" text-white text-sm xl:text-xl">{note}</p>
                        <div className="text-white xl:text-lg text-sm">
                            Techs:
                            <div className="flex flex-wrap">

                                {
                                    tags.map((tag) => (
                                        <div key={tag} className=" text-zinc-900 text-[8px] leading-none self-center text-center xl:text-xs  capitalize px-2  bg-gradient-to-r from-transparent to-orange-200 rounded-md" >
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

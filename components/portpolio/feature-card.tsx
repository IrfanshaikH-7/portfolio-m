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
                <div className="absolute space-y-4 p-4 flex items-center justify-start h-full w-full bg-gradient-to-r from-emerald-300  to-emerald-400 opacity-0 group-hover:opacity-100  group-hover:-translate-x-96 hover:-translate-x-96 transition-all duration-500 rounded-[50px]">
                    <div className="h-full w-2/3 bg-white p-6 rounded-[50px]">
                    <h3 className="text-sm font-mono text-slate-800">introduction -</h3>
                        <p className="text-xs font-mono indent-6 break-words text-slate-700">
                        {discription}
                             </p>
                    </div>
                </div>
                <section className="h-full w-full flex flex-col gap-4 justify-start items-center">
                    <div className="w-5/6 h-4/6 bg-slate-400 rounded-xl mt-8 relative overflow-hidden p-2">
                        <Image
                        src={imgUrl}
                        fill
                        alt="project"
                        className="p-[2px] rounded-xl"
                        />
                    </div>
                    <div className="  flex gap-3 flex-wrap z-30">
                        {
                            tags.map((tag) => (
                                <p className="text-xs text-indigo-800 bg-sky-400 px-2 rounded-md">{tag}</p>

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

        </FeatureCard>
    );
}

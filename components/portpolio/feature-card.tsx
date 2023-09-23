"use client"
import { useFeatureStore } from "@/lib/store";
import { cn } from "@/lib/utils"



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
        <div className={cn(" absolute inset-0 h-full w-full bg-gradient-to-br transition-opacity ",
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
            <div className="h-full w-full flex items-center justify-center text-2xl font-semibold text-black font-syne uppercase">
                {note}
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
            <div className="h-full w-full flex items-center justify-center text-2xl font-semibold text-black font-syne uppercase">
                {note}
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
            <div className="h-full w-full flex items-center justify-center text-2xl font-semibold text-black font-syne uppercase">
                {note}
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
            <div className="h-full w-full flex items-center justify-center text-2xl font-semibold text-black font-syne uppercase">
                {note}
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
            <div className="h-full w-full flex items-center justify-center text-2xl font-semibold text-black font-syne uppercase">
                {note}
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
            <div className="h-full w-full flex items-center justify-center text-2xl font-semibold text-black font-syne uppercase">
                {note}
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
            <div className="h-full w-full flex items-center justify-center text-2xl font-semibold text-black font-syne uppercase">
                {note}
            </div>
        </FeatureCard>
    );
}

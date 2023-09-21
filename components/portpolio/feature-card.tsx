"use client"
import { useFeatureStore } from "@/lib/store";
import { cn } from "@/lib/utils"


type FeatureCardProps = {
    gradient: string,
    children: React.ReactNode,
} & CardProps

type CardProps = {
    id: string;
}
 const FeatureCard = ({children, gradient, id} : FeatureCardProps)=> {
    const isInViewF =useFeatureStore((state) => state.inViewF)

    return(
        <div className={cn(" absolute inset-0 h-full w-full bg-gradient-to-br transition-opacity ",
         gradient,
         isInViewF === id ? 'opacity-100' : 'opacity-0'
         )}>
            {children}
        </div>
    )
}

export const Discord = ({id}:CardProps) => {
    return(
        <FeatureCard id={id} gradient="from-white to-orange-400">
            <div className="h-full w-full flex items-center justify-center text-2xl font-semibold text-black font-syne uppercase">
            Discord
            </div>
        </FeatureCard>
    );
}
export const Saas = ({id}:CardProps) => {
    return(
        <FeatureCard id={id} gradient="from-white to-blue-400">
            <div className="h-full w-full flex items-center justify-center text-2xl font-semibold text-black font-syne uppercase">
            Saas
            </div>
        </FeatureCard>
    );
}
export const NewLife = ({id}:CardProps) => {
    return(
        <FeatureCard id={id} gradient="from-white to-green-400">
            <div className="h-full w-full flex items-center justify-center text-2xl font-semibold text-black font-syne uppercase">
            Newlife
            </div>
        </FeatureCard>
    );
}
export const Port = ({id}:CardProps) => {
    return(
        <FeatureCard id={id} gradient="from-white to-emerald-400">
            <div className="h-full w-full flex items-center justify-center text-2xl font-semibold text-black font-syne uppercase">
            Port
            </div>
        </FeatureCard>
    );
}
export const Animata = ({id}:CardProps) => {
    return(
        <FeatureCard id={id} gradient="from-white to-rose-400">
            <div className="h-full w-full flex items-center justify-center text-2xl font-semibold text-black font-syne uppercase">
            Animata
            </div>
        </FeatureCard>
    );
}
export const LMS = ({id}:CardProps) => {
    return(
        <FeatureCard id={id} gradient="from-white to-yellow-600">
            <div className="h-full w-full flex items-center justify-center text-2xl font-semibold text-black font-syne uppercase">
            LMS
            </div>
        </FeatureCard>
    );
}
export const Thread = ({id}:CardProps) => {
    return(
        <FeatureCard id={id} gradient="from-white to-pink-600">
            <div className="h-full w-full flex items-center justify-center text-2xl font-semibold text-black font-syne uppercase">
            Thread
            </div>
        </FeatureCard>
    );
}

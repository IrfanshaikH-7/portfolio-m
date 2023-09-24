"use client"
import { useEffect, useRef } from "react"
import { useInView } from 'framer-motion'
import { cn } from "@/lib/utils"
import { useFeatureStore } from "@/lib/store"


type props = {
    children: React.ReactNode,
    id: string
}

export const FeatureTitle = ({children, id}: props) => {

    const ref = useRef<HTMLParagraphElement>(null)
    const isInView = useInView(ref, {margin: "-50% 0px -50% 0px"});
    const setInView = useFeatureStore(state => state.setInViewF);
    const inView = useFeatureStore((state) => state.inViewF)
    useEffect(()=> {
        if (isInView) setInView(id);
        if(!isInView && inView === id) setInView(null)

    }, [isInView,id,setInView, inView])


    return (
        <p ref={(ref)} className={cn("lg:text-2xl py-16 font-bold font-syne transition-all duration-300",
        isInView ? "text-white text-base lg:text-4xl ml-4 " : "text-slate-500 blur-[2px] "
        )}>
            {children}
        </p>
    )
}
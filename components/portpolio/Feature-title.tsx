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
        <p ref={(ref)} className={cn(" text-xs lg:text-2xl py-16 font-bold  transition-all duration-300",
        isInView ? "text-white dark:text-white text-xs lg:text-4xl md:ml-4 " : "text-slate-300 dark:text-slate-500 blur-[1px] "
        )}>
            {children}
        </p>
    )
}

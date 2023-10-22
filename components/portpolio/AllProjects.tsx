"use client"
import { Project } from '@prisma/client'
import { LucideArrowBigLeftDash, LucideArrowBigRightDash } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'
type Props = {
    projects: Project[]
}
const AllProjects = ({ projects }: Props) => {
    const router = useRouter()
    return (
        <div className='h-full w-[90%] mx-auto  rounded-e-3xl'>
            <div className='h-full w-full px-4 grid grid-cols-2 gap-8 '>
                {
                    projects.map((project) => (
                        <>
                            <section className='rounded-lg border-2 border-slate-400 shadow-lg group' onClick={() => router.push(`/portfolio/${project.id}`)}>
                                <div className=' aspect-video overflow-hidden relative '>
                                    <Image src={project?.imgUrl[0]} fill alt='prj-img' className='object-fill overflow-hidden rounded-lg' />
                                    <div className='hidden group-hover:flex flex-col items-center justify-center bg-white/80 dark:bg-black/80 absolute z-10 w-full aspect-video opacity-0 hover:opacity-100  transition-all  duration-300 rounded-lg'>
                                        <div className='text-center'>
                                            <div className='text-black dark:text-white text-xs lg:text-2xl flex justify-center items-center gap-2 relative'>
                                                <LucideArrowBigRightDash className='fill-black dark:fill-white h-4 w-4 lg:h-12 lg:w-12' />
                                                {project?.title}
                                                <LucideArrowBigLeftDash className='fill-black dark:fill-white h-4 w-4 lg:h-12 lg:w-12' />
                                            </div>
                                            <p className='text-slate-900 dark:text-slate-300 text-[9px] lg:text-base'>{project.note}</p>
                                        </div>
                                        <p className='text-slate-900 dark:text-slate-300 capitalize px-2 py-px border-l-2 border-r-2 border-0 border-slate-900 dark:border-slate-300 text-[9px] lg:text-base'>{project?.category}</p>
                                    </div>
                                </div>
                            </section>
                        </>
                    ))
                }
            </div>
        </div>
    )
}

export default AllProjects

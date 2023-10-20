
import { Project } from '@prisma/client'
import Image from 'next/image'
import React from 'react'
type Props = {
    projects: Project[]
}
const AllProjects = ({ projects }: Props) => {
    return (
        <div className='h-full w-[90%] mx-auto  rounded-e-3xl'>
            <div className='h-full w-full px-4 grid grid-cols-2 gap-8 '>
                {
                    projects.map((project) => (
                        <>
                            <section className='rounded-lg border-2 border-slate-400 shadow-lg group'>
                                <div className=' aspect-video overflow-hidden relative '>
                                    <Image src={project?.imgUrl[0]} fill alt='prj-img' className='object-fill overflow-hidden rounded-lg' />
                                    <div className='hidden group-hover:flex bg-white/80 dark:bg-black/80 absolute z-10 w-full aspect-video opacity-0 hover:opacity-100  transition-all  duration-300  items-center rounded-lg'>
                                    
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

"use client"
import React, { useEffect, useState } from 'react'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Textarea } from '../ui/textarea'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { Loader, Loader2 } from 'lucide-react'

const mProfile = 'https://utfs.io/f/d6e753d7-ec12-4eea-8871-cd589a29f471-5482fr.png'
const mProfile2 = 'https://utfs.io/f/2971b2c9-095b-496a-ba0f-67fcb68f6772-2558r.png'
const fProfile = 'https://utfs.io/f/181eb60d-2df8-482f-aae9-2d7ea337cbad-8iqged.jpg'
const fProfile2 = 'https://utfs.io/f/0ecb3b0f-5daf-42aa-a5dd-e2096c90f5c4-1nbmel.png'
const Testimony = () => {
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    const [activeImg, setActiveImg] = useState('')

    const TestimonySchema = z.object({
        name: z.string().min(3, { message: "name must be atleast 3 characters." }),
        email: z.string().email(),
        company: z.string().min(2),
        job_title: z.string().min(2),
        message: z.string().min(8),
    })

    const form = useForm<z.infer<typeof TestimonySchema>>({
        resolver: zodResolver(TestimonySchema),
        defaultValues: {
            name: '',
            email: '',
            company: 'IT',
            job_title: '',
            message: '',
        }
    })
    const onSubmitt = async (values: z.infer<typeof TestimonySchema>) => {
        setLoading(true)
        const testimony = await axios.post('/api/testimonial', {
            name: values.name,
            email: values.email,
            company: values.company,
            job_title: values.job_title,
            message: values.message,
            imgUrl: activeImg,
            anonymous: false
        })
        if (testimony) {
            form.reset()
            setActiveImg('')
            router.push('/')
        }
        setLoading(false)
    }
    return (
        <>
            <div className=' flex justify-center items-center gap-2 h-24 w-full bg-slate-800 rounded-3xl'>
                <div onClick={() => setActiveImg(mProfile)} className={cn('h-20 aspect-square relative rounded-full overflow-hidden border-4 border-slate-400', activeImg === mProfile ? 'border-green-600' : '')}><Image src={mProfile} alt='testinomy-img' fill className='object-cover' /></div>
                <div onClick={() => setActiveImg(fProfile)} className={cn('h-20 aspect-square relative rounded-full overflow-hidden border-4 border-slate-400', activeImg === fProfile ? 'border-green-600' : '')}><Image src={fProfile} alt='testinomy-img' fill className='object-cover' /></div>
                <div onClick={() => setActiveImg(mProfile2)} className={cn('h-20 aspect-square relative rounded-full overflow-hidden border-4 border-slate-400', activeImg === mProfile2 ? 'border-green-600' : '')}><Image src={mProfile2} alt='testinomy-img' fill className='object-cover' /></div>
                <div onClick={() => setActiveImg(fProfile2)} className={cn('h-20 aspect-square relative rounded-full overflow-hidden border-4 border-slate-400', activeImg === fProfile2 ? 'border-green-600' : '')}><Image src={fProfile2} alt='testinomy-img' fill className='object-cover' /></div>
            </div>
            <div className='mt-6'>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmitt)} className='space-y-4  w-full'>
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem className='relative'>
                                    <FormLabel className='absolute -top-[5px] ml-2 bg-white text-xs text-black px-2 py-px z-10 rounded-3xl'>Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter your name" {...field} className='w-full placeholder:text-white/70 bg-transparent backdrop-blur-sm border-2 border-white text-white rounded-3xl ring-0 ring-offset-0 focus:!ring-0 focus:!ring-offset-0 ' />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem className='relative'>
                                    <FormLabel className='absolute -top-[5px] ml-2 bg-white text-xs text-black px-2 py-px z-10 rounded-3xl'>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="email" {...field} className='w-full placeholder:text-white/70 bg-transparent backdrop-blur-sm border-2 border-white text-white rounded-3xl ring-0 ring-offset-0 focus:!ring-0 focus:!ring-offset-0 ' />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className='flex justify-between'>
                            <FormField
                                control={form.control}
                                name="company"
                                render={({ field }) => (
                                    <FormItem className='relative'>
                                        <FormLabel className='absolute -top-[5px] ml-2 bg-white text-xs text-black px-2 py-px z-10 rounded-3xl'>Company</FormLabel>
                                        <FormControl>
                                            <Input placeholder="company" {...field} className='w-full placeholder:text-white/70 bg-transparent backdrop-blur-sm border-2 border-white text-white rounded-3xl ring-0 ring-offset-0 focus:!ring-0 focus:!ring-offset-0 ' />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="job_title"
                                render={({ field }) => (
                                    <FormItem className='relative'>
                                        <FormLabel className='absolute -top-[5px] ml-2 bg-white text-xs text-black px-2 py-px z-10 rounded-3xl'>Job title</FormLabel>
                                        <FormControl>
                                            <Input placeholder="job title" {...field} className='w-full placeholder:text-white/70 bg-transparent backdrop-blur-sm border-2 border-white text-white rounded-3xl ring-0 ring-offset-0 focus:!ring-0 focus:!ring-offset-0 ' />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem className='relative'>
                                    <FormLabel className='absolute -top-[5px] ml-2 bg-white text-xs text-black px-2 py-px  z-10 rounded-3xl'>Message</FormLabel>
                                    <FormControl>
                                        <Textarea rows={4} placeholder="Add your message... " {...field} className='w-full placeholder:text-white/70 bg-transparent backdrop-blur-sm border-2 border-white text-white rounded-3xl ring-0 ring-offset-0 focus:!ring-0 focus:!ring-offset-0 resize-none' />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className='flex gap-4'>
                            <Button type="reset" onClick={() => form.reset()} className='rounded-3xl w-full font-semibold hover:-translate-y-[2px] hover:shadow-md transition-all duration-300'>Cancel</Button>
                            {
                            loading ? (
                                <Button type="submit" className='rounded-3xl w-full font-semibold hover:-translate-y-[2px] hover:shadow-md transition-all duration-300'><Loader className='h-4 w-4 text-black animate-spin transition-all' /></Button>
                            ) : (
                                <Button type="submit" className='rounded-3xl w-full font-semibold hover:-translate-y-[2px] hover:shadow-md transition-all duration-300'>submit</Button>
                            )
                            }
                        </div>

                    </form>
                </Form>
            </div>
        </>
    )
}

export default Testimony

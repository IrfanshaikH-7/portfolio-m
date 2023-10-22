"use client"
import React, { useState } from 'react'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
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
import { Loader } from 'lucide-react'

const maleUser = 'https://utfs.io/f/2f148ac7-2952-4937-acd7-94c8a27269c5-156r20.jpeg'
const femaleUser = 'https://utfs.io/f/86eb14e9-c696-4fcd-9ae7-6037ddb819c1-azpgi1.png'

const Anonymous = () => {
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    const [image, setImage] = useState('')

    const TestimonySchema = z.object({
        name: z.string().min(3, { message: "name must be atleast 3 characters." }),
        email: z.string().email(),
        message: z.string().min(8),
    })

    const form = useForm<z.infer<typeof TestimonySchema>>({
        resolver: zodResolver(TestimonySchema),
        defaultValues: {
            name: '',
            email: '',
            message: '',
        }
    })
    const onSubmitt = async (values: z.infer<typeof TestimonySchema>) => {
        setLoading(true)
        const testimony = await axios.post('/api/testimonial', {
            name: values.name,
            email: values.email,
            message: values.message,
            imgUrl: image,
            anonymous: true
        })
        if (testimony) {
            form.reset()
            setImage('')
            router.push('/')
            
        }
        
        setLoading(false)
    }

    return (
        <>
            <div className=' flex justify-center items-center gap-2 h-24 w-full bg-slate-800 rounded-3xl'>
                <div onClick={() => setImage(maleUser)} className={cn('h-20 aspect-square relative rounded-full overflow-hidden border-4 border-slate-400', image === maleUser ? 'border-green-600' : '')}><Image src={maleUser} alt='testinomy-img' fill className='object-cover' /></div>
                <div onClick={() => setImage(femaleUser)} className={cn('h-20 aspect-square relative rounded-full overflow-hidden border-4 border-slate-400', image === femaleUser ? 'border-green-600' : '')}><Image src={femaleUser} alt='testinomy-img' fill className='object-cover' /></div>

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

export default Anonymous;


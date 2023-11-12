"use client"
import React, { useState } from 'react';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Textarea } from '../ui/textarea'
import axios from 'axios';
import { Loader2 } from 'lucide-react';

const ContactForm = () => {
    const [loading,setLoading] = useState(false)
    const contactSchema = z.object({
        name: z.string().min(3, { message: "name must be atleast 3 characters." }),
        email: z.string().email(),
        message: z.string().min(8)
    })

    const form = useForm<z.infer<typeof contactSchema>>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            name: '',
            email: '',
            message: ''
        }
    })
    console.log(typeof(form))
    const onSubmit = async(values: z.infer<typeof contactSchema>) => {
        setLoading(true)
        console.log(typeof(values.name))
        const mail = await axios.post('/api/contact',{
            name: values.name,
            email:values.email,
            message: values.message
        }).then(
            (res)=>{
                if(res.status == 200){
                    form.reset()
                }
            }
        ).finally( ()=>
            setLoading(false)
        )
        
    }

    return (
        <div className='flex flex-col h-full w-full gap-10 md:gap-24 justify-end items-center px-4 sm:px-8 lg:px-16 xl:px-28 xl py-28 '>
            <div className='flex justify-center items-center h-36 md:h-48 w-full md:absolute md:left-6 lg:left-12 top-24 bg-transparent dark:bg-white rounded-full border-8 border-white dark:border-slate-950'>
                <p className='text-3xl md:text-5xl xl:text-7xl text-white dark:text-black font-semibold'>Get In Touch</p>
            </div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4 w-full'>
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem className='relative'>
                                <FormLabel className='absolute -top-[9px] ml-2 bg-white text-xs text-black px-2 py-[2px] z-10 rounded-3xl'>Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter your name" {...field} name='user_name' className='w-full placeholder:text-white/70 bg-transparent backdrop-blur-sm border-2 border-white  text-white rounded-3xl ring-0 ring-offset-0 focus:!ring-0 focus:!ring-offset-0 ' />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem className='relative'>
                                <FormLabel className='absolute -top-[9px] ml-2 bg-white text-xs text-black px-2 py-[2px] z-10 rounded-3xl'>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter your email" {...field} name='user_email' className='w-full placeholder:text-white/70 bg-transparent backdrop-blur-sm border-2 border-white text-white rounded-3xl ring-0 ring-offset-0 focus:!ring-0 focus:!ring-offset-0 ' />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem className='relative'>
                                <FormLabel className='absolute -top-[9px] ml-2 bg-white text-xs text-black px-2 py-[2px] z-10 rounded-3xl'>Message</FormLabel>
                                <FormControl>
                                    <Textarea rows={4} placeholder="Add your message" {...field} name='user_message' className='w-full placeholder:text-white/70 bg-transparent backdrop-blur-sm border-2 border-white text-white rounded-3xl ring-0 ring-offset-0 focus:!ring-0 focus:!ring-offset-0 resize-none' />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <div className='flex gap-4'>
                       <Button type="reset" onClick={()=> form.reset()} className='rounded-3xl w-full font-semibold hover:bg-white hover:-translate-y-[2px] hover:shadow-md transition-all duration-300 bg-white text-black/80'>Cancel</Button>
                    <Button type="submit" className='rounded-3xl w-full font-semibold hover:bg-white hover:-translate-y-[2px] hover:shadow-md transition-all duration-300 bg-white text-black/80'>{loading ? <Loader2 className='h-4 w-4 animate-spin'/> : 'Submit' }</Button> 
                    </div>
                    
                </form>
            </Form>
        </div>
    )
}

export default ContactForm

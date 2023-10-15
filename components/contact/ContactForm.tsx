"use client"
import React from 'react'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Textarea } from '../ui/textarea'

const ContactForm = () => {
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
    const onSubmit = (values: z.infer<typeof contactSchema>) => {
        console.log(values)
    }

    return (
        <div className='flex flex-col h-full w-full gap-24 justify-end items-center px-4 sm:px-28 py-28'>
            <div className='flex justify-center items-center h-48 w-full absolute md:left-12 top-24 bg-white rounded-full border-8 border-slate-950'>
                <p className='text-4xl md:text-7xl text-black font-semibold'>Get In Touch</p>
            </div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4  w-full'>
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem className='relative'>
                                <FormLabel className='absolute -top-[9px] ml-2 bg-white text-xs text-black px-2 py-[2px] z-10 rounded-3xl'>Name</FormLabel>
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
                                <FormLabel className='absolute -top-[9px] ml-2 bg-white text-xs text-black px-2 py-[2px] z-10 rounded-3xl'>Email</FormLabel>
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
                                <FormLabel className='absolute -top-[9px] ml-2 bg-white text-xs text-black px-2 py-[2px] z-10 rounded-3xl'>Message</FormLabel>
                                <FormControl>
                                    <Textarea rows={4} placeholder="shadcn" {...field} className='w-full placeholder:text-white/70 bg-transparent backdrop-blur-sm border-2 border-white text-white rounded-3xl ring-0 ring-offset-0 focus:!ring-0 focus:!ring-offset-0 resize-none' />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className='flex gap-4'>
                       <Button type="reset" onClick={()=> form.reset()} className='rounded-3xl w-full font-semibold hover:-translate-y-[2px] hover:shadow-md transition-all duration-300'>Cancel</Button>
                    <Button type="submit" className='rounded-3xl w-full font-semibold hover:-translate-y-[2px] hover:shadow-md transition-all duration-300'>Submit</Button> 
                    </div>
                    
                </form>
            </Form>
        </div>
    )
}

export default ContactForm

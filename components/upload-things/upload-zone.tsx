"use client"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import React from 'react'
import { TagInput } from '@/components/tag-input'
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useForm } from "react-hook-form"
import { Button } from "../ui/button"
import { toast } from "../ui/use-toast"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"


const FormZone = () => {
  const [tags, setTags] = React.useState<string[]>([]);


  const FormSchema = z.object({
    tag: z.array(z.string().max(6)),
    pointers: z.string().min(3),
  })
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      tag: [],
      pointers: '',
    },
  })
  const { setValue } = form;
  function onSubmit(values: z.infer<typeof FormSchema>) {
    console.log(values.tag)
    console.log(values.pointers)
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <div className="h-full w-full">
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <FormField
          control={form.control}
          name="tag"
          render={({ field }) => (
            <FormItem className="relative w-full">
              <FormLabel className="absolute -top-1.5 ml-3 px-3 bg-[#060608] rounded-md shadow-md text-[11px]  uppercase font-syne font-semibold ">Techs</FormLabel>

              <FormControl>
                <TagInput
                  {...field}
                  placeholder="Enter a topic"
                  tags={tags}
                  className= 'border-blue-400 border  bg-blue-200 text-slate-700 ring-0 ring-offset-0 focus:!ring-0 focus:!ring-offset-0'
                  setTags={(newTags) => {
                    setTags(newTags);
                    setValue("tag", newTags as [string, ...string[]]);
                  }}
                />


              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="pointers"
          render={({ field }) => (
            <FormItem className="relative">
              <FormLabel className="absolute -top-1.5 ml-3 px-3 bg-[#060608] rounded-md shadow-md text-[11px]  uppercase font-syne font-semibold ">Pointers</FormLabel>
              <FormControl>
                <Textarea rows={4} placeholder="enter pointers saperated by '.'" {...field} 
                className= 'border-blue-400 border  bg-blue-200 text-slate-700 ring-0 ring-offset-0 focus:!ring-0 focus:!ring-offset-0'

                />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
    </div>
    
  )
}

export default FormZone;
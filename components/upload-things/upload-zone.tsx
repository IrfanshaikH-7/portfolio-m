"use client"
import axios from 'axios'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import React, { useState } from 'react'
import { TagInput } from '@/components/tag-input'
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useForm } from "react-hook-form"
import { Button } from "../ui/button"
import { toast } from "../ui/use-toast"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { UploadDropzone } from "@/utils/uploadthing"
import { UploadButton } from "@uploadthing/react"
import Image from "next/image"
import { POST } from "@/app/api/projects/route"
import { CreateProject } from '@/lib/server-actions'


const FormZone = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [images, setImages] = useState<string[]>([]);

  // console.log(images)
  // console.log(" up image")
  const FormSchema = z.object({
    tag: z.array(z.string()),
    pointers: z.string().min(16),
    githubLink: z.string().url().optional(),
    liveLink: z.string().url().optional(),
    title: z.string().min(3),
    note: z.string().min(3),
    


  })
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      tag: [],
      pointers: '',
      title: '',
      githubLink: '',
      liveLink: '',
      note: ''
    },
  })
  const { setValue } = form;
  async function onSubmit(values: z.infer<typeof FormSchema>) {
    console.log(images)
    console.log(values)
    const proojects = await CreateProject({
      title: values.title,
      note: values.note,
      tag: values.tag,
      imgUrl: images,
      githublink: values.githubLink,
      livelink: values.liveLink,
      pointers: values.pointers
    })


    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      ),
    })
    setTags([])
    form.reset()
  }

  return (
    <div className=" flex flex-col justify-center h-full w-full ">
      <div className="h-64 w-96 relative mb-6 rounded-md feld self-center">
        {images ?  (
          <div className="">
            <UploadDropzone
              className="h-64 w-full mb-2 p-8"
              endpoint="imageUploader"
              onClientUploadComplete={(res) => {
                // Do something with the response
                if (res) {
                  
                  const json = JSON.stringify(res)
                  console.log(json);
                  var img = []
                  for(var i in res){
                    img.push(res[i].url)
                  }
                  setImages(img)
                  console.log(img)
                  // console.log(res[0].url)
                }
                // console.log("Files: ", res);
                // alert("Upload Completed");
              }}
              onUploadError={(error: Error) => {
                // Do something with the error.
                alert(`ERROR! ${error.message}`);
              }}
            />
          </div>

        ) : (
          <Image
            src={images[0]}
            alt="upload-img"
            fill
            className="object-cover rounded-md border border-blue-400"
          />
        )
        }
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">



          <div className="flex w-full gap-2">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem className="relative">
                  <FormLabel className="absolute -top-1.5 ml-3 px-3 bg-[#060608] rounded-md shadow-md text-[11px]  uppercase font-syne font-semibold ">
                    Title
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Enter title" {...field}
                      className='border-blue-400 border  bg-zinc-900 text-zinc-400 ring-0 ring-offset-0 focus:!ring-0 focus:!ring-offset-0'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="note"
              render={({ field }) => (
                <FormItem className="relative flex-1">
                  <FormLabel className="absolute  -top-1 ml-3 px-3 bg-[#060608] rounded-md shadow-md text-[11px]  uppercase font-syne font-semibold ">
                    Project note
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Add a short note" {...field}
                      className='border-blue-400 border  bg-zinc-900 text-zinc-400 ring-0 ring-offset-0 focus:!ring-0 focus:!ring-offset-0'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="tag"
            render={({ field }) => (
              <FormItem className="relative w-full">
                <FormLabel className="absolute -top-1.5 ml-3 px-3 bg-[#060608] rounded-md shadow-md text-[11px]  uppercase font-syne font-semibold ">Techs</FormLabel>

                <FormControl>
                  <TagInput
                    {...field}
                    placeholder="Press Enter to add #tag"
                    tags={tags}
                    className='border-blue-400 border  bg-zinc-900 text-zinc-400 ring-0 ring-offset-0 focus:!ring-0 focus:!ring-offset-0'
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
            name="githubLink"
            render={({ field }) => (
              <FormItem className="relative flex-1">
                <FormLabel className="absolute  -top-1 ml-3 px-3 bg-[#060608] rounded-md shadow-md text-[11px]  uppercase font-syne font-semibold ">
                  Github link
                </FormLabel>
                <FormControl>
                  <Input placeholder="Add a short note" {...field}
                    className='border-blue-400 border  bg-zinc-900 text-zinc-400 ring-0 ring-offset-0 focus:!ring-0 focus:!ring-offset-0'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="liveLink"
            render={({ field }) => (
              <FormItem className="relative flex-1">
                <FormLabel className="absolute  -top-1 ml-3 px-3 bg-[#060608] rounded-md shadow-md text-[11px]  uppercase font-syne font-semibold ">
                  Live link
                </FormLabel>
                <FormControl>
                  <Input placeholder="Add a short note" {...field}
                    className='border-blue-400 border  bg-zinc-900 text-zinc-400 ring-0 ring-offset-0 focus:!ring-0 focus:!ring-offset-0'
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
                <FormLabel className="absolute -top-1.5 ml-3 px-3 bg-[#060608] rounded-md shadow-md text-[11px]  uppercase font-syne font-semibold ">
                  Pointers
                </FormLabel>
                <FormControl>
                  <Textarea rows={4} placeholder="Enter pointers saperated by '.'" {...field}
                    className='border-blue-400 border  bg-zinc-900 text-zinc-400 ring-0 ring-offset-0 focus:!ring-0 focus:!ring-offset-0'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-full bg-gradient-to-t from-blue-400 opacity-90  to-gray-200 hover:opacity-100 transition-all" type="submit">Submit</Button>
        </form>
      </Form>
    </div>

  )
}

export default FormZone;
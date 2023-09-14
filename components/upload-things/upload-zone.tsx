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


const UploadZone = () => {



  const [tags, setTags] = React.useState<string[]>([]);



  const FormSchema = z.object({
    tag: z.array(z.string()),
  })
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      tag: [],
    },
  })
  const { setValue } = form;
  function onSubmit(values: z.infer<typeof FormSchema>) {
    console.log(values.tag)
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
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="tag"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Topics</FormLabel>
              <FormControl>
                <TagInput
                  {...field}
                  placeholder="Enter a topic"
                  tags={tags}
                  className='sm:min-w-[450px]'
                  setTags={(newTags) => {
                    setTags(newTags);
                    setValue("tag", newTags as [string, ...string[]]);
                  }}
                />
              </FormControl>
              <FormDescription>
                These are the topics that you&apos;re interested in.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

export default UploadZone;
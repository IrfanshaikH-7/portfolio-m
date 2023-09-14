"use client";
 
// You need to import our styles for the button to look right. Best to import in the root /layout.tsx but this is fine
import "@uploadthing/react/styles.css";
 
import { UploadDropzone } from "@/lib/utils";
import { ChangeEvent, KeyboardEvent, useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { X } from "lucide-react";

declare global {
  interface WindowEventMap {
    keydown: KeyboardEvent<HTMLInputElement>
  }
}

const formSchema = z.object({
  title: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  taqs: z.string().min(3),
  category: z.string()



})
 
export default function UploadZone() {
  const [images, setImages] = useState(["fir","asos"]);
  const [taqs, setTaqs] = useState<String[]>(["fir","asos"]);
  const [isKeyDown, setIsKeyDown] = useState(false);


  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      taqs: '',
      category: 'Full stack' || 'Hobby' || ''
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  

  const handleKeyDown = (e: KeyboardEvent & { target: EventTarget}) => {
      if(e.key !== 'Enter') return false
      setIsKeyDown(true)
      
  }

  return (
    // <main className="flex flex-col items-center  justify-between px-2 border rounded-md">
    //   <UploadDropzone
    //     endpoint="imageUploader"
    //     onClientUploadComplete={(res) => {
    //       // Do something with the response
    //       console.log("Files: ", res);
    //       alert("Upload Completed");
    //     }}
    //     onUploadError={(error: Error) => {
    //       // Do something with the error.
    //       alert(`ERROR! ${error.message}`);
    //     }}
    //   />
    // </main>
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      <FormField
        control={form.control}
        name="title"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Username</FormLabel>
            <FormControl>
                <Input placeholder="shadcn" {...field} />
            </FormControl>
            <FormDescription>
              This is your public display name.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="category"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Desc</FormLabel>
            <FormControl>
              <Input placeholder="shadcn" {...field} />
            </FormControl>
            <FormDescription>
              This is your public display name.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="taqs"
        render={({ field }) => (
          <FormItem>
            <FormLabel>taq</FormLabel>
            <FormControl>
              <div>
                <Input placeholder="shadcn"  onKeyDown={handleKeyDown} {...field} />
                {taqs.map((taq) => (
                  <div className= "flex items-center justify-center text-white bg-red-700 w-fit">
                    {taq} 
                    <X className="h-4 w-4"/>
                  </div>
                ))}
              </div>
              
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
  );
}
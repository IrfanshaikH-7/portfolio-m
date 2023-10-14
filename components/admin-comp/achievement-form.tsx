"use client"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Calendar } from "@/components/ui/calendar"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useForm } from "react-hook-form"
import { toast } from "../ui/use-toast"
import { Input } from "../ui/input"
import { useState } from "react"
import Image from "next/image"
import { UploadDropzone } from "@/utils/uploadthing"
import { Button } from "../ui/button"
import { DatePicker } from "../utility/datepicker"
import { cn } from "@/lib/utils"
import { CreateAchievement } from "@/lib/achievement-actions"
const AchievementForm = () => {
    const [images, setImages] = useState<string[]>([]);
    const [date, setDate] = useState<Date>()

    console.log(images)
    const AchieveSchema = z.object({
        title: z.string().min(3),
    })

    const form = useForm<z.infer<typeof AchieveSchema>>({
        resolver: zodResolver(AchieveSchema),
        defaultValues: {
            title: '',
        },
    })

    async function ocnSubmit(values: z.infer<typeof AchieveSchema>) {

        const achievement = await CreateAchievement({
            title: values.title,
            imgUrl:images,
            date: date
        })

        toast({
            title: "You submitted the following values:",
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">{JSON.stringify(values, null, 2)}</code>
                </pre>
            ),
        })
        setImages([])
        form.reset()
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(ocnSubmit)} className="space-y-4">

                <div className="h-64 w-96 relative mb-6 rounded-md self-center">
                    {images ? (
                        <div >
                            <UploadDropzone
                                className="h-64 w-full mb-6 p-8 border border-zinc-500"
                                endpoint="imageUploader"
                                onClientUploadComplete={(res) => {
                                    // Do something with the response
                                    if (res) {

                                        const json = JSON.stringify(res)
                                        console.log(json);
                                        var img = []
                                        for (var i in res) {
                                            img.push(res[i].url)
                                        }
                                        setImages(img)
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


                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem className="relative flex-1">
                            <FormLabel className="absolute -top-1.5 ml-3 px-3 bg-[#060608] rounded-md shadow-md text-[11px]  uppercase font-syne font-semibold ">
                                Title
                            </FormLabel>
                            <FormControl>
                                <Input placeholder="Enter title" {...field}
                                    className='bg-zinc-900 border border-white text-zinc-400 ring-0 ring-offset-0 focus:!ring-0 focus:!ring-offset-0'
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Popover>
                    <PopoverTrigger asChild>
                        <Button
                            variant={"outline"}
                            className={cn(
                                "w-[280px] justify-start text-left font-normal",
                                !date && "text-muted-foreground"
                            )}
                        >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "dd-MM-yyyy") : <span>Pick a date</span>}
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                        <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            initialFocus
                        />
                    </PopoverContent>
                </Popover>

                <Button className="w-full bg-gradient-to-t from-orange-400 opacity-80  to-orange-500 hover:opacity-100 hover:-translate-y-1 transition-all" type="submit">Submit</Button>

            </form>
        </Form>

    );
}

export default AchievementForm;
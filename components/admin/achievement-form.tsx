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
        setImages([])
        form.reset()
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(ocnSubmit)} className="space-y-4 px-4">

                <div className="relative mb-6 rounded-md self-center">
                    {images ? (
                        <div >
                            <UploadDropzone
                                className="h-64 w-64 mx-auto mb-6 border  border-zinc-500"
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
                            <FormLabel className="absolute -top-1.5 text-white  px-3 bg-slate-600 dark:bg-slate-950 rounded-full shadow-md text-[11px]  uppercase  font-semibold ">
                                Title
                            </FormLabel>
                            <FormControl>
                                <Input placeholder="Enter title" {...field}
                                    className='bg-slate-300 dark:bg-slate-950 border border-black dark:border-white text-slate-700 dark:text-zinc-400 ring-0 ring-offset-0 focus:!ring-0 focus:!ring-offset-0 rounded-3xl'
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
                                "w-[280px] justify-start text-left font-normal rounded-3xl",
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

                <Button className="w-full bg-gradient-to-t from-emerald-400 opacity-80  to-emerald-400/90  hover:opacity-100 hover:-translate-y-1 transition-all rounded-3xl" type="submit">Submit</Button>

            </form>
        </Form>

    );
}

export default AchievementForm;
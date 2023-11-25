import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '../ui/button'
import Testimony from './Testimony'
import Anonymous from './Anonymous'

const TestimonialDialog = () => {
  return (
    <div className='px-4'>
      <Dialog >
        <DialogTrigger className='text-xs'>Add a testimony</DialogTrigger>
        <DialogContent className='w-[90%] sm:w-full'>
          <DialogHeader>
            <DialogTitle>Add a testimony</DialogTitle>
            <DialogDescription>
              You can also add anonymous testimony.I appreciate a real testimony
            </DialogDescription>
          </DialogHeader>
          <div className='h-full w-full'>
            <div className='flex gap-4'>

              <Dialog>
                <DialogTrigger><Button >Add anonymous</Button></DialogTrigger>
                <DialogContent className='w-[95%] rounded-3xl'>
                  <DialogHeader>
                    <DialogTitle>Anonymous</DialogTitle>
                    <DialogDescription>
                      You can also add anonymous testimony.I appreciate a real testimony
                      <p className='font-semibold text-green-400 '>Note : Your name and email wont be shown</p>

                    </DialogDescription>
                  </DialogHeader>
                  <div className='h-full w-full flex flex-col justify-center items-center'>

                    <Anonymous />
                  </div>
                </DialogContent>
              </Dialog>



              <Dialog >
                <DialogTrigger><Button>Testimony</Button></DialogTrigger>
                <DialogContent className='w-[95%] rounded-3xl'>
                  <DialogHeader>
                    <DialogTitle>Testinomy</DialogTitle>
                    <DialogDescription>
                      Greetings...
                    </DialogDescription>
                  </DialogHeader>
                  <div className='h-full w-full flex flex-col justify-center items-center'>
                    <Testimony />
                  </div>
                </DialogContent>
              </Dialog>




            </div>
          </div>

        </DialogContent>
      </Dialog>
    </div>
  )
}

export default TestimonialDialog

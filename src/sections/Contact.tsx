"use client"
import React from 'react'

import {zodResolver} from '@hookform/resolvers/zod'
import {useForm} from 'react-hook-form'
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {Textarea} from '@/components/ui/textarea'

const formSchema = z.object({
  name: z.string().min(2, {message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({message: "Invalid email address"}),
  phone: z.string().min(10, {message: "Phone number must be at least 10 characters"}),
  message: z.string().min(5, {message: "Message  must be at least 20 characters"}),
})

const Contact = () => {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
    form.reset()
  }

  return (
    <section className="py-6 mt-20">
      <div className=" container">
        <div className="items-center text-center inset-0 flex flex-col justify-center">
          <h1 className="text-bluee font-semibold text-4xl">Let&apos;s Talk</h1>
          <p className="mt-6 text-grey text-lg max-w-[450px] w-full">
            Do you have an inquiry or need help? Then reach out we&apos;d love
            to hear from you and provide help
          </p>
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 mt-16"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[20px] text-bluee">Name</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      className="bg-lightgrey border-none outline-none py-9"
                    />
                  </FormControl>
                  <FormMessage className="" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[20px] text-bluee">
                    Email
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      className="bg-lightgrey border-none outline-none py-9"
                    />
                  </FormControl>
                  <FormMessage className="" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[20px] text-bluee">
                    Phone number
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      className="bg-lightgrey border-none outline-none py-9"
                    />
                  </FormControl>
                  <FormMessage className="" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[20px] text-bluee">
                    Message
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      className="bg-lightgrey border-none outline-none py-4 h-32 resize-none"
                    />
                  </FormControl>
                  <FormMessage className="" />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full bg-lightbluee py-6 text-[18px]">
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
}

export default Contact
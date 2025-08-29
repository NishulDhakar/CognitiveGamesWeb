"use client"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/ui/form"
import { Input } from "@/components/ui/ui/input"
import { authClient } from "@/lib/auth-client"
import { formSchema } from "@/lib/auth-schema"

import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

export default function SignUpForm() {
  const router = useRouter()

const form = useForm<z.infer<typeof formSchema>>({
resolver: zodResolver(formSchema),
  defaultValues: {
    name: "",
    email: "",
    password: "",
  },
})

async function onSubmit(values: z.infer<typeof formSchema>) {
  const { email, password } = values;

  if (!email || !password) {
    toast.error("Email and password are required");
    return;
  }

  try {
    await authClient.signUp.email(
      { email, password },
      {
        onRequest: () => toast("Signing up..."),
        onSuccess: () => {
          form.reset();
          router.push("/sign-in");
        },
        onError: (ctx) => {
          console.error("Sign-up error:", ctx.error);
          toast.error(ctx.error?.message || "Sign-up failed");
        },
      }
    );
  } catch (err) {
    console.error("Unexpected sign-up error:", err);
    toast.error("Something went wrong");
  }
}


  return (
    <div className="flex items-center justify-center dark:from-zinc-950 dark:to-zinc-900 px-4">
      <div className="w-full max-w-md border-2 border-black dark:border-white/20 dark:bg-zinc-900 
                      shadow-[6px_6px_0px_0px_#000] dark:shadow-[6px_6px_0px_0px_#757373] 
                      rounded-xl p-8 space-y-6">
        
        {/* Title */}
        <h1 className="text-2xl font-bold text-center text-black dark:text-white">
          Create an Account
        </h1>
        <p className="text-center text-sm text-zinc-600 dark:text-zinc-400">
          Join us and start playing awesome games.
        </p>

        {/* Form */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold">Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="John Doe"
                      {...field}
                      className="border-2 border-black dark:border-white/20 shadow-[3px_3px_0px_0px_#000] 
                                 dark:shadow-[3px_3px_0px_0px_#757373] rounded-md px-3 py-2 
                                 focus:outline-none focus:ring-2 focus:ring-[#A35C2D]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold">Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="m@example.com"
                      {...field}
                      className="border-2 border-black dark:border-white/20 shadow-[3px_3px_0px_0px_#000] 
                                 dark:shadow-[3px_3px_0px_0px_#757373] rounded-md px-3 py-2 
                                 focus:outline-none focus:ring-2 focus:ring-[#A35C2D]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold">Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="********"
                      {...field}
                      className="border-2 border-black dark:border-white/20 shadow-[3px_3px_0px_0px_#000] 
                                 dark:shadow-[3px_3px_0px_0px_#757373] rounded-md px-3 py-2 
                                 focus:outline-none focus:ring-2 focus:ring-[#A35C2D]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit button */}
            <Button
              type="submit"
              className="w-full gap-2 border-2 border-black bg-white text-black font-semibold 
                         shadow-[4px_4px_0px_0px_#000] transition-all duration-200 
                         hover:translate-x-1 hover:translate-y-1 hover:text-white hover:bg-[#A35C2D] 
                         hover:shadow-[2px_2px_0px_0px_#000]
                         dark:border-white/20 dark:bg-zinc-900 dark:text-white 
                         dark:shadow-[4px_4px_0px_0px_#757373] 
                         dark:hover:shadow-[2px_2px_0px_0px_#757373]"
            >
              Register
            </Button>
          </form>
        </Form>
      </div>
    </div>
  )
}

"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  InputOTPGroup,
  InputOTP,
  InputOTPSlot,
} from "@/components/ShadCN/ui/input-otp";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ShadCN/ui/form";
import { Button } from "@/components/ShadCN/ui/button";
import { toast } from "@/hooks/ShadCN/use-toast";
 
const FormSchema = z.object({
  pin: z.string().min(6, {
    message: "Your one-time password must be 6 characters.",
  }),
});

export function InputOTPForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pin: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full max-w-sm space-y-6 text-center"
        >
          <FormField
            control={form.control}
            name="pin"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-center text-3xl text-blue-950">Enter One-Time Password</FormLabel>
                <FormControl>
                  <InputOTP maxLength={6} {...field}>
                    <InputOTPGroup className="flex justify-center space-x-4">
                      <InputOTPSlot
                        index={0}
                        className="w-14 h-14 text-center text-xl border rounded-md"
                      />
                      <InputOTPSlot
                        index={1}
                        className="w-14 h-14 text-center text-xl border rounded-md"
                      />
                      <InputOTPSlot
                        index={2}
                        className="w-14 h-14 text-center text-xl border rounded-md"
                      />
                      <InputOTPSlot
                        index={3}
                        className="w-14 h-14 text-center text-xl border rounded-md"
                      />
                      <InputOTPSlot
                        index={4}
                        className="w-14 h-14 text-center text-xl border rounded-md"
                      />
                      <InputOTPSlot
                        index={5}
                        className="w-14 h-14 text-center text-xl border rounded-md"
                      />
                    </InputOTPGroup>
                  </InputOTP>
                </FormControl>
                <FormDescription className="text-center">
                  Please enter the one-time password sent to your phone.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="mt-4">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}

"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import CustomInput from "@/components/custom-input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z
  .object({
    username: z
      .string()
      .min(3, {
        message: "Username must be at least 3 characters.",
      })
      .max(20, {
        message: "Username must be less than 20 characters.",
      }),
    email: z.string().email(),
    password: z
      .string()
      .regex(/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+])(?=.{8,})[a-zA-Z0-9!@#$%^&*()_+]+$/, {
        message:
          "Password should be minimum 8 characters and include at least one uppercase letter & special char",
      }),
    confirmPassword: z.string(),
    termsAndConditions: z.boolean().default(false).optional(),
  })
  .refine((data) => data.confirmPassword === data.password, {
    message: "Passwords do not match.",
  });

type FormValues = z.infer<typeof formSchema>;

export const SignInForm = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((data) => console.log(data))}//submit handler
        className="mx-5 grid max-w-lg rounded-md border bg-zinc-900/30 px-8 py-12 backdrop-blur-sm "
      >
        <div className="text-center">
          <h1 className="text-3xl font-medium">Let's Get Started!</h1>
          <p className="mt-2 text-gray-500">
            Create an account to get all features
          </p>
        </div>
        <div className="mt-5 grid gap-4 ">
          <CustomInput
            control={form.control}
            name="username"
            placeholerText="Username"
          />
          <CustomInput
            control={form.control}
            name="email"
            placeholerText="Email"
          />
          <CustomInput
            control={form.control}
            name="password"
            placeholerText="Password"
            type="password"
          />
          <CustomInput
            control={form.control}
            name="confirmPassword"
            placeholerText="Confirm Password"
            type="password"
          />
          <div className="grid">
            <FormField
              control={form.control}
              name="termsAndConditions"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="mt-1"
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none pt-[2px]">
                    <FormLabel>Agree to terms & conditions</FormLabel>
               
                  </div>
                </FormItem>
              )}
            />
          </div>
          <div className="h-[0.5px] bg-primary"></div>
          <Button type="submit" className="bg-primary hover:bg-lime-400 w-[80%] mx-auto ">
            Continue
          </Button>
        </div>
      </form>
    </Form>
  );
};

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
      .regex(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{8,}$/, {
        message:
          "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.",
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
        onSubmit={form.handleSubmit((data) => console.log(data))}
        className="mx-5 grid max-w-lg rounded-md border bg-zinc-900/30 px-8 py-12 backdrop-blur-sm"
      >
        <div className="text-center">
          <h1 className="text-3xl font-medium">Set Up Your Account</h1>
          <p className="mt-2 text-gray-500">
            Some Random Paragraph to convince people
          </p>
        </div>
        <div className="mt-5 grid gap-4">
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
          />
          <CustomInput
            control={form.control}
            name="confirmPassword"
            placeholerText="Confirm Password"
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
                  <div className="space-y-1 leading-none">
                    <FormLabel>Accept terms and conditions</FormLabel>
                    <FormDescription>
                      You agree to our terms and conditions
                    </FormDescription>
                  </div>
                </FormItem>
              )}
            />
          </div>
          <div className="h-[0.5px] bg-primary"></div>
          <Button type="submit" className="bg-primary hover:bg-lime-400">
            Continue
          </Button>
        </div>
      </form>
    </Form>
  );
};

import { Resend } from "resend";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { useState } from "react";

export function ContactForm() {
  return (
    <div>
      <h1 className="text-2xl m-10 font-serif text-center font-thin">
        Fill the form and we will call you soon
      </h1>
      <form
        className="w-[40%] ml-10"
        action={async (formData) => {
          "use server";
          const name = formData.get("name")!;
          const email = formData.get("email")!;
          const phone = formData.get("phone")!;

          const resend = new Resend("re_JaYBLSvp_7v6jUzQSJCCdWG8NRq9PLiVJ");

          await resend.emails.send({
            from: "onboarding@resend.dev",
            to: "markgufman21@gmail.com",
            subject: "Form submission",
            html: `Form was submitted: name: ${name}, email: ${email}, phone: ${phone}`,
          });
        }}
      >
        <div>
          <Label htmlFor="name" className="font-mono text-lg">
            Name
          </Label>
          <Input type="text" name="name" id="name" className="mb-6" />
        </div>
        <div>
          <Label htmlFor="email" className="font-mono text-lg">
            Email
          </Label>
          <Input type="email" name="email" id="email" className="mb-6" />
        </div>
        <div>
          <Label htmlFor="phone" className="font-mono text-lg">
            Phone
          </Label>
          <Input type="tel" name="phone" id="phone" className="mb-6" />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}

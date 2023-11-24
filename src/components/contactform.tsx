"use client";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { useState } from "react";
import { sendmail } from "./sendemail";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    await sendmail(name, email, phone);

    setEmail("");
    setName("");
    setPhone("");
  };

  return (
    <div className="">
      <p className="text-2xl font-serif text-center mb-10">
        Fill the form and we will reach to you soon!
      </p>
      <div className="flex justify-center items-center pt-14">
        {/* Image on the left */}

        <div className="flex flex-col items-center">
          <section className="w-72">
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
              <Label htmlFor="name">Name:</Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <Label htmlFor="email">Email:</Label>
              <Input
                type="text"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <Label htmlFor="phone">Phone:</Label>
              <Input
                className="pb-5"
                type="text"
                id="phone"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />

              <Button
                type="submit"
                className="bg-black text-white py-2 px-4 rounded-md"
              >
                submit
              </Button>
            </form>
          </section>
        </div>

        {/* Image on the right */}
      </div>
    </div>
  );
}

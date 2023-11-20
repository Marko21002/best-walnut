import About from "@/components/about";
import { ContactForm } from "@/components/contactform";
import Navbar from "@/components/navbar";
import Slogan from "@/components/slogan";
import Tablet from "@/components/table";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Slogan />
      <About />
      <Tablet />
      <ContactForm />
    </div>
  );
}

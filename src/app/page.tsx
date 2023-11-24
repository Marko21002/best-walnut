import About from "@/components/about";
import { About2 } from "@/components/about2";
import ContactForm from "@/components/contactform";
import ContactSection from "@/components/contactsection";
import { Footer } from "@/components/footer";
import Navbar from "@/components/navbar";
import Slogan from "@/components/slogan";
import Tablet from "@/components/table";
import { Table2 } from "@/components/table2";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Slogan />
      <About />
      <About2 />
      <Tablet />
      <ContactForm></ContactForm>
      <Footer></Footer>
    </div>
  );
}

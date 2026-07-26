import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import Programs from "@/components/Programs";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import ReferShare from "@/components/ReferShare";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustedBy />
      <Programs />
      <WhyUs />
      <Testimonials />
      <ReferShare />
      <LeadForm />
      <Footer />
    </main>
  );
}

import Cards from "@/components/Cards";
import Hero from "@/components/Hero";



export default function Home() {
  return (
    <main className="bg-[url('/Images/dark-bg2.jpg')] bg-cover bg-no-repeat py-16" >
      <Hero />
      <Cards />
    </main>
  );
}

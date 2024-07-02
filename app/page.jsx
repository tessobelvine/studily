import Cards from "@/components/Cards";
import Hero from "@/components/Hero";



export default function Home() {
  return (
    <main className="bg-[url('/Images/IMG-20240303-WA0002.jpg')] bg-cover bg-fixed bg-no-repeat  bg-top py-16" >
      <Hero />
     <Cards />
    </main>
  );
}

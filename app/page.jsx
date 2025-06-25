import Cards from "../components/Cards";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <main className="bg-[url('/Images/Sedrick.jpg')] bg-cover bg-fixed bg-no-repeat  bg-top py-16" >
      <Hero />
      <Cards />
    </main>
  );
}

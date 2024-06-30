import Link from "next/link";
import ButtonDefault from "./ButtonDefault copy";
import ButtonPrimary from "./ButtonPrimary";

export default function Header() {
  return (
    <section className="bg-slate-900 p-4">
      <div className="container mx-auto flex justify-between  items-center">
        <div className="flex gap-14 justify-between">
          <Link href={'/'} className="font-black text-blue-900 text-sm lg:text-3xl">STUDILY </Link>
          <input
            type="search"
            placeholder="search..."
            className="hidden lg:block w-60 focus:outline-none rounded  px-2 bg-gray-200 bg-opacity-100"
          ></input>
        </div>

        <nav className="lg:flex gap-8 justify-between  font-medium hidden text-white text-l">
          <Link href={"/forum"}>Forum</Link>
          <Link href={"/resources"}>Resources</Link>
          <Link href={"/contact"}>Contact Us</Link>
        </nav>

        <div className="flex gap-4">
          <ButtonDefault>sign In</ButtonDefault>
          <ButtonPrimary>Register</ButtonPrimary>
        </div>
      </div>
    </section>
  );
}

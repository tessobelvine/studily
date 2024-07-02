import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs';
import Link from "next/link";

export default function page() {
  return (
    <section className="bg-slate-900 p-4 fixed left-0 right-0 top-0 z-50">
      <div className="container mx-auto flex justify-between  items-center ">
        <div className="flex gap-14 justify-between">
          <Link
            href={"/"}
            className="font-black text-blue-900 text-sm lg:text-3xl">
            STUDILY{" "}
          </Link>
          <input
            type="search"
            placeholder="search..."
            className="hidden lg:block w-60 focus:outline-none rounded  px-2 bg-gray-200 bg-opacity-100"></input>
        </div>

        <nav className="lg:flex gap-8 justify-between  font-medium hidden text-white text-l">
          <Link href={"/forum"}>Forum</Link>
          <Link href={"/resources"}>Resources</Link>
          <Link href={"/contact"}>Contact Us</Link>
        </nav>
        <div className="flex gap-6 text-white">
          <SignedOut>
            <SignInButton className="border p-4 py-1 rounded text-sm" />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </section>
  );
}

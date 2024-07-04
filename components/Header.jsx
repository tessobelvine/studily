// import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import {
  Menu,
  Search
} from "lucide-react";
import Link from "next/link";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

export default function Header() {
  return (
    <section className="bg-slate-900 p-4 fixed left-0 right-0 top-0 z-50">
      <div className="shadow  sticky top-0 z-40">
        <header className="container mx-auto flex  items-center gap-4 text-primary-foreground px-4 md:px-6 ">
          <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
            <Link
              href="#"
              className="flex items-center gap-2 md:text-base font-black text-sky-500 text-sm lg:text-3xl"
            >STUDILY</Link>
            <Link
              href="#"
              className="text-foreground transition-colors hover:text-foreground"
            >
              Forum
            </Link>
            <Link
              href="/resources"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Resources
            </Link>
            <Link
              href="/contact"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Contact us
            </Link>
          </nav>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5 text-primary" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="grid gap-6 text-lg font-medium ">
                <Link
                  href="#"
                  className="flex items-center gap-2 md:text-base font-black text-sky-500 text-sm lg:text-3xl"
                >STUDILY</Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Forums
                </Link>
                <Link
                  href="/resources"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Resources
                </Link>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Contact us
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
            <form className="ml-auto flex-1 sm:flex-initial">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search resources..."
                  className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                />
              </div>
            </form>
            <div className="flex gap-6 text-white">
              {/* <SignedOut>
            <SignInButton className="border p-4 py-1 text-sm rounded">
              <button>Get started</button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn> */}
            </div>
          </div>
        </header>
      </div>
    </section>
  );



}

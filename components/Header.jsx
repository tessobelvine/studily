import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
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
          <Link
            href="#"
            className="flex items-center gap-2 md:text-base font-black text-sky-500 text-sm lg:text-3xl"
          >STUDILY</Link>
          <nav className="hidden ml-auto flex-col gap-6 text-md font-medium md:flex md:flex-row md:items-center">
            <Link
              href="#"
              className="ml-auto text-background transition-colors hover:text-foreground"
            >
              Forum
            </Link>
            <Link
              href="/resources"
              className="text-background transition-colors hover:text-foreground"
            >
              Resources
            </Link>
            <Link
              href="/contact"
              className="text-background transition-colors hover:text-foreground"
            >
              Contact us
            </Link>
          </nav>
          <div className="ml-auto">
            <div className="ml-auto flex gap-6 text-white">
              <SignedOut>
                <SignInButton className="border p-4 py-1 text-sm rounded">
                  <button>Log in</button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </div>
        </header>
      </div>
    </section>
  );
}

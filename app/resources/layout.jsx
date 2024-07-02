import Aside from "@/components/Aside";
import SecondAside from "@/components/SecondAside";

export default function ({ children }) {
  return (
    <div className="container py-16 px-4 mx-auto bg-gray-950">
      <section className="flex  flex-col gap-8 lg:flex-row lg:items-start">
        <aside className="hidden lg:flex flex-col gap-8 p-4 ">
          <Aside />
          <SecondAside />
        </aside>
        <main className="lg:flex-1 px-4 opacity-100">
          {children}
        </main>
      </section>
    </div>
  );
}

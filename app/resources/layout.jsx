import Aside from "@/components/Aside";

export default function ({ children }) {
  return (
    <div className="container p-4 mx-auto">
      <section className="flex  flex-col gap-8 lg:flex-row lg:items-start">
        <aside className="hidden lg:flex bg-blue-900 p-4">
          <Aside />
        </aside>
        <main className="lg:flex-1 px-4 bg-blue-950">{children}</main>
      </section>
    </div>
  );
}

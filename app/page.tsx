// import Link from 'next/link'

// export default function Home() {
//   return (
//     <div className="row">
//       <div className="col-12">
//         <h1 className="header">Supabase Auth + Storage</h1>
//         <p>
//           Experience our Auth and Storage through a simple profile management example. Create a user
//           profile and upload an avatar image. Fast, simple, secure.
//         </p>
//       </div>
//       <div className="col-6 form-widget">
//         <Link href="/login">Auth page</Link>
//       </div>
//     </div>
//   )
// }

import Navbar from "@/layout/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="relative min-h-screen overflow-hidden bg-[var(--color-background)] text-[var(--color-text)]">

  {/* Background Glow */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute left-1/2 top-24 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-amber-500/20 blur-[140px]" />

    <div
      className="absolute inset-0 opacity-30"
      style={{
        backgroundImage:
          "linear-gradient(to right,#e7dfd4 1px,transparent 1px),linear-gradient(to bottom,#e7dfd4 1px,transparent 1px)",
        backgroundSize: "60px 60px",
      }}
    />
  </div>

  <section className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 pt-28 text-center">

    <span className="rounded-full border border-[var(--color-border)] bg-white/70 px-4 py-2 text-sm text-[var(--color-text-light)] backdrop-blur">
      Professional Network for Developers
    </span>

    <h1 className="mt-8 max-w-5xl text-5xl font-extrabold leading-tight sm:text-6xl lg:text-7xl">
      Build your
      <span className="bg-gradient-to-r from-amber-700 to-orange-500 bg-clip-text text-transparent">
        {" "}
        developer identity
      </span>
      <br />
      and connect with the community.
    </h1>

    <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--color-text-light)] sm:text-xl">
      Showcase your projects, highlight your technical skills,
      discover talented developers, and grow meaningful professional
      connections—all in one modern platform.
    </p>

    <div className="mt-10 flex w-full flex-col justify-center gap-4 sm:w-auto sm:flex-row">

      <a
        href="/login"
        className="rounded-xl bg-[var(--color-primary)] px-8 py-4 font-semibold text-white transition hover:bg-[var(--color-primary-hover)]"
      >
        Get Started
      </a>

      <button className="rounded-xl border border-amber-700/20 bg-white/30 px-8 py-4 font-semibold backdrop-blur transition hover:bg-white/50">
        Explore Developers
      </button>

    </div>

  </section>
</main>
    </>
  );
}

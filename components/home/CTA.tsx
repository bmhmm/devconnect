import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

const benefits = [
  "Create your professional developer profile",
  "Showcase unlimited projects",
  "Connect with developers worldwide",
  "Discover new career opportunities",
];

export default function CTA() {
  return (
    <section className="bg-[var(--color-surface)] py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-3xl border border-[var(--color-border)] bg-white/60 p-8 text-center backdrop-blur md:p-16">
          <span className="rounded-full border border-[var(--color-border)] bg-white px-4 py-2 text-sm font-medium text-[var(--color-text-light)]">
            Join DevConnect Today
          </span>

          <h2 className="mt-8 text-4xl font-bold leading-tight text-[var(--color-text)] md:text-5xl">
            Your GitHub shows
            <span className="bg-gradient-to-r from-amber-700 to-orange-500 bg-clip-text text-transparent">
              {" "}
              what you've built.
            </span>
            <br />
            DevConnect shows
            <span className="bg-gradient-to-r from-amber-700 to-orange-500 bg-clip-text text-transparent">
              {" "}
              who you are.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[var(--color-text-light)]">
            Build your professional identity, connect with developers,
            and create a portfolio that recruiters actually enjoy exploring.
          </p>

          <div className="mx-auto mt-12 grid max-w-2xl gap-4 text-left sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-center gap-3 rounded-xl border border-[var(--color-border)] bg-white/70 p-4"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-100">
                  <Check
                    size={18}
                    className="text-amber-700"
                  />
                </div>

                <span className="text-sm font-medium text-[var(--color-text)]">
                  {benefit}
                </span>
              </div>
            ))}
          </div>

          <Link
            href="/login"
            className="mt-12 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-700 to-orange-500 px-8 py-4 font-semibold text-white transition duration-300 hover:scale-105"
          >
            Create Your Free Profile
            <ArrowRight size={18} />
          </Link>

          <p className="mt-6 text-sm text-[var(--color-text-light)]">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-semibold text-amber-700 hover:underline"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
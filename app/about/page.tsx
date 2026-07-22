// export default function AboutPage() {
//   return <h1 className="p-10 text-3xl">About</h1>;
// }


// export default function AboutPage() {
//   return (
//     <main className="min-h-screen bg-[#F5E6D3] pt-32 pb-20">

//       <div className="mx-auto max-w-5xl px-6">

//         <h1 className="text-4xl font-bold text-slate-900">
//           About DevConnect
//         </h1>

//         <p className="mt-6 text-lg leading-8 text-slate-600">
//           DevConnect is a platform that helps developers showcase their skills,
//           connect with other developers, discover exciting projects, and
//           collaborate on real-world ideas.
//         </p>

//         <div className="mt-12 grid gap-8 md:grid-cols-3">

//           <div className="rounded-2xl bg-amber-50 p-6">
//             <h2 className="text-lg font-semibold">
//               Developer Profiles
//             </h2>

//             <p className="mt-3 text-slate-600">
//               Create a professional profile to highlight your skills,
//               experience, and availability.
//             </p>
//           </div>

//           <div className="rounded-2xl bg-amber-50 p-6">
//             <h2 className="text-lg font-semibold">
//               Projects
//             </h2>

//             <p className="mt-3 text-slate-600">
//               Showcase your work, browse community projects,
//               and discover inspiring ideas.
//             </p>
//           </div>

//           <div className="rounded-2xl bg-amber-50 p-6">
//             <h2 className="text-lg font-semibold">
//               Networking
//             </h2>

//             <p className="mt-3 text-slate-600">
//               Build meaningful connections with developers
//               and collaborate through direct messaging.
//             </p>
//           </div>

//         </div>

//       </div>

//     </main>
//   );
// }


import { Terminal, Code2, Users, Rocket, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#F5EBE1] text-[#3E2723] pt-32 pb-24 px-6 sm:px-12 transition-colors duration-500">
      {/* Dynamic Solid Animated Grid Background */}
      <div 
        className="pointer-events-none fixed inset-0 z-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_100%)]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #795548 1px, transparent 1px),
            linear-gradient(to bottom, #795548 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          animation: "moveGrid 20s linear infinite",
        }}
      />

      {/* Ambient Radial Soft Glow */}
      <div className="pointer-events-none fixed -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#E2D2C0] blur-[140px] rounded-full opacity-60 z-0" />

      {/* Embedded Animation Keyframes */}
      <style>{`
        @keyframes moveGrid {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 40px 40px;
          }
        }
      `}</style>

      {/* Hero Section */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 mb-4 text-xs font-semibold tracking-wider text-[#795548] uppercase bg-[#EAD8C4] rounded-full border border-[#D7C0A7]/60 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#FF9F00]" />
          Our Mission
        </span>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#2C1A14] leading-tight">
          About <span className="text-[#3E2723] underline decoration-[#FF9F00] underline-offset-8">DevConnect</span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl leading-relaxed text-[#6D4C41] max-w-3xl mx-auto font-medium">
          DevConnect is a dedicated platform built for modern creators—helping developers showcase their skills, connect with peers, discover inspiring open-source builds, and collaborate on impactful real-world ideas.
        </p>

        {/* Unique Feature Cards Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-3 text-left">
          
          {/* Card 1: Profiles */}
          <div className="group relative bg-white/90 backdrop-blur-sm rounded-2xl p-7 border border-[#D7C0A7]/50 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between">
            <div className="h-2 bg-[#FF9F00] w-full absolute top-0 left-0 rounded-t-2xl" />
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#FFF8F0] border border-[#FF9F00]/30 flex items-center justify-center text-[#FF9F00] mb-5 shadow-inner group-hover:scale-110 transition-transform">
                <Code2 className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold text-[#2C1A14]">
                Developer Profiles
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[#6D4C41]">
                Craft a sharp, professional portfolio highlighting your stack, repos, active projects, and work availability.
              </p>
            </div>
          </div>

          {/* Card 2: Projects */}
          <div className="group relative bg-white/90 backdrop-blur-sm rounded-2xl p-7 border border-[#D7C0A7]/50 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between">
            <div className="h-2 bg-[#FF9F00] w-full absolute top-0 left-0 rounded-t-2xl" />
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#FFF8F0] border border-[#FF9F00]/30 flex items-center justify-center text-[#FF9F00] mb-5 shadow-inner group-hover:scale-110 transition-transform">
                <Terminal className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold text-[#2C1A14]">
                Community Projects
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[#6D4C41]">
                Showcase your creations, discover cutting-edge community submissions, and receive constructive developer feedback.
              </p>
            </div>
          </div>

          {/* Card 3: Networking */}
          <div className="group relative bg-white/90 backdrop-blur-sm rounded-2xl p-7 border border-[#D7C0A7]/50 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between">
            <div className="h-2 bg-[#FF9F00] w-full absolute top-0 left-0 rounded-t-2xl" />
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#FFF8F0] border border-[#FF9F00]/30 flex items-center justify-center text-[#FF9F00] mb-5 shadow-inner group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold text-[#2C1A14]">
                Networking & Teams
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[#6D4C41]">
                Form meaningful tech connections, assemble dream project teams, and coordinate through direct messaging.
              </p>
            </div>
          </div>

        </div>

        {/* Special Highlight Call-To-Action Banner */}
        <div className="mt-16 bg-[#3E2723] text-[#F5EBE1] rounded-2xl p-8 sm:p-12 relative overflow-hidden shadow-2xl flex flex-col sm:flex-row items-center justify-between text-left gap-6">
          <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-[#FF9F00]/10 rounded-full blur-2xl pointer-events-none" />
          <div>
            <div className="inline-flex items-center gap-2 text-[#FF9F00] font-semibold text-sm mb-2">
              <Rocket className="w-4 h-4" /> Ready to showcase your build?
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Join the developer community today.
            </h3>
            <p className="mt-2 text-sm text-[#E2D2C0]/90">
              Share your latest project or find talented partners to collaborate with.
            </p>
          </div>

          <Link
            href="/projects"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-[#FF9F00] hover:bg-[#E68F00] text-white font-bold py-3.5 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 group"
          >
            <span>Explore Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </main>
  );
}
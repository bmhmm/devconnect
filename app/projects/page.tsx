// export default function ProjectsPage() {
//   return <h1 className="p-10 text-3xl">Projects</h1>;
// }


// import { createClient } from "@/lib/supabase/server";
// import ProjectGrid from "@/components/project/ProjectGrid";

// export default async function ProjectsPage() {

//   const supabase = await createClient();

//   const { data: projects } = await supabase
//     .from("projects")
//     .select("*")
//     .order("created_at", {
//       ascending: false,
//     });

//   return (

//     <main className="min-h-screen bg-[#F5E6D3] pt-32 pb-20">

//       <div className="mb-10">

//         <h1 className="text-4xl font-bold">
//           Community Projects
//         </h1>

//         <p className="mt-3 text-slate-500">
//           Discover projects built by developers on DevConnect.
//         </p>

//       </div>

//       <ProjectGrid
//         projects={projects ?? []}
//       />

//     </main>

//   );

// }






// import { createClient } from "@/lib/supabase/server";
// import ProjectGrid from "@/components/project/ProjectGrid";

// export default async function ProjectsPage() {
//   const supabase = await createClient();

//   const { data: projects } = await supabase
//     .from("projects")
//     .select("*")
//     .order("created_at", {
//       ascending: false,
//     });

//   return (
//     <main className="relative min-h-screen overflow-hidden bg-[#F5EBE1] text-[#3E2723] pt-32 pb-20 px-6 sm:px-12 transition-colors duration-500">
//       {/* Dynamic Animated Grid Background */}
//       <div 
//         className="pointer-events-none absolute inset-0 z-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_100%)]"
//         style={{
//           backgroundImage: `
//             linear-gradient(to right, rgba(121, 85, 72, 0.12) 1px, transparent 1px),
//             linear-gradient(to bottom, rgba(121, 85, 72, 0.12) 1px, transparent 1px)
//           `,
//           backgroundSize: "40px 40px",
//           animation: "moveGrid 20s linear infinite",
//         }}
//       />

//       {/* Subtle Ambient Glows for Depth */}
//       <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#E2D2C0] blur-[120px] rounded-full opacity-60" />

//       {/* Embedded Animation Keyframes */}
//       <style>{`
//         @keyframes moveGrid {
//           0% {
//             background-position: 0 0;
//           }
//           100% {
//             background-position: 40px 40px;
//           }
//         }
//       `}</style>

//       {/* Content Container */}
//       <div className="relative z-10 max-w-7xl mx-auto">
//         <div className="mb-12 max-w-2xl">
//           <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider text-[#795548] uppercase bg-[#EAD8C4] rounded-full border border-[#D7C0A7]/50 shadow-sm">
//             Showcase
//           </span>

//           <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#2C1A14]">
//             Community Projects
//           </h1>

//           <p className="mt-4 text-lg text-[#6D4C41] font-medium leading-relaxed">
//             Discover exceptional work built by developers on <span className="text-[#3E2723] font-semibold underline decoration-[#C4A484]/60 underline-offset-4">DevConnect</span>.
//           </p>
//         </div>

//         <ProjectGrid projects={projects ?? []} />
//       </div>
//     </main>
//   );
// }






// import { createClient } from "@/lib/supabase/server";
// import ProjectGrid from "@/components/project/ProjectGrid";

// export default async function ProjectsPage() {
//   const supabase = await createClient();

//   const { data: projects } = await supabase
//     .from("projects")
//     .select("*")
//     .order("created_at", {
//       ascending: false,
//     });
//   //  const { data: projects } = await supabase
//   // .from("projects")
//   // .select(`
//   //   *,
//   //   profiles (
//   //     full_name,
//   //     username,
//   //     avatar_url
//   //   )
//   // `)
//   // .order("created_at", {
//   //   ascending: false,
//   // })

//   return (
//     <main className="relative min-h-screen overflow-hidden bg-[#F5EBE1] text-[#3E2723] pt-32 pb-20 px-6 sm:px-12 transition-colors duration-500">
//       {/* Dynamic Animated Grid Background */}
//       <div 
//         className="pointer-events-none absolute inset-0 z-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_100%)]"
//         style={{
//           backgroundImage: `
//             linear-gradient(to right, rgba(121, 85, 72, 0.12) 1px, transparent 1px),
//             linear-gradient(to bottom, rgba(121, 85, 72, 0.12) 1px, transparent 1px)
//           `,
//           backgroundSize: "40px 40px",
//           animation: "moveGrid 20s linear infinite",
//         }}
//       />

//       {/* Subtle Ambient Glows for Depth */}
//       <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#E2D2C0] blur-[120px] rounded-full opacity-60" />

//       {/* Embedded Animation Keyframes */}
//       <style>{`
//         @keyframes moveGrid {
//           0% {
//             background-position: 0 0;
//           }
//           100% {
//             background-position: 40px 40px;
//           }
//         }
//       `}</style>

//       {/* Content Container */}
//       <div className="relative z-10 max-w-7xl mx-auto">
//         <div className="mb-12 max-w-2xl">
//           <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider text-[#795548] uppercase bg-[#EAD8C4] rounded-full border border-[#D7C0A7]/50 shadow-sm">
//             Showcase
//           </span>

//           <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#2C1A14]">
//             Community Projects
//           </h1>

//           <p className="mt-4 text-lg text-[#6D4C41] font-medium leading-relaxed">
//             Discover exceptional work built by developers on <span className="text-[#3E2723] font-semibold underline decoration-[#C4A484]/60 underline-offset-4">DevConnect</span>.
//           </p>
//         </div>

//         {/* Compact Grid Wrapper */}
//         <div className="w-full">
//           <ProjectGrid projects={projects ?? []} />
//         </div>
//       </div>
//     </main>
//   );
// }

// import { createClient } from "@/lib/supabase/server";
// import ProjectGrid from "@/components/project/ProjectGrid";

// export default async function ProjectsPage() {
//   const supabase = await createClient();

//   const { data: projects } = await supabase
//     .from("projects")
//     .select("*")
//     .order("created_at", {
//       ascending: false,
//     });

//   return (
//     <main className="relative min-h-screen overflow-hidden bg-[#F5EBE1] text-[#3E2723] pt-32 pb-20 px-6 sm:px-12 transition-colors duration-500">
//       {/* Dynamic Animated Grid Background - UPDATED FOR SOLID SQUARES */}
//       <div 
//         className="pointer-events-none absolute inset-0 z-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_100%)]"
//         style={{
//           /* CHANGE APPLIED HERE: Changed color from rgba(...) to a solid color and adjusted the gradient stops to create sharp 1px lines */
//           backgroundImage: `
//             linear-gradient(to right, #795548 1px, transparent 1px),
//             linear-gradient(to bottom, #795548 1px, transparent 1px)
//           `,
//           backgroundSize: "40px 40px",
//           animation: "moveGrid 20s linear infinite",
//         }}
//       />

//       {/* Subtle Ambient Glows for Depth */}
//       <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#E2D2C0] blur-[120px] rounded-full opacity-60" />

//       {/* Embedded Animation Keyframes */}
//       <style>{`
//         @keyframes moveGrid {
//           0% {
//             background-position: 0 0;
//           }
//           100% {
//             background-position: 40px 40px;
//           }
//         }
//       `}</style>

//       {/* Content Container */}
//       <div className="relative z-10 max-w-7xl mx-auto">
//         <div className="mb-12 max-w-2xl">
//           <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider text-[#795548] uppercase bg-[#EAD8C4] rounded-full border border-[#D7C0A7]/50 shadow-sm">
//             Showcase
//           </span>

//           <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#2C1A14]">
//             Community Projects
//           </h1>

//           <p className="mt-4 text-lg text-[#6D4C41] font-medium leading-relaxed">
//             Discover exceptional work built by developers on <span className="text-[#3E2723] font-semibold underline decoration-[#C4A484]/60 underline-offset-4">DevConnect</span>.
//           </p>
//         </div>

//         {/* Compact Grid Wrapper */}
//         <div className="w-full">
//           <ProjectGrid projects={projects ?? []} />
//         </div>
//       </div>
//     </main>
//   );
// }

// import { createClient } from "@/lib/supabase/server";
// import ProjectGrid from "@/components/project/ProjectGrid";

// export default async function ProjectsPage() {
//   const supabase = await createClient();

//   const { data: projects } = await supabase
//     .from("projects")
//     .select("*")
//     .order("created_at", {
//       ascending: false,
//     });

//   return (
//     <main className="relative min-h-screen overflow-hidden bg-[#F5EBE1] text-[#3E2723] pb-20 transition-colors duration-500">
//       {/* Dynamic Animated Grid Background */}
//       <div 
//         className="pointer-events-none absolute inset-0 z-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_100%)]"
//         style={{
//           backgroundImage: `
//             linear-gradient(to right, #795548 1px, transparent 1px),
//             linear-gradient(to bottom, #795548 1px, transparent 1px)
//           `,
//           backgroundSize: "40px 40px",
//           animation: "moveGrid 20s linear infinite",
//         }}
//       />

//       {/* Subtle Ambient Glows for Depth */}
//       <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#E2D2C0] blur-[120px] rounded-full opacity-60" />

//       {/* Embedded Animation Keyframes */}
//       <style>{`
//         @keyframes moveGrid {
//           0% {
//             background-position: 0 0;
//           }
//           100% {
//             background-position: 40px 40px;
//           }
//         }
//       `}</style>

//       {/* Sticky Header Section */}
//       <div className="sticky top-0 z-20 bg-[#F5EBE1]/80 backdrop-blur-md border-b border-[#E2D2C0]/50 pt-16 pb-6 px-6 sm:px-12 transition-all">
//         <div className="max-w-7xl mx-auto">
//           <div className="max-w-2xl">
//             <span className="inline-block px-3 py-1 mb-2 text-xs font-semibold tracking-wider text-[#795548] uppercase bg-[#EAD8C4] rounded-full border border-[#D7C0A7]/50 shadow-sm">
//               Showcase
//             </span>

//             <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#2C1A14]">
//               Community Projects
//             </h1>

//             <p className="mt-2 text-base text-[#6D4C41] font-medium leading-relaxed">
//               Discover exceptional work built by developers on <span className="text-[#3E2723] font-semibold underline decoration-[#C4A484]/60 underline-offset-4">DevConnect</span>.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Content Container (Grid Moved Up) */}
//       <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 pt-6">
//         <div className="w-full">
//           <ProjectGrid projects={projects ?? []} />
//         </div>
//       </div>
//     </main>
//   );
// }

import { createClient } from "@/lib/supabase/server";
import ProjectGrid from "@/components/project/ProjectGrid";

export default async function ProjectsPage() {
  const supabase = await createClient();

  const { data: projects } = await supabase
    .from("projects")
    .select("*")
    .order("created_at", {
      ascending: false,
    });

  return (
    <main className="relative min-h-screen bg-[#F5EBE1] text-[#3E2723] pb-20 transition-colors duration-500">
      {/* Dynamic Animated Grid Background */}
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

      {/* Subtle Ambient Glows for Depth */}
      <div className="pointer-events-none fixed -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#E2D2C0] blur-[120px] rounded-full opacity-60 z-0" />

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

      {/* FIXED Header Section (Stays permanently at top) */}
      <header className="fixed top-0 left-0 right-0 z-30 bg-[#F5EBE1]/85 backdrop-blur-md border-b border-[#E2D2C0]/60 pt-10 pb-5 px-6 sm:px-12 shadow-sm">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 mb-2 text-xs font-semibold tracking-wider text-[#795548] uppercase bg-[#EAD8C4] rounded-full border border-[#D7C0A7]/50 shadow-sm">
              Showcase
            </span>

            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#2C1A14]">
              Community Projects
            </h1>

            <p className="mt-1.5 text-base text-[#6D4C41] font-medium leading-relaxed">
              Discover exceptional work built by developers on <span className="text-[#3E2723] font-semibold underline decoration-[#C4A484]/60 underline-offset-4">DevConnect</span>.
            </p>
          </div>
        </div>
      </header>

      {/* Scrollable Content Container (Pushed down so it doesn't get covered by fixed header) */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 pt-52">
        <div className="w-full">
          <ProjectGrid projects={projects ?? []} />
        </div>
      </div>
    </main>
  );
}


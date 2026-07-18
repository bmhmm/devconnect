// import { login, signup } from './actions'

// export default function LoginPage() {
//   return (
//     <form>
//       <label htmlFor="email">Email:</label>
//       <input id="email" name="email" type="email" required />
//       <label htmlFor="password">Password:</label>
//       <input id="password" name="password" type="password" required />
//       <button formAction={login}>Log in</button>
//       <button formAction={signup}>Sign up</button>
//     </form>
//   )
// }






// import { login, signup } from "./actions";

// export default function LoginPage() {
//   return (
//     <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 px-4">
//       <div className="w-full max-w-md">
//         <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-8">

//           {/* Header */}
//           <div className="text-center mb-8">
//             <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-600 text-white text-2xl font-bold">
//               D
//             </div>

//             <h1 className="text-3xl font-bold text-white">
//               Welcome Back
//             </h1>

//             <p className="mt-2 text-sm text-slate-300">
//               Login to continue to DevConnect
//             </p>
//           </div>


//           {/* Form */}
//           <form className="space-y-5">

//             <div>
//               <label
//                 htmlFor="email"
//                 className="block text-sm font-medium text-slate-200 mb-2"
//               >
//                 Email address
//               </label>

//               <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 required
//                 placeholder="you@example.com"
//                 className="
//                   w-full rounded-xl 
//                   bg-white/10 
//                   border border-white/20 
//                   px-4 py-3 
//                   text-white 
//                   placeholder:text-slate-400
//                   outline-none
//                   focus:ring-2
//                   focus:ring-blue-500
//                   transition
//                 "
//               />
//             </div>


//             <div>
//               <label
//                 htmlFor="password"
//                 className="block text-sm font-medium text-slate-200 mb-2"
//               >
//                 Password
//               </label>

//               <input
//                 id="password"
//                 name="password"
//                 type="password"
//                 required
//                 placeholder="••••••••"
//                 className="
//                   w-full rounded-xl 
//                   bg-white/10 
//                   border border-white/20 
//                   px-4 py-3 
//                   text-white 
//                   placeholder:text-slate-400
//                   outline-none
//                   focus:ring-2
//                   focus:ring-blue-500
//                   transition
//                 "
//               />
//             </div>


//             {/* Login Button */}
//             <button
//               formAction={login}
//               className="
//                 w-full 
//                 rounded-xl 
//                 bg-blue-600 
//                 py-3 
//                 text-white 
//                 font-semibold
//                 hover:bg-blue-700
//                 transition
//                 shadow-lg
//               "
//             >
//               Sign In
//             </button>


//             {/* Signup Button */}
//             <button
//               formAction={signup}
//               className="
//                 w-full
//                 rounded-xl
//                 border
//                 border-white/30
//                 py-3
//                 text-white
//                 font-semibold
//                 hover:bg-white/10
//                 transition
//               "
//             >
//               Create Account
//             </button>

//           </form>


//           {/* Footer */}
//           <p className="text-center text-sm text-slate-400 mt-8">
//             By continuing, you agree to our terms and privacy policy.
//           </p>

//         </div>
//       </div>
//     </main>
//   );
// }



import { login, signup } from "./actions";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#F5E6D3] px-4">

      <div className="w-full max-w-md">

        <div className="bg-white rounded-3xl shadow-xl border border-[#E8D3B5] p-8">

          {/* Header */}
          <div className="text-center mb-8">

            <div className="
              mx-auto mb-5 
              flex h-16 w-16 
              items-center justify-center 
              rounded-2xl 
              bg-[#8B5E3C] 
              text-white 
              text-3xl 
              font-bold
            ">
              D
            </div>

            <h1 className="text-3xl font-bold text-[#3B2A1F]">
              Welcome Back
            </h1>

            <p className="mt-2 text-[#6B5848]">
              Login to continue to DevConnect
            </p>

          </div>


          {/* Form */}
          <form className="space-y-5">


            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-[#3B2A1F] mb-2"
              >
                Email Address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="
                  w-full
                  rounded-xl
                  border
                  border-[#D8BFA3]
                  bg-[#FFF9F2]
                  px-4
                  py-3
                  text-[#3B2A1F]
                  placeholder:text-[#9B8775]
                  outline-none
                  focus:ring-2
                  focus:ring-[#8B5E3C]
                "
              />

            </div>



            <div>

              <label
                htmlFor="password"
                className="block text-sm font-semibold text-[#3B2A1F] mb-2"
              >
                Password
              </label>


              <input
                id="password"
                name="password"
                type="password"
                required
                placeholder="••••••••"
                className="
                  w-full
                  rounded-xl
                  border
                  border-[#D8BFA3]
                  bg-[#FFF9F2]
                  px-4
                  py-3
                  text-[#3B2A1F]
                  placeholder:text-[#9B8775]
                  outline-none
                  focus:ring-2
                  focus:ring-[#8B5E3C]
                "
              />

            </div>



            <button
              formAction={login}
              className="
                w-full
                rounded-xl
                bg-[#8B5E3C]
                py-3
                text-white
                font-semibold
                hover:bg-[#70472D]
                transition
                shadow-md
              "
            >
              Sign In
            </button>



            <button
              formAction={signup}
              className="
                w-full
                rounded-xl
                border
                border-[#8B5E3C]
                py-3
                text-[#8B5E3C]
                font-semibold
                hover:bg-[#F5E6D3]
                transition
              "
            >
              Create Account
            </button>


          </form>



          <p className="
            text-center 
            text-sm 
            text-[#6B5848]
            mt-8
          ">
            By continuing, you agree to our terms and privacy policy.
          </p>


        </div>

      </div>

    </main>
  );
}
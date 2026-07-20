'use client'

import { useActionState } from 'react'
import { login } from '@/app/login/actions'
import type { AuthState } from '@/app/login/actions'
import { useEffect, useState } from 'react'
import Link from 'next/link'




const initialState: AuthState = {
  error: null,
}


export default function LoginForm() {

  const [state, formAction, pending] =
    useActionState(login, initialState)


  const [shake, setShake] = useState(false)
// No overload matches this call.
//   Overload 1 of 2, '(action: (state: { error: string; }) => { error: string; } | Promise<{ error: string; }>, initialState: { error: string; }, permalink?: string | undefined): [state: { error: string; }, dispatch: () => void, isPending: boolean]', gave the following error.
//     Argument of type '(prevState: { error: string | null; }, formData: FormData) => Promise<{ error: string; }>' is not assignable to parameter of type '(state: { error: string; }) => { error: string; } | Promise<{ error: string; }>'.
//       Target signature provides too few arguments. Expected 2 or more, but got 1.
//   Overload 2 of 2, '(action: (state: { error: string; }, payload: FormData) => { error: string; } | Promise<{ error: string; }>, initialState: { error: string; }, permalink?: string | undefined): [state: ...]', gave the following error.
//     Argument of type '{ error: null; }' is not assignable to parameter of type '{ error: string; }'.
//       Types of property 'error' are incompatible.
//         Type 'null' is not assignable to type 'string'.

  useEffect(() => {

    if (state.error) {

      setShake(true)

      const timer =
        setTimeout(() => {
          setShake(false)
        }, 500)


      return () => clearTimeout(timer)
    }

  }, [state.error])


  return (

    <div
      className={`
        w-full max-w-md
        ${shake ? 'animate-shake' : ''}
      `}
    >

      <div className="
        bg-white
        rounded-3xl
        shadow-xl
        border
        border-[#E8D3B5]
        p-8
      ">


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


          <h1 className="
            text-3xl
            font-bold
            text-[#3B2A1F]
          ">
            Welcome Back
          </h1>


          <p className="
            mt-2
            text-[#6B5848]
          ">
            Login to continue to DevConnect
          </p>

        </div>



        <form
          action={formAction}
          className="space-y-5"
        >


          <div>

            <label
              className="
              block
              text-sm
              font-semibold
              text-[#3B2A1F]
              mb-2
              "
            >
              Email Address
            </label>


            <input
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
              outline-none
              focus:ring-2
              focus:ring-[#8B5E3C]
              "
            />

          </div>



          <div>

            <label
              className="
              block
              text-sm
              font-semibold
              text-[#3B2A1F]
              mb-2
              "
            >
              Password
            </label>


            <input
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
              outline-none
              focus:ring-2
              focus:ring-[#8B5E3C]
              "
            />

          </div>



          {state.error && (

            <p className="
              rounded-xl
              bg-red-50
              px-4
              py-3
              text-sm
              font-medium
              text-red-600
            ">
              {state.error}
            </p>

          )}



          <button
            disabled={pending}
            className="
            w-full
            rounded-xl
            bg-[#8B5E3C]
            py-3
            text-white
            font-semibold
            transition
            hover:bg-[#70472D]
            disabled:opacity-50
            "
          >

            {pending
              ? 'Signing in...'
              : 'Sign In'
            }

          </button>


        </form>


       <Link
  href="/signup"
  className="
  block
  w-full
  rounded-xl
  border
  border-[#8B5E3C]
  my-4
  py-3
  text-center
  text-[#8B5E3C]
  font-semibold
  hover:bg-[#F5E6D3]
  transition
  "
>
  Create Account
</Link>


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

  )
}
'use client'

import { useActionState } from 'react'
import Link from 'next/link'

import {
  signup,
  SignupState
} from '@/app/signup/actions'


const initialState: SignupState = {
  error: null,
}


export default function SignupForm() {


  const [state, formAction, pending] =
    useActionState(
      signup,
      initialState
    )


  return (

    <div className="w-full max-w-md">


      <div className="
        rounded-3xl
        bg-white
        border
        border-[#E8D3B5]
        shadow-xl
        p-8
      ">


        <div className="text-center mb-8">

          <div className="
            mx-auto
            mb-5
            flex
            h-16
            w-16
            items-center
            justify-center
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
            Create Account
          </h1>


          <p className="
            mt-2
            text-[#6B5848]
          ">
            Join DevConnect today
          </p>

        </div>



        <form
          action={formAction}
          className="space-y-5"
        >


          <input
            name="email"
            type="email"
            required
            placeholder="Email address"
            className="
              w-full
              rounded-xl
              border
              border-[#D8BFA3]
              bg-[#FFF9F2]
              px-4
              py-3
              text-[#3B2A1F]
            "
          />



          <input
            name="password"
            type="password"
            required
            placeholder="Password"
            className="
              w-full
              rounded-xl
              border
              border-[#D8BFA3]
              bg-[#FFF9F2]
              px-4
              py-3
              text-[#3B2A1F]
            "
          />



          <input
            name="confirmPassword"
            type="password"
            required
            placeholder="Confirm password"
            className="
              w-full
              rounded-xl
              border
              border-[#D8BFA3]
              bg-[#FFF9F2]
              px-4
              py-3
              text-[#3B2A1F]
            "
          />



          {state.error && (

            <p className="
              rounded-xl
              bg-red-50
              px-4
              py-3
              text-sm
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
              hover:bg-[#70472D]
              disabled:opacity-50
            "
          >

            {pending
              ? 'Creating...'
              : 'Create Account'
            }

          </button>


        </form>


        <Link
          href="/login"
          className="
            mt-5
            block
            text-center
            text-sm
            text-[#8B5E3C]
          "
        >
          Already have an account? Login
        </Link>


      </div>


    </div>

  )
}
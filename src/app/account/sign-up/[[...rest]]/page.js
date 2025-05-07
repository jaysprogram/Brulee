'use client'
import { SignUp } from "@clerk/nextjs"

export default function SignUpPage() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50">
          <SignUp
            routing="path"
            path="/account/sign-up"
            appearance={{
              // === Override Clerk’s CSS vars ===
              variables: {
                colorPrimary:       '#F59E0B',  // same as bg-yellow-500
                colorPrimaryHover:  '#D97706',  // same as bg-yellow-600
                colorPrimaryText:   '#ffffff',
              },
              elements: {
                card:              'bg-white border border-gray-200 shadow-lg rounded-xl p-6',
                headerTitle:       'text-2xl font-bold text-gray-800',
                
              }
            }}
          />
        </div>
      )
}
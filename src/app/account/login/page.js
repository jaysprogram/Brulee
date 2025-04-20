'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { User, Lock } from 'lucide-react';        // already present in shadcn/lucide

export default function LoginPage() {
  const router              = useRouter();
  const [email, setEmail]   = useState('');
  const [password, setPass] = useState('');
  const [msg, setMsg]       = useState('');
  const [loading, setLoad]  = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setMsg('');
    setLoad(true);

    try {
      const res  = await fetch('http://127.0.0.1:5000/login', {
        method : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body   : JSON.stringify({ email, password })
      });
      const data = await res.json();
      if (res.ok) {
        // TODO store token & redirect
        setMsg('Logged in!');
      } else {
        throw new Error(data.message || 'Login failed');
      }
    } catch (err) {
      setMsg(err.message);
    } finally {
      setLoad(false);
    }
  }

  /* ————————————————————— UI ————————————————————— */
  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white px-4">
      {/* Card */}
      <div className="w-full max-w-sm rounded-xl shadow-lg overflow-hidden">
        {/* Card header strip */}
        <div className="bg-[#d4af37] py-5 text-center">
          <h1 className="text-xl font-extrabold uppercase tracking-wide text-black">
            Login Form
          </h1>
        </div>

        {/* Card body */}
        <div className="bg-white py-8 px-8 space-y-6">
          {/* status message */}
          {msg && (
            <p
              className={`text-center text-sm ${
                msg.toLowerCase().includes('logged')
                  ? 'text-emerald-500'
                  : 'text-rose-500'
              }`}
            >
              {msg}
            </p>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <div className="relative">
              <User size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                type="email"
                required
                placeholder="Email"
                className="w-full pl-10 pr-3 py-2 rounded border border-gray-300 focus:border-[#d4af37] focus:ring-0 text-black"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
              />
            </div>

            {/* Password */}
            <div className="relative">
              <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                type="password"
                required
                placeholder="Password"
                className="w-full pl-10 pr-3 py-2 rounded border border-gray-300 focus:border-[#d4af37] focus:ring-0 text-black"
                value={password}
                onChange={(e) => setPass(e.target.value)}
                disabled={loading}
              />
            </div>

            <div className="text-right text-xs text-[#d4af37] hover:underline cursor-pointer">
              Forgot password?
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2 rounded bg-[#d4af37] hover:bg-[#c9a02f] text-black font-semibold transition disabled:opacity-60"
            >
              {loading ? 'Signing in…' : 'Login'}
            </button>
          </form>

          <p className="text-center text-sm text-gray-600">
            Not a member?{' '}
            <span
              onClick={() => router.push('/account/register')}
              className="text-[#d4af37] hover:underline cursor-pointer"
            >
              Signup now
            </span>
          </p>
        </div>
      </div>
    </main>
  );
}

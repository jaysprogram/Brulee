'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { User, Lock, Eye, EyeOff } from 'lucide-react';
import NavBar from '../../../components/Navbar';

export default function RegisterPage() {
  const router = useRouter();
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');
  const [confirm, setConfirm] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [msg, setMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const errs = {};
    if (!fName.trim()) errs.fName = 'First name is required';
    if (!lName.trim()) errs.lName = 'Last name is required';
    if (!/^[\w.-]+@[\w.-]+\.\w{2,}$/.test(email)) errs.email = 'Invalid email address';
    if (password.length < 8) errs.password = 'Password must be 8+ characters';
    if (confirm !== password) errs.confirm = 'Passwords do not match';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setMsg('');
    setLoading(true);
    try {
      const res = await fetch('https://brulee-backend.onrender.com/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fName, lName, email, password }),
      });
      const data = await res.json();
      if (res.ok) {
        setMsg(data.message || 'Registered successfully');
        // router.push('/account/login');
      } else {
        setMsg(data.message || 'Registration failed');
      }
    } catch {
      setMsg('An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const isDisabled =
    !fName || !lName || !email || !password || !confirm || Object.keys(errors).length > 0;

  return (
    <main className="min-h-screen flex flex-col bg-black text-white">

      <div className="bg-white">
        <NavBar />
      </div>

      <div className="flex flex-1 items-center justify-center">
        <div className="w-full max-w-sm rounded-xl shadow-lg overflow-hidden">
          <div className="bg-[#d4af37] py-5 text-center">
            <h1 className="text-xl font-extrabold uppercase tracking-wide text-black">
              Register Form
            </h1>
          </div>
          <div className="bg-white py-8 px-8 space-y-6">
            {msg && (
              <p
                className={`text-center text-sm ${msg.toLowerCase().includes('success') ? 'text-emerald-500' : 'text-rose-500'
                  }`}
              >
                {msg}
              </p>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* First Name */}
              <div className="relative">
                <User size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                <input
                  type="text"
                  placeholder="First Name"
                  value={fName}
                  onChange={(e) => setFName(e.target.value)}
                  disabled={loading}
                  className="w-full pl-10 pr-3 py-2 rounded border border-gray-300 focus:border-[#d4af37] focus:ring-0 text-black"
                />
                {errors.fName && <p className="mt-1 text-sm text-rose-600">{errors.fName}</p>}
              </div>

              {/* Last Name */}
              <div className="relative">
                <User size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={lName}
                  onChange={(e) => setLName(e.target.value)}
                  disabled={loading}
                  className="w-full pl-10 pr-3 py-2 rounded border border-gray-300 focus:border-[#d4af37] focus:ring-0 text-black"
                />
                {errors.lName && <p className="mt-1 text-sm text-rose-600">{errors.lName}</p>}
              </div>

              {/* Email */}
              <div className="relative">
                <User size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={loading}
                  className="w-full pl-10 pr-3 py-2 rounded border border-gray-300 focus:border-[#d4af37] focus:ring-0 text-black"
                />
                {errors.email && <p className="mt-1 text-sm text-rose-600">{errors.email}</p>}
              </div>

              {/* Password */}
              <div className="relative">
                <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPass(e.target.value)}
                  disabled={loading}
                  className="w-full pl-10 pr-10 py-2 rounded border border-gray-300 focus:border-[#d4af37] focus:ring-0 text-black"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
                {errors.password && <p className="mt-1 text-sm text-rose-600">{errors.password}</p>}
              </div>

              {/* Confirm Password */}
              <div className="relative">
                <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  value={confirm}
                  onChange={(e) => setConfirm(e.target.value)}
                  disabled={loading}
                  className="w-full pl-10 pr-3 py-2 rounded border border-gray-300 focus:border-[#d4af37] focus:ring-0 text-black"
                />
                {errors.confirm && <p className="mt-1 text-sm text-rose-600">{errors.confirm}</p>}
              </div>

              <button
                type="submit"
                disabled={isDisabled || loading}
                className="w-full py-2 rounded bg-[#d4af37] hover:bg-[#c9a02f] text-black font-semibold transition disabled:opacity-60"
              >
                {loading ? 'Registering…' : 'Register'}
              </button>
            </form>

            <p className="text-center text-sm text-gray-600">
              Already a member?{' '}
              <span
                onClick={() => router.push('/account/login')}
                className="text-[#d4af37] hover:underline cursor-pointer"
              >
                Login now
              </span>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

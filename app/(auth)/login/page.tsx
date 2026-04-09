'use client';

import { Disc3 } from 'lucide-react';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-center mb-8">
        <Disc3 className="w-12 h-12 text-emerald-500" />
      </div>
      <h2 className="text-3xl font-bold text-white text-center mb-2">Welcome Back</h2>
      <p className="text-zinc-400 text-center mb-8">Continue your journey with Vibenics</p>
      
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-zinc-300 mb-1.5">Email address</label>
          <input 
            type="email" 
            placeholder="artist@example.com"
            className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
          />
        </div>
        
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="block text-sm font-medium text-zinc-300">Password</label>
            <Link href="#" className="text-xs text-emerald-400 hover:text-emerald-300">Forgot password?</Link>
          </div>
          <input 
            type="password" 
            placeholder="••••••••"
            className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
          />
        </div>
        
        <button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3.5 rounded-xl transition-colors mt-6">
          Sign In
        </button>
      </form>
      
      <p className="text-center text-sm text-zinc-500 mt-8">
        Don&apos;t have an account? <Link href="/register" className="text-emerald-400 hover:text-emerald-300 font-medium">Create one</Link>
      </p>
    </div>
  );
}

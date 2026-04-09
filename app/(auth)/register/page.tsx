'use client';

import { Disc3 } from 'lucide-react';
import Link from 'next/link';

export default function RegisterPage() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-center mb-8">
        <Disc3 className="w-12 h-12 text-emerald-500" />
      </div>
      <h2 className="text-3xl font-bold text-white text-center mb-2">Create Account</h2>
      <p className="text-zinc-400 text-center mb-8">Join the next-gen distribution platform.</p>
      
      <form className="space-y-4">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <label className="cursor-pointer">
            <input type="radio" name="role" className="peer sr-only" defaultChecked />
            <div className="text-center p-3 border border-white/10 rounded-xl peer-checked:border-emerald-500 peer-checked:bg-emerald-500/10 text-zinc-400 peer-checked:text-emerald-400 hover:bg-white/5 transition-all">
              Artist
            </div>
          </label>
          <label className="cursor-pointer">
            <input type="radio" name="role" className="peer sr-only" />
            <div className="text-center p-3 border border-white/10 rounded-xl peer-checked:border-emerald-500 peer-checked:bg-emerald-500/10 text-zinc-400 peer-checked:text-emerald-400 hover:bg-white/5 transition-all">
              Label
            </div>
          </label>
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-300 mb-1.5">Full Name / Artist Name</label>
          <input 
            type="text" 
            placeholder="Your name"
            className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-300 mb-1.5">Email address</label>
          <input 
            type="email" 
            placeholder="artist@example.com"
            className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-zinc-300 mb-1.5">Password</label>
          <input 
            type="password" 
            placeholder="••••••••"
            className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
          />
        </div>
        
        <button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3.5 rounded-xl transition-colors mt-6">
          Create Account
        </button>
      </form>
      
      <p className="text-center text-sm text-zinc-500 mt-8">
        Already have an account? <Link href="/login" className="text-emerald-400 hover:text-emerald-300 font-medium">Sign in</Link>
      </p>
    </div>
  );
}

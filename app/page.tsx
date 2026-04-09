'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Disc3, BarChart3, Banknote, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-background overflow-hidden relative">
      {/* Background glowing gradients */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-emerald-600/20 blur-[120px] mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-emerald-900/40 blur-[150px] mix-blend-screen pointer-events-none" />

      {/* Navigation */}
      <nav className="border-b border-white/5 bg-black/20 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Disc3 className="w-8 h-8 text-emerald-500" />
            <span className="text-xl font-bold tracking-tight text-white">Vibenics</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/login" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
              Log in
            </Link>
            <Link href="/register" className="text-sm font-medium bg-white text-black px-5 py-2.5 rounded-full hover:bg-zinc-200 transition-all">
              Sign up free
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 pt-32 pb-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-semibold mb-6 border border-emerald-500/20">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Next-Gen Music Distribution
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Distribute Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">
              Sonic Identity.
            </span>
          </motion.h1>

          <motion.p 
            className="text-xl text-zinc-400 font-medium mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Get your music on Spotify, Apple Music, TikTok, and 150+ more stores. Keep 100% of your rights and track your progress in real-time.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link 
              href="/register" 
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-emerald-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-600 transition-all hover:scale-105"
            >
              Start Distributing
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div 
          className="grid md:grid-cols-3 gap-6 mt-32"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <div className="bg-zinc-900/50 border border-white/5 rounded-3xl p-8 backdrop-blur-sm hover:border-emerald-500/30 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-6">
              <BarChart3 className="w-6 h-6 text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Live Analytics</h3>
            <p className="text-zinc-400 leading-relaxed">
              Track your daily streams, playlist placements, and audience demographics with beautiful interactive charts.
            </p>
          </div>

          <div className="bg-zinc-900/50 border border-white/5 rounded-3xl p-8 backdrop-blur-sm hover:border-emerald-500/30 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-6">
              <Banknote className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Advanced Splits</h3>
            <p className="text-zinc-400 leading-relaxed">
              Automatically route royalties to your collaborators, producers, and labels directly from our dashboard.
            </p>
          </div>

          <div className="bg-zinc-900/50 border border-white/5 rounded-3xl p-8 backdrop-blur-sm hover:border-emerald-500/30 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-6">
              <ShieldCheck className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Protect Your Rights</h3>
            <p className="text-zinc-400 leading-relaxed">
              Free ISRC & UPC codes on every release. You maintain 100% ownership and creative control of your catalog.
            </p>
          </div>
        </motion.div>
      </main>
    </div>
  );
}

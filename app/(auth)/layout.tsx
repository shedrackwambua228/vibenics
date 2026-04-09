export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-emerald-500/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-cyan-500/10 blur-[100px] pointer-events-none" />
      
      <div className="w-full max-w-md bg-zinc-900 border border-white/10 rounded-3xl p-8 relative z-10 shadow-2xl">
        {children}
      </div>
    </div>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-[#0f0c29] min-h-screen text-white/90 selection:bg-cyan-500 selection:text-black font-sans relative z-10">
            {children}
        </div>
    )
}

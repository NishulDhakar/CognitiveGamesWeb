import React from "react";
import { Separator } from "../ui/separator";
import Link from "next/link";
import Image from "next/image";


export default function Footer() {
  return (
    <footer className="mt-10 mb-5 flex w-full flex-col items-center justify-center gap-6">
      <Separator className="w-full max-w-6xl bg-[#756b60]" />
      <div className="container mx-auto px-4 flex max-w-4xl flex-row flex-wrap items-center justify-center gap-4">
      </div>
      <div className="text-muted-foreground text-sm">
        © 2025 Blync. All rights reserved.
      </div>
      <div className="font-excon relative text-4xl sm:text-5xl font-black tracking-tighter text-center opacity-15 lg:text-9xl px-4">
        Click in a Blync.
      </div>
      <div className="group flex items-center gap-2">
        <Image
          className="hidden size-12 rounded-2xl border border-gray-400 group-hover:border-2 md:block"
          src="/og-logo.png"
          width={48}
          height={48}
          alt="logo"
        />
        <p className="opacity-50 transition-all duration-300 ease-in-out group-hover:opacity-100">
          <Link target="_blank" href="https://www.nishul.dev">
            Build with ❤️{" "}
            <span className="transition-all duration-300 ease-in-out group-hover:underline">
              Nishul
            </span>
          </Link>
        </p>
      </div>
    </footer>
  );
}



// import React from "react";
// import { Separator } from "../ui/separator";
// import Link from "next/link";
// import Image from "next/image";
// import { Github, Twitter, Linkedin, Heart } from "lucide-react";

// export default function Footer() {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="w-full bg-slate-50/50 border-t border-slate-200 mt-auto">
//       <div className="container mx-auto px-4 py-12 md:py-16">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
//           {/* Brand Column */}
//           <div className="col-span-1 md:col-span-2 space-y-4">
//             <Link href="/" className="flex items-center gap-2">
//               <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
//                 <Image src="/favicon.ico" width={20} height={20} alt="Blync Logo" className="w-5 h-5" />
//               </div>
//               <span className="text-xl font-bold tracking-tight">Blync</span>
//             </Link>
//             <p className="text-muted-foreground max-w-xs leading-relaxed">
//               Master your cognitive aptitude with our suite of specialized challenges. Designed for Capgemini, Cognizant, and other placement exams.
//             </p>
//           </div>

//           {/* Navigation Links */}
//           <div className="space-y-4">
//             <h4 className="font-semibold text-foreground">Platform</h4>
//             <ul className="space-y-2 text-muted-foreground">
//               <li>
//                 <Link href="/" className="hover:text-primary transition-colors">Home</Link>
//               </li>
//               <li>
//                 <Link href="/capgemini-games" className="hover:text-primary transition-colors">All Challenges</Link>
//               </li>
//               <li>
//                 <Link href="/Leaderboard" className="hover:text-primary transition-colors">Leaderboard</Link>
//               </li>
//               <li>
//                 <Link href="/login" className="hover:text-primary transition-colors">Login / Sign Up</Link>
//               </li>
//             </ul>
//           </div>

//           {/* Resources Links */}
//           <div className="space-y-4">
//             <h4 className="font-semibold text-foreground">Resources</h4>
//             <ul className="space-y-2 text-muted-foreground">
//               {/* <li>
//                 <Link href="/about" className="hover:text-primary transition-colors">About Us</Link>
//               </li> */}
//               <li>
//                 <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
//               </li>
//               {/* <li>
//                 <Link href="/rules" className="hover:text-primary transition-colors">Game Rules</Link>
//               </li>
//               <li>
//                 <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
//               </li> */}
//             </ul>
//           </div>
//         </div>

//         <Separator className="bg-slate-200" />

//         <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8">
//           <div className="text-sm text-muted-foreground">
//             © {currentYear} Blync. All rights reserved.
//           </div>

//           <div className="flex items-center gap-6">
//             <Link href="https://github.com/Nishuldhakar" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
//               <Github size={20} />
//             </Link>
//             <Link href="https://twitter.com/nishuldhakar" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
//               <Twitter size={20} />
//             </Link>
//             <Link href="https://linkedin.com/in/nishuldhakar" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
//               <Linkedin size={20} />
//             </Link>
//           </div>

//           <div className="flex items-center gap-2 text-sm text-muted-foreground bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-sm">
//             <span>Made with</span>
//             <Heart size={14} className="fill-rose-500 text-rose-500 animate-pulse" />
//             <span>by</span>
//             <Link href="https://www.nishul.dev" target="_blank" className="font-medium text-foreground hover:underline underline-offset-4 decoration-primary/50">
//               Nishul
//             </Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }
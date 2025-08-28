
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { UserProvider } from "@/context/UserContext";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";


export default async function HomeLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   const session = await auth.api.getSession({
      headers: await headers()
   });
   const user = session?.user ?? null;
   return (
      <UserProvider user={user}>
            <Header />
            <main>
               {children}
            </main>
            <Footer />
      </UserProvider>
   );
}

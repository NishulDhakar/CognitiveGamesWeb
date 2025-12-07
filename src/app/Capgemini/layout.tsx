import { UserProvider } from "@/context/UserContext";
import Header from "@/components/common/Header";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <UserProvider user={null}>
     <Header />
      <main className="flex-1 p-6">{children}</main>=
    </UserProvider>
  );
}

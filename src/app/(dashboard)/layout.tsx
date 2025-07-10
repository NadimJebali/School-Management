import Link from "next/link";
import Image from "next/image";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex overflow-hidden bg-[#F7F8FA]">
      {/* Sidebar */}
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4 bg-white shadow-md overflow-y-auto">
        <Link
          href="/"
          className="flex items-center justify-center lg:justify-start gap-2 mb-6"
        >
          <Image src="/logo.png" alt="logo" width={32} height={32} />
          <span className="hidden lg:block font-semibold text-lg text-black">
            School Name
          </span>
        </Link>
        <Menu />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <div className="px-6 py-4 flex flex-col">
          <Navbar />
        </div>
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {children}
        </div>
      </div>
    </div>
  );
}

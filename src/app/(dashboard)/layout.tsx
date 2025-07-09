import Link from "next/link";
import Image from 'next/image';
import Menu from "@/components/menu";
import Navbar from "@/components/navbar";


export default function DashboardLayout({
children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="h-screen flex">
    {/*Left*/}
    <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:-[14%] p-4">
      <Link href='/' className="flex item-center justify-center lg:justify-start gap-2">
      <Image src="/logo.png" alt="logo" width={32} height={32}/>
      <span className="hidden lg:block">School Name</span>
      </Link>
      <Menu/>
    </div>
    {/*Right*/}
    <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:-[86%] bg-[#F7F8FA] overflow-scroll">
      <Navbar />
      {children}
    </div>
    </div>
}
import AttendanceChart from "@/components/AttendanceChart";
import CountChart from "@/components/CountChart";
import FinanceChart from "@/components/FinanceChart";
import UserCard from "@/components/UserCard";

export default function AdminPage() {
  return (
    <div className="p-4 flex flex-col md:flex-row gap-4">
      {/* Left Panel */}
        <div className="w=full lg:w-2/3 flex flex-col gap-8">
          <div className="flex gap-4 justify-between flex-wrap">
            <UserCard type="student" />
            <UserCard type="teacher" />
            <UserCard type="parent" />
            <UserCard type="staff" />
          </div>
            {/* middle charts */}
          <div className="flex gap-4 flex-col lg:flex-row">
            <div className="w-full lg:w-1/3 h-[450px]">
              <CountChart />
              </div>
              <div className="w-full lg:w-2/3 h-[450px]">
              <AttendanceChart />
              </div>
          </div>
          {/* bottom charts */}
          <div className="z-full h-[500px]">
            <FinanceChart />
          </div>
        </div>
      {/* Right Panel */}
        <div className="w=full lg:w-1/3"></div>
    </div>
  );
}

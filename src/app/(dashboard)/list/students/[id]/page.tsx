import Announcements from "@/components/Announcements";
import Performance from "@/components/Performance";
import BigCalendar from "@/components/BigCalendar";
import Image from "next/image";
import Link from "next/link";
import FormModal from "@/components/FormModal";

const SingleStudentPage = () => {
  return (
    <div className="flex-1 p-4 flex flex-col gap-4 xl:flex-row">
      {/* LEFT */}
      <div className="w-full xl:w-2/3 flex flex-col gap-4">
        {/* Top section */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Teacher info */}
          <div className="bg-[#C3EBFA] p-6 rounded-xl flex-1 flex gap-6 shadow-md">
            <div className="w-1/3">
              <Image
                src="https://images.pexels.com/photos/2888150/pexels-photo-2888150.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="teacher"
                width={144}
                height={144}
                className="w-36 h-36 rounded-full object-cover"
              />
            </div>
            <div className="w-2/3 flex flex-col justify-between gap-4">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-semibold text-gray-800 capitalize">STUDENT NAME</h1>
              < FormModal table="student" type="update" data={{
                    id: 1,
                    username: "StudentName",
                    email: "deanguerrero@gmail.com",
                    password: "password",
                    firstName: "Dean",
                    lastName: "Guerrero",
                    phone: "+1 234 567 89",
                    address: "1234 Main St, Anytown, USA",
                    bloodType: "A+",
                    dateOfBirth: "2000-01-01",
                    sex: "male",
                    img: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1200",
                  }} />
                </div>
              <p className="text-sm text-gray-600">
                Passionate educator with 10+ years of experience in inspiring young minds and making learning fun and impactful.
              </p>
              <div className="flex flex-wrap gap-3 text-sm font-medium text-gray-700">
                <div className="flex items-center gap-2">
                  <Image src="/blood.png" alt="" width={14} height={14} />
                  A+
                </div>
                <div className="flex items-center gap-2">
                  <Image src="/date.png" alt="" width={14} height={14} />
                  January 2025
                </div>
                <div className="flex items-center gap-2">
                  <Image src="/mail.png" alt="" width={14} height={14} />
                  leonardo@gmail.com
                </div>
                <div className="flex items-center gap-2">
                  <Image src="/phone.png" alt="" width={14} height={14} />
                  +216 95756948
                </div>
              </div>
            </div>
          </div>

          {/* Stats cards */}
          <div className="flex-1 grid grid-cols-2 gap-4">
            {[
              { icon: "/singleAttendance.png", label: "Attendance", value: "90%" },
              { icon: "/singleBranch.png", label: "Branches", value: "2" },
              { icon: "/singleLesson.png", label: "Lessons", value: "10" },
              { icon: "/singleClass.png", label: "Classes", value: "6" },
            ].map((card, idx) => (
              <div key={idx} className="bg-white p-4 rounded-lg shadow flex items-center gap-4">
                <Image src={card.icon} alt="" width={24} height={24} className="w-6 h-6" />
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">{card.value}</h2>
                  <p className="text-sm text-gray-500">{card.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Calendar */}
        <div className="bg-white rounded-xl p-4 shadow-md h-[800px]">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Student&apos;s Schedule</h2>
        </div>
      </div>

      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
        <div className="bg-white p-4 rounded-xl shadow-md">
          <h1 className="text-xl font-semibold text-gray-800">Shortcuts</h1>
          <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500">
            <Link className="p-3 rounded-md bg-[#C3EBFA]" href={`/list/lessons?classId=${2}`}>Student&apos;s Lessons</Link>
            <Link className="p-3 rounded-md bg-[#EDF9FD]" href={`/list/teachers?classId=${2}`}>Student&apos;s Teachers</Link>
            <Link className="p-3 rounded-md bg-[#F1F0FF]" href={`/list/results?studentId=${"student2"}`}>Student&apos;s Results</Link>
            <Link className="p-3 rounded-md bg-pink-50" href={`/list/exams?classId=${2}`}>Student&apos;s Exams</Link>
            <Link className="p-3 rounded-md bg-[#EDF9FD]" href={`/list/assignments?classId=${2}`}>Student&apos;s Assignments</Link>
          </div>
        </div>
        <Performance />
        <Announcements />
      </div>
    </div>
  );
};

export default SingleStudentPage;

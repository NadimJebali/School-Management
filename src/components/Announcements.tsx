export default function Announcements() {
  const announcements = [
    {
      id: 1,
      title: "Parent-Teacher Meeting",
      date: "2025-01-01",
      bgColor: "#EDF9FD",
      message:
        "Please attend the meeting to discuss your child's academic progress and behavior.",
    },
    {
      id: 2,
      title: "Science Fair Results",
      date: "2025-01-03",
      bgColor: "#CFCEFF",
      message:
        "Congratulations to all participants. Check the bulletin board for results.",
    },
    {
      id: 3,
      title: "Exam Schedule Released",
      date: "2025-01-05",
      bgColor: "#FAE27C",
      message:
        "The final exam schedule is now available on the student portal.",
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-lg font-semibold text-gray-800">Announcements</h1>
        <span className="text-xs text-blue-500 cursor-pointer hover:underline">
          View All
        </span>
      </div>

      {/* Announcements List */}
      <div className="flex flex-col gap-4">
        {announcements.map((a) => (
          <div
            key={a.id}
            className="rounded-lg p-4"
            style={{ backgroundColor: a.bgColor }}
          >
            <div className="flex items-center justify-between mb-1">
              <h2 className="text-base font-medium text-gray-900">
                {a.title}
              </h2>
              <span className="text-xs bg-white text-gray-500 px-2 py-0.5 rounded-md">
                {a.date}
              </span>
            </div>
            <p className="text-sm text-gray-600">{a.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

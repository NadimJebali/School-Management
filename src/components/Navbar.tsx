import Image from 'next/image';

export default function Navbar() {
  return (
    <div className="flex items-center justify-between px-6 py-4 bg-white shadow-sm rounded-lg">
      {/* Search Bar */}
      <div className="hidden md:flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-full">
        <Image src="/search.png" alt="search" width={16} height={16} />
        <input
          className="bg-transparent outline-none text-sm text-black placeholder-gray-500"
          type="text"
          placeholder="Search..."
        />
      </div>

      {/* Icons and User */}
      <div className="flex items-center gap-6">
        {/* Message Icon */}
        <div className="bg-gray-100 hover:bg-gray-200 transition rounded-full w-10 h-10 flex items-center justify-center cursor-pointer">
          <Image src="/message.png" alt="message" width={20} height={20} />
        </div>

        {/* Notification Icon */}
        <div className="relative bg-gray-100 hover:bg-gray-200 transition rounded-full w-10 h-10 flex items-center justify-center cursor-pointer">
          <Image src="/announcement.png" alt="notification" width={20} height={20} />
          <div className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center bg-purple-500 text-white rounded-full text-xs">
            1
          </div>
        </div>

        {/* User Info */}
        <div className="flex flex-col items-end">
          <span className="text-sm font-semibold text-black">John Doe</span>
          <span className="text-xs text-gray-500">Admin</span>
        </div>

        {/* Avatar */}
        <Image
          className="rounded-full border-2 border-gray-200"
          src="/avatar.png"
          alt="avatar"
          width={36}
          height={36}
        />
      </div>
    </div>
  );
}

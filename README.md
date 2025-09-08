# 📚 School Management System  

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat&logo=next.js)  
![Prisma](https://img.shields.io/badge/Prisma-ORM-blue?style=flat&logo=prisma)  
![MySQL](https://img.shields.io/badge/MySQL-Database-orange?style=flat&logo=mysql)  
![Clerk](https://img.shields.io/badge/Auth-Clerk-purple?style=flat&logo=clerk)  
![License](https://img.shields.io/badge/License-MIT-green.svg)  

A full-stack **School Management Platform** built with **Next.js, Prisma, MySQL, and Clerk Authentication**.  
It provides role-based dashboards for **Admins, Teachers, Students, and Parents**, enabling seamless management of academic operations.  

⚠️ **Note:** This project is **not finished** and is currently under development. Some features may be incomplete or subject to change.  


---

## 🚀 Features  

- 🔑 **Authentication & Authorization**  
  - Secure login/signup with Clerk.  
  - Role-based access control (Admin, Teacher, Student, Parent).  
  - Middleware protection on all pages.  

- 👨‍🏫 **Admin Panel**  
  - Manage Teachers, Students, Parents.  
  - Create and assign Subjects & Classes.  
  - Manage Lessons, Exams, Assignments, Events.  

- 📝 **Teacher Dashboard**  
  - Manage students, subjects, and classes.  
  - Add lessons, exams, and assignments.  
  - Record attendance & grades.  

- 🎓 **Student Dashboard**  
  - View lessons, exams, assignments, and results.  
  - Access attendance records and announcements.  

- 👨‍👩‍👧 **Parent Dashboard**  
  - Monitor child’s attendance, results, and announcements.  

- 📢 **Shared Features**  
  - Messaging system for communication.  
  - Announcements & events calendar.  

---

## 🛠️ Tech Stack  

**Frontend**  
- ⚡ Next.js 14 (App Router)  
- 🎨 Tailwind CSS  
- 🔐 Clerk (Authentication)  

**Backend**  
- 🗄️ Prisma ORM  
- 💾 MySQL Database  
- 🔒 Middleware for Role Security  

**Other Tools**  
- 📦 npm / pnpm  
- 🖼️ Next/Image optimization  

---

## ⚙️ Installation & Setup  

### 1️⃣ Clone the repo  
```bash
git clone https://github.com/your-username/school-management.git
cd school-management
```
### 2️⃣ Install dependencies
```bash
npm install
```
### 3️⃣ Configure environment variables
```bash
Create a .env file:
DATABASE_URL="mysql://user:password@localhost:3306/schooldb"
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_key
CLERK_SECRET_KEY=your_secret
```
### 4️⃣ Run Prisma migrations
```bash
npx prisma migrate dev
```
### 5️⃣ Start the development server
```bash
npm run dev
```

---

## 🔐 Roles & Access Control

- Admin → Full control over users, subjects, classes, and events.

- Teacher → Manage lessons, exams, assignments, results, and attendance.

- Student → View lessons, assignments, exams, results, and attendance.

- Parent → Monitor children’s results, attendance, and announcements.

---

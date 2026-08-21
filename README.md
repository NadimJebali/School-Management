# School Management

A school administration platform built on the Next.js App Router. Admins, teachers, students, and parents sign in to the same application and get a dashboard and navigation scoped to their role, backed by Prisma and PostgreSQL with authentication handled by Clerk.

![Admin dashboard](docs/screenshots/01-admin-dashboard.png)

## Screenshots

### Administration

The admin dashboard summarises the school at a glance — headcounts by role, the gender split, weekly attendance, a finance overview, and the events calendar.

| Teachers | Students |
| --- | --- |
| [![Teacher list](docs/screenshots/02-teachers.png)](docs/screenshots/02-teachers.png) | [![Student list](docs/screenshots/03-students.png)](docs/screenshots/03-students.png) |
| Searchable, sortable, paginated register | The same treatment for the student roll |

Every person has a detail page pulling together their schedule, performance, and shortcuts into related records.

| Student detail | Teacher detail |
| --- | --- |
| [![Student detail page](docs/screenshots/04-student-detail.png)](docs/screenshots/04-student-detail.png) | [![Teacher detail page](docs/screenshots/05-teacher-detail.png)](docs/screenshots/05-teacher-detail.png) |

<details>
<summary>Academic records</summary>

Subjects, classes, and lessons form the timetable; exams, assignments, and results hang off them.

| Subjects | Classes |
| --- | --- |
| [![Subjects](docs/screenshots/06-subjects.png)](docs/screenshots/06-subjects.png) | [![Classes](docs/screenshots/07-classes.png)](docs/screenshots/07-classes.png) |

| Lessons | Exams |
| --- | --- |
| [![Lessons](docs/screenshots/08-lessons.png)](docs/screenshots/08-lessons.png) | [![Exams](docs/screenshots/09-exams.png)](docs/screenshots/09-exams.png) |

| Assignments | Results |
| --- | --- |
| [![Assignments](docs/screenshots/10-assignments.png)](docs/screenshots/10-assignments.png) | [![Results](docs/screenshots/11-results.png)](docs/screenshots/11-results.png) |

| Events | Announcements |
| --- | --- |
| [![Events](docs/screenshots/12-events.png)](docs/screenshots/12-events.png) | [![Announcements](docs/screenshots/13-announcements.png)](docs/screenshots/13-announcements.png) |

</details>

### Role-scoped navigation

The sidebar is built from the signed-in user's role, so each audience only sees the sections it is allowed to reach — a teacher loses the admin-only Subjects entry, and a parent is left with just exams, assignments, results, attendance, events, messages, and announcements.

| Teacher | Parent |
| --- | --- |
| [![Teacher dashboard](docs/screenshots/14-teacher-dashboard.png)](docs/screenshots/14-teacher-dashboard.png) | [![Parent dashboard](docs/screenshots/16-parent-dashboard.png)](docs/screenshots/16-parent-dashboard.png) |

<details>
<summary>Student view and mobile layout</summary>

[![Student dashboard](docs/screenshots/15-student-dashboard.png)](docs/screenshots/15-student-dashboard.png)

The sidebar collapses behind a toggle on small screens.

<p>
  <img src="docs/screenshots/17-mobile-dashboard.png" alt="Dashboard on mobile" width="32%">
</p>

</details>

## Features

- Role-based access control for admin, teacher, student, and parent, enforced in middleware against a route-to-role map
- Admin overview with headcount cards, gender distribution, attendance, finance, and an events calendar
- Registers for teachers, students, and parents with server-side search, filtering, sorting, and pagination
- Academic records covering subjects, classes, lessons, exams, assignments, results, attendance, and events
- Detail pages for students and teachers, with a weekly schedule and shortcuts into related records
- Announcements and events surfaced on every dashboard
- Forms validated with Zod and React Hook Form, with image upload through Cloudinary

## Tech Stack

- [Next.js 14](https://nextjs.org/) App Router with server components and server actions
- [Prisma](https://www.prisma.io/) ORM against PostgreSQL
- [Clerk](https://clerk.com/) for authentication and session claims, with the role held in `publicMetadata`
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Recharts](https://recharts.org/) and [React Big Calendar](https://github.com/jquense/react-big-calendar) for charts and schedules
- [Zod](https://zod.dev/) and [React Hook Form](https://react-hook-form.com/) for form validation
- [next-cloudinary](https://next.cloudinary.dev/) for image uploads

## Project Structure

```
.
├── prisma/
│   ├── schema.prisma     Data model
│   ├── migrations/       Migration history
│   └── seed.ts           Demo data
└── src/
    ├── app/
    │   ├── (dashboard)/      Signed-in area
    │   │   ├── admin/            Admin overview
    │   │   ├── teacher/          Teacher overview
    │   │   ├── student/          Student overview
    │   │   ├── parent/           Parent overview
    │   │   └── list/             Registers and academic records
    │   ├── [[...sign-in]]/   Clerk sign-in
    │   └── lib/              Prisma client, settings, helpers
    ├── components/           Charts, calendars, tables, forms
    └── middleware.ts         Route-to-role access control
```

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (LTS)
- A PostgreSQL server
- A [Clerk](https://clerk.com/) application

### Environment

Create `.env` in the project root:

```bash
DATABASE_URL="postgresql://user:password@localhost:5432/school_management?schema=public"

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
```

Each Clerk user needs a `role` in their public metadata — one of `admin`, `teacher`, `student`, or `parent`. The middleware reads it from the session claims, and the user's Clerk id must match the corresponding row id in the database (for example a teacher signing in as `teacher1`).

### Database

```bash
npx prisma migrate deploy
npx prisma generate
npx prisma db seed
```

The seed creates 2 admins, 15 teachers, 50 students, 25 parents, 6 grades and classes, and a set of lessons, exams, assignments, results, events, and announcements.

### Run

```bash
npm install
npm run dev
```

The app is served at `http://localhost:3000`.

## Status

This project is still under development. The teacher, student, and parent dashboards currently render a placeholder schedule rather than a query-backed one, and the messages section is not implemented. The admin area and the record registers are the most complete parts of the application.

import React from 'react';
import { Link } from 'react-router-dom';
import NoticeBox from '../../components/NoticeBox';
import NotificationBox from '../../components/Students/NotificationBox';

const spotlightCards = [
  {
    title: 'Browse jobs to apply',
    description: 'See the latest openings and apply in one tap.',
    path: '/student/job-listings',
    icon: 'fa-briefcase',
  },
  {
    title: 'Track your applications',
    description: 'Keep an eye on all your submitted applications.',
    path: '/student/myjob',
    icon: 'fa-file-lines',
  },
  {
    title: 'Update your profile',
    description: 'Upload your resume and keep your profile ready.',
    path: '/student/placement-profile',
    icon: 'fa-id-card',
  },
];

// student 
function Home() {
  // Set the page title
  document.title = 'CPMS | Student Dashboard';

  const interviewOpportunities = [
    {
      company: 'TCS NQT',
      role: 'Software Engineer Intern',
      mode: 'Online Test',
      date: 'Aug 20, 2026',
    },
    {
      company: 'Infosys',
      role: 'Digital Specialist',
      mode: 'Interview Round',
      date: 'Aug 24, 2026',
    },
    {
      company: 'Wipro',
      role: 'Project Engineer',
      mode: 'HR Discussion',
      date: 'Aug 27, 2026',
    },
  ];

  return (
    <div className="space-y-4">
      <div className="grid gap-4 xl:grid-cols-[1.3fr_0.7fr]">
        <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-900 via-indigo-900 to-blue-700 p-6 text-white shadow-lg">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-100">Student Portal</p>
          <h2 className="mt-2 text-2xl font-semibold">Your next opportunity is waiting</h2>
          <p className="mt-3 max-w-2xl text-sm text-blue-100/90">
            Stay prepared, track your applications, and apply for interview-ready roles from one place.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              to="/student/job-listings"
              className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Browse Jobs
            </Link>
            <Link
              to="/student/myjob"
              className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20"
            >
              View Applied Jobs
            </Link>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-slate-800">Quick Actions</h3>
            <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">Live</span>
          </div>
          <div className="mt-4 space-y-3">
            <Link to="/student/job-listings" className="flex items-center justify-between rounded-2xl border border-slate-200 p-3 transition hover:border-blue-300 hover:bg-blue-50">
              <span className="font-medium text-slate-700">Browse jobs to apply</span>
              <span className="text-sm text-blue-600">Open</span>
            </Link>
            <Link to="/student/placement-profile" className="flex items-center justify-between rounded-2xl border border-slate-200 p-3 transition hover:border-blue-300 hover:bg-blue-50">
              <span className="font-medium text-slate-700">Update placement profile</span>
              <span className="text-sm text-blue-600">Open</span>
            </Link>
            <Link to="/student/all-notice" className="flex items-center justify-between rounded-2xl border border-slate-200 p-3 transition hover:border-blue-300 hover:bg-blue-50">
              <span className="font-medium text-slate-700">Check notices</span>
              <span className="text-sm text-blue-600">Open</span>
            </Link>
            <Link to="/student/internship" className="flex items-center justify-between rounded-2xl border border-slate-200 p-3 transition hover:border-blue-300 hover:bg-blue-50">
              <span className="font-medium text-slate-700">Manage internships</span>
              <span className="text-sm text-blue-600">Open</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-slate-800">Interview opportunities to apply</h3>
            <span className="text-sm font-medium text-slate-500">Fresh listings</span>
          </div>
          <div className="mt-4 space-y-3">
            {interviewOpportunities.map((item, index) => (
              <div key={index} className="flex flex-col gap-2 rounded-2xl border border-slate-200 bg-slate-50 p-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="font-semibold text-slate-800">{item.company}</p>
                  <p className="text-sm text-slate-600">{item.role}</p>
                </div>
                <div className="text-sm text-slate-500">
                  <p>{item.mode}</p>
                  <p className="font-medium text-slate-700">{item.date}</p>
                </div>
                <Link to="/student/job-listings" className="rounded-full bg-blue-600 px-3 py-2 text-sm font-semibold text-white transition hover:bg-blue-700">
                  Apply Now
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4">
          <div className="grid gap-3 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm md:grid-cols-3 lg:grid-cols-1">
            {spotlightCards.map((card) => (
              <Link key={card.title} to={card.path} className="rounded-2xl border border-slate-200 bg-slate-50 p-3 transition hover:border-blue-300 hover:bg-blue-50">
                <div className="flex items-center gap-2 text-blue-600">
                  <i className={`fa-solid ${card.icon}`} />
                  <span className="font-semibold text-slate-800">{card.title}</span>
                </div>
                <p className="mt-2 text-sm text-slate-600">{card.description}</p>
              </Link>
            ))}
          </div>
          <NotificationBox />
          <NoticeBox />
        </div>
      </div>
    </div>
  );
}

export default Home

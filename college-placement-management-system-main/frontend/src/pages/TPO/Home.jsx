import React from 'react';
import { Link } from 'react-router-dom';
import NoticeBox from '../../components/NoticeBox';
import NotificationBox from '../../components/NotificationBox';

// tpo 
function Home() {
  document.title = 'CPMS | TPO Dashboard';

  const quickActions = [
    { title: 'Post New Job', desc: 'Create placement opportunities', path: '/tpo/post-job' },
    { title: 'Add Company', desc: 'Register company details', path: '/tpo/add-company' },
    { title: 'View Placements', desc: 'Manage job listings', path: '/tpo/job-listings' },
    { title: 'Send Notice', desc: 'Notify students', path: '/tpo/send-notice' },
  ];

  return (
    <div className="space-y-4">
      <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-900 via-indigo-900 to-blue-700 p-6 text-white shadow-lg">
        <p className="text-sm uppercase tracking-[0.3em] text-blue-100">TPO Workspace</p>
        <h2 className="mt-2 text-2xl font-semibold">Post jobs, manage companies, and guide placements</h2>
        <p className="mt-3 max-w-2xl text-sm text-blue-100/90">
          Use this panel to publish opportunities, manage company records, and keep students informed.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-800">Quick actions</h3>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {quickActions.map((item) => (
              <Link key={item.title} to={item.path} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-300 hover:bg-blue-50">
                <p className="font-semibold text-slate-800">{item.title}</p>
                <p className="mt-1 text-sm text-slate-600">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>

        <div className="grid gap-4">
          <NotificationBox />
          <NoticeBox />
        </div>
      </div>
    </div>
  )
}

export default Home

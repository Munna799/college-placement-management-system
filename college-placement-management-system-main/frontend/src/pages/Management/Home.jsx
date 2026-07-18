import React from 'react';
import { Link } from 'react-router-dom';
import NoticeBox from '../../components/NoticeBox';
import NotificationBox from '../../components/NotificationBox';

// management
function Home() {
  document.title = 'CPMS | Management Dashboard';

  const quickActions = [
    { title: 'Manage Companies', desc: 'Review company records', path: '/management/companys' },
    { title: 'Post Placement', desc: 'Create new job opportunities', path: '/management/post-job' },
    { title: 'View Placements', desc: 'See active listings', path: '/management/job-listings' },
    { title: 'Approve Users', desc: 'Manage student and TPO access', path: '/management/add-user' },
  ];

  return (
    <div className="space-y-4">
      <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-700 p-6 text-white shadow-lg">
        <p className="text-sm uppercase tracking-[0.3em] text-blue-100">Management Workspace</p>
        <h2 className="mt-2 text-2xl font-semibold">Handle placements, companies, and user access from one place</h2>
        <p className="mt-3 max-w-2xl text-sm text-blue-100/90">
          This dashboard gives management the tools to oversee placement activities and keep the platform organized.
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

import React, { useState, useEffect } from 'react';
import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { buildCareerNotification } from '../../utility/jobActions';
const BASE_URL = import.meta.env.VITE_BACKEND_URL;

function NotificationBox() {
  const [loading, setLoading] = useState(true);

  const [jobs, setJobs] = useState([]);
  const [careerUpdates, setCareerUpdates] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${BASE_URL}/user/detail`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          }
        });
        setCurrentUser(response.data);
        if (response.data?.role === 'student') {
          setCareerUpdates(buildCareerNotification(response.data?.studentProfile?.appliedJobs || []));
        }
      } catch (error) {
        console.log("Error fetching user details => ", error);
      }
    };

    fetchCurrentUser();
  }, []);

  useEffect(() => {
    fetchJobs();
  }, [currentUser?.role]);

  const fetchJobs = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/tpo/jobs`);
      setJobs(response.data.data.sort((a, b) => new Date(b.postedAt) - new Date(a.postedAt)).slice(0, 10));
    } catch (error) {
      console.log('Error while fetching notices => ', error);
    } finally {
      setLoading(false);
    }
  };


  return (
    <>
      <div className="my-2 mx-2 w-full rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-slate-800">Career updates</h3>
          {currentUser?.role === 'student' && (
            <Link to="/student/myjob" className="text-sm font-medium text-blue-600 hover:text-blue-700">
              View status
            </Link>
          )}
        </div>
        {loading ? (
          <div className="flex min-h-[8rem] items-center justify-center">
            <i className="fa-solid fa-spinner fa-spin text-2xl text-blue-600" />
          </div>
        ) : (
          <div className="mt-3 space-y-2">
            {currentUser?.role === 'student' && careerUpdates.length > 0 ? (
              careerUpdates.map((update) => (
                <div key={update.id} className="rounded-2xl border border-emerald-200 bg-emerald-50 p-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="rounded-full bg-emerald-600 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
                      {update.title}
                    </span>
                    <span className="text-xs text-slate-500">{update.time}</span>
                  </div>
                  <p className="mt-2 text-sm font-medium text-slate-700">{update.message}</p>
                </div>
              ))
            ) : jobs?.length > 0 ? (
              jobs.slice(0, 4).map((job, index) => (
                <div key={index} className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
                  <Link className="text-sm font-semibold text-blue-600 hover:text-blue-700" to={`/student/job/${job?._id}`}>
                    {job?.jobTitle}
                  </Link>
                  <div className="mt-1 text-xs text-slate-500">
                    {new Date(job?.postedAt).toLocaleDateString('en-IN')}
                  </div>
                </div>
              ))
            ) : (
              <div className="rounded-2xl border border-dashed border-slate-200 p-3 text-sm text-slate-500">
                No career updates yet. Keep applying to stay on top of new opportunities.
              </div>
            )}
          </div>
        )}
      </div>
    </>
  )
}

export default NotificationBox

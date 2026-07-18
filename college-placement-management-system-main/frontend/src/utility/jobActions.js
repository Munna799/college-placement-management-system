export const getApplyDestination = (job, fallbackPath = '/student/job-listings') => {
  const rawValue = job?.howToApply || job?.applicationUrl || '';

  if (typeof rawValue !== 'string') {
    return { type: 'internal', path: fallbackPath };
  }

  const directLink = rawValue.match(/https?:\/\/[^\s"'<>]+/i)?.[0];
  if (directLink) {
    return { type: 'external', url: directLink };
  }

  if (rawValue.includes('mailto:')) {
    return { type: 'external', url: rawValue };
  }

  return { type: 'internal', path: fallbackPath };
};

export const buildCareerNotification = (appliedJobs = []) => {
  return appliedJobs
    .filter((job) => ['hired', 'interview'].includes((job?.status || '').toLowerCase()))
    .sort((a, b) => new Date(b?.appliedAt || 0) - new Date(a?.appliedAt || 0))
    .slice(0, 3)
    .map((job) => ({
      id: job?.jobId || job?.jobTitle,
      title: job?.status?.toLowerCase() === 'hired' ? 'You got hired!' : 'Interview update',
      message: job?.status?.toLowerCase() === 'hired'
        ? `You’ve been selected for ${job?.jobTitle || 'this opportunity'}.`
        : `Your interview progress for ${job?.jobTitle || 'this opportunity'} has been updated.`,
      time: job?.appliedAt ? new Date(job.appliedAt).toLocaleDateString('en-IN') : 'Recently updated',
    }));
};

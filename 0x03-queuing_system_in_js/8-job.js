function createPushNotificationsJobs(jobs, queue) {
  // Check if jobs is an array
  if (!Array.isArray(jobs)) {
    throw new Error('Jobs is not an array');
  }

  // Iterate through each job
  jobs.forEach((jobData) => {
    // Create a job in the push_notification_code_3 queue
    const job = queue.create('push_notification_code_3', jobData);

    // Log when job is created
    job.on('enqueue', () => {
      console.log(`Notification job created: ${job.id}`);
    });

    // Log when job is completed
    job.on('complete', () => {
      console.log(`Notification job ${job.id} completed`);
    });

    // Log when job fails
    job.on('failed', (errorMessage) => {
      console.log(`Notification job ${job.id} failed: ${errorMessage}`);
    });

    // Log job progress
    job.on('progress', (progress, total) => {
      console.log(`Notification job ${job.id} ${Math.round(progress * 100 / total)}% complete`);
    });

    // Save the job to the queue
    job.save();
  });
}

module.exports = createPushNotificationsJobs;


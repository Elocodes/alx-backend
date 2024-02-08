const kue = require('kue');
const queue = kue.createQueue();

// Array of blacklisted phone numbers
const blacklistedNumbers = ['4153518780', '4153518781'];

// Function to send notifications
function sendNotification(phoneNumber, message, job, done) {
  // Track progress of the job
  job.progress(0, 100);

  // Check if phone number is blacklisted
  if (blacklistedNumbers.includes(phoneNumber)) {
    // Fail the job if phone number is blacklisted
    return done(new Error(`Phone number ${phoneNumber} is blacklisted`));
  }

  // Track progress to 50%
  job.progress(50, 100);

  // Log sending notification
  console.log(`Sending notification to ${phoneNumber}, with message: ${message}`);

  // Call done callback to signal job completion
  done();
}

// Process jobs from the queue push_notification_code_2 with concurrency of 2
queue.process('push_notification_code_2', 2, (job, done) => {
  // Extract phone number and message from job data
  const { phoneNumber, message } = job.data;

  // Call sendNotification function with job details and done callback
  sendNotification(phoneNumber, message, job, done);
});

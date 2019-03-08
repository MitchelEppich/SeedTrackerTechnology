exports.contact = input => {
  return {
    from: "Seed Tracker Team",
    to: input.email,
    subject: "Your Grow Card from SeedTracker.com!",
    html: "This is your grow card from SeedTracker.com .",
    attachments: [
      {
        filename: "GrowCard",
        content: fs.createReadStream(input.attachment)
      }
    ]
  };
};

const config = {
  port: process.env.PORT || 4200,
  databaseUrl: process.env.MONGODB_URI || 'mongodb://localhost:27017/personal-website',
  recaptchaSecretKey: process.env.RECAPTCHA_SECRET_KEY,
  service: process.env.SERVICE,
  contactEmail: process.env.CONTACT_EMAIL,
  emailAddress: process.env.EMAIL,
  emailPassword: process.env.EMAIL_PASSWORD
};

export default config;


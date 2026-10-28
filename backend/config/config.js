// All settings of the backend in one place.
module.exports = {
  PORT: process.env.PORT || 5000,

 MONGO_URL:
  process.env.MONGO_URL || "mongodb://127.0.0.1:27017",

DB_NAME: process.env.DB_NAME || "quizapp",

JWT_SECRET:
  process.env.JWT_SECRET ||
  (process.env.NODE_ENV !== "production"
    ? "local-development-only-secret"
    : undefined),
  TOKEN_LIFETIME: 24 * 60 * 60 * 1000, // 1 day
};
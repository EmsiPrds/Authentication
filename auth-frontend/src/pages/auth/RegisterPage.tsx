import LoadingSmall from "@/components/custom/loading/LoadingSmall";
import TextField from "@/components/custom/TextField";
import { useAuthStore } from "@/stores/auth/useAuthStore";
import type { AccountType } from "@/types/auth/auth.type";
import { motion } from "framer-motion";
import { ArrowLeft, AtSign, Eye, EyeOff, Lock, Mail, User } from "lucide-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const RegisterPage: React.FC = () => {
  const { registerccount, loading } = useAuthStore();
  const navigate = useNavigate();

  const [form, setForm] = useState<Partial<AccountType>>({
    firstName: "",
    middleName: "",
    lastName: "",
    suffix: "",
    email: "",
    username: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await registerccount(form);

    if (success) {
      setForm({
        firstName: "",
        middleName: "",
        lastName: "",
        suffix: "",
        email: "",
        username: "",
        password: "",
      });
      navigate("/auth/login");
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8 sm:py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-2xl"
      >
        {/* Card */}
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 border border-gray-100 relative">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-4 group"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm sm:text-base font-medium">Back to Home</span>
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            <Link
              to={"/"}
              className="inline-block mb-3"
            >
              <h1 className="text-3xl sm:text-4xl font-bold gradient-text">
                Auth10-tication
              </h1>
            </Link>
            <p className="text-gray-600 text-sm sm:text-base">
              Create your account to get started
            </p>
          </motion.div>

          {/* Form */}
          <form
            className="w-full space-y-5"
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            {/* Name Fields - Responsive Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
              >
                <TextField
                  name="firstName"
                  placeholder="First Name"
                  value={form.firstName}
                  onChange={handleChange}
                  required
                  icon={<User className="w-5 h-5" />}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25, duration: 0.4 }}
              >
                <TextField
                  name="middleName"
                  placeholder="Middle Name (Optional)"
                  value={form.middleName}
                  onChange={handleChange}
                  icon={<User className="w-5 h-5" />}
                />
              </motion.div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
              >
                <TextField
                  name="lastName"
                  placeholder="Last Name"
                  value={form.lastName}
                  onChange={handleChange}
                  required
                  icon={<User className="w-5 h-5" />}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.35, duration: 0.4 }}
              >
                <TextField
                  name="suffix"
                  placeholder="Suffix (Optional)"
                  value={form.suffix}
                  onChange={handleChange}
                  icon={<User className="w-5 h-5" />}
                />
              </motion.div>
            </div>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
            >
              <TextField
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
                icon={<Mail className="w-5 h-5" />}
              />
            </motion.div>

            {/* Username */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.45, duration: 0.4 }}
            >
              <TextField
                name="username"
                placeholder="Username"
                value={form.username}
                onChange={handleChange}
                required
                icon={<AtSign className="w-5 h-5" />}
              />
            </motion.div>

            {/* Password */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
            >
              <TextField
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                required
                icon={<Lock className="w-5 h-5" />}
                rightIcon={
                  <button
                    type="button"
                    tabIndex={-1}
                    className="hover:text-gray-700 transition-colors"
                    onClick={() => setShowPassword((v) => !v)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                }
              />
            </motion.div>

            {/* Submit Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.4 }}
            >
              <motion.button
                disabled={loading}
                type="submit"
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3.5 rounded-lg font-semibold text-white text-base sm:text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-200 ${
                  loading
                    ? "cursor-not-allowed opacity-70"
                    : "cursor-pointer"
                }`}
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <LoadingSmall />
                  </div>
                ) : (
                  "Create Account"
                )}
              </motion.button>
            </motion.div>

            {/* Login link */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.4 }}
              className="text-center pt-2"
            >
              <p className="text-gray-600 text-sm sm:text-base">
                Already have an account?{" "}
                <button
                  type="button"
                  className="text-blue-600 hover:text-blue-700 font-semibold hover:underline transition-colors"
                  onClick={() => navigate("/auth/login")}
                >
                  Login here
                </button>
              </p>
            </motion.div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default RegisterPage;

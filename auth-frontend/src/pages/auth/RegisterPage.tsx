import LoadingSmall from "@/components/custom/loading/LoadingSmall";
import TextField from "@/components/custom/TextField";
import { useAuthStore } from "@/stores/auth/useAuthStore";
import type { AccountType } from "@/types/auth/auth.type";
import { motion } from "framer-motion";
import { AtSign, Eye, EyeOff, Lock, Mail, User } from "lucide-react";
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
    <div className="bg-black h-full w-full flex items-center justify-center px-4 pt-5 pb-20 overflow-y-scroll no-scrollbar">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full bg-white md:max-w-md px-4 md:px-8 py-8 shadow-2xl bg-primary rounded-2xl"
      >
        {/* Header */}
        <motion.div
          className="text-center mb-4 text-black"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Link
            to={"/"}
            className="font-poppins text-3xl font-bold text-yellow mb-2"
          >
            Auth10-tication
          </Link>
          <p className="text-black/50 text-sm">Register an account</p>
        </motion.div>

        {/* Form */}
        <form
          className="w-full flex flex-col gap-4"
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          {/* Names */}
          <div className="flex gap-2">
            <TextField
              name="firstName"
              placeholder="First Name *"
              value={form.firstName}
              onChange={handleChange}
              required
              icon={<User />}
            />
            <TextField
              name="middleName"
              placeholder="Middle Name"
              value={form.middleName}
              onChange={handleChange}
              icon={<User />}
            />
          </div>
          <div className="flex gap-2">
            <TextField
              name="lastName"
              placeholder="Last Name *"
              value={form.lastName}
              onChange={handleChange}
              required
              icon={<User />}
            />
            <TextField
              name="suffix"
              placeholder="Suffix"
              value={form.suffix}
              onChange={handleChange}
              icon={<User />}
            />
          </div>

          {/* Email */}
          <TextField
            type="email"
            name="email"
            placeholder="Email *"
            value={form.email}
            onChange={handleChange}
            required
            icon={<Mail />}
          />

          {/* Username */}
          <TextField
            name="username"
            placeholder="Username *"
            value={form.username}
            onChange={handleChange}
            required
            icon={<AtSign />}
          />

          {/* Password */}
          <TextField
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password *"
            value={form.password}
            onChange={handleChange}
            required
            icon={<Lock />}
            rightIcon={
              <button
                type="button"
                tabIndex={-1}
                className="text-yellow-400 hover:text-yellow-600 transition"
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

          <div className="w-full flex items-center justify-center gap-1">
            <p className="text-text text-sm">Already have an account?</p>
            <button
              type="button"
              className="text-yellow text-sm cursor-pointer hover:underline"
              onClick={() => navigate("/auth/login")}
            >
              Login here
            </button>
          </div>

          <motion.button
            disabled={loading}
            type="submit"
            whileTap={{ scale: 0.97 }}
            className={`${
              loading
                ? "cursor-not-allowed opacity-80"
                : "cursor-pointer hover:scale-101 hover:shadow-xl transition-all"
            } w-full py-3 rounded-xl bg-linear-to-r from-yellow-700 to-yellow-500 text-white font-bold text-lg mt-2 shadow-md`}
          >
            {loading ? <LoadingSmall /> : "Register"}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default RegisterPage;

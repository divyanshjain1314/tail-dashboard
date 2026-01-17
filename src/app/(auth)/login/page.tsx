"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";

import { Input } from "@/components/common/Input";
import { Button } from "@/components/common/Button";
import { loginSuccess } from "@/redux/slices/authSlice";
import { AuthWrapper } from "@/components/common/auth/AuthWrapper";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        dispatch(loginSuccess(data.user));
        router.push("/dashboard");
      } else {
        setError(data.message || "Invalid email or password");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthWrapper
      title="Sign In to Account"
      subtitle="Please enter your details to sign in."
      showSocial={true}
    >
      {error && (
        <div className="mb-6 p-4 bg-red-50 dark:bg-red-500/10 border-l-4 border-red-500 text-red-700 dark:text-red-400 text-sm flex items-center gap-2">
          <span className="font-bold">Error:</span> {error}
        </div>
      )}

      <form onSubmit={handleLogin} className="space-y-5">
        <Input
          label="Email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <Input
          label="Password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <div className="flex items-center justify-between pt-2">
          <label className="flex items-center gap-2.5 cursor-pointer text-sm font-medium text-gray-600 dark:text-gray-400">
            <input
              type="checkbox"
              className="w-4 h-4 rounded-sm border-gray-300 dark:border-strokedark focus:ring-brand dark:bg-white/5"
            />
            Remember me
          </label>
          <Link
            href="/forgot-password"
            className="text-sm font-medium text-brand hover:underline dark:text-blue-400"
          >
            Forgot Password?
          </Link>
        </div>

        <Button
          type="submit"
          disabled={loading}
          label={loading ? "Logging in..." : "Sign In"}
          icon={faSignInAlt}
          className="w-full h-12 justify-center"
        />
      </form>

      <div className="mt-8 text-center">
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
          Don't have an account?{' '}
          <Link
            href="/register"
            className="text-brand font-bold hover:underline dark:text-blue-400"
          >
            Sign Up Free
          </Link>
        </p>
      </div>
    </AuthWrapper>
  );
}
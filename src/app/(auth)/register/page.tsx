"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Typography } from "@/components/common/Typography";
import { Input } from "@/components/common/Input";
import { Button } from "@/components/common/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUserPlus,
    faSun,
    faMoon,
} from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { toggleTheme } from "@/redux/slices/themeSlice";

export default function RegisterPage() {
    const [formData, setFormData] = useState({ name: "", email: "", password: "" });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const router = useRouter();
    const themeDispatch = useAppDispatch();
    const { mode } = useAppSelector((state) => state.theme);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const res = await fetch("/api/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (res.ok) {
                router.push("/login");
            } else {
                setError(data.message || "Registration failed");
            }
        } catch (err) {
            setError("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-slate-100 dark:bg-gray-900 p-4 transition-colors duration-300 font-outfit relative">

            <div className="fixed z-50 hidden bottom-6 right-6 sm:block">
                <button
                    onClick={() => themeDispatch(toggleTheme())}
                    className="inline-flex items-center justify-center text-white transition-colors rounded-full size-14 bg-[#3C50E0] hover:bg-opacity-90 shadow-lg"
                >
                    <FontAwesomeIcon icon={mode === "dark" ? faSun : faMoon} className="text-xl" />
                </button>
            </div>

            <div className="max-w-125 w-full bg-white dark:bg-boxdark rounded-3xl shadow-default border border-slate-200 dark:border-strokedark transition-colors duration-300">

                <div className="p-8 md:p-12 border-b border-slate-100 dark:border-strokedark text-center">
                    <Link href="/" className="inline-block mb-6">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-[#3C50E0] rounded flex items-center justify-center shadow-lg">
                                <span className="text-white font-bold text-2xl tracking-tighter">T</span>
                            </div>
                            <span className="text-2xl font-bold text-black dark:text-white">TailAdmin</span>
                        </div>
                    </Link>
                    <Typography variant="h2" className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">
                        Create Account
                    </Typography>
                    <Typography className="text-sm text-gray-500 dark:text-gray-400">
                        Start your journey with TailAdmin
                    </Typography>
                </div>

                <div className="p-8 md:p-12">
                    {error && (
                        <div className="mb-6 p-4 bg-red-50 dark:bg-red-500/10 border-l-4 border-red-500 text-red-700 dark:text-red-400 text-sm flex items-center gap-2">
                            <span className="font-bold">Error:</span> {error}
                        </div>
                    )}

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 mb-8">
                        <button className="inline-flex items-center justify-center gap-3 py-3 text-sm font-medium text-gray-700 transition-colors bg-gray-100 rounded-lg px-7 hover:bg-gray-200 dark:bg-white/5 dark:text-white/90 dark:hover:bg-white/10">
                            <FontAwesomeIcon icon={faGoogle} className="text-[#4285F4] text-lg" /> Google
                        </button>
                        <button className="inline-flex items-center justify-center gap-3 py-3 text-sm font-medium text-gray-700 transition-colors bg-gray-100 rounded-lg px-7 hover:bg-gray-200 dark:bg-white/5 dark:text-white/90 dark:hover:bg-white/10">
                            <FontAwesomeIcon icon={faXTwitter} className="text-black dark:text-white text-lg" /> X
                        </button>
                    </div>

                    <div className="relative py-4 mb-4">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-100 dark:border-strokedark"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-4 text-gray-400 bg-white dark:bg-boxdark">Or</span>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <Input
                            label="Full Name"
                            placeholder="Enter your full name"
                            value={formData.name}
                            onChange={(e: any) => setFormData({ ...formData, name: e.target.value })}
                            required
                            className="w-full"
                        />

                        <Input
                            label="Email Address"
                            type="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={(e: any) => setFormData({ ...formData, email: e.target.value })}
                            required
                            className="w-full"
                        />

                        <Input
                            label="Password"
                            type="password"
                            placeholder="Create a strong password"
                            value={formData.password}
                            onChange={(e: any) => setFormData({ ...formData, password: e.target.value })}
                            required
                            className="w-full"
                        />

                        <div className="pt-2">
                            <Button
                                type="submit"
                                label={loading ? "Creating Account..." : "Sign Up"}
                                icon={faUserPlus} className="w-full h-12 justify-center"
                            />
                        </div>
                    </form>

                    <div className="mt-8 text-center">
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                            Already have an account?{' '}
                            <Link href="/login" className="text-[#3C50E0] font-bold hover:underline dark:text-blue-400">
                                Sign In
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
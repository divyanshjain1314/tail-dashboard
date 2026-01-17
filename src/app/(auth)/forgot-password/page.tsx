"use client";

import { useState } from "react";
import { Input } from "@/components/common/Input";
import { Button } from "@/components/common/Button";
import { AuthWrapper } from "@/components/common/auth/AuthWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

export default function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const handleResetRequest = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        setMessage("");

        try {
            const res = await fetch("/api/auth/forgot-password", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });

            const data = await res.json();

            if (res.ok) {
                setMessage("Reset link sent! Please check your email inbox.");
                setEmail("");
            } else {
                setError(data.message || "Something went wrong. Please try again.");
            }
        } catch (err) {
            setError("Network error. Please check your connection.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <AuthWrapper
            title="Forgot Password?"
            subtitle="Enter your email address and we'll send you a link to reset your password."
            showSocial={false}
            backHref="/login"
            backText="Back to Login"
        >
            {message && (
                <div className="mb-6 p-4 bg-emerald-50 dark:bg-emerald-500/10 border-l-4 border-emerald-500 text-emerald-700 dark:text-emerald-400 text-sm flex items-center gap-2">
                    <FontAwesomeIcon icon={faCheckCircle} />
                    {message}
                </div>
            )}

            {error && (
                <div className="mb-6 p-4 bg-red-50 dark:bg-red-500/10 border-l-4 border-red-500 text-red-700 dark:text-red-400 text-sm flex items-center gap-2">
                    <span className="font-bold">Error:</span> {error}
                </div>
            )}

            <form onSubmit={handleResetRequest} className="space-y-6">
                <Input
                    label="Email Address"
                    type="email"
                    placeholder="info@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required={true}
                />

                <Button
                    type="submit"
                    disabled={loading}
                    label={loading ? "Sending..." : "Send Reset Link"}
                    icon={faPaperPlane}
                    className="w-full h-12 justify-center font-bold"
                />
            </form>
        </AuthWrapper>
    );
}
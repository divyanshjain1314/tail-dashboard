"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

interface InputProps {
    label: string;
    type?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    required?: boolean;
    className?: string;
}

export const Input = ({
    label,
    type = "text",
    value,
    required,
    onChange,
    placeholder,
    className,
}: InputProps) => {
    const [showPassword, setShowPassword] = useState(false);

    const isPassword = type === "password";
    const inputType = isPassword ? (showPassword ? "text" : "password") : type;

    return (
        <div className="mb-4 font-outfit">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                {label} {required && <span className="text-red-500">*</span>}
            </label>

            <div className="relative">
                <input
                    type={inputType}
                    value={value}
                    required={required}
                    onChange={onChange}
                    placeholder={placeholder}
                    className={`w-full px-4 py-2.5 border rounded-lg outline-none transition-all duration-300
                        /* Light Mode Styles */
                        bg-white border-gray-200 text-gray-800 placeholder:text-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10
                        
                        /* Dark Mode Styles */
                        dark:bg-white/5 dark:border-strokedark dark:text-white dark:placeholder:text-gray-500 dark:focus:border-blue-500 
                        ${isPassword ? "pr-12" : ""} ${className}`}
                />

                {isPassword && (
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors"
                    >
                        <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} className="text-sm" />
                    </button>
                )}
            </div>
        </div>
    );
};
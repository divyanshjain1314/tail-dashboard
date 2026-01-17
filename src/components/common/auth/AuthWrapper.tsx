"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { toggleTheme } from "@/redux/slices/themeSlice";
import { Typography } from "@/components/common/Typography";

interface AuthWrapperProps {
    children: React.ReactNode;
    title: string;
    subtitle: string;
    showSocial?: boolean;
    backHref?: string;
    backText?: string;
}

export const AuthWrapper = ({
    children, title, subtitle, showSocial = true, backHref = "", backText = ""
}: AuthWrapperProps) => {
    const themeDispatch = useAppDispatch();
    const { mode } = useAppSelector((state) => state.theme);

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
            {backHref && (<div className="w-full max-w-125 mb-6">
                <Link href={backHref} className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                    <FontAwesomeIcon icon={faChevronLeft} className="text-xs" />
                    {backText}
                </Link>
            </div>)}
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
                        {title}
                    </Typography>
                    <Typography className="text-sm text-gray-500 dark:text-gray-400">
                        {subtitle}
                    </Typography>
                </div>

                <div className="p-8 md:p-12">
                    {showSocial && (
                        <>
                            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 mb-8">
                                <button className="inline-flex items-center justify-center gap-3 py-3 text-sm font-medium text-gray-700 transition-colors bg-gray-100 rounded-lg dark:bg-white/5 dark:text-white/90 hover:bg-gray-200 dark:hover:bg-white/10">
                                    <FontAwesomeIcon icon={faGoogle} className="text-[#4285F4] text-lg" /> Google
                                </button>
                                <button className="inline-flex items-center justify-center gap-3 py-3 text-sm font-medium text-gray-700 transition-colors bg-gray-100 rounded-lg dark:bg-white/5 dark:text-white/90 hover:bg-gray-200 dark:hover:bg-white/10">
                                    <FontAwesomeIcon icon={faXTwitter} className="text-black dark:text-white text-lg" /> X
                                </button>
                            </div>

                            <div className="relative py-4 mb-4">
                                <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-100 dark:border-strokedark"></div></div>
                                <div className="relative flex justify-center text-sm"><span className="px-4 text-gray-400 bg-white dark:bg-boxdark">Or</span></div>
                            </div>
                        </>
                    )}

                    {children}
                </div>
            </div>
        </div>
    );
};
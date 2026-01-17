"use client";

import { useAppSelector } from "@/redux/hooks";
import { GaugeChart } from "./GaugeChart";
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const MonthlyTarget = () => {
    const { mode } = useAppSelector((state) => state.theme);
    const isDark = mode === 'dark';
    const percentage = 75.55;
    return (
        <div className={`col-span-12 xl:col-span-4  rounded-2xl border ${isDark ? 'border-[#1C2434] bg-[#171f2f]' : 'border-slate-300'} shadow-default transition-all duration-300 flex flex-col h-full`}>
            <div className={`p-6 rounded-2xl md:p-7.5 ${isDark ? 'bg-[#101828] border-[#2E3A47]' : 'bg-white border-slate-200'}`}>
                <div className="mb-4 flex items-center justify-between">
                    <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>
                        Monthly Target
                    </h3>
                    <button className="text-slate-400 hover:text-primary">
                        <svg className="fill-current" width="18" height="18" viewBox="0 0 18 18">
                            <circle cx="9" cy="3" r="1.5" />
                            <circle cx="9" cy="9" r="1.5" />
                            <circle cx="9" cy="15" r="1.5" />
                        </svg>
                    </button>
                </div>

                <p className="text-sm text-slate-500 dark:text-bodydark">Target you've set for each month</p>

                <div className="flex flex-col items-center justify-center relative py-5">
                    <GaugeChart percentage={percentage} />

                    <div className="text-center -mt-20 z-10">
                        <span className={`text-4xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>75.55%</span>
                        <div className="flex items-center justify-center gap-1 mt-1">
                            <span className="text-[#10B981] text-sm font-medium">+10%</span>
                        </div>
                    </div>

                    <p className="mt-8 text-center text-sm px-6 text-slate-500 dark:text-bodydark leading-relaxed">
                        You earn <span className="text-primary font-medium">$3,287</span> today, it's higher than last month. Keep up your good work!
                    </p>
                </div>
            </div>
            <div className={`p-6 md:p-7.5 mt-auto flex items-center pt-6 rounded-b-2xl`}>
                <StatItem label="Target" value="$20K" isUp={false} isDark={isDark} />
                <StatItem label="Revenue" value="$20K" isUp={true} isDark={isDark} hasBorder={true} />
                <StatItem label="Today" value="$20K" isUp={true} isDark={isDark} />
            </div>
        </div>
    );
};

const StatItem = ({ label, value, isUp, isDark, hasBorder = false }: any) => (
    <div className={`text-center flex-1 ${hasBorder ? `border-x ${isDark ? 'border-[#2E3A47]' : 'border-[#E2E8F0]'}` : ''}`}>
        <p className="text-xs text-slate-500 dark:text-bodydark uppercase mb-1">
            {label}
        </p>
        <div className="flex items-center justify-center gap-1.5">
            <p className={`text-lg font-bold ${isDark ? 'text-white' : 'text-black'}`}>
                {value}
            </p>
            <FontAwesomeIcon
                icon={isUp ? faArrowUp : faArrowDown}
                className={`${isUp ? 'text-[#10B981]' : 'text-red-500'} text-xs`}
            />
        </div>
    </div>
);
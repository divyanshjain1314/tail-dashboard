"use client";

import Chart from "react-apexcharts";
import { useState, useMemo } from "react";
import { Dropdown } from "../common/dropdown/Dropdown";
import { DropdownItem } from "../common/dropdown/DropdownItem";
import MoreDotIcon from "@/icons/MoreDotIcon";
import { getSalesChartOptions } from "./ChartOptions";
import { useAppSelector } from "@/redux/hooks";

export default function MonthlySalesChart() {
    const [isOpen, setIsOpen] = useState(false);
    const { mode } = useAppSelector((state) => state.theme);
    const isDark = mode === "dark";

    const data = [
        {
            name: "Sales",
            data: [168, 385, 201, 298, 187, 195, 291, 110, 215, 390, 280, 112],
        },
    ];

    const options = useMemo(() => getSalesChartOptions(isDark), [isDark]);

    const toggleDropdown = () => setIsOpen(!isOpen);
    const close = () => setIsOpen(false);

    return (
        <div className={`overflow-hidden rounded-2xl border transition-colors duration-300 px-5 pt-5 sm:px-6 sm:pt-6 font-outfit ${isDark
            ? "bg-[#1C2434] border-[#2E3A47]"
            : "bg-white border-gray-200 shadow-sm"
            }`}>
            <div className="flex items-center justify-between mb-4">
                <h3 className={`text-lg font-semibold ${isDark ? "text-white" : "text-gray-800"}`}>
                    Monthly Sales
                </h3>
                <div className="relative inline-block">
                    <button
                        className={`dropdown-toggle p-1.5 rounded-md transition-colors ${isDark ? "hover:bg-white/5 text-[#8A99AF]" : "hover:bg-gray-100 text-gray-400"
                            }`}
                        onClick={toggleDropdown}
                    >
                        <MoreDotIcon className={`size-6 ${isDark ? "hover:text-white" : "hover:text-gray-700"}`} />
                    </button>

                    <Dropdown
                        isOpen={isOpen}
                        onClose={close}
                        className="w-40 p-2"
                    >
                        <DropdownItem tag="button" onItemClick={close}>
                            View More
                        </DropdownItem>
                        <DropdownItem
                            tag="button"
                            onItemClick={close}
                            className="text-red-500 hover:text-red-600 dark:hover:bg-red-500/10"
                        >
                            Delete
                        </DropdownItem>
                    </Dropdown>
                </div>
            </div>

            <div className="max-w-full overflow-x-auto no-scrollbar">
                <div className="-ml-4 min-w-100 xl:min-w-full">
                    <Chart
                        options={options}
                        series={data}
                        type="bar"
                        height={200}
                        key={mode}
                    />
                </div>
            </div>
        </div>
    );
}
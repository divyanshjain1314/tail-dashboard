"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { Typography } from "./Typography";

interface CardProps {
  title: string;
  value: string;
  growth: string;
  icon: any;
}

export const Card = ({ title, value, growth, icon }: CardProps) => {
  const isPositive = growth.startsWith("+");
  const growthValue = growth.replace("+", "").replace("-", "");

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 md:p-6 shadow-sm transition-all duration-300 font-outfit dark:border-darkborder dark:bg-boxdark dark:shadow-none">
      <div className="flex items-center justify-center w-12 h-12 rounded-xl mb-5 bg-gray-100 transition-colors duration-300 dark:bg-white/5">
        <FontAwesomeIcon
          icon={icon}
          className="size-6 text-gray-800 dark:text-white"
        />
      </div>

      <div className="flex items-end justify-between">
        <div>
          <Typography
            variant="span"
            className="text-sm font-medium text-gray-500 dark:text-gray-400"
          >
            {title}
          </Typography>

          <Typography
            variant="h4"
            className="mt-2 font-bold text-3xl leading-none text-gray-800 dark:text-white"
          >
            {value}
          </Typography>
        </div>

        <div
          className={`inline-flex items-center px-2.5 py-1 justify-center gap-1 rounded-full font-medium text-xs transition-all duration-300 ${isPositive
            ? "bg-emerald-500/10 text-emerald-500"
            : "bg-red-500/10 text-red-500"
            }`}
        >
          <FontAwesomeIcon
            icon={isPositive ? faArrowUp : faArrowDown}
            className="text-[10px]"
          />
          <Typography variant="span">{growthValue}</Typography>
        </div>
      </div>
    </div>
  );
};
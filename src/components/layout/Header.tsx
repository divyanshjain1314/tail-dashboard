"use client";

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBell,
  faChevronDown,
  faMoon,
  faSun,
  faUser,
  faCog,
  faHeadset,
  faSignOutAlt
} from '@fortawesome/free-solid-svg-icons';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { Typography } from '../common/Typography';
import { toggleTheme } from '@/redux/slices/themeSlice';
import Dropdown from '../common/dropdown/Dropdown';
import DropdownItem from '../common/dropdown/DropdownItem';
import { logout } from '@/redux/slices/authSlice';

export default function Header({ toggleSidebar }: { toggleSidebar: () => void }) {
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const [isUserOpen, setIsUserOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 flex w-full border-b transition-colors duration-300 bg-white border-slate-200 shadow-sm dark:bg-gray-900 dark:border-strokedark dark:shadow-none">
      <div className="flex grow items-center justify-between px-4 py-4 md:px-6 2xl:px-11">

        <div className="flex items-center gap-4">
          <button
            className="flex items-center justify-center w-10 h-10 text-gray-500 border-gray-200 rounded-lg dark:border-strokedark dark:text-gray-400 lg:h-11 lg:w-11 lg:border hover:bg-gray-50 dark:hover:bg-white/5"
            onClick={toggleSidebar}
            aria-label="Toggle Sidebar"
          >
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M0.583252 1C0.583252 0.585788 0.919038 0.25 1.33325 0.25H14.6666C15.0808 0.25 15.4166 0.585786 15.4166 1C15.4166 1.41421 15.0808 1.75 14.6666 1.75L1.33325 1.75C0.919038 1.75 0.583252 1.41422 0.583252 1ZM0.583252 11C0.583252 10.5858 0.919038 10.25 1.33325 10.25L14.6666 10.25C15.0808 10.25 15.4166 10.5858 15.4166 11C15.4166 11.4142 15.0808 11.75 14.6666 11.75L1.33325 11.75C0.919038 11.75 0.583252 11.4142 0.583252 11ZM1.33325 5.25C0.919038 5.25 0.583252 5.58579 0.583252 6C0.583252 6.41421 0.919038 6.75 1.33325 6.75L7.99992 6.75C8.41413 6.75 8.74992 6.41421 8.74992 6C8.74992 5.58579 8.41413 5.25 7.99992 5.25L1.33325 5.25Z" fill="currentColor" />
            </svg>
          </button>

          <div className="hidden sm:block">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="relative font-outfit">
                <span className="absolute -translate-y-1/2 pointer-events-none left-4 top-1/2">
                  <svg className="fill-gray-500 transition-colors duration-300 dark:fill-gray-400" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M3.04175 9.37363C3.04175 5.87693 5.87711 3.04199 9.37508 3.04199C12.8731 3.04199 15.7084 5.87693 15.7084 9.37363C15.7084 12.8703 12.8731 15.7053 9.37508 15.7053C5.87711 15.7053 3.04175 12.8703 3.04175 9.37363ZM9.37508 1.54199C5.04902 1.54199 1.54175 5.04817 1.54175 9.37363C1.54175 13.6991 5.04902 17.2053 9.37508 17.2053C11.2674 17.2053 13.003 16.5344 14.357 15.4176L17.177 18.238C17.4699 18.5309 17.9448 18.5309 18.2377 18.238C18.5306 17.9451 18.5306 17.4703 18.2377 17.1774L15.418 14.3573C16.5365 13.0033 17.2084 11.2669 17.2084 9.37363C17.2084 5.04817 13.7011 1.54199 9.37508 1.54199Z" />
                  </svg>
                </span>
                <input type="text" placeholder="Search or type command..." className="h-11 w-full rounded-lg border border-gray-200 bg-white py-2.5 pl-12 pr-14 text-sm text-gray-800 transition-all duration-300 shadow-sm focus:outline-none dark:bg-white/5 dark:border-strokedark dark:text-white/90 xl:w-107.5" />
                <button className="absolute right-2.5 top-1/2 inline-flex -translate-y-1/2 items-center gap-0.5 rounded-lg border border-gray-200 bg-gray-50 px-1.75 py-[4.5px] text-xs text-gray-500 dark:bg-strokedark dark:border-strokedark dark:text-gray-400">
                  <span className="font-medium"> ⌘ </span> <span className="font-medium"> K </span>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3 2xsm:gap-7">
          <ul className="flex items-center gap-2 2xsm:gap-4">
            <li>
              <button onClick={() => dispatch(toggleTheme())} className="relative flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-gray-100 text-slate-500 transition-all hover:text-blue-600 dark:border-strokedark dark:bg-strokedark dark:text-white dark:hover:text-yellow-400">
                <div className="block dark:hidden"><FontAwesomeIcon icon={faMoon} /></div>
                <div className="hidden dark:block"><FontAwesomeIcon icon={faSun} /></div>
              </button>
            </li>

            <li className="relative">
              <button className="relative flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-gray-100 text-slate-500 dark:border-strokedark dark:bg-strokedark dark:text-white">
                <span className="absolute top-0 right-0 z-1 h-2 w-2 rounded-full bg-red-500 border-2 border-white dark:border-boxdark"></span>
                <FontAwesomeIcon icon={faBell} />
              </button>
            </li>
          </ul>

          <div className="relative">
            <button
              onClick={() => setIsUserOpen(!isUserOpen)}
              className="dropdown-toggle flex items-center gap-4 cursor-pointer focus:outline-none"
            >
              <span className="hidden text-right lg:block">
                <Typography variant="small" className="block font-semibold leading-tight text-slate-800 dark:text-white">
                  {user?.name || "Divyansh Jain"}
                </Typography>
                <Typography variant="small" className="block text-[10px] uppercase tracking-wider text-slate-500 dark:text-bodydark">
                  Frontend Developer
                </Typography>
              </span>

              <span className="h-10 w-10 rounded-full overflow-hidden border border-slate-200 dark:border-strokedark">
                <img src={`https://ui-avatars.com/api/?name=${user?.name || 'Divyansh'}&background=3C50E0&color=fff`} alt="User" />
              </span>

              <FontAwesomeIcon
                icon={faChevronDown}
                className={`text-xs hidden sm:block text-slate-400 dark:text-bodydark transition-transform duration-200 ${isUserOpen ? 'rotate-180' : ''}`}
              />
            </button>

            <Dropdown
              isOpen={isUserOpen}
              onClose={() => setIsUserOpen(false)}
              className="absolute right-0 mt-3 flex w-65 flex-col rounded-2xl border border-gray-200 bg-white p-3 shadow-lg dark:border-strokedark dark:bg-boxdark"
            >
              <div className="px-3 py-2 border-b border-gray-100 dark:border-strokedark">
                <div>
                  <Typography variant="small" className="font-semibold text-gray-800 dark:text-white">
                    {user?.name || "Divyansh Jain"}
                  </Typography>
                </div>
                <div>
                  <Typography variant="small" className="text-xs text-gray-500 dark:text-gray-400">
                    {user?.email || "divyansh@example.com"}
                  </Typography>
                </div>
              </div>

              <div className="py-2">
                <DropdownItem tag="a" href="/profile" onItemClick={() => setIsUserOpen(false)}>
                  <FontAwesomeIcon icon={faUser} className="w-4" /> Edit Profile
                </DropdownItem>
                <DropdownItem tag="a" href="/settings" onItemClick={() => setIsUserOpen(false)}>
                  <FontAwesomeIcon icon={faCog} className="w-4" /> Account Settings
                </DropdownItem>
                <DropdownItem tag="a" href="/support" onItemClick={() => setIsUserOpen(false)}>
                  <FontAwesomeIcon icon={faHeadset} className="w-4" /> Support
                </DropdownItem>
              </div>

              <div className="pt-2 border-t border-gray-100 dark:border-strokedark">
                <DropdownItem
                  tag="button"
                  onClick={() => dispatch(logout())}
                  className="text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10"
                >
                  <FontAwesomeIcon icon={faSignOutAlt} className="w-4" /> Sign Out
                </DropdownItem>
              </div>
            </Dropdown>
          </div>
        </div>
      </div>
    </header>
  );
}
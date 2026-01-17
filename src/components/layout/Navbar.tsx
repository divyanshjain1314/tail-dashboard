import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  return (
    <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-10">
      <div className="relative w-96">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
          <FontAwesomeIcon icon={faSearch} />
        </span>
        <input 
          type="text" 
          placeholder="Type to search..." 
          className="w-full pl-10 pr-4 py-2 bg-transparent outline-none text-sm"
        />
      </div>
      
      <div className="flex items-center gap-6">
        <div className="flex gap-4 text-slate-500">
          <FontAwesomeIcon icon={faBell} />
          <FontAwesomeIcon icon={faEnvelope} />
        </div>
        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="text-sm font-medium">Thomas Anier</p>
            <p className="text-xs text-slate-500">UX Designer</p>
          </div>
          <div className="w-10 h-10 bg-slate-200 rounded-full overflow-hidden">
            <img src="https://ui-avatars.com/api/?name=Thomas+Anier" alt="User" />
          </div>
        </div>
      </div>
    </header>
  );
}
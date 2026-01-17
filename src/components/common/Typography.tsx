export const Typography = ({ variant = 'p', children, className = '' }: any) => {
    const styles = {
        h1: 'text-3xl font-bold text-slate-800',
        h2: 'text-2xl font-semibold text-slate-800',
        h3: 'text-xl font-medium text-slate-700',
        p: 'text-base text-slate-500',
        small: 'text-sm text-slate-400',
    };
    const Tag = variant as any;
    return <Tag className={`${styles[variant as keyof typeof styles]} ${className}`}>{children}</Tag>;
};

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Button = ({ label, icon, onClick, className = '', type = 'button' }: any) => (
    <button
        type={type}
        onClick={onClick}
        className={`flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-medium ${className}`}
    >
        {icon && <FontAwesomeIcon icon={icon} />}
        {label}
    </button>
);

export const Input = ({ label, ...props }: any) => (
    <div className="flex flex-col gap-1 w-full">
        {label && <label className="text-sm font-medium text-slate-600">{label}</label>}
        <input
            {...props}
            className="px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
        />
    </div>
);
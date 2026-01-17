import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface ButtonProps {
    label: string;
    icon?: IconDefinition;
    variant?: 'primary' | 'secondary';
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
    disabled?: boolean;
}

export const Button = ({ label, icon, variant = 'primary', onClick, type = 'button', className, disabled = false }: ButtonProps) => {
    const styles = variant === 'primary' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-black';
    return (
        <button onClick={onClick} type={type} className={`${styles} px-4 py-2 rounded-md flex items-center gap-2 transition-all hover:opacity-80 ${className}`} disabled={disabled}>
            {icon && <FontAwesomeIcon icon={icon} />}
            {label}
        </button>
    );
};
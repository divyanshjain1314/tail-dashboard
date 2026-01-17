export const GaugeChart = ({ percentage = 75 }) => {
    const radius = 80;
    const circumference = Math.PI * radius;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
        <div className="relative flex justify-center items-center">
            <svg width="320" height="200" viewBox="0 0 200 100">
                <path
                    d="M 10,100 A 90,90 0 0 1 190,100"
                    fill="none"
                    stroke="#F1F5F9"
                    strokeWidth="8"
                    strokeLinecap="round"
                />
                <path
                    d="M 10,100 A 90,90 0 0 1 190,100"
                    fill="none"
                    stroke="#3C50E0"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    style={{
                        strokeDashoffset,
                        transition: "stroke-dashoffset 1s ease-in-out"
                    }}
                />
            </svg>
        </div>
    );
};
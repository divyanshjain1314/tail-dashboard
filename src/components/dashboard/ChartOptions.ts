import { ApexOptions } from "apexcharts";

const getSalesChartOptions = (isDark: boolean): ApexOptions => ({
    colors: ["#465fff"],
    chart: {
        fontFamily: "Outfit, sans-serif",
        type: "bar",
        height: 180,
        toolbar: {
            show: false,
        },
        background: "transparent",
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: "39%",
            borderRadius: 5,
            borderRadiusApplication: "end",
        },
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        show: true,
        width: 4,
        colors: ["transparent"],
    },
    xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
        labels: {
            style: {
                colors: isDark ? "#8A99AF" : "#64748B",
                fontSize: "12px",
            },
        },
    },
    yaxis: {
        labels: {
            style: {
                colors: isDark ? "#8A99AF" : "#64748B",
                fontSize: "12px",
            },
        },
    },
    legend: {
        show: false,
    },
    grid: {
        borderColor: isDark ? "#2E3A47" : "#E2E8F0",
        strokeDashArray: 5,
        xaxis: {
            lines: {
                show: false,
            },
        },
        yaxis: {
            lines: {
                show: true,
            },
        },
    },
    fill: {
        opacity: 1,
    },
    tooltip: {
        theme: isDark ? "dark" : "light",
        x: {
            show: false,
        },
        y: {
            formatter: (val: number) => `${val}`,
        },
    },
    states: {
        hover: {
            filter: {
                type: 'none',
            }
        }
    }
});

export { getSalesChartOptions };
"use client";

import { faUsers, faBox } from '@fortawesome/free-solid-svg-icons';
import { Card } from '@/components/common/Card';
import DashboardLayout from '@/components/common/layout';
import { MonthlyTarget } from '@/components/dashboard/MonthlyTarget';
import MonthlySalesChart from '@/components/dashboard/MonthlySales';

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">

        <div className="col-span-12 xl:col-span-8">
          <div className="flex flex-col gap-4 md:gap-6 2xl:gap-7.5">

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 2xl:gap-7.5">
              <Card
                title="Customers"
                value="3,782"
                growth="+11.01%"
                icon={faUsers}
              />
              <Card
                title="Orders"
                value="5,359"
                growth="-9.05%"
                icon={faBox}
              />
            </div>

            <div className="w-full">
              <MonthlySalesChart />
            </div>
          </div>
        </div>

        <MonthlyTarget />
      </div>

    </DashboardLayout>
  );
}
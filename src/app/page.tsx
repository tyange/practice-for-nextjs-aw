import { Suspense } from "react";

import { getShippingSchedule } from "@/actions/shipping-schedule.action";

import ScheduleList from "@/components/ui/schedule-list";

export default function Home() {
  const schedules = getShippingSchedule();
  return (
    <div className="w-screen h-screen">
      <Suspense fallback={<p>Loading...</p>}>
        <ScheduleList schedules={schedules} />
      </Suspense>
    </div>
  );
}

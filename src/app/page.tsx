import { Suspense } from "react";

import ScheduleList from "@/components/schedule-list";
import Filter from "@/components/filter/filter";

export default async function Home({
  searchParams,
}: {
  searchParams: {
    page?: string;
    pageSize?: string;
    vesselTypes?: string;
    shippingLines?: string;
  };
}) {
  return (
    <div className="w-screen h-screen">
      <main>THIS IS MAIN PAGE</main>
    </div>
  );
}

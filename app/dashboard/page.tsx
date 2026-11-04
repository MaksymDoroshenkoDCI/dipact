import { Suspense } from "react";

import { DashboardContent } from "@/app/dashboard/dashboard-content";

export default function DashboardPage() {
  return (
    <Suspense fallback={<DashboardLoading />}>
      <DashboardContent />
    </Suspense>
  );
}

function DashboardLoading() {
  return (
    <main className="min-h-screen bg-slate-950 p-8 text-slate-400">
      Dashboard wird geladen...
    </main>
  );
}

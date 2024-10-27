import TimeTimeline from "@/components/TimeTimeline";
import ObjectTabs from "@/components/ObjectTabs";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="h-screen flex p-4 gap-4">
      {/* Sidebar on the left */}
      <div className="w-1/4">
        <Sidebar />
      </div>

      {/* Right section with ObjectTabs on top of TimeTimeline */}
      <div className="flex flex-col flex-1 gap-4">
        {/* ObjectTabs at the top */}
        <div className="p-4 bg-gray-100 rounded-md">
          <ObjectTabs />
        </div>

        {/* TimeTimeline below ObjectTabs */}
        <div className="flex-1 p-4 bg-black rounded-md overflow-auto">
          <TimeTimeline />
        </div>
      </div>
    </div>
  );
}

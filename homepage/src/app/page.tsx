import TimeTimeline from "@/components/TimeTimeline";
import ObjectTabs from "@/components/ObjectTabs";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="flex">
      {/* Sidebar on the left */}
      <div className="w-1/4 h-screen">
        <Sidebar />
      </div>

      {/* Right section with ObjectTabs on top of TimeTimeline */}
      <div className="">
        {/* ObjectTabs at the top */}
        <div className="p-4 bg-gray-100 rounded-md">
          <ObjectTabs />
        </div>

        {/* TimeTimeline below ObjectTabs */}
        {/* <div className="p-4 bg-black rounded-md overflow-auto">
          <TimeTimeline />
        </div> */}
      </div>
    </div>
  );
}

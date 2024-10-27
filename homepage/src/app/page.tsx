import TimeTimeline from "@/components/TimeTimeline";
import ObjectTabs from "@/components/ObjectTabs";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="flex">
      <div className="w-1/4 h-screen">
        <Sidebar />
      </div>
      <div className="">
        <div className="p-4 bg-gray-100 rounded-md">
          <ObjectTabs />
        </div>
      </div>
    </div>
  );
}

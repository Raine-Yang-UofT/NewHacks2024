import TimeTimeline from "@/components/TimeTimeline";
import ObjectTabs from "@/components/ObjectTabs";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div>
      <div>
        <ObjectTabs />
      </div>
      <div>
        <TimeTimeline />
      </div>
    </div>
  );
}

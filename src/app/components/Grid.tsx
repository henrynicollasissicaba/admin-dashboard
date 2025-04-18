import ActivityGraph from "./ActivityGraph";
import RecentTransactions from "./RecentTransactions";
import StackedArea from "./StackedArea";
import StatsCards from "./StatsCards";
import UsageRadar from "./UsageRadar";

export default function Grid(){
    return(
        <div className="px-4 grid gap-3 grid-cols-12">
            <StatsCards />
            <ActivityGraph />
            <UsageRadar />
            <RecentTransactions />
            <StackedArea />
        </div>
    )
}
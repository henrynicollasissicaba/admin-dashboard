import Grid from "./Grid";
import TopBar from "./TopBar";

export default function Dashboard(){
    return(
        <div className="bg-white rounded-lg pb-4 shadow min-h-lvh">
            <TopBar />
            <Grid />
        </div>
    )
}
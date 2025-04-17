import AccountToggle from "./AccountToggle";
import NavItems from "./NavItems";
import Plan from "./Plan";
import Search from "./Search";

export default function Sidebar(){
    return(
        <div>
            <div className="overflow-y-auto sticky top-4 h-[calc(100vh-32px-48px)]">
                <AccountToggle />
                <Search />
                <NavItems />
            </div>
            <Plan />
        </div>
    )
}
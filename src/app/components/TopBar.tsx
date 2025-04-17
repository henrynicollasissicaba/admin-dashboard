import { FiCalendar } from "react-icons/fi"

export default function TopBar(){
    const getCurrentTime = () => {
        const currentTime = new Date().getUTCHours()

        if(currentTime < 12) return "Bom dia"
        if(currentTime > 12 && currentTime < 18) return "Boa tarde"
        if(currentTime > 18) return "Boa noite"
    }

    const getCurrentDate = () => {
        const currentDate = new Date().toLocaleDateString("pt-BR", {
            day: "numeric",
            month: "long",
            year: "numeric",
            weekday: "long",
        })

        return currentDate
    }

    return(
        <div
            className="border-b px-4 mb-4 mt-2 pb-4 border-stone-200"
        >
            <div className="flex items-center justify-between p-0.5">
                <div>
                    <span className="text-sm font-bold block">
                        {getCurrentTime()}, Ashwin!
                    </span>
                    <span className="text-xs block text-stone-500">
                        {getCurrentDate()}
                    </span>
                </div>
                
                <button
                    className="flex text-sm items-center gap-2 bg-stone-100 transition-colors hover:bg-violet-100
                    hover:text-violet-700 px-3 py-1.5 rounded cursor-pointer"
                >
                    <FiCalendar />
                    <span>Últimos 6 meses</span>
                </button>
            </div>
        </div>
    )
}
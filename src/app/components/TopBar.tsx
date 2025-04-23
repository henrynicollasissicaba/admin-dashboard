"use client"

import { useEffect, useState } from "react"
import { FiCalendar } from "react-icons/fi"

export default function TopBar(){
    const [greeting, setGreeting] = useState("")
    const [currentDate, setCurrentDate] = useState("")

    useEffect(() => {
        const hour = new Date().getHours()

        if(hour >= 0 && hour < 12){
            setGreeting("Bom dia")

        } else if(hour >= 12 && hour < 18){
            setGreeting("Boa tarde")

        } else {
            setGreeting("Boa noite")
        }

        const formattedDate = new Date().toLocaleDateString("pt-BR", {
            day: "numeric",
            month: "long",
            year: "numeric",
            weekday: "long"
        })

        setCurrentDate(formattedDate)
    }, [])

    return(
        <div
            className="border-b px-4 mb-4 mt-2 pb-4 border-stone-200"
        >
            <div className="flex flex-col gap-2.5 md:flex-row md:items-center md:justify-between p-0.5">
                <div className="flex flex-col gap-0.5">
                    <span className="text-sm font-bold block">
                        {greeting}, Ashwin!
                    </span>
                    <span className="text-xs block text-stone-500">
                        {currentDate}
                    </span>
                </div>
                
                <button
                    className="flex text-sm items-center gap-2 bg-stone-100 transition-colors hover:bg-violet-100
                    hover:text-violet-700 px-3 py-1.5 rounded cursor-pointer w-fit"
                >
                    <FiCalendar />
                    <span>Últimos 6 meses</span>
                </button>
            </div>
        </div>
    )
}
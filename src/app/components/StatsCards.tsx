import { FiTrendingDown, FiTrendingUp } from "react-icons/fi"

interface CardText {
    title: string
    value: string
    pillText: string
    trend: "up" | "down"
    period: string
}

const cardText: CardText[] = [
    { 
        title: "Receita Bruta", 
        value: "R$120,054.24", 
        pillText: "2.75%", 
        trend: "up", 
        period: "Jan 1 - Jul 31" 
    },
    { 
        title: "Pedido Médio", 
        value: "R$27.97", 
        pillText: "1.01%", 
        trend: "down", 
        period: "Jan 1 - Jul 31" 
    },
    { 
        title: "Último Ano", 
        value: "R$278,054.24", 
        pillText: "60.75%", 
        trend: "up", 
        period: "Últimos 365 dias" 
    },
]

export default function StatsCards(){
    return(
        <div className="grid gap-3 col-span-12">
            <div className="flex gap-3 flex-wrap">
                {cardText.map(({ title, value, pillText, trend, period }) => (
                    <div
                        className="p-4 rounded border border-stone-300 grow"
                        key={title}
                    >
                        <div
                            className="flex mb-8 items-start justify-between"
                        >
                            <div>
                                <h3 className="text-stone-300 text-sm mb-2">
                                    {title}
                                </h3>
                                <p className="text-3xl font-semibold">
                                    {value}
                                </p>
                            </div>

                            <span
                                className={`text-xs flex items-center gap-1 font-medium px-2 py-1 rounded
                                ${trend === "up" 
                                ? "bg-green-100 text-green-700"
                                : "bg-red-100 text-red-700"}`}
                            >
                                {trend === "up"
                                    ? <FiTrendingUp />
                                    : <FiTrendingDown />
                                }
                                {pillText}
                            </span>
                        </div>

                        <p className="text-xs text-stone-500 font-medium">
                            {period}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}
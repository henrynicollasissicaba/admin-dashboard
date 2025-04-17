import { FiArrowUpRight, FiDollarSign, FiMoreHorizontal } from "react-icons/fi";

const tableRows = [
    { customerId: "#923927", plan: "Pro 1 mês", date: "02/08/2025", price: "R$ 49,90", order: 1 },
    { customerId: "#172386", plan: "Pro 3 meses", date: "18/08/2025", price: "R$ 149,90", order: 2 },
    { customerId: "#028482", plan: "Pro 1 ano", date: "06/09/2025", price: "R$ 349,90", order: 3 },
    { customerId: "#463828", plan: "Pro 2 anos", date: "30/09/2025", price: "R$ 549,90", order: 4 },
    { customerId: "#109374", plan: "Pro 1 mês", date: "10/10/2025", price: "R$ 49,90", order: 5 },
    { customerId: "#192380", plan: "Pro 6 meses", date: "22/10/2025", price: "R$ 189,90", order: 6 },
    { customerId: "#748724", plan: "Pro 6 meses", date: "28/10/2025", price: "R$ 189,90", order: 7 },
]

export default function RecentTransactions(){
    return(
        <div className="col-span-12 p-4 rounded border border-stone-300">
            <div className="mb-4 flex items-center justify-between">
                <h3 className="flex items-center gap-1.5 font-medium">
                    <FiDollarSign /> Últimas Transações
                </h3>
                <button className="text-sm text-violet-500 hover:underline cursor-pointer">
                    Ver todos
                </button>
            </div>

            <table className="w-full table-auto">
                <TableHead />

                <tbody>
                    <TableRow />
                </tbody>
            </table>
        </div>
    )
}

const TableHead = () => {
    return(
        <thead>
            <tr className="text-sm font-normal text-stone-500">
                <th className="text-start p-1.5">Id de usuário</th>
                <th className="text-start p-1.5">Assinatura</th>
                <th className="text-start p-1.5">Data</th>
                <th className="text-start p-1.5">Preço</th>
                <th className="w-8"></th>
            </tr>
        </thead>
    )
}

const TableRow = () => {
    return(
        <>
            {tableRows.map(({ customerId, plan, date, price, order }) => (
                <tr
                    className={`text-sm ${order % 2 === 0 ? "bg-stone-100" : ""}`}
                    key={order}
                >
                    <td className="p-1.5">
                        <a 
                            href="#"
                            className="text-violet-600 underline flex items-center gap-1"
                        >
                            {customerId} <FiArrowUpRight />
                        </a>
                    </td>
                    <td className="p-1.5">{plan}</td>
                    <td className="p-1.5">{date}</td>
                    <td className="p-1.5">{price}</td>

                    <button
                        className="hover:bg-stone-200 transition-colors grid place-content-center rounded text-sm size-8
                        cursor-pointer"
                    >
                        <FiMoreHorizontal />
                    </button>
                </tr>
            ))}
        </>
    )
}
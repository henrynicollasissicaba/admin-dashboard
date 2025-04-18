"use client"

import { FiUser } from "react-icons/fi";
import {
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
    Line,
    LineChart,
} from "recharts";

const data = [
    {
        name: "Jan",
        Retorno: 275,
        Novo: 41,
    },
    {
        name: "Fev",
        Retorno: 620,
        Novo: 96,
    },
    {
        name: "Mar",
        Retorno: 202,
        Novo: 192,
    },
    {
        name: "Abr",
        Retorno: 500,
        Novo: 50,
    },
    {
        name: "Mai",
        Retorno: 355,
        Novo: 400,
    },
    {
        name: "Jun",
        Retorno: 875,
        Novo: 200,
    },
    {
        name: "Jul",
        Retorno: 700,
        Novo: 205,
    },
];

export default function ActivityGraph(){
    return(
        <div className="col-span-12 md:col-span-7 overflow-hidden rounded border border-stone-300">
            <div className="p-4">
                <h3 className="flex items-center gap-1.5 font-medium">
                    <FiUser /> Atividades
                </h3>
            </div>

            <div className="h-64 px-4">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        width={500}
                        height={400}
                        data={data}
                        margin={{
                        top: 0,
                        right: 0,
                        left: -24,
                        bottom: 0,
                        }}
                    >
                        <CartesianGrid stroke="#e4e4e7" />
                        <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            className="text-xs font-bold"
                            padding={{ right: 4 }}
                        />
                        <YAxis
                            className="text-xs font-bold"
                            axisLine={false}
                            tickLine={false}
                        />
                        <Tooltip
                            wrapperClassName="text-sm rounded"
                            labelClassName="text-xs text-stone-500"
                        />
                        <Line
                            type="monotone"
                            dataKey="Novo"
                            stroke="#18181b"
                            fill="#18181b"
                        />
                        <Line
                            type="monotone"
                            dataKey="Retorno"
                            stroke="#5b21b6"
                            fill="#5b21b6"
                        />
                </LineChart>
            </ResponsiveContainer>
            </div>
        </div>
    )
}
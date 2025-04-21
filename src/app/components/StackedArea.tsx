"use client"

import { FiUsers } from 'react-icons/fi';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Grupo A',
    mobile: 4000,
    desktop: 2400,
    outros: 2400,
  },
  {
    name: 'Grupo B',
    mobile: 3000,
    desktop: 1398,
    outros: 2210,
  },
  {
    name: 'Grupo C',
    mobile: 2000,
    desktop: 9800,
    outros: 2290,
  },
  {
    name: 'Grupo D',
    mobile: 2780,
    desktop: 3908,
    outros: 2000,
  },
  {
    name: 'Grupo E',
    mobile: 1890,
    desktop: 4800,
    outros: 2181,
  },
  {
    name: 'Grupo F',
    mobile: 2390,
    desktop: 3800,
    outros: 2500,
  },
  {
    name: 'Grupo G',
    mobile: 3490,
    desktop: 4300,
    outros: 2100,
  },
];

export default function StackedArea(){
    return(
        <div className="col-span-12 overflow-hidden rounded border border-stone-300">
            <div className="p-4">
                <h3 className="flex items-center gap-1.5 font-medium">
                    <FiUsers /> Grupos
                </h3>
            </div>

            <div className="h-48 md:h-64 p-4">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                        width={500}
                        height={400}
                        data={data}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="mobile" stackId="1" stroke="#8884d8" fill="#8884d8" />
                        <Area type="monotone" dataKey="desktop" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                        <Area type="monotone" dataKey="outros" stackId="1" stroke="#ffc658" fill="#ffc658" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}
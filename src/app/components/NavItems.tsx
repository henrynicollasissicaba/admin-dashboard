import { FiDollarSign, FiHome, FiLink, FiPaperclip, FiUsers } from "react-icons/fi"

const navItems = [
    { icon: FiHome, label: "Dashboard", isSelected: true },
    { icon: FiUsers, label: "Times", isSelected: false },
    { icon: FiPaperclip, label: "Faturas", isSelected: false },
    { icon: FiLink, label: "Integrações", isSelected: false },
    { icon: FiDollarSign, label: "Finanças", isSelected: false },
]

export default function NavItems(){
    return(
        <nav className="space-y-1">
            {navItems.map(({ label, isSelected, icon: Icon }) => (
                <a 
                    href="#"
                    key={label}
                    className={`flex items-center justify-start gap-2 w-full rounded px-2 py-1.5 text-sm
                    transition-[box-shadow,background-color,color] ${isSelected 
                        ? "bg-white text-stone-950 shadow"
                        : "hover:bg-stone-200 bg-transparent text-stone-500 shadow-none"
                    }`}
                >
                    <Icon />
                    <span>{label}</span>
                </a>
            ))}
        </nav>
    )
}
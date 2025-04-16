import Image from "next/image";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

export default function AccountToggle(){
    return(
        <div className="border-b border-stone-300 mb-4 mt-2 pb-4">
            <button className="flex p-0.5 hover:bg-stone-300 rounded transition-colors relative gap-2 w-full items-center">
                <Image 
                    src="/ashwin-santiago.jpg"
                    alt="avatar"
                    width={32}
                    height={32}
                    className="size-8 rounded shrink-0 bg-violet-500 shadow"
                />
                <div className="text-start">
                    <span className="text-sm font-bold block">Ashwin Santiago</span>
                    <span className="text-xs block text-stone-500">ashsantiago.dev</span>
                </div>

                <FiChevronDown className="absolute right-2 top-1/2 translate-y-[calc(-50%+4px)] text-sm" />
                <FiChevronUp className="absolute right-2 top-1/2 translate-y-[calc(-50%-4px)] text-sm" />
            </button>
        </div>
    )
}
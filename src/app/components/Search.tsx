import { FiSearch } from "react-icons/fi";

export default function Search(){
    return(
        <>
            <div className="bg-stone-200 mb-4 relative rounded flex items-center px-2 py-1.5 text-sm">
                <FiSearch className="mr-2" />
                <input 
                    type="text"
                    placeholder="Pesquisa"
                    className="w-full bg-transparent placeholder:text-stone-400 focus:outline-none"
                />
            </div>
        </>
    )
}
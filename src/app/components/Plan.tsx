export default function Plan(){
    return(
        <div 
            className="flex sticky top-[calc(100vh-48px-16px)] flex-col h-12 border-t px-2 border-stone-300 justify-end text-sm"
        >
            <div className="flex items-center justify-between">
                <div>
                    <p className="font-bold">Empresarial</p>
                    <p className="text-stone-500">Pague conforme usar</p>
                </div>
                <button
                    className="px-2 py-1.5 font-medium bg-stone-200 hover:bg-stone-300 transition-colors rounded cursor-pointer"
                >
                    Suporte
                </button>
            </div>
        </div>
    )
}
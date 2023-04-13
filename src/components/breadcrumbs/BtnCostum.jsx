export default function BtnCostum({isBtnHandler, btnHandler, btnTitle}) {
    return (
        <>
            {isBtnHandler ?
                <button 
                    onClick={(e) => btnHandler(e)} 
                    className="px-4 py-1 rounded-full font-bold text-lg tracking-normal leading-relaxed bg-blue-500 text-white lg:hover:bg-blue-600 lg:text-2xl lg:py-2 lg:px-6"
                >
                    {btnTitle}
                </button>
                :
                <button 
                    className="px-4 py-1 rounded-full font-bold text-lg tracking-normal leading-relaxed bg-blue-500 text-white lg:hover:bg-blue-600 lg:text-2xl lg:py-2 lg:px-6"
                >
                    {btnTitle}
                </button>
            }
        </>
    )
}

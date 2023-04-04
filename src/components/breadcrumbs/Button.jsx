export default function Button({isBtnHandler, btnHandler, btnTitle}) {
    return (
        <>
            {isBtnHandler ?
                <button 
                    onClick={(e) => btnHandler(e)} 
                    className="px-4 py-1 rounded-full font-bold text-lg tracking-normal leading-relaxed bg-blue-500 text-white sm:hover:bg-blue-600 sm:text-2xl sm:py-2 sm:px-6"
                >
                    {btnTitle}
                </button>
                :
                <button 
                    className="px-4 py-1 rounded-full font-bold text-lg tracking-normal leading-relaxed bg-blue-500 text-white sm:hover:bg-blue-600 sm:text-2xl sm:py-2 sm:px-6"
                >
                    {btnTitle}
                </button>
            }
        </>
    )
}

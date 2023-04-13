export default function Header({elhImg, isTitle, title}) {
    return (
        <div className="h-[25vh] py-[3%] px-[2%] flex flex-wrap justify-center items-center bg-yellow-500">
            {/* Logo */}
            <div className="h-[50%] w-full flex items-center justify-center bg-green-500">
                {/* Dimensi img dapat berubah-ubah */}
                {elhImg}
            </div>

            {/* Boolean */}
            {isTitle &&
                <div className="h-[25%] w-full flex items-center justify-center bg-red-400">
                    <h1 className='text-blue-800 font-bold text-2xl text-center lg:text-3xl z-10'>{title}</h1>
                </div>
            }
        </div>
    )
}
export function Button1({children }) {

    return (
        <button className='border-2 border-blue-800 rounded-full xl:py-4 xl:px-8 lg:py-3 lg:px-6 md:px-4 md:py-2 text-[17px] md:text-[16px] font-pop px-4 py-2'>
            {children}
        </button>
    );
}

export function Button2({children }) {
    return (
        <button className='border-1 border-blues rounded-full xl:py-4 xl:px-8 lg:py-3 lg:px-6 md:px-4 md:py-2 bg-blues text-white font-pop text-[17px] md:text-[16px] px-4 py-3'>
            {children}
        </button>
    );
}

  
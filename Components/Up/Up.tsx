import {MdKeyboardArrowUp} from "react-icons/md";




export const Up = (): JSX.Element => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div
            className='flex p-1.5 items-center border-2 border-blue-700 justify-center text-[#030027] duration-300 hover:text-blue-100 hover:bg-blue-800 bg-blue-50 fixed bottom-6 right-6 cursor-pointer z-40 rounded-xl'
            onClick={scrollToTop}>
            <MdKeyboardArrowUp size={35}/>
        </div>
    );
};

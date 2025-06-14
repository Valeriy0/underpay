import React, { useEffect, useState, useRef } from "react";
import { ProductsRepository } from "../../../../connectors/repositories/product";
import { useRequest } from "../../../../helpers/hooks/useRequest";
import { debounce } from "lodash";
import { Item } from "../../List/Item";

export const Search = ({ isOpened, setIsOpened }) => {
    const [inputValue, setInputValue] = useState('');
    const inputValueRef = useRef(inputValue);
    const searchRef = useRef(null);

    useEffect(() => {
        inputValueRef.current = inputValue;
    }, [inputValue]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setIsOpened(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const { call, data, resetData } = useRequest(ProductsRepository.searchProducts);

    const fetchData = debounce(async () => {
        const query = inputValueRef.current;
        if (query === '') {
            resetData();
            return;
        }

        try {
            call([{name: query}]);
        } catch (e) {
            console.log(e);
        }
    }, 1000);

    useEffect(() => {
        fetchData()
    }, [inputValue])

    return (
        <div className={`relative ${isOpened ? 'w-full' : ''}`}>
            <div 
                ref={searchRef}
                onClick={() => setIsOpened(true)} 
                className={`cursor-pointer flex-shrink-0 h-[4.8rem] px-[2rem] flex items-center justify-start bg-onBg rounded-[3.2rem] w-[6.4rem] ${isOpened ? '!w-full' : ''} `}
            >
                <img className="w-[2.4rem] h-[2.4rem]" src="/icons/search.svg" alt="" />
                {isOpened && <input className="pl-2.5 py-3 h-full w-full bg-transparent outline-none" type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Поиск..." />}
            </div>
            {isOpened && (
                <div className="z-[5] fixed top-[8rem] left-1/2 -translate-x-1/2 w-full h-[calc(100vh-8rem)] bg-mainBg z-50 max-w-[39rem] w-full grid grid-cols-2 gap-x-[0.8rem] gap-y-[2.4rem] px-[0.8rem] overflow-y-auto invisible-scrollbar pb-[2.4rem]">
                    {data?.data?.products.map((item, itemIndex) => (
                        <Item {...item} key={itemIndex} />       
                    ))}
                </div>
            )}
        </div>
    )
}
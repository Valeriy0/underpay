import React, { useEffect, useState, useRef } from "react";
import { WithdrawalsRepository } from "../../../../connectors/repositories/withdrawals";
import { useRequest } from "../../../../helpers/hooks/useRequest";
import { debounce } from "lodash";

export const Search = ({ isOpened, setIsOpened }) => {
    const [inputValue, setInputValue] = useState('');
    const inputValueRef = useRef(inputValue);

    useEffect(() => {
        inputValueRef.current = inputValue;
      }, [inputValue]);

    const { call, data } = useRequest(WithdrawalsRepository.searchItem);

  const fetchData = debounce(async () => {
    const query = inputValueRef.current;
    if (query === '') {
      return;
    }

    try {
        call([query]);
    } catch (e) {
      console.log(e);
    }
  }, 1000);

    useEffect(() => {
        fetchData()
    }, [inputValue])

    console.log(data);

    return (
        <div onClick={() => setIsOpened(true)} className={`cursor-pointer flex-shrink-0 h-[4.8rem] px-[2rem] flex items-center justify-start bg-onBg rounded-[3.2rem] w-[6.4rem] ${isOpened ? '!w-full' : ''} `}>
            <img className="w-[2.4rem] h-[2.4rem]" src="/icons/search.svg" alt="" />
            {isOpened && <input className="pl-2.5 py-3 h-full w-full bg-transparent outline-none" type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />}
        </div>
    )
}
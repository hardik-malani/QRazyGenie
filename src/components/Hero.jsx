import React, { useEffect, useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import Qr from './Qr';
import { FaGreaterThan } from 'react-icons/fa';
import { setInputValue } from '../redux/reducer/Input';

export default function Hero({link}) {
  const [inputText, setInputText] = useState('');
  const dispatch = useDispatch();
  // const Store = useSelector((state) => state.linkValue)

  const handleButtonClick = () => {
    dispatch(setInputValue(inputText));
  };

  return (
    <>
      <div className="bg-gradient-to-r from-green-300 via-blue-400 to-purple-600 h-screen w-full flex flex-col justify-center items-center space-y-10">
        <div className="flex flex-row bg-white rounded-lg px-2">
          <input
            type="text"
            name="search"
            id="searchInput"
            className="focus:border-none focus:outline-none"
            placeholder="Enter your text/link here"
            value={inputText} // Use local state here
            onChange={(e) => setInputText(e.target.value)} // Update local state
          />
          <button
            className="my-1 bg-blue-500 rounded-md px-2 w-8 h-8 hover-bg-blue-400"
            onClick={() => handleButtonClick()}
          >
            <FaGreaterThan />
          </button>
        </div>
        <Qr/>
      </div>
    </>
  );
}
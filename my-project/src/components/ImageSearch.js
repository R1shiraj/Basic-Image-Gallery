import { useState } from "react";
import React from 'react';

const ImageSearch = ({ onSearch }) => {
  const [text, setText] = useState('');
  function submitFunction(e) {
    e.preventDefault();

    onSearch(text);
  }
  return (
    <div className=" max-w-md w-full overflow-hidden my-10 mx-auto">
      <form onSubmit={submitFunction} className="w-full max-w-md">
        <div className="flex border-gray-400 border-2 rounded-full">
          <input onChange={e => setText(e.target.value)}
            className=" w-full px-5 py-3 bg-transparent focus:outline-none" type="text" placeholder='Search Image Term...' />
          <button className="rounded-full bg-transparent p-4 bg-slate-500" type="submit">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="4" stroke="gray" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>

          </button>
        </div>
      </form>
    </div>
  )
}

export default ImageSearch;
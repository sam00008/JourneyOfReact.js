import { useEffect } from 'react';
import { useRef } from 'react';
import { useCallback } from 'react';
import { useState } from 'react'

function App() {
  const [length, setlength] = useState(8);
  const [number, setnumber] = useState(false);
  const [char, setchar] = useState(false);
  const [password, setpassword] = useState("");

  const passwordGenerator = useCallback(
    () => {
       let pass = ""
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

      if (number) str += "1234567890";
      if (char) str += "~!@#$%^&*(){}<>?/";

      for (let i = 1; i <= length; i++) {
        let char = Math.floor(Math.random() * str.length + 1);

        pass += str.charAt(char);
      }

      setpassword(pass);
    },
    [length, number, char, setpassword])

  const passwordRef = useRef(null);  
  const CopyPassword = useCallback(() => {
   passwordRef.current?.select();
  },[password])

    useEffect(() => {
      passwordGenerator()
    },[length,char,number,passwordGenerator]);

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-700 text-orange-500'>

        <h1 className='text-white text-center my-3'>Password Generator</h1>

        <div className='flex shadow rounded-lg overflow-hidden mb-4'>

          <input
            type="text"
            value={password}
            ref={passwordRef}
            className='outline-none w-full py-1 px-3 bg-white'
            placeholder='password'
            readOnly
          />

          <button 
          onClick={CopyPassword}
          className='outline-none bg-blue-700 text-white px-3 py-1 shrink-0 cursor-pointer'>
            Copy
          </button>

        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={8}
              max={20}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setlength(e.target.value) }}
            />
            <label> Length : {length} </label>
          </div>

          <div className='flex items-centre gap-x-1 mx-3'>
            <input
              type="checkbox"
              defaultChecked={number}
              id="numberInput"
              onChange={() => setnumber((prev) => !prev)}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className='flex items-centre gap-x-1 mx-3'>
            <input
              type="checkbox"
              defaultChecked={char}
              id="charInput"
              onChange={() => setchar((prev) => !prev)}
            />
            <label htmlFor="charInput">Character</label>
          </div>

        </div>
      </div>
    </>
  )
}

export default App

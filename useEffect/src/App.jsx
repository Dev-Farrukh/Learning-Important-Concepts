import React from 'react';
import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [password, setPassword] = useState("")
  const [length, setLength] = useState(4)
  const [isNumber, setIsNumber] = useState(false)
  const [isChar, setIsChar] = useState(false)
  const copyRef = useRef()

  const passwordGenerator = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (isNumber) str += "1234567890"
    if (isChar) str += "~!@##$%^&*_+_!"
    let randomChar = ""

    for (let i = 1; i <= length; i++) {
      let randomInt = Math.floor(Math.random() * str.length)
      console.log(randomInt)
      randomChar += str[randomInt]
    }
    setPassword(randomChar)

  }, [setPassword, length, isNumber, isChar])


  const copied = () => {
    copyRef.current?.select()
    window.navigator.clipboard.writeText(password);
  }


  useEffect(() => {
    passwordGenerator()
  }, [length, isNumber, isChar, passwordGenerator])

  return (
    <div className="bg-gray-900 text-white h-screen">
      <h1 className="text-4xl text-center">Password generator</h1>
      <div>
        <div className="h-11 flex items-center justify-center border-2 w-[60%] mx-auto my-4 rounded-md pl-2">
          <input type="text" className="rounded-md outline-none w-[80%]" value={password} ref={copyRef} />
          <button className="bg-blue-400 p-2 rounded-md text-white w-[20%]" onClick={copied}> Copy</button>
        </div>

        <div className="flex justify-center gap-4 flex-col items-center">
          <label className="flex gap-2">
            <input type="range" min={4} max={100} value={length} onChange={(e) => setLength(e.target.value)} />
            Length {length}
          </label>

          <label className="flex gap-2">
            <input type="checkbox" value={isNumber} onChange={() => setIsNumber((prev) => !prev)} />
            Numbers
          </label>

          <label className="flex gap-2">
            <input type="checkbox" value={isChar} onChange={() => setIsChar((prev) => !prev)} />
            <p>Characters</p>
          </label>
        </div>
      </div>
    </div>
  )
}

export default App


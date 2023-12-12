import { useState, useCallback, useEffect } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(9);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) {
      str += "0123456789";
    }
    if (characterAllowed) {
      str += "!@#$%^&*()_+";
    }

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
    console.log(password);
  }, [length, numberAllowed, characterAllowed]);

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, characterAllowed, passwordGenerator]);

  return (
    <>
      <h1 className="text-4xl text-center">Password Generator</h1>
      <div className="w-full max-w-md mx-auto text-orange-600 shadow-md rounded-lg px-4 my-8 bg-gray-700">
        <div className="my-4 py-2 mx-auto w-full">
          <input
            className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={password}
            readOnly
          />
          <button className="border-0 px-5 py-2 rounded-md bg-blue-700 text-white mx-2">
            Copy
          </button>

          <div className="flex align-middle justify-between my-2 px-4">
            <div className="flex align-middle">
              <label className="text-gray-200 text-sm font-bold">
                Length ({length})
              </label>
              <input
                className="border rounded text-blue-600 leading-tight focus:outline-none focus:shadow-outline"
                type="range"
                min={9}
                max={50}
                onChange={(e) => setLength(e.target.value)}
                value={length}
              />
            </div>
            <div className="flex align-middle">
              <label className="text-gray-200 text-sm font-bold">Numbers</label>
              <input
                className="border rounded text-gray-700 leading-tight ml-2 focus:outline-none focus:shadow-outline"
                type="checkbox"
                onChange={() => setNumberAllowed((prev) => !prev)}
              />
            </div>
            <div className="flex align-middle">
              <label className="text-gray-200 text-sm font-bold">
                Characters
              </label>
              <input
                className="border rounded text-blue-600 leading-tight ml-2 focus:outline-none focus:shadow-outline"
                type="checkbox"
                onChange={() => {
                  setCharacterAllowed((prev) => !prev);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

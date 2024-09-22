import React, { useState } from "react";

function App() {
  const [textAreaValue, setTextAreaValue] = useState("");
  const [uniqueWord, setUniqueWord] = useState(0);
  const [charCount, setCharCount] = useState(0);

  const [originalTextValue, setOriginalTextValue] = useState("");
  const [newTextValue, setNewTextValue] = useState("");

  const debounce = (func: Function, delay: number) => {
    let timeoutId: NodeJS.Timeout;
    return (...args: any[]) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  const processText = debounce((value: string) => {
    const words = value.split(/[\s\W]+/).filter(Boolean);
    const uniqueWords = new Set(words.map((word) => word.toLowerCase()));
    setUniqueWord(uniqueWords.size);

    const filteredText = value.replace(/[^a-zA-Z0-9]/g, '');
    setCharCount(filteredText.length)
  }, 300);

  const handleTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaValue(e.target.value);
    processText(e.target.value);
  };

  const handleOnReplace = (e:any) => {
    e.preventDefault();

    const updatedText = textAreaValue.replace(new RegExp(`\\b${originalTextValue}\\b`, 'g'), newTextValue);
    setTextAreaValue(updatedText);

    setOriginalTextValue("");
    setNewTextValue("");
  };

  return (
    <div className="flex items-center justify-center h-[100vh] py-5 px-2">
      <div className="w-[330px] md:w-[500px] lg:w-[900px] 2xl:w-[1100px] m-auto space-y-5">
        <div className="text-center font-bold text-[16px] md:text-[20px] mb:10 md:mb-16">
          Real-Time Text Analysis and String Replacement
        </div>
        <div className="space-y-2">
          <label htmlFor="textarea">Enter your text: </label>
          <textarea
            name="textarea"
            id="textarea"
            value={textAreaValue}
            className="border-2 outline-0 w-full h-[200px] lg:h-[300px] px-5 py-3 resize-none"
            onChange={handleTextArea}
          ></textarea>
        </div>

        <form onSubmit={handleOnReplace} className="space-y-5">
          <div className="space-y-2">
            <label htmlFor="originalText">Text to replace:</label>
            <input
              type="text"
              name="originalText"
              id="originalText"
              value={originalTextValue}
              className="border-2 w-full p-2 outline-0"
              onChange={(e) => setOriginalTextValue(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="newText">New Text:</label>
            <input
              type="text"
              name="newText"
              id="newText"
              value={newTextValue}
              className="border-2 w-full p-2 outline-0"
              onChange={(e) => setNewTextValue(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="rounded-md p-2 bg-blue-500 text-white font-bold"
          >
            Replace All
          </button>
        </form>

        <div className="lg:flex items-center justify-between space-y-2 lg:space-y-0">
          <div className="font-bold text-[16px] md:text-[20px]">
            Unique words: <span>{uniqueWord}</span>
          </div>

          <div className="font-bold text-[16px] md:text-[20px]">
            Total Characters: <span>{charCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from 'react';

const Drop = ({ setLang }) => {
  const [show, setShow] = useState(false);
  const [buttonText, setButtonText] = useState("Chose Language")

  const lang = [
    {
      name: "English",
      callback: () =>{
         setLang("en") 
         setButtonText("English")
        }
    },
    {
      name: "Hindi",
      callback: () =>{ 
        setLang("hi")
        setButtonText("Hindi")
        }
    },
    {
      name: "French",
      callback: () =>{ 
        setLang("fr")
        setButtonText("French")
        }
    },
    {
      name: "Urdu",
      callback: () =>{ 
        setLang("ur")
        setButtonText("Urdu")
        }
    }
  ];

  const handleClick = (e, callback) => {
    e.preventDefault();
    setShow(false);
    
    callback();
  };

  //useeffect likhna pdega
  

  return (
    <div className={`bg-dropdown-background w-full py-2 shadow-xl z-0`} >
      <button onClick={() => setShow(!show)} type="button" className="inline-flex justify-center w-full rounded-md border bg-input-background text-start  text-white h-10 p-2">
        {buttonText}
        <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414zM5 11a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
      </button>
      {show && (
        <ul>
          {lang.map(({ name, callback }, index) => (
            <li key={index} className="px-5 py-2 cursor-pointer hover:bg-background-default-hover" 
            onClick={(e) => handleClick(e, callback)}>
              <span className="text-white">{name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Drop;

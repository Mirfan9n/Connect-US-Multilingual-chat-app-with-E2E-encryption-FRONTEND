import React, { useEffect, useRef } from "react";

function ContextMenu({ options, coordinates, contextMenu, setContextMenu }) {
  const contextMenuRef = useRef(null)

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (event.target.id !== 'context-opener') {
        if (contextMenuRef.current && !contextMenuRef.current.contains(event.target)) {
          setContextMenu(false)
        }
      }
    }
    document.addEventListener('click', handleOutsideClick)
    return () => {
      document.removeEventListener('click', handleOutsideClick)
    }
  }, [])

  const handleClick = (e, callback) => {
    e.stopPropagation();
    callback();
    setContextMenu(false)
  };

  return <div className={`bg-dropdown-background fixed py-2 z-[100] shadow-xl`} 
        style={{top:coordinates.y, left:coordinates.x}} 
        ref={contextMenuRef}
        >
    <ul>
      {options.map(({ name, callback }) => {
        return(
        <li key={name} className="px-5 py-2 cursor-pointer hover:bg-background-default-hover" 
        onClick={(e) => handleClick(e, callback)}>
          <span className="text-white">{name}</span>
        </li>
        )
      })}
    </ul>
  </div>;
}

export default ContextMenu;

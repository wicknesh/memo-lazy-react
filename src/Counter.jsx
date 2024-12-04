import { useState } from "react";
import { useMemo } from "react";
import { initialItems } from "./utils";

const Counter = () => {
    const [ count, setCount] = useState(0);
    const [ items ] = useState(initialItems);
  
    const selectedItem = useMemo(
      () => items.find((item) => item.isSelected),
      [items]
    );
  
  return (
    <div className="p-10">
      <h1 className='text-[#F5F5F5] text-[2.5rem]'>Count: {count}</h1>
      <h1 className='text-[#F5F5F5] text-[2.5rem]'>Selected Item: {selectedItem?.id}</h1>
      <button className="rounded-lg bg-[#ff6f20] font-semibold text-white p-3 text-[1.5rem] mt-5" onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default Counter;
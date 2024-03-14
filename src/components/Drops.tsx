import {useState} from "react";

export const enum DropFilter {
  Top,
  All
}

export default function Drops() {
  const [filter, setFilter] = useState(DropFilter.Top)


  return (
    <div className='relative overflow-hidden min-h-full bg-black w-64 pt-4 no-m flex flex-col gap-4'>
      {/* Top */}
      <div className='flex flex-row min-w-full gap-2 justify-around items-center'>
        <h1 className='text-xl flex flex-row gap-1'>Live Drops <div className='purple-glow bg-purple-500 w-1.5 h-1.5 rounded-full' /></h1>
        <div className='flex flex-row gap-2 [&>*]:uppercase [&>*]:text-sm'>
          <button onClick={() => setFilter(DropFilter.Top)}
                  className={`${filter === DropFilter.Top ? 'opacity-90' : 'opacity-40'}`}>Top</button>
          <button onClick={() => setFilter(DropFilter.All)}
                  className={`${filter === DropFilter.All ? 'opacity-90' : 'opacity-40'}`}>All</button>
        </div>
      </div>

      {/* Drops */}
      <div className='h-0 min-w-full flex-grow'>

      </div>
    </div>
  )
}
import React from 'react'

const TopButtons = ({setQuery}) => {

    const cities = [
        {
            id:1,
            title:'Haridwar'
        },
        {
            id:2,
            title:'Rishikesh'
        },
        {
            id:3,
            title:'Delhi'
        },
        {
            id:4,
            title:'Noida'
        },
        {
            id:5,
            title:'Chandigarh'
        }
    ]
  return (
    <div className='flex items-center justify-around my-6'>
        {cities.map((city) =>(
            <button key={city.id} className='text-white text-lg font-medium'
            onClick={()=> setQuery({q: city.title})}>
                {city.title}</button>
        ))}
    </div>
  )
}

export default TopButtons
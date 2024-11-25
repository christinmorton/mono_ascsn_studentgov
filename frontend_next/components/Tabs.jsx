'use client';
import React, {useState} from 'react'

const Tabs = ({campuses, learningCenters}) => {
    const [toggleState, setToggleState] = useState(1)
    // console.log(campuses)

    const toggleTab = (index) => {
        setToggleState(index);
    };

  return (
    <div className='tabs_container'>
        <div className="flex justify-center space-x-4 mb-4">
                <button
                    className={`tabs ${toggleState === 1 ? 'active-tab' : ''}`}
                    onClick={() => toggleTab(1)}
                >
                    Main Campuses
                </button>
                <button
                    className={`tabs ${toggleState === 2 ? 'active-tab' : ''}`}
                    onClick={() => toggleTab(2)}
                >
                    Learning Centers
                </button>
            </div>

        <div className="content-tabs">
            <div className={`${toggleState === 1 ? 'h-[500px] flex flex-row items-center gap-6' : 'invisible hidden'}`}>
                {campuses.map((item, index) => (
                    <div className="flex flex-col items-center text-lg font-semibold p-6" key={index}>
                        <h4>{item.Name}</h4>
                        <p className='text-sm'>{item.address.PrimaryStreet}, {item.address.city}, {item.address.state} {item.address.zipcode}</p>
                        <p>{item.address.phone}</p>
                    </div>
                ))}
            </div>

            <div  className={`${toggleState === 2 ? 'h-[500px] w-full grid grid-cols-4 justify-between  p-6 gap-6' : 'invisible hidden'}`}>
            {learningCenters.map((item, index) => (
                    <div className="flex flex-col items-center text-lg font-semibold p-6" key={index}>
                        <h4>{item.Name}</h4>
                        <p>{item.address.PrimaryStreet}, {item.address.city}, {item.address.state} {item.address.zipcode}</p>
                        <p>{item.address.phone}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Tabs
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
            <div className={`flex flex-col items-center content ${toggleState === 1 ? 'active-content' : 'invisible'}`}>
                {campuses.map((item, index) => (
                    <div className="flex flex-col items-center text-lg font-semibold" key={index}>
                        <h4>{item.Name}</h4>
                        <p>{item.address.PrimaryStreet}, {item.address.city}, {item.address.state} {item.address.zipcode}</p>
                        <p>{item.address.phone}</p>
                    </div>
                ))}
            </div>

            <div  className={`flex flex-col items-center content ${toggleState === 2 ? 'active-content' : 'invisible'}`}>
            {learningCenters.map((item, index) => (
                    <div className="flex flex-col items-center text-lg font-semibold" key={index}>
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
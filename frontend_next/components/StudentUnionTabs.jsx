'use client'
import { useEffect, useState } from "react";

const StudentUnionTabs = ({ studentUnions }) => {
    const [toggleState, setToggleState] = useState(1)
    const [union1, setUnion1] = useState(studentUnions[0].Heading)
    const [union2, setUnion2] = useState(studentUnions[1].Heading)
    const [union3, setUnion3] = useState(studentUnions[2].Heading)
    const [unionText1, setUnionText1] = useState(studentUnions[0].PlainTextDescription)
    const [unionText2, setUnionText2] = useState(studentUnions[1].PlainTextDescription)
    const [unionText3, setUnionText3] = useState(studentUnions[2].PlainTextDescription)
    // console.log(campuses)

    // useEffect(() => {}, [])

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
                    {studentUnions[0].Heading}
                </button>
                <button
                    className={`tabs ${toggleState === 2 ? 'active-tab' : ''}`}
                    onClick={() => toggleTab(2)}
                >
                    {studentUnions[1].Heading}
                </button>
                <button
                    className={`tabs ${toggleState === 3 ? 'active-tab' : ''}`}
                    onClick={() => toggleTab(3)}
                >
                    {studentUnions[2].Heading}
                </button>
            </div>

        <div className="content-tabs">
            <div className={`flex flex-col items-center content ${toggleState === 1 ? 'active-content' : 'invisible'}`}>
                    <div className="flex flex-col items-center text-lg font-semibold" >
                        <p>{studentUnions[0].PlainTextDescription}</p>
                    </div>
            </div>
            <div  className={`flex flex-col items-center content ${toggleState === 2 ? 'active-content' : 'invisible'}`}>
                    <div className="flex flex-col items-center text-lg font-semibold" >
                    <p>{studentUnions[1].PlainTextDescription}</p>
                    </div>
            </div>
            <div  className={`flex flex-col items-center content ${toggleState === 3 ? 'active-content' : 'invisible'}`}>
                    <div className="flex flex-col items-center text-lg font-semibold" >
                    <p>{studentUnions[2].PlainTextDescription}</p>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default StudentUnionTabs
'use client'
import { useEffect, useState } from "react";

const StudentUnionTabs = ({ content, studentUnion }) => {
    // console.log(studentUnion)
    const [toggleState, setToggleState] = useState(1)
    const [union1, setUnion1] = useState(content[0].Heading)
    const [union2, setUnion2] = useState(content[1].Heading)
    const [union3, setUnion3] = useState(content[2].Heading)
    // const [buildingHours, setBuildingHours] = useState({})

    // useEffect(() => {}, [])

    const formatBuildingHours = (sentence) => {
        let str1 = sentence.split(':');
        let str2 = str1[1].split(',');
        let str3 = str2[1]

        return{
            str1: str1[0].trim(),
            str2: str2[0].trim(),
            str3: str3.trim()
        }
    }

    const formatStudentGovernmentHours = (sentence) => {
        let str1 = sentence.split(':');
        let str2 = str1[1].split(',');

        return{
            str1: str1[0].trim(),
            str2: str2[0].trim(),
        }
    }

    const formatCounselingRetentionHours = (sentence) => {
        let str1 = sentence.split(':');
        let str2 = str1[1].split(',');
        let str3 = str2[1]

        return{
            str1: str1[0].trim(),
            str2: str2[0].trim(),
            str3: str3.trim()
        }
    }

    const formatCoyoteCupboardHours = (sentence, sentence2) => {
        let str1 = sentence.split(':')
        let str2 = str1[1].split('.')
        let str3 = str2[1]

        let str4 = sentence2.split(':')
        let str5 = str4[1].split('.')
        let str6 = str5[1]

        return{
            str1: str1[0].trim(),
            str2: str2[0].trim(),
            str3: str3.trim(),
            // str4: str4[0].trim(),
            str5: str5[0].trim(),
            // str6: str6.trim()
        }
    }

    const formatMultiCulturalHours = (sentence) => {
        let str1 = sentence.split(':');
        let str2 = `${str1[1]}:${str1[2]}:${str1[3]}:${str1[4]}:${str1[5]}`
        let str3 = str2.split(';')
        let str4 = str3[1].split('.')

        return{
            str1: str1[0].trim(),
            str2: str3[0].trim(),
            str3: str4[0].trim()
        }
    }

    const formatCoffeeBarHours = (sentence) => {
        let str1 = sentence.split('-');
        let str2 = str1[1].split(',');
        let str3 = str2[1]

        return{
            str1: str1[0].trim(),
            str2: str2[0].trim(),
            str3: str3.trim()
        }
    }

    // console.log(formatMultiCulturalHours(studentUnion.multi_cultural_hours))

    const building_info = formatBuildingHours(studentUnion.building_hours);
    const student_government = formatStudentGovernmentHours(studentUnion.student_government_hours);
    const counseling_and_retention = formatCounselingRetentionHours(studentUnion.counseling_and_retention_hours);
    const coyote_cupboard = formatCoyoteCupboardHours(studentUnion.coyote_cupboard_hours, studentUnion.coyote_cupboard_note);
    const multi_cultural = formatMultiCulturalHours(studentUnion.multi_cultural_hours)
    const coffee_bar = formatCoffeeBarHours(studentUnion.coffee_bar_hours) 
    const grill = formatCoffeeBarHours(studentUnion.grill_hours);

    const renderStudentUnion = () => {
        const building_info = formatBuildingHours(studentUnion.building_hours);
        const student_government = formatStudentGovernmentHours(studentUnion.student_government_hours);
        const counseling_and_retention = formatCounselingRetentionHours(studentUnion.counseling_and_retention_hours);
        const coyote_cupboard = formatCoyoteCupboardHours(studentUnion.coyote_cupboard_hours, studentUnion.coyote_cupboard_note);
        const multi_cultural = formatMultiCulturalHours(studentUnion.multi_cultural_hours)
        const coffee_bar = formatCoffeeBarHours(studentUnion.coffee_bar_hours) 
        const grill = formatCoffeeBarHours(studentUnion.grill_hours);
        return (
            <div className="flex flex-col items-center text-lg font-semibold highlight-border p-6 space-y-12" >
                <div className="flex flex-col items-start justify-evenly p-6">
                    <p>{building_info.str1}</p>
                    <p>{building_info.str2}</p>
                    <p>{building_info.str3}</p>
                    <p>{student_government.str1}</p>
                    <p>{student_government.str2}</p>
                    {/* <p>{studentUnion.student_government_hours}</p>*/}
                    <p>{studentUnion.study_room_note}</p>
                    <p>{studentUnion.study_room_rule}</p>
                    <p>Located in Office: {studentUnion.office_number}</p> 
                </div>
                
                <div className="flex flex-row p-6">
                    <div className="flex flex-col items-start">
                        <div>
                            <p>{counseling_and_retention.str1}</p>
                            <p>{counseling_and_retention.str2}</p>
                            <p>{counseling_and_retention.str3}</p>
                        </div>

                        <div>
                            <p>{multi_cultural.str1}</p>
                            <p>{multi_cultural.str2}</p>
                            <p>{multi_cultural.str3}</p>
                        </div>
                    </div>
                
                    <div className="flex flex-col items-start">
                        <p>{coyote_cupboard.str1}</p>
                        <p>{coyote_cupboard.str2}</p>
                        <p>{coyote_cupboard.str3}</p>
                        <p>{coyote_cupboard.str5}</p>
                        <p>{studentUnion.coyote_cupboard_note_2}</p>
                    </div>
                </div>

                <div className="w-full flex flex-row items-start justify-around p-6">
                    <div>
                        <p>{coffee_bar.str1}</p>
                        <p>{coffee_bar.str2}</p>
                        <p>{coffee_bar.str3}</p>
                    </div>
                    <div>
                        <p>{grill.str1}</p>
                        <p>{grill.str2}</p>
                        <p>{grill.str3}</p>
                    </div>
                </div>
            </div>
        )
    }

    const toggleTab = (index) => {
        setToggleState(index);
    };

  return (
    <div className='w-full tabs_container'>
        <div className="flex justify-center space-x-4 mb-4">
                <button
                    className={`tabs ${toggleState === 1 ? 'active-tab' : ''}`}
                    onClick={() => toggleTab(1)}
                >
                    {union1}
                </button>
                <button
                    className={`tabs ${toggleState === 2 ? 'active-tab' : ''}`}
                    onClick={() => toggleTab(2)}
                >
                    {union2}
                </button>
                <button
                    className={`tabs ${toggleState === 3 ? 'active-tab' : ''}`}
                    onClick={() => toggleTab(3)}
                >
                    {union3}
                </button>
            </div>

        <div className="content-tabs bg-yellow-200 rounded-xl text-blue-600">
            <div className={` ${toggleState === 1 ? 'flex flex-col items-center content active-content' : 'invisible hidden'}`}>
            <div className="w-full flex flex-col items-center text-lg font-semibold highlight-border p-6 space-y-12" >
                    <div className="flex flex-col items-start justify-evenly p-6">
                        <p>{building_info.str1}</p>
                        <p>{building_info.str2}</p>
                        <p>{building_info.str3}</p>
                        <p>{student_government.str1}</p>
                        <p>{student_government.str2}</p>
                        {/* <p>{studentUnion.student_government_hours}</p>*/}
                        <p>{studentUnion.study_room_note}</p>
                        <p>{studentUnion.study_room_rule}</p>
                        <p>Located in Office: {studentUnion.office_number}</p> 
                    </div>
                    
                    <div className="flex flex-row items-center justify-around p-6 bg-blue-600 text-yellow-300 rounded-md">
                        <div className="w-1/2 flex flex-col items-start">
                            <p>{counseling_and_retention.str1}</p>
                            <p>{counseling_and_retention.str2}</p>
                            <p>{counseling_and_retention.str3}</p>
                        </div>
                    
                        <div className="w-1/2 flex flex-col items-start">
                            <p>{coyote_cupboard.str1}</p>
                            <p className="text-left">{coyote_cupboard.str2}</p>
                            <p>{coyote_cupboard.str3}</p>
                            <p className="text-left">{coyote_cupboard.str5}</p>
                            <p>{studentUnion.coyote_cupboard_note_2}</p>
                        </div>
                    </div>

                    <div className="w-full flex flex-row items-start justify-around p-6 text-left">
                        <div className="flex flex-col">
                            <p>{coffee_bar.str1}</p>
                            <p>{coffee_bar.str2}</p>
                            <p>{coffee_bar.str3}</p>
                        </div>
                        <div className="flex flex-col">
                            <p>{grill.str1}</p>
                            <p>{grill.str2}</p>
                            <p>{grill.str3}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div  className={` ${toggleState === 2 ? 'flex flex-col items-center content active-content' : 'invisible hidden'}`}>
                <div className="w-full flex flex-col items-center text-lg font-semibold highlight-border p-6 space-y-12" >
                    <div className="flex flex-col items-start justify-evenly p-6">
                        <p>{building_info.str1}</p>
                        <p>{building_info.str2}</p>
                        <p>{building_info.str3}</p>
                        <p>{student_government.str1}</p>
                        <p>{student_government.str2}</p>
                        {/* <p>{studentUnion.student_government_hours}</p>*/}
                        <p>{studentUnion.study_room_note}</p>
                        <p>{studentUnion.study_room_rule}</p>
                        <p>Located in Office: {studentUnion.office_number}</p> 
                    </div>
                    
                    <div className="flex flex-row items-center justify-around p-6 bg-blue-600 text-yellow-300 rounded-md">
                        <div className="w-1/2 flex flex-col items-start">
                            <p>{counseling_and_retention.str1}</p>
                            <p>{counseling_and_retention.str2}</p>
                            <p>{counseling_and_retention.str3}</p>
                            <br />
                            <p>{multi_cultural.str1}</p>
                            <p>{multi_cultural.str2}</p>
                            <p>{multi_cultural.str3}</p>
                        </div>
                    
                        <div className="w-1/2 flex flex-col items-start">
                            <p>{coyote_cupboard.str1}</p>
                            <p className="text-left">{coyote_cupboard.str2}</p>
                            <p>{coyote_cupboard.str3}</p>
                            <p className="text-left">{coyote_cupboard.str5}</p>
                            <p>{studentUnion.coyote_cupboard_note_2}</p>
                        </div>
                    </div>

                    <div className="w-full flex flex-row items-start justify-around p-6 text-left">
                        <div className="flex flex-col">
                            <p>{coffee_bar.str1}</p>
                            <p>{coffee_bar.str2}</p>
                            <p>{coffee_bar.str3}</p>
                        </div>
                        <div className="flex flex-col">
                            <p>{grill.str1}</p>
                            <p>{grill.str2}</p>
                            <p>{grill.str3}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div  className={` ${toggleState === 3 ? 'flex flex-col items-center content active-content' : 'invisible hidden'}`}>
            <div className="w-full flex flex-col items-center text-lg font-semibold highlight-border p-6 space-y-12" >
                    <div className="flex flex-col items-start justify-evenly p-6">
                        <p>{building_info.str1}</p>
                        <p>{building_info.str2}</p>
                        <p>{building_info.str3}</p>
                        <p>{student_government.str1}</p>
                        <p>{student_government.str2}</p>
                        {/* <p>{studentUnion.student_government_hours}</p>*/}
                        <p>{studentUnion.study_room_note}</p>
                        <p>{studentUnion.study_room_rule}</p>
                        <p>Located in Office: {studentUnion.office_number}</p> 
                    </div>
                    
                    <div className="flex flex-row items-center justify-around p-6 bg-blue-600 text-yellow-300 rounded-md">
                        <div className="w-1/2 flex flex-col items-start">
                            <p>{counseling_and_retention.str1}</p>
                            <p>{counseling_and_retention.str2}</p>
                            <p>{counseling_and_retention.str3}</p>
                            <br />
                            <p>{multi_cultural.str1}</p>
                            <p>{multi_cultural.str2}</p>
                            <p>{multi_cultural.str3}</p>
                        </div>
                    
                        <div className="w-1/2 flex flex-col items-start">
                            <p>{coyote_cupboard.str1}</p>
                            <p className="text-left">{coyote_cupboard.str2}</p>
                            <p>{coyote_cupboard.str3}</p>
                            <p className="text-left">{coyote_cupboard.str5}</p>
                            <p>{studentUnion.coyote_cupboard_note_2}</p>
                        </div>
                    </div>

                    <div className="w-full flex flex-row items-start justify-around p-6 text-left">
                        <div className="flex flex-col">
                            <p>{coffee_bar.str1}</p>
                            <p>{coffee_bar.str2}</p>
                            <p>{coffee_bar.str3}</p>
                        </div>
                        <div className="flex flex-col">
                            <p>{grill.str1}</p>
                            <p>{grill.str2}</p>
                            <p>{grill.str3}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default StudentUnionTabs
import React from 'react';
import { resumeData } from '../data/resume';
import ResumeHeader from './resumeHeader';
import SubHeader from './resumeSubHeader';
import SmallText from './smallText';

const CourseWork: React.FC = () => {

    type CourseWorkItemProps = 
        {
            title: string
            description: string
        }



    const CourseworkItem: React.FC<CourseWorkItemProps> = ( { title, description } ) => {
        return (
            <div
                style={
                    {
                        margin: ".5rem 5rem .5rem 5rem"
                    }
                }
            >
                <SubHeader>{title}</SubHeader>
                <SmallText>{description}</SmallText>                
            </div>
        )
    }

    type CourseWorkProps = {
        courseWork: CourseWorkItemProps[]
    }

    const CourseWork: React.FC<CourseWorkProps> = ( { courseWork } ) => {
        return (
            <div>
                { courseWork.map( (exp, i) =>(
                    <CourseworkItem key={i} title={exp.title} description={exp.description}/>
                ))}
            </div>
        )
    }

    return (
        <div
            style={
                {
                    display: "flex",
                    flexDirection: "column"
                }
            }
        >
            <ResumeHeader>Course Work</ResumeHeader>
            <SubHeader style= {{alignSelf: "center"}}>BACHELOR OF COMPUTER SCIENCE | OREGON STATE UNIVERSITY | GPA: 3.97</SubHeader>
            <CourseWork courseWork={resumeData.courseWork}/>

        </div>

    );
}

export default CourseWork ;
import React from 'react';
import BulletPoints from './bulletPoints';
import SubHeader from './resumeSubHeader';
import ResumeHeader from './resumeHeader';
import { resumeData } from '../data/resume';

const Experience: React.FC = () => {

    type ExperienceItemProps = 
    {
        title: string
        description: string[]
    }



    const ExperienceItem: React.FC<ExperienceItemProps> = ( { title, description } ) => {
        return (
            <div
                style={
                    {
                        margin: ".5rem 5rem .5rem 5rem"
                    }
                }
            >
                <SubHeader>{title}</SubHeader>
                <BulletPoints items={description}/>                
            </div>
        )
    }

    type JobExperienceProps = {
        experience: ExperienceItemProps[]
    }

    const JobExperience: React.FC<JobExperienceProps> = ( { experience } ) => {
        return (
            <div>
                { experience.map( (exp, i) =>(
                    <ExperienceItem title={exp.title} description={exp.description}/>
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
        <ResumeHeader>Experience</ResumeHeader>
        <JobExperience experience={resumeData.experience}/>
    </div>
    )
}

export default Experience;
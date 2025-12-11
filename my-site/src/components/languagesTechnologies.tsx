import React from 'react';
import { resumeData } from "../data/resumeText";
import BulletPoints from './bulletPoints';
import ResumeHeader from './resumeHeader';

const languagesTechnologies: React.FC = () => {

    const floorLength = Math.floor(resumeData.langtech.length / 3);

    let current: number = 0;
    let slices: string[][] = [];
    for (let i = 0; i < 3; i++) {
        if (i < 2) {
            slices.push(resumeData.langtech.slice(current, current+floorLength))
            current += floorLength
        } else {
            slices.push(resumeData.langtech.slice(current))
        }
    };

    type LangTechBulletsProps = {
        bullets: string[][]
    }

    const LangTechBullets: React.FC<LangTechBulletsProps> = ( { bullets} ) => {

        return (
            <div
                style={
                    {
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center", 
                    }
                }
            >
                {bullets.map( (columnItems, i ) => (
                    <BulletPoints key={i} items={columnItems}/>
                ))}
            </div>
        )
    }

    return (
        <div
        style={
            {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                height: "100%",
                margin: "2.5rem 5rem 2.5rem 5rem"
            }
        }
    >
        <ResumeHeader>Languages and Technologies</ResumeHeader>
        <LangTechBullets bullets={slices}/>
    </div>
    )
}

export default languagesTechnologies;
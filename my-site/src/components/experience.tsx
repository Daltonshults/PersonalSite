import React from 'react';
import LargeText from './largeText';
import SmallText from './smallText';
import SubHeader from './resumeSubHeader';

const Experience: React.FC = () => {
    return (
    <div
        style={
            {
                display: "flex",
                flexDirection: "column"
            }
        }
    >
    <LargeText
        style={
            {
                justifySelf: "center",
                alignSelf: "center"
            }
        }
    >Experience</LargeText>
    <SubHeader>Freelance Full-stack Development | January 2025-Present</SubHeader>


    </div>
    )
}

export default Experience;

/*
FREELANCE FULL-STACK DEVELOPMENT | ABSOLUTE WOOD FLOORS| JANUARY 2025 – PRESENT
• Collaborated with clients to collect and understand project requirements and translate them into clear technical
specifications, aligning business needs with development.
• Designed and implemented a full-stack web application using React and Express.
• Provided technical consultation and incorporated client feedback throughout the design process to ensure an
optimal product.
• Conducted competitive analysis to identify industry trends, and to inform strategic development and marketing
decisions.
• Developed a project management system that integrates communication with the client through a weekly review
process improving transparency.
LLM TRAINING SPECIALIST | DATA ANNOTATION TECH | NOVEMBER 2024 – PRESENT
• Debugged and corrected AI-generated code to improve accuracy, functionality, and adherence to best practices.
• Evaluated model outputs and defined explicit and implicit criteria to align responses with the input prompt.
• Assigned performance scores by comparing the two outputs of separate models to fine-tuning them to better match
the desired results.
• Analyzed and compared AI-generated responses to identify strengths, weaknesses, and areas for improvement in
each model.
• Utilized internal tools to provide structured feedback and contribute to iterative model improvements.
CAPSTONE PROJECT | OREGON STATE UNIVERSITY-CASCADES| SEPTEMBER 2023 – JUNE 2024
• Engineered and integrated previously built technologies into a robust Django API.
• Seamlessly interfaced the API with a Flutter mobile application, delivering real-time responses and improving user
experience by working iteratively towards faster loading times.
• Created a high-performance PostgreSQL database using Django’s abstractions, enhancing overall system
performance.
• Monitored the project using an Agile/Scrum methodology, demonstrating a capacity to manage tasks. The team
increased efficiency by utilizing Jira and bi-weekly meetings and delivered a feature-rich initial release candidate.
• Orchestrated a customer-focused project by closely partnering with a critical client representative, aligning project
outcomes with the customer’s specific goals and preferences, and increasing partner satisfaction.
• Architected and incorporated Oauth2 for secure user authentication.
TEACHING ASSISTANT| OREGON STATE UNIVERSITY-CASCADES| APRIL 2024– JUNE 2024
• Assessed and graded student assignments, quizzes, and exams, providing detailed feedback to ensure
understanding of course material.
• Offered instant access help to students on weekends and throughout the week, addressing questions and clarifying
concepts, enhancing overall student support.
• Conducted remote tutoring sessions to assist students with coursework and project work, demonstrating effective
virtual communication and instructional skills.
• Designed comprehensive answer sheets for weekly homework assignments, ensuring clarity and consistency with
course objectives.
• Aided in teaching core topics, including Moore’s Law, hyperthreading, caching issues and false sharing, data and
functional decomposition, SIMD, GPU computing, interoperability, MPI, and high-performance computing operating
an Nvidia DGX-2.
*/
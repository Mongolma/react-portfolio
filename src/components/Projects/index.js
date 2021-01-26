import React from 'react';
import weather from '../../images/weather.svg';
import workout from '../../images/workout.svg';
import burger from '../../images/burger.svg';
import schedule from '../../images/schedule.svg';
import quiz from '../../images/quiz.svg';
import note from '../../images/note.svg';
import {ProjectContainer, ProjectCard, ProjectH1, ProjectImage, ProjectP, ProjectWrapper, ProjectH2} from './ProjectElements';

const Projects = () => {
    return (
        <ProjectContainer id='projects'>
            <ProjectH1> Projects </ProjectH1>
            <ProjectWrapper>
                <a href='https://yigezu1.github.io/world-wide-travel-assistant/' target='_blank'>
                <ProjectCard>
                    <ProjectImage src={weather}/>
                    <ProjectH2>Travel assistant</ProjectH2>
                       <ProjectP>This app is for to see the weather, language, population, currency, holiday for that city</ProjectP>
                </ProjectCard>
                </a>
          
                <a href='https://boiling-headland-62245.herokuapp.com/?id=5fffa9b7f60f5000175e8f1e' target='_blank'>
                <ProjectCard>
                    <ProjectImage src={workout}/>
                    <ProjectH2>Workout tracker</ProjectH2>
                    <ProjectP>This app gives option to create a new workout or continue with their last workout.</ProjectP>
                </ProjectCard>
            
                </a>
                <a href='https://fathomless-coast-95343.herokuapp.com/' target='_blank'>
                <ProjectCard>
                    <ProjectImage src={burger}/>
                    <ProjectH2>Receive order</ProjectH2>
                       <ProjectP>This app can take order and update it's status by clicking devour button. MVC, fullstack</ProjectP>
                </ProjectCard>
                </a>
                <a href='https://mongolma.github.io/work-day-schedule/' target='_blank'>
                <ProjectCard>
                    <ProjectImage src={schedule}/>
                    
                    <ProjectH2>Day scheduler</ProjectH2>
                       <ProjectP>This is a simple calendar application that allows the user to save events for each hour of the day.</ProjectP>
                </ProjectCard>
                </a>
                <a href='https://mongolma.github.io/code_quiz/' target='_blank' area-label='Linkedin'>
                <ProjectCard>
                    <ProjectImage src={quiz}/>
                    <ProjectH2>Code quiz</ProjectH2>
                       <ProjectP>This is a timed code quiz with multiple-choice questions for who learning coding.</ProjectP>
                     </ProjectCard>  
                 </a>
                 <a href='https://khas.herokuapp.com/' target='_blank' >
                <ProjectCard >
                    <ProjectImage src={note} />
                    <ProjectH2>Note taker</ProjectH2>
                       <ProjectP>This is a simple calendar application that allows the user to save events for each hour of the day.</ProjectP>
                </ProjectCard>
                </a>
            </ProjectWrapper>
        </ProjectContainer>
    )
}

export default Projects

// // src/components/Skills.js
// import React, { useContext} from 'react';
// import { icons } from '../../assets/assets'; // Importáld az ikonokat
// import { LanguageContext } from '../../contexts/LanguageContext';

// const Skills = () => {
//   const { translations } = useContext(LanguageContext);
//   return (
//     <section className="skills section-link" id="skills" data-observe>
//       <div className="main-heading">
//         <h2>{translations.skills.headingTitle}</h2>
//         <span>{translations.skills.headingSpan}</span>
//       </div>
//       <div className="skill-container">

//         <div className="card-1 skills-card">
//           <h2>Front-End</h2>
//           <div className="skills-icon-container">

//             <div className="skill-container">
//               <img src={icons.htmlIcon} alt="HTML 5 logo"/>
//               <p>HTML 5</p>
//             </div>

//             <div className="skill-container">
//               <img src={icons.cssIcon} alt="CSS 3 logo"/>
//               <p>CSS 3</p>
//             </div>
//             <div className="skill-container">
//               <img src={icons.jsIcon} alt="Javascript logo"/>
//               <p>Javascript</p>
//             </div>
//             <div className="skill-container">
//               <img src={icons.sassIcon} alt="Sass logo"/>
//               <p>Sass</p>
//             </div>
//             <div className="skill-container">
//               <img src={icons.reactIcon} alt="React logo"/>
//               <p>React</p>
//             </div>

//             <div className="skill-container">
//               <img src={icons.bootstrapIcon} alt="Bootstrap logo"/>
//               <p>Bootstrap</p>
//             </div>
//           </div>
//         </div>

//         <div className="card-2 skills-card">
//           <h2>Back-End</h2>
//           <div className="skills-icon-container">
//             <div className="skill-container">
//               <img src={icons.nodejsIcon} alt="Nodejs logo"/>
//               <p>Node js</p>
//             </div>

//             <div className="skill-container">
//               <img src={icons.pythonIcon} alt="Python logo"/>
//               <p>Python</p>
//             </div>
//             <div className="skill-container">
//               <img src={icons.expressIcon} alt="Express logo"/>
//               <p>Express</p>
//             </div>
//             <div className="skill-container">
//               <img src={icons.djangoIcon} alt="Django logo"/>
//               <p>Django</p>
//             </div>
//           </div>
//         </div>

//         <div className="card-3 skills-card">
//           <h2>Adatbázisok</h2>
//           <div className="skills-icon-container">
//             <div className="skill-container">
//               <img src={icons.mssqlIcon} alt="MsSql logo"/>
//               <p>MsSql</p>
//             </div>

//             <div className="skill-container">
//               <img src={icons.mysqlIcon} alt="MySql logo "/>
//               <p>Mysql</p>
//             </div>
//             <div className="skill-container">
//               <img src={icons.mongodbIcon} alt="MongoDb logo"/>
//               <p>MongoDb</p>
//             </div>
//           </div>
//         </div>

//         <div className="card-4 skills-card">
//           <h2>Egyéb</h2>
//           <div className="skills-icon-container">
//             <div className="skill-container">
//               <img src={icons.gitIcon} alt="Git logo"/>
//               <p>Git</p>
//             </div>

//             <div className="skill-container">
//               <img src={icons.githubIcon} alt="Github logo"/>
//               <p>Github</p>
//             </div>
//             <div className="skill-container">
//               <img src={icons.figmaIcon} alt="Figma logo"/>
//               <p>Figma</p>
//             </div>

//             <div className="skill-container">
//               <img src={icons.vscodeIcon} alt="Vs Code logo"/>
//               <p>VsCode</p>
//             </div>
//             <div className="skill-container">
//               <img src={icons.linuxIcon} alt="Linux logo"/>
//               <p>Linux</p>
//             </div>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }

// export default Skills;


import React, { useContext } from 'react';
import { icons } from '../../assets/assets'; // Importáld az ikonokat
import { LanguageContext } from '../../contexts/LanguageContext';

const Skills = () => {
  const { translations } = useContext(LanguageContext);
  return (
    <section className="skills section-link" id="skills" data-observe>
      <div className="main-heading">
        <h2>{translations.skills.headingTitle}</h2>
        <span>{translations.skills.headingSpan}</span>
      </div>
      <div className="skill-container">

        <div className="card-1 skills-card">
          <h2>{translations.skills.frontEndTitle}</h2>
          <div className="skills-icon-container">
            {translations.skills.frontEndSkills.map((skill) => (
              <div key={skill.name} className="skill-container">
                <img src={icons[skill.icon]} alt={`${skill.name} logo`} />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="card-2 skills-card">
          <h2>{translations.skills.backEndTitle}</h2>
          <div className="skills-icon-container">
            {translations.skills.backEndSkills.map((skill) => (
              <div key={skill.name} className="skill-container">
                <img src={icons[skill.icon]} alt={`${skill.name} logo`} />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="card-3 skills-card">
          <h2>{translations.skills.databaseTitle}</h2>
          <div className="skills-icon-container">
            {translations.skills.databaseSkills.map((skill) => (
              <div key={skill.name} className="skill-container">
                <img src={icons[skill.icon]} alt={`${skill.name} logo`} />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="card-4 skills-card">
          <h2>{translations.skills.otherTitle}</h2>
          <div className="skills-icon-container">
            {translations.skills.otherSkills.map((skill) => (
              <div key={skill.name} className="skill-container">
                <img src={icons[skill.icon]} alt={`${skill.name} logo`} />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Skills;

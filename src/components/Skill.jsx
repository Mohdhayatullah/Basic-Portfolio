import './Skill.css'



const Skill = () => {
    return (
        <>
        <div className="sheader">
            <h2>My Skills</h2>
            <h4>I have Strong intrested in following technologies</h4>
        </div>
        <div className="skill">
            <div className="card card1">
                <h3>Coding Skill/Progrmming</h3>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Java</li>
                    <li>Cpp</li>
                </ul>
            </div>
            <div className="card card2">
                <h3>Framework/Libraries</h3>
                <ul>
                    <li>React</li>
                    <li>Spring Boot</li>
                    <li>Tailwind</li>
                    <li>Bootstrap</li>
                    <li>Spring Framework</li>
                </ul>
            </div>
            <div className="card card3">
                <h3>Databases</h3>
                <ul>
                    <li>MySQL</li>
                    <li>PostgreSQL</li>
                    <li>MongoDB</li>
                </ul>
            </div>
            <div className="card card4">
                <h3>Tools</h3>
                <ul>
                    <li>Intellj</li>
                    <li>Postman</li>
                    <li>Docker</li>
                    <li>Swagger</li>
                    <li>Git</li>
                    <li>Jenkins</li>
                </ul>
            </div>
        </div>
        </>
    )
}

export default Skill;
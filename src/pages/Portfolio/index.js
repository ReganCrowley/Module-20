import "./portfolio.css"
import Image1 from "../../assets/Note_Taker.jpg"
import Image2 from "../../assets/Password_Generator.jpg"
import Image3 from "../../assets/Portfolio.jpg"
import Image4 from "../../assets/Weather_API.jpg"
import Image5 from "../../assets/Pokemon_Quiz.jpg"
import Image6 from "../../assets/README_Generator.jpg"


export default function () {
  return (
    <div>
      <h1>Portfolio</h1>
      <div className="portfolio">
        <ImageTile image={Image1} projectName="Project 1" deployedLink="https://regancrowley.github.io/Work-Day-Scheduler/" githubLink="https://github.com" />
        <ImageTile image={Image2} projectName="Project 2" deployedLink="https://regancrowley.github.io/password-generator/" githubLink="https://github.com" />
        <ImageTile image={Image3} projectName="Project 3" deployedLink="https://regancrowley.github.io/Modules/" githubLink="https://github.com" />
        <ImageTile image={Image4} projectName="Project 4" deployedLink="https://regancrowley.github.io/Weather-API/" githubLink="https://github.com" />
        <ImageTile image={Image5} projectName="Project 5" deployedLink="https://regancrowley.github.io/Code-Quiz/Index.html" githubLink="https://github.com" />
        <ImageTile image={Image6} projectName="Project 6" deployedLink="https://github.com/ReganCrowley/potential-enigma-main/deployments/github-pages" githubLink="https://github.com" />
      </div>
    </div>
  )
}

export function ImageTile({ image, projectName, githubLink, deployedLink }) {
  return (
    <div className="imageTile" style={{ backgroundImage: 'url(' + image + ')' }}>

      <a style={{ float: "left", marginLeft: "20px" }} target="_blank" href={deployedLink}>
        <h2>{projectName}</h2>
      </a>
      <a target="_blank" href={githubLink} style={{ marginLeft: "20px", position: "absolute", marginTop: "15px" }}>
        <img src="/github.png" style={{ height: "40px", width: "40px" }} alt="github icon" />
      </a>
    </div>
  )
}
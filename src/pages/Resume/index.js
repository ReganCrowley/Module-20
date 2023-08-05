import "./resume.css"

export default function () {

  // Function will execute on click of button
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('CROWLEY Regan_Resume 2023.pdf').then(response => {
      response.blob().then(blob => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'CROWLEY Regan_Resume 2023.pdf';
        alink.click();
      })
    })
  }

  return (
    <div>
      <h1>Resume</h1>
      <div style={{ marginLeft: "40px" }}>
        <h2 class="resume_h2" title="Click to download resume" onClick={onButtonClick}>Download my resume</h2>
        <h2> Front-end skills</h2>
        <ul class="skills">
          <li>HTML</li>
          <li>CSS</li>
          <li>Java</li>
          <li>Javas Script</li>

        </ul>
        <h2> Back-end skills</h2>
        <ul class="skills">
          <li>Javascript</li>
          <li>Java</li>
          <li>c++</li>
          <li>c#</li>
          <li>PHP</li>

        </ul>
      </div>
    </div>
  )
}
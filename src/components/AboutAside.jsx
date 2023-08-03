import React from 'react'
import { Download } from '@mui/icons-material'

function AboutAside() {
    const downloadFile = () => {
        fetch('Filip Ratkovic CV.pdf').then(response => {
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Filip Ratkovic CV.pdf';
                alink.click();
            })
        })
    }
  return (
    <aside className="side-icons">
      <p>⸻</p>
          <a
            target="_blank"
            title="Linkedin"
            href="https://www.linkedin.com/in/filip-ratkovic-067a96233/"
            rel="noreferrer"
          >
            <img
              src="https://img.icons8.com/color/48/null/linkedin-2--v1.png"
              alt="linkedin logo"
            />
          </a>

          <a
            target="_blank"
            title="Github"
            href="https://github.com/filip-ratkovic"
            rel="noreferrer"
          >
            <img
              src="https://img.icons8.com/ios-glyphs/30/null/github.png"
              alt="github logo"
            />
          </a>
          <a
            title="Download my CV"
            onClick={downloadFile}
            style={{cursor:'pointer'}}
          >
           <img src="https://img.icons8.com/ios/50/download--v1.png"
           alt='download cv'
           />
          </a>
          <p>⸻</p>

        </aside>
  )
}

export default AboutAside
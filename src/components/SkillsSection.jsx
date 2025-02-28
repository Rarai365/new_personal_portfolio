const SkillsSection = () => {
  return (
    <>
      <section id="skills" className="skills-section">
        <center>
          <p className="skills-text">Skills</p>
        </center>
        <div className="skills-container">
          <table className="skills-table">
            <tbody>
              <tr>
                <td>
                  <i
                    className="fa-brands fa-html5"
                    style={{ color: "blue" }}
                  ></i>
                  <p>HTML</p>
                </td>
                <td>
                  <i
                    className="fa-brands fa-css3-alt"
                    style={{ color: "rgb(225, 15, 33)" }}
                  ></i>
                  <p>CSS</p>
                </td>
                <td>
                  <i
                    className="fa-brands fa-js"
                    style={{ color: "rgb(158, 158, 107)" }}
                  ></i>
                  <p>JS</p>
                </td>
              </tr>
              <tr>
                <td>
                  <i className="fa-brands fa-square-github"></i>
                  <p>GitHub</p>
                </td>
                <td>
                  <i
                    className="fa-brands fa-figma"
                    style={{ color: "violet" }}
                  ></i>
                  <p>Figma</p>
                </td>
                <td>
                  <i
                    className="fa-brands fa-react"
                    style={{ color: "rgb(19, 218, 240)" }}
                  ></i>
                  <p>React</p>
                </td>
              </tr>
              <tr>
                <td>
                  <i
                    className="fa-brands fa-node-js"
                    style={{ color: "green" }}
                  ></i>
                  <p>Node JS</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default SkillsSection;

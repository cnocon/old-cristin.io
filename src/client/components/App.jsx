import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
        <table><tbody>
          <tr>
            <td colspan="3" rowspan="1"><p className="title">Cristin O&rsquo;Connor</p></td>
          </tr>

          <tr>
            <td className="contact" colspan="3" rowspan="1">
              <ul>
                <li><a href="mailto:her@cristin.io"><i className="fa fa-envelope"></i>  her@cristin.io</a></li>
                <li><a href="https://cristin.io" target="_blank"><i className="fa fa-globe"></i>  cristin.io</a></li>
                <li><a href="https://github.com/cnocon" target="_blank"><i className="fa fa-github"></i>  Github</a></li>
                <li><a href="https://twitter.com/cnocon" target="_blank"><i className="fa fa-twitter"></i>  @cnocon</a></li>
                <li><a href="https://codepen.io/cnocon" target="_blank"><i className="fa fa-codepen"></i>  Codepen</a></li>
                <li><a href="https://www.linkedin.com/in/cristinoconnor" target="_blank"><i className="fa fa-linkedin-square"></i>  LinkedIn</a></li>
              </ul>
            </td>
          </tr>

          <tr>
            <td colspan="1" rowspan="1">
              <h1 className="heading">EXPERIENCE</h1>

              <h2>
                <span>NCSA</span>
                <span className="position"> &bull; Software Engineer</span>
              </h2>
              <h3 className="date">Oct. 2015 - Sept. 2017 | <span>Chicago, IL</span></h3>
              <p>Served as both a Software Engineer and as a UI team member. Created, maintained, and expanded functionality in multiple applications, including Rails, Backbone, and NodeJS with React. Developed a standardized git workflow adopted by the engineering team and helped write API documentation for the Node/React application.</p>
              <ul className="awards">
                <li><i className="fa fa-trophy"></i>&nbsp;&nbsp;&nbsp;Teammate of the Sprint (x2)</li>
              </ul>


              <h2>
                <span>DialogTech</span>
                <span className="position"> &bull; Front-End Engineer</span>
              </h2>
              <h3 className="date">July 2014 - Oct. 2015 | <span>Chicago, IL</span></h3>
              <p>Maintained and extended SourceTrak, a &nbsp;Backbone application for call routing and tracking. The position required extensive work with event handling in Backbone, heavy coding in vanilla Javascript (ES5), and proficiency in Underscore and Handlebars.</p>


              <h2>
                <span>Blueye Creative</span>
                <span className="position"> &bull; Rails Developer</span>
              </h2>
              <h3 className="date">April 2014 - July 2014 | <span>Chicago, IL</span></h3>
              <p>Worked on existing Rails applications for clients and created a new tennis racket database for Wilson, including writing a Ruby script &nbsp;to normalize inconsistent data stored in Excel spreadsheets before creating new records.</p>


              <h2>
                <span>University of Notre Dame</span>
                <span className="position"> &bull; Web Support Developer</span>
              </h2>
              <h3 className="date">May 2011 - Jan. 2014 | <span>Notre Dame, IN</span></h3>
              <p>Served as the sole support developer for ~400 websites living in our homegrown Rails-based CMS. Trained clients in using the CMS and optimize their websites for accessibility and search rankings. Intermittently handled mobile-first, responsive site builds for new projects consisting of custom and template-based designs.</p>
              <ul className="awards">
                <li><i className="fa fa-trophy"></i>&nbsp;&nbsp;&nbsp;Employee of the Quarter, Winter 2013</li>
                <li><i className="fa fa-trophy"></i>&nbsp;&nbsp;&nbsp;Presidential Team Irish Award</li>
              </ul>


              <h2>
                <span>University of Notre Dame</span>
                <span className="position"> &bull; Teaching Assistant</span>
              </h2>
              <h3 className="date">Jan. 2011 - May 2011 | <span>Notre Dame, IN</span></h3>
              <p>Served as a teaching assistant in an Introduction to Web Development course covering HTML, CSS, Javascript, wireframing, and responsive design.</p>


              <h2>
                <span>Web Developer and Designer</span>
                <span className="position"> &bull; Freelance</span>
              </h2>
              <h3 className="date">Jan. 2010 - June 2011 | <span>South Bend, IN</span></h3>
              <p>Set up WordPress sites for clients, including customizations in PHP, CSS, and Javascript as needed. Offered consulting on design and SEO.</p>

              <h1 className="heading">EDUCATION</h1>

              <h2>
                <span>Dev Bootcamp</span>
                <span className="position"> &bull; Graduate</span>
              </h2>
              <h3 className="date">Jan. 2014 - April 2014 | <span>Chicago, IL</span></h3>
              <p>Basic training for Rails software development.</p>


              <h2>
                <span>University of Notre Dame</span>
                <span className="position"> &bull; B.A. Sociology, Computer Applications</span>
              </h2>
              <h3 className="date">Aug. 2006 - May 2011 | <span>Notre Dame, IN</span></h3>
              <ul className="awards">
                <li><i className="fa fa-trophy"></i>&nbsp;&nbsp;&nbsp;Summa Cum Laude</li>
                <li><i className="fa fa-trophy"></i>&nbsp;&nbsp;&nbsp;Phi Beta Kappa Honor Society</li>
                <li><i className="fa fa-trophy"></i>&nbsp;&nbsp;&nbsp;Alpha Kappa Delta International Sociology Honor Society</li>
              </ul>

              <h1 className="heading">RECENT COURSEWORK</h1>

              <h2><span>Learn and Understand NodeJS</span>, Anthony Alicea (via Udemy)</h2>
              <h3 className="date">Dec. 2017</h3>
              <p>Dive deep under the hood of NodeJS. Learn V8, Express, the MEAN stack, core Javascript concepts, and more.</p>


              <h2><span>Modern React with Redux</span>, Stephen Grider (via Udemy)</h2>
              <h3 className="date">Dec 2017</h3>
              <p>Master the fundamentals of React and Redux with this tutorial as you develop apps with React Router, Webpack, and ES6.</p>


              <h2><span>React: Make Stunning React Websites</span>, Packt Publishing</h2>
              <h3 className="date">Nov. 2017</h3>
              <p>This course covers the practical skills needed to make great interface components that incorporate other web development tools, such as Bootstrap, SASS, and hot reloading. It will then show you how to ingest your data and display it on the web using a variety of techniques, such as charts and grids.</p>
            </td>

            <td className="aside" colspan="1" rowspan="1">
              <h1 className="heading">SKILLS</h1>
              <ul>
                <li>Git</li>
                <li>Javascript (ES5, ES6)</li>
                <li>Backbone</li>
                <li>React</li>
                <li>Node</li>
                <li>Redux</li>
                <li>React Router</li>
                <li>Ruby</li>
                <li>Rails 4+</li>
                <li>RSpec</li>
                <li>Sass/Less/CSS/HTML</li>
                <li>Responsive Web Design</li>
                <li>Agile Project Management</li>
              </ul>
            </td>
          </tr>
        </tbody></table>
    );
  }
}

export default App;

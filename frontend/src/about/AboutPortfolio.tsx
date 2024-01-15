import about_home from "../assets/about-home.jpeg";
import about_desktop from "../assets/about-desktop.jpeg";
import about_mobile from "../assets/about-mobile.jpeg";

function AboutPortfolio(): JSX.Element {
  return (
    <div
      className="col vh-100 container pt-3 p-5 justify-content-center"
      style={{ maxWidth: "1320px" }}
    >
      <span className="text-center">
        <h2>Portfolio Website</h2>
        <h5 className="text-dark text-opacity-75">
          A Project to Showcase My Favourite Projects
        </h5>
        <hr />
      </span>
      <p>
        I had been wanting to write and host my own landing page at{" "}
        <code>subzeero.dev</code> for a while when I thought of the idea to
        construct a portfolio-style site to showcase my projects. I decided I
        would build upon my JavaScript, React, and MySQL experience from my
        full-stack web development class by developing a React-based site in
        TypeScript with Bootstrap and a Express.js backend with a PostgreSQL
        database. I would use Docker in both development and deployment, and
        Traefik would be used as a reverse proxy in deployment.
      </p>
      <p>
        I worked on getting the landing page functional first. I designed a
        simplistic page in React with some nice icons from the Bootstrap Icons
        project. Next, I set up a simple table in PostgreSQL to store the
        creation date and a count of visits. Then, I created an API route to{" "}
        <code>/count</code> which increments the visit count in the database and
        return the new value. This API call is made at component load-time with
        axios and the result is nicely displayed. If the API cannot be reached,
        or the request fails, the message is simply hidden.
      </p>
      <img
        src={about_home}
        alt="VolunteerConnect Homepage"
        className="img-fluid rounded mx-auto d-block w-75 mb-3 border border-1 border-secondary-subtle"
      ></img>
      <p>
        Next, I got to work on actual project portfolio portion of the site. I
        envisioned a horizontal navigation bar that responsibly resized into a
        top navigation bar on mobile devices. This part took lots of tinkering
        around until I got it working as intended. Then I begin working on some
        design options and layouts for each page.
      </p>
      <div className="row align-items-center">
        <div className="col-8">
          <img
            src={about_desktop}
            alt="Homepage"
            className="img-fluid rounded mx-auto d-block mb-3 border border-1 border-secondary-subtle"
          ></img>
        </div>
        <div className="col-4">
          <img
            src={about_mobile}
            alt="Homepage"
            className="img-fluid rounded mx-auto d-block mb-3 border border-1 border-secondary-subtle"
          ></img>
        </div>
      </div>
      <p>
        After completing this initial design, I got to work with Docker. I had a
        simple development environment working, but I wanted to get it ready to
        deploy for production. I also wanted a single Docker image that could
        either serve the frontend or the backend, instead of needing separate
        images for both. I decided I would set some environment variables to
        describe the desired behaviour for the container and have a bash script
        execute the appropriate actions. <code>docker-setup.bash</code> first
        checks the environment to see where it should load files from: when
        developing it utilizes a local bind mount, and when deploying it uses
        files built into the image. Then, after installing all necessary
        packages, the script runs the appropriate <code>npm</code> commands to
        either start the development server or the production deployment.
      </p>
      <p>While working on this project, I...</p>
      <ul>
        <li>
          Got my first experience working with TypeScript. While the structure
          of this project was quite simple and didn't use any props or other
          more complicated features of React, I can definitely see the value of
          having a statically typed language to help catch simple mistakes.
        </li>
        <li>
          Built a React App for deployment and successfully deployed it. My
          previous experience with React had not ever gone past using the simple
          development server which is not meant for a production deployment.
        </li>
        <li>
          Branched out with a double-use Docker image and using a Bash script to
          initialize its start up. I had previously only had images that only
          served a single purpose. I also had not used any custom script to
          define the start up behaviour of the container.
        </li>
        <li>
          Got some more experience with Bootstrap. While Bootstrap is still
          quite new to me, I feel that I am slowly getting more comfortable with
          the seemingly ending amount of customization options.
        </li>
        <li>
          Setup a Traefik route for a service that I created myself. It was a
          special feeling when I visited my domain to see something that I
          worked on instead of many of the open source applications I host.
        </li>
      </ul>
      <br />
    </div>
  );
}

export default AboutPortfolio;

import vc_home from "../assets/vc-home.jpeg";
import vc_data from "../assets/vc-data.jpeg";
import vc_profile from "../assets/vc-profile.jpeg";
import vc_posts from "../assets/vc-posts.jpeg";

function AboutVC(): JSX.Element {
  return (
    <div
      className="col vh-100 container pt-3 p-5 justify-content-center"
      style={{ maxWidth: "1320px" }}
    >
      <span className="text-center">
        <h2>VolunteerConnect</h2>
        <h5 className="text-dark text-opacity-75">
          A Group Project from CMPT-370: Intermediate Software Engineering
        </h5>
        <hr />
      </span>
      <span>
        <p>
          In CMPT-370: Intermediate Software Engineering, our class was broken
          down into group of six students and each group was tasked with
          engineering a software project for a local stakeholder. My group
          reached out to the University of Saskatchewan Students' Union (USSU)
          and their Vice President served as our stakeholder. We worked with him
          to design a platform to assist the USSU with finding student
          volunteers for their various events through campus.
        </p>
        <img
          src={vc_home}
          alt="VolunteerConnect Homepage"
          className="img-fluid rounded mx-auto d-block w-75 mb-3 border border-1 border-secondary-subtle"
        ></img>
        <p>
          We designed VolunteerConnect with the MERN Stack in mind: our group's
          design research found that the MERN Stack was a good fit for our use
          cases as a Web App. The Stack uses MongoDB as the database, Express.js
          as the backend web framework, React as the frontend web framework, and
          Node.js as the runtime environment. As such, the project is written in
          JavaScript. Docker is utilized as the primary method of deployment.
        </p>
        <p>
          My initial role in the design and development of this project was
          involved with the database. I designed the Database Collections used
          to store all of the platform's information:
          <ul>
            <li>
              Students: personal and contact information, account email &
              password (hashed & salted), array of all IDs of submitted
              applications
            </li>
            <li>
              Organizations: corporate and contact information, account email &
              password (hashed & salted), array of all IDs of submitted
              volunteer postings
            </li>
            <li>
              (Volunteer) Postings: author ID, description & info, associated
              tags, array of all IDs of submitted applications
            </li>
            <li>
              Applications: author ID, posting ID, student submitted content
            </li>
            <li>
              Comments: author ID, target ID, timestamp, user submitted content
            </li>
          </ul>
          I also designed a Database wrapper to help simply and lock down usage
          of the MongoDB database among my group members. I only allowed access
          to get, set, new, and delete operations (basic CRUD operations), in
          which I dynamically validated arguments and ran checks to ensure
          correct usage and prevent misuse.
        </p>
        <p>
          VolunteerConnect follows the Model-View-Controller (MVC) design
          pattern. The database acts as the Model and stores the state of the
          platform's interactions. The React frontend presents the View and
          coordinates with the Express backend for all actions. The Express
          backend serves as the Controller and connects the React frontend to
          the MongoDB backend.
        </p>
        <img
          src={vc_data}
          alt="MongoDB Setup"
          className="img-fluid rounded mx-auto d-block w-75 mb-3 border border-1 border-secondary-subtle"
        ></img>
        <p>
          The platform has a distinct division between the student side and the
          organization side, and both have separate account types. Organizations
          can create postings and students can directly apply to these postings.
        </p>
        <img
          src={vc_profile}
          alt="VolunteerConnect Profile"
          className="img-fluid rounded mx-auto d-block w-75 mb-3 border border-1 border-secondary-subtle"
        ></img>
        <p>
          Both organizations and students also have profiles that others can
          leave comments on.
        </p>
        <img
          src={vc_posts}
          alt="VolunteerConnect Posts"
          className="img-fluid rounded mx-auto d-block w-75 mb-3 border border-1 border-secondary-subtle"
        ></img>
        <p>
          Overall, this project was my first introduction into team-based
          software development. Some of the most important things I learned
          during this process were:
          <ul>
            <li>
              Ensure everyone is on the same page about EVERYTHING. Our team
              often faced issues simply because each had different ideas about
              some core concept. Near our first deliverable, we each had
              distinct platforms of code that did not work together. This was
              quite the challenge to unify and could have easily been avoided
              had we made sure of each member's intentions.
            </li>
            <li>
              Following from above, documentation is a very important task that
              cannot be pushed out of the way. It counts as part of each
              feature, and a feature cannot be complete without it. If something
              is unclear, it needs to be documented so it IS clear to other team
              members.
            </li>
            <li>
              Communication is a key aspect of working together with other
              developers. Everyone should be comfortable reaching out to other
              members. Group projects are often large and require more than a
              single person to develop and maintain (within a given time frame).
              There is going to be a lot of code that you, yourself, did not
              write. You need to be able to reach out to the author if you don't
              understand it. And, you don't want to start working the same
              feature that someone else started last week.
            </li>
          </ul>
        </p>
        <br />
      </span>
    </div>
  );
}

export default AboutVC;

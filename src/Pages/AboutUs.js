import "./aboutUs.css";
import SearchIcon from "@mui/icons-material/Search";

const AboutUs = () => {
  return (
    <div className="about_us_main-container">
      <div className="about_us_topbar">
        <h2>About Us</h2>
        <div className="about_us_searchbar">
          <input type="search" placeholder="Search at blog" />
          <SearchIcon id="about_us_search_icon" />
        </div>
      </div>
      <hr />

      <div className="about_us_content">
        <div className="about_us_main_heading">
          <h3>
            We’re building great learning tools for every students on the World.
          </h3>
        </div>

        <div className="about_us_sub_heading">
          <h4>Our Mission</h4>
        </div>
        <div className="about_us_para">
          <p>
            We believe learning is more powerful when it’s a shared experience —
            connecting with others learning the same thing. OPLAS.CO.TZ is a
            place where everyone can share knowledge in any subject, at any
            level and gain confidence as a learner. All the content in OPLAS is
            created by our experts and 95% share what they create or study.
          </p>
        </div>

        <div className="about_us_sub_heading">
          <h4>We build tools everyone can use.</h4>
        </div>
        <div className="about_us_para">
          <p>
            The best study tools should work for any curriculum, any level user,
            any teacher or student, anywhere in the world. We listen obsessively
            to our users, reading thousands of suggestion emails a week and
            doing everything we can to improve OPLAS. Our engineers visit
            application regularly, and everyone on the OPLAS team talks to
            students and teachers to see OPLAS in action. We work hard to make
            everything easy and engaging because we believe learning only
            happens if people want to make the time, learning needs to be fun.
            We works with private candidates, QT candidates and school
            candidates to ask a questions for preparation of Exams and students
            instructors pass their certifications. We’ve had users start with us
            as high school students, then go on to become teachers and bring
            OPLAS back to their students. We’re here for lifelong education.
          </p>
        </div>

        <div className="about_us_sub_heading">
          <h4>We’re just getting started.</h4>
        </div>
        <div className="about_us_para">
          <p>
            Our tools are designed for the digital age, not just replacing paper
            predecessors (Testament, matching games, etc), but using the best of
            new mobile and audio technologies to create new kinds of learning
            tools. And beyond tools for practice and recall, we’ve also added
            tools that focus on longer term learning and mastery for every level
            learner.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

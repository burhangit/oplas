import "./advertise.css";
import SearchIcon from "@mui/icons-material/Search";

function Advertise() {
  return (
    <>
      <div className="advertise_main_container">
        <div className="advertise_topbar">
          <h2>Advertise</h2>
          <div className="advertise_searchbar">
            <input type="search" placeholder="Search at blog" />
            <SearchIcon id="advertise_search_icon" />
          </div>
        </div>

        <hr />

        <div className="advertise_content">
          <div className="advertise__front_desc_para">
            <p>
              Do you offer any product or service that will interest Tanzanians?
              Then www.oplas.co.tz is a very good avenue to spread word about
              your business.
              <br />
              <br /> 1. About 80% new visitors monthly (your advent will be
              displayed to over 80% of new potential customers every months).
              <br /> 2. Over 85% visits from Google (your advent will be seen by
              a new audience every day not by repeat readers who will mostly
              ignore it)
            </p>
          </div>
          <div className="audience_profile">
            <h2>Audience Profile</h2>
            <p>
              Most of readers are Tanzanians, East Africans, West Africans,
              Asians, Europeans and United Kingdom Nations who landed on this
              platform after searching Google for various pieces of Valuable
              Information. Because most visits are from search engine 85% of our
              visitors are new visitors. So, if a set of visitors see your
              advent this month, another new set of visitor will see it next
              month-which means more exposure for your advent.
            </p>
          </div>

          <div className="advert_slot_opt">
            <h2>Advert Slot Option</h2>
            <strong>
              1.Header 300×100 (mobile view) and 650X100 (desktop view) Banner.
            </strong>

            <strong>2. Right and Left Sidebar 300×300 Banner.</strong>

            <strong>3.Text link ads at the bottom of all posts. </strong>

            <strong>4.Sponsored Post</strong>
          </div>

          <div className="advertise_form">
            <div className="adv_form_heading">
              <h5>
                For advertising opportunities with us, please fill out the form
                below.
              </h5>

              <form action="">
                <div className="adv_form_fields">
                  <div className="adv_form_col1_fields">
                    <label htmlFor="fname">First Name</label>
                    <input type="text" />
                    <label htmlFor="phone">Phone</label>
                    <input type="number" />
                  </div>

                  <div className="adv_form_col2_fields">
                    <label htmlFor="lname">Last Name</label>
                    <input type="text" />
                    <label htmlFor="text">Subjects</label>
                    <input type="text" />
                  </div>
                </div>
                <div className="messege_and_submit">
                  <label htmlFor="messege">Your messege</label>
                  <textarea />
                  <button type="submit">Send</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Advertise;

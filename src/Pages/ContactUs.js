import "./contactUs.css";
import SearchIcon from "@mui/icons-material/Search";
import { MdLocationOn } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";

function ContactUs() {
  return (
    <>
      <div className="contact_main_container w-100">
        <div className="contact_topbar">
          <h2>Contact</h2>
          <div className="contact_searchbar">
            <input type="search" placeholder="Search at blog" />
            <SearchIcon id="contact_search_icon" />
          </div>
        </div>
        <hr />

        <div className="contact_cards">
          <div className="contact_cards_row1">
            <div className="contact_card">
              <h2>HEAD OFFICE – ZANZIBAR.</h2>
              <div className="location">
                <MdLocationOn color="#e05d30" />
                <span>
                  P.o.box 1457 Zanzibar, Tanzania. Mikunguni Street, Urban West.
                </span>
              </div>
              <div className="mobile">
                <IoMdCall color="#e05d30" />
                <span>0778-212-089</span>
              </div>
              <div className="email">
                <MdEmail color="#e05d30" />
                <span>support@oplas.co.tz</span>
              </div>
            </div>

            <div className="contact_card">
              <h2>HEAD OFFICE – ZANZIBAR.</h2>
              <div className="location">
                <MdLocationOn color="#e05d30" />
                <span>
                  P.o.box 1457 Zanzibar, Tanzania. Mikunguni Street, Urban West.
                </span>
              </div>
              <div className="mobile">
                <IoMdCall color="#e05d30" />
                <span>0778-212-089</span>
              </div>
              <div className="email">
                <MdEmail color="#e05d30" />
                <span>support@oplas.co.tz</span>
              </div>
            </div>
          </div>

          <div className="contact_cards_row2">
            <div className="contact_card">
              <h2>HEAD OFFICE – ZANZIBAR.</h2>
              <div className="location">
                <MdLocationOn color="#e05d30" />
                <span>
                  P.o.box 1457 Zanzibar, Tanzania. Mikunguni Street, Urban West.
                </span>
              </div>
              <div className="mobile">
                <IoMdCall color="#e05d30" />
                <span>0778-212-089</span>
              </div>
              <div className="email">
                <MdEmail color="#e05d30" />
                <span>support@oplas.co.tz</span>
              </div>
            </div>

            <div className="contact_card">
              <h2>HEAD OFFICE – ZANZIBAR.</h2>
              <div className="location">
                <MdLocationOn color="#e05d30" />
                <span>
                  P.o.box 1457 Zanzibar, Tanzania. Mikunguni Street, Urban West.
                </span>
              </div>
              <div className="mobile">
                <IoMdCall color="#e05d30" />
                <span>0778-212-089</span>
              </div>
              <div className="email">
                <MdEmail color="#e05d30" />
                <span>support@oplas.co.tz</span>
              </div>
            </div>
          </div>
        </div>

        {/******* form  *********/}

        <div className="contact_form">
          <div className="contact_form_heading">
            <h5>For any query , Please contact us!</h5>

            <form action="">
              <div className="contact_form_fields">
                <div className="contact_form_col1_fields">
                  <label htmlFor="fname">First Name</label>
                  <input type="text" />
                  <label htmlFor="phone">Phone</label>
                  <input type="number" />
                </div>

                <div className="contact_form_col2_fields">
                  <label htmlFor="lname">Last Name</label>
                  <input type="text" />
                  <label htmlFor="text">Subjects</label>
                  <input type="text" />
                </div>
              </div>
              <div className="contact_messege_and_submit">
                <label htmlFor="messege">Your messege</label>
                <textarea />
                <button type="submit">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;

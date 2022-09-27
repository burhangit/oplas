import "./footer.css";
import React from "react";

export const Footer = () => {
  return (
    <div className="footer_main_container">
      <div id="footer">
        <div className="footer_about_us">
          <h2>ABOUT US</h2>
          <p>
            We believe learning is more powerful when it’s a shared experience —
            connecting with others learning the same thing. OPLAS.CO.TZ is a
            place where everyone can share knowledge in any subject, at any
            level and gain confidence as a learner.
          </p>
          <div className="contact_details">
            <span>Address:</span>
            <span>P.o.box 1457 Zanzibar, Tanzania.</span>
            <span>Support :</span>
            <span>Telephone No : 0778-212-089</span>
            <span>Email Support : support@oplas.co.tz</span>
          </div>
        </div>

        <div className="footer_que_bank">
          <h2>QUESTION BANK</h2>
          <ul>
            <li>
              <span className="footer_icon">&raquo;</span> Notes
            </li>
            <li>
              <span className="footer_icon">&raquo;</span> Classes
            </li>
            <li>
              <span className="footer_icon">&raquo;</span> Graduation
            </li>
            <li>
              <span className="footer_icon">&raquo;</span> Post Graduation
            </li>
            <li>
              <span className="footer_icon">&raquo;</span> Question By Level
            </li>
          </ul>
        </div>

        <div className="footer_quick_links">
          <h2>QUICK LINKS</h2>
          <ul>
            <li>
              <span className="footer_icon">&raquo;</span> Notes
            </li>
            <li>
              <span className="footer_icon">&raquo;</span> Classes
            </li>
            <li>
              <span className="footer_icon">&raquo;</span> Graduation
            </li>
            <li>
              <span className="footer_icon">&raquo;</span> Post Graduation
            </li>
            <li>
              <span className="footer_icon">&raquo;</span> Question By Level
            </li>
          </ul>
        </div>

        <div className="facebookpagelive">
          <h2>FACEBOOK LIVE</h2>
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Foplastz%2F&amp;tabs=timeline&amp;width=340&amp;height=500&amp;small_header=true&amp;adapt_container_width=true&amp;hide_cover=false&amp;show_facepile=true&amp;appId"
            width="340"
            height="350"
            // style="border:none"
            // overflow="hidden"
            // scrolling="no"
            // frameborder="0"
            // allowfullscreen="true"
            // allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>
      <div className="footer_bottom">
        <hr id="footer_bottom_hr" />
        <p>©2022 Oplas Answer Inc. All rights reserved.</p>
      </div>
    </div>
  );
};

import React from "react";
import "./Footer.css";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <div className="footer_outer_container">
      <div className="footer_socials">
        <ul>
          <li>
            <FacebookOutlinedIcon />
          </li>
          <li>
            <InstagramIcon />
          </li>
          <li>
            <YouTubeIcon />
          </li>
        </ul>
      </div>

      <div className="footer_links">
        <div className="footer_category social_category">
          <p>Audio Description</p>
          <p>Investor Relations</p>
        </div>
        <div className="footer_category">
          <p>Help Center</p>
          <p>Jobs</p>
        </div>
        <div className="footer_category">
          <p>Gift Cards</p>
          <p>Terms of Use</p>
        </div>
        <div className="footer_category">
          <p>Media Center</p>
          <p>Privacy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import cn from "./contact.module.css";
import instagram from "../../assets/icons/instagram.png";
import phoneIcon from "../../assets/icons/phone.png";

const Contact = () => {
  return (
    <div className={cn.blockContact}>
      <h2 className={cn.titleContact}>Contact</h2>

      <div className={cn.blockContactData}>
        {/* Phone */}
        <div className={`${cn.contactBlock} ${cn.blockPhone}`}>
          <h3 className={cn.contactHeading}>Phone</h3>
          <a className={cn.contactText} href="tel:+499999999999">
            +49 999 999 99 99
          </a>
        </div>
        <div className={`${cn.contactBlock} ${cn.blockSocials}`}>
          <h3 className={cn.contactHeading}>Socials</h3>
          <div className={cn.socialIcons}>
            <img src={phoneIcon} alt="Phone" />
            <img src={instagram} alt="Instagram" />
          </div>
        </div>
        <div className={`${cn.contactBlock} ${cn.blockAddress}`}>
          <h3 className={cn.contactHeading}>Address</h3>
          <address className={cn.contactText}>
            Linkstraße 2, 8 OG, 10 785, Berlin, Deutschland
          </address>
        </div>
        <div className={`${cn.contactBlock} ${cn.blockWorkingHours}`}>
          <h3 className={cn.contactHeading}>Working Hours</h3>
          <p className={cn.contactText}>24 hours a day</p>
        </div>
        <div className={cn.contactBlock} style={{ gridColumn: "1 / -1" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d9712.309979807802!2d13.372646209566591!3d52.51393660961058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1zTGlua3N0cmHDn2XCoDIsIDjCoE9HLCAxMOKArzc4NSwgQmVybGluLCBEZXV0c2NobGFuZA!5e0!3m2!1sru!2spl!4v1755720777454!5m2!1sru!2spl"
            className={cn.navigatorMap}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;

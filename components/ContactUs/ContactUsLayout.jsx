import React from "react";
import ContactUsRightPart from "./ContactUsRightPart";
import ContactUsImg from "./ContactUsImg";

const ContactUsLayout = () => {
  return (
    <div className="grid grid-cols-2 gap-5">
      <div className="pr-10">
        <ContactUsRightPart></ContactUsRightPart>
      </div>
      <div>
        <ContactUsImg></ContactUsImg>
      </div>
    </div>
  );
};

export default ContactUsLayout;

import Link from "next/link";
// import { useRouter } from "next/navigation";
import React from "react";
import AgreementBox from "../components/AgreementBox";

const agreementData = [
    {
      id: 1,
      title: "Definitions",
      content:
        "NON-DISCLOSURE AGREEMENT\nThis Non-Disclosure Agreement (\"Agreement\") is entered into as of October 10, 2024, by and between:\nDisclosing party\nIngoude Company 123 Anywhere St. Any City 12345\nReceiving party\nLarana Inc. 123 Anywhere St. Any City 12345\n1. Definitions \nConfidential Information: Any financial reports, technical data, customer lists, or proprietary processes related to Ingoude Company's software development projects. \nPermitted Purpose: To evaluate a potential partnership between Ingoude Company and Larana Inc. for developing new software solutions. \n2. Obligations of the Receiving Party \nThe Receiving Party agrees to:\n Keep all technical data and customer lists confidential. \nUse such information solely to evaluate the potential partnership. \nTake reasonable steps to prevent unauthorized disclosure.  \n3. Exclusions from Confidentiality \nThe Receiving Party’s obligations shall not apply to any information that: \nBecomes publicly available through no fault of Larana Inc.;\n Is obtained from a third party without obligation of confidentiality; \nIs independently developed by Larana Inc. without reference to the Confidential Information;\nIs required to be disclosed under applicable law.  \n4. Return or Destruction of Materials Upon termination of this Agreement, Larana Inc. will return or destroy all data provided by Ingoude Company.  ",
    },
    {
      id: 2,
      title: "Obligations of the Receiving Party",
      content:
        "The Receiving Party agrees to: Keep all technical data and customer lists confidential. Use such information solely to evaluate the potential partnership. Take reasonable steps to prevent unauthorized disclosure.",
    },
    {
      id: 3,
      title: "Exclusions from Confidentiality",
      content:
        "The Receiving Party’s obligations shall not apply to any information that: Becomes publicly available through no fault of Larana Inc.; Is obtained from a third party without obligation of confidentiality; Is independently developed by Larana Inc. without reference to the Confidential Information; Is required to be disclosed under applicable law.",
    },
    {
      id: 4,
      title: "Return or Destruction of Materials",
      content:
        "NON-DISCLOSURE AGREEMENT\nThis Non-Disclosure Agreement (\"Agreement\") is entered into as of October 10, 2024, by and between:\nDisclosing party\nIngoude Company 123 Anywhere St. Any City 12345\nReceiving party\nLarana Inc. 123 Anywhere St. Any City 12345\n1. Definitions \nConfidential Information: Any financial reports, technical data, customer lists, or proprietary processes related to Ingoude Company's software development projects. \nPermitted Purpose: To evaluate a potential partnership between Ingoude Company and Larana Inc. for developing new software solutions. \n2. Obligations of the Receiving Party \nThe Receiving Party agrees to:\n Keep all technical data and customer lists confidential. \nUse such information solely to evaluate the potential partnership. \nTake reasonable steps to prevent unauthorized disclosure.  \n3. Exclusions from Confidentiality \nThe Receiving Party’s obligations shall not apply to any information that: \nBecomes publicly available through no fault of Larana Inc.;\n Is obtained from a third party without obligation of confidentiality; \nIs independently developed by Larana Inc. without reference to the Confidential Information;\nIs required to be disclosed under applicable law.  \n4. Return or Destruction of Materials Upon termination of this Agreement, Larana Inc. will return or destroy all data provided by Ingoude Company.  ",
    },
    {
      id: 5,
      title: "Term",
      content:
        "NON-DISCLOSURE AGREEMENT\nThis Non-Disclosure Agreement (\"Agreement\") is entered into as of October 10, 2024, by and between:\nDisclosing party\nIngoude Company 123 Anywhere St. Any City 12345\nReceiving party\nLarana Inc. 123 Anywhere St. Any City 12345\n1. Definitions \nConfidential Information: Any financial reports, technical data, customer lists, or proprietary processes related to Ingoude Company's software development projects. \nPermitted Purpose: To evaluate a potential partnership between Ingoude Company and Larana Inc. for developing new software solutions. \n2. Obligations of the Receiving Party \nThe Receiving Party agrees to:\n Keep all technical data and customer lists confidential. \nUse such information solely to evaluate the potential partnership. \nTake reasonable steps to prevent unauthorized disclosure.  \n3. Exclusions from Confidentiality \nThe Receiving Party’s obligations shall not apply to any information that: \nBecomes publicly available through no fault of Larana Inc.;\n Is obtained from a third party without obligation of confidentiality; \nIs independently developed by Larana Inc. without reference to the Confidential Information;\nIs required to be disclosed under applicable law.  \n4. Return or Destruction of Materials Upon termination of this Agreement, Larana Inc. will return or destroy all data provided by Ingoude Company.  ",
    },
    {
      id: 6,
      title: "No License",
      content:
        "NON-DISCLOSURE AGREEMENT\nThis Non-Disclosure Agreement (\"Agreement\") is entered into as of October 10, 2024, by and between:\nDisclosing party\nIngoude Company 123 Anywhere St. Any City 12345\nReceiving party\nLarana Inc. 123 Anywhere St. Any City 12345\n1. Definitions \nConfidential Information: Any financial reports, technical data, customer lists, or proprietary processes related to Ingoude Company's software development projects. \nPermitted Purpose: To evaluate a potential partnership between Ingoude Company and Larana Inc. for developing new software solutions. \n2. Obligations of the Receiving Party \nThe Receiving Party agrees to:\n Keep all technical data and customer lists confidential. \nUse such information solely to evaluate the potential partnership. \nTake reasonable steps to prevent unauthorized disclosure.  \n3. Exclusions from Confidentiality \nThe Receiving Party’s obligations shall not apply to any information that: \nBecomes publicly available through no fault of Larana Inc.;\n Is obtained from a third party without obligation of confidentiality; \nIs independently developed by Larana Inc. without reference to the Confidential Information;\nIs required to be disclosed under applicable law.  \n4. Return or Destruction of Materials Upon termination of this Agreement, Larana Inc. will return or destroy all data provided by Ingoude Company.  ",
    },
  ];

const AgreementTemplate = () => {
 
    return (
      <div className="w-full flex flex-col items-center py-8">
        <h2 className="text-[#EAFBFF] text-[16px] md:text-[24px] text-center lg:text-[28px] font-semibold">
          Choose a template that works for you
        </h2>
        <h4 className="text-[#EAFBFF] text-[12px] md:text-[16px] font-light mt-2 mb-4 text-center">
          Pick a template and customize it to suit your preferences.
        </h4>
  
        {/* Agreement Content (6 Boxes) */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {Object.entries(agreementData).map(([index, { id,title, content }]) => (
            console.log(id),
          <AgreementBox id={id} title={title} content={content}/>
          ))}
        </div>
      </div>
    );
  };

export default AgreementTemplate;

import React, { useState } from "react";
import saheb from "../../../../assets/Saheb.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";
export const Slide1 = () => {
  const English =
    "Sant kabir is acknowledged above all in every aspect. Moreover, a revolutionary thinker, to eradicate casteism nepotism,favouritism, bribery and superstitious belief from society his each verse ,couplet and words are like a panacea. Future more, his teaching is excellent to synthesize people like a yarn beads and guide us to raise above creed and sects.";
  const Nepali =
    "संत कबीरलाई प्रतिस्थानमा सर्वथा मान्यता प्राप्त छ। उनको अलावा, एक क्रान्तिकारी विचारक, जो समाजबाट जातिवाद, नेपोटिजम, प्राथमिकता, घूस, र अंधविश्वासबाट मुक्ति प्राप्त गर्नका लागि उनको प्रत्येक छन्नो, दोहा र शब्दहरू एक चमत्कारको रूपमा छन्। भविष्यमा थप, उनको शिक्षा व्यक्तिहरूलाई सूत्र ओढेर बुन्न र मानवता र धर्मसंस्कृति भन्दा माथि उठाउन हुन्छ।";
  const [toggle, setToggle] = useState(true);
  return (
    <div className="sm:h-screen lg:w-full lg:flex justify-evenly bg-gradient-to-b from from-amber-300 to-purple-400 pt-16">
      <img src={saheb} alt="Saheb" className="p-2 lg:w-1/3" />
      <div className="list-none p-2 lg:w-1/2 flex flex-col justify-between items-center ">
        <span className="text-3xl text-transparent bg-clip-text bg-gradient-to-br from-white to-blue-300 p-2 pt-10 lg:w-4/5 text-center leading-normal">
          {toggle ? Nepali : English}
        </span>
        <span>
          <button
            onClick={() => {
              setToggle(!toggle);
            }}
            className="p-1 text-xl text-blue-600"
          >
            <FontAwesomeIcon icon={faLanguage} className="px-2"/>
            {!toggle ? "नेपाली" : "English"}
          </button>
        </span>
      </div>
    </div>
  );
};

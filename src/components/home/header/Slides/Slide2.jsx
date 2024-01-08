import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import guru from "../../../../assets/Saheb2.jpg"

function Slide2() {
    const English =
    "A great austere, his holiness sadguru sant shran saheb, left his birth place in childhood,then he marched ahead for spiritual quest. In that contest he had travelled so many places of india and mingled with various religious sects and crred. Final he was initiated in the lineage of sadguru kabir saheb tradition ,the great revolutionary saint. Thus, in order to pass the light of spirituality he himself established this pure, pious and sacred land.";
  const Nepali =
    "एक महान तपस्या व्रती, सदगुरु संत श्रांत साहेबले बचपनमा आफ्नो जन्मस्थानलाई छोडेका थिए, र त्यसपछि उनी आध्यात्मिक खोजका लागि अगाडि बढेका थिए। उस प्रतियोगितामा उनी भारतका धेरै स्थानहरूमा यात्रा गरेका थिए र विभिन्न धार्मिक सम्प्रदायहरूसँग आफ्नोबारे मिलेका थिए। अन्ततः, उनलाई सदगुरु कबीर साहेबको परंपरामा दीक्षा लिइएका थिए, महान क्रान्तिकारी संत। यसप्रकार, आध्यात्मिक प्रकाश पारित गर्नका लागि उनले आफ्नो यो पवित्र, पवित्र, र शुद्ध भूमि स्थापना गरेका थिए।";
  const [toggle, setToggle] = useState(true);
  return (
    <div className="sm:h-screen lg:w-full lg:flex justify-evenly bg-gradient-to-b from from-amber-300 to-purple-400 pt-16">
      <img src={guru} alt="Saheb" className="p-2 lg:w-1/3" />
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
  )
}

export default Slide2
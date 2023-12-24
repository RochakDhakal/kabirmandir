import React, { useState } from "react";
import saheb from "../../../assets/Saheb.jpg";
export const Info = () => {
  const English =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam incidunt obcaecati est neque, debitis corporis vel quidem soluta modi, consectetur tenetur? Veritatis non nesciunt tenetur labore quaerat aut quasi officiis vitae eveniet necessitatibus fuga et officia earum, aperiam consequuntur hic suscipit atque tempora? Incidunt iste doloribus voluptates est vitae maxime illo! Saepe, illo delectus aliquid voluptatum a ad quibusdam illum repudiandae in sunt sapiente natus consequuntur fugiat. Asperiores, nulla optio voluptatum nesciunt delectus cum a quas deleniti quisquam ea esse odio, voluptates veritatis natus neque fugit maxime pariatur repellat? Esse eligendi quas necessitatibus excepturi magnam quis accusamus maiores nihil. Architecto eius corporis, laborum mollitia quae, vel in minus modi tempore impedit labore, expedita voluptatibus recusandae consectetur! Commodi quae, maiores enim obcaecati itaque labore at quam cumque ex voluptatem, in cupiditate debitis molestiae aut unde deleniti est tempore natus aperiam fuga, libero architecto accusamus id?";
  const Nepali =
    "नेपाली लोरेम इप्सम पाठ यहाँ छ। यो पाठ अनुवाद गरिएको हो र यसले कुनै विशेष अर्थ प्रतिपन्न गरेको छैन। यो मात्र टेक्स्ट डमी हो जुन लेखिएको छ भने अरु रूपमा प्रयोग गर्नुहोस्। यसले कुनै भाषामा पढ़िएको लेख जसले मानिसहरूलाई छुने भन्दा बढि व्यापक भाषा सीखाउँछ। नेपाली लोरेम इप्सम पाठ यहाँ छ। यो पाठ अनुवाद गरिएको हो र यसले कुनै विशेष अर्थ प्रतिपन्न गरेको छैन। यो मात्र टेक्स्ट डमी हो जुन लेखिएको छ भने अरु रूपमा प्रयोग गर्नुहोस्। यसले कुनै भाषामा पढ़िएको लेख जसले मानिसहरूलाई छुने भन्दा बढि व्यापक भाषा सीखाउँछ।  नेपाली लोरेम इप्सम पाठ यहाँ छ। यो पाठ अनुवाद गरिएको हो र यसले कुनै विशेष अर्थ प्रतिपन्न गरेको छैन। यो मात्र टेक्स्ट डमी हो जुन लेखिएको छ भने अरु रूपमा प्रयोग गर्नुहोस्। यसले कुनै भाषामा पढ़िएको लेख जसले मानिसहरूलाई छुने भन्दा बढि व्यापक भाषा सीखाउँछ। नेपाली लोरेम इप्सम पाठ यहाँ छ। यो पाठ अनुवाद गरिएको हो र यसले कुनै विशेष अर्थ प्रतिपन्न गरेको छैन। यो मात्र टेक्स्ट डमी हो जुन लेखिएको छ भने अरु रूपमा प्रयोग गर्नुहोस्। यसले कुनै भाषामा पढ़िएको लेख जसले मानिसहरूलाई छुने भन्दा बढि व्यापक भाषा सीखाउँछ। नेपाली लोरेम इप्सम पाठ यहाँ छ। यो पाठ अनुवाद गरिएको हो र यसले कुनै विशेष अर्थ प्रतिपन्न गरेको छैन। यो मात्र टेक्स्ट डमी हो जुन लेखिएको छ भने अरु रूपमा प्रयोग गर्नुहोस्। यसले कुनै भाषामा पढ़िएको लेख जसले मानिसहरूलाई छुने भन्दा बढि व्यापक भाषा सीखाउँछ।";
  const [toggle, setToggle] = useState(true);
  return (
    <div className="sm:h-screen lg:w-full lg:flex justify-evenly bg-gradient-to-b from from-amber-300 to-purple-400 pt-16">
      <img src={saheb} alt="Saheb" className="p-2 lg:w-1/3" />
      <div className="list-none p-2 lg:w-1/2 flex flex-col justify-evenly items-center ">
        <span className="text-xl p-2 lg:w-4/5">
          {toggle ? Nepali : English}
        </span>
        <span>
          <button
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            {toggle ? "नेपाली" : "English"}
          </button>
        </span>
      </div>
    </div>
  );
};

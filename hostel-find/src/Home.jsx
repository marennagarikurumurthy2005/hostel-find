import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Trybutton from "./components/Trybutton";
import "./home.css";
import Navbtn from "./components/Navbtn";
import Sidebar from "./Sidebar.jsx";
import Footer from "./components/Footer.jsx";

const Home = () => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);
  const [sample, setSample] = useState("Crops");

  const contentVariants = {
    expanded: {
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
    collapsed: {
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20,
      },
    },
  };

  return (
    <div className="flex h-screen  overflow-hidden bg-white w-[100%]">
      <div className="min-h-screen">
        <Sidebar type="nav" onExpandChange={setIsSidebarExpanded} />
      </div>

      <motion.main
        className={`flex-1 overflow-y-auto ${
          isSidebarExpanded ? "blur-sm" : "blur-none"
        }`}
        variants={contentVariants}
        initial="collapsed"
        animate={isSidebarExpanded ? "expanded" : "collapsed"}
      >
        <div className="container mx-auto px-4 py-8 md:px-8 lg:px-12">
          <motion.div
            initial="initial"
            animate="animate"
            variants={textVariants}
          ></motion.div>

          <motion.div
            className="max-w-4xl mx-auto mt-12 md:mt-36 flex flex-col gap-6 items-center text-center  md:gap-8"
            initial="initial"
            animate="animate"
            variants={textVariants}
          >
            <motion.div className="heading" variants={textVariants}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium font-sans">
                Introducing HostelFind AI
              </h1>
            </motion.div>

            <motion.div className="button" variants={textVariants}>
              <Trybutton />
            </motion.div>

            <motion.div
              className="prose prose-lg max-w-3xl w-full mt-12"
              variants={textVariants}
            >
              <div className="flex flex-col gap-3 font-serif text-sm md:text-base lg:text-lg text-start">
                <motion.p className="leading-relaxed" variants={textVariants}>
                  HostelFind AI is an intelligent AI chatbot designed to assist students and working professionals in finding the right hostels. This chatbot is specifically created to interact conversationally, providing expert guidance on hostel availability, pricing, facilities, location, and safety. The conversational format allows users to ask follow-up questions, clarify their doubts, and receive personalized hostel recommendations tailored to their needs.
                </motion.p>
              </div>
            </motion.div>
            <motion.div className="heading" variants={textVariants}>
              <h1 className="text-xl md:text-2xl lg:text-3xl font-medium font-sans">
                Samples
              </h1>
            </motion.div>
            <motion.div
              className="prose prose-lg max-w-3xl w-full"
              variants={textVariants}
            >
              <div className="flex flex-col gap-3 font-serif text-sm md:text-base lg:text-lg text-start mt-8">
                <motion.p
                  className="leading-relaxed w-[100%] md:ml-0 flex flex-row items-center justify-start md:justify-center gap-5 md:gap-12  overflow-scroll"
                  variants={textVariants}
                >
                  {[
                      "Hostels",
                      "Languages",
                      "Facilities",
                      "Booking",
                      "Safety",
                    ].map((items, index) => (
                    <div key={index} onClick={() => setSample(items)}>
                      <button
                        className={`font-sans ${
                          sample === items ? "bg-gray-300" : "bg-gray-100"
                        }
                          hover:bg-gray-300 p-2 pl-5 pr-5 rounded-3xl text-sm cursor-pointer text-nowrap`}
                      >
                        {items}
                      </button>
                    </div>
                  ))}
                </motion.p>
                {sample == "Crops" ? (
                  <motion.p
                    className="leading-relaxed font-sans text-sm mt-5"
                    variants={textVariants}
                  >
                    <div className="p-6 bg-gray-100 rounded-xl">
                      <p className="text-gray-500 font-medium">User</p>
                      <p className="mt-2 ">
                         What are the best hostels to stay in Hyderabad for students near colleges?
                      </p>
                    </div>
                    <div className="p-8 bg-green-50 rounded-xl mt-2">
                      <p className="text-gray-500 font-medium">HostelFind Ai</p>
                      <p className="mt-2 ">
                        In Hyderabad, the best hostels for students and professionals are those located near major colleges and IT hubs such as Ameerpet, Madhapur, Kondapur, and Gachibowli. These areas offer affordable options with facilities like Wi-Fi, study rooms, nutritious food, and 24/7 security. For students, hostels near Osmania University, JNTU, and other educational institutions are ideal. Always check for reviews, visit the hostel personally if possible, and prefer hostels with transparent pricing and proper maintenance. 🏨
                      </p>
                    </div>
                    <div className="p-6 bg-gray-100 rounded-xl mt-5">
                      <p className="text-gray-500 font-medium">User</p>
                      <p className="mt-2 ">
                        Can you help me with software programming for my
                        computer?
                      </p>
                    </div>
                    <div className="p-8 bg-green-50 rounded-xl mt-2">
                      <p className="text-gray-500 font-medium">Hostel Find Ai</p>
                      <p className="mt-2 ">
                        ❌ Sorry! I am specialized in hostel search and accommodation guidance. Kindly please ask questions related to hostels, facilities, bookings, safety, or travel accommodations. 🏨
                      </p>
                    </div>
                  </motion.p>
                ) : sample == "Languages" ? (
                  <motion.p
                    className="leading-relaxed font-sans text-sm mt-5"
                    variants={textVariants}
                  >
                    <div className="p-6 bg-gray-100 rounded-xl">
                      <p className="text-gray-500 font-medium">User</p>
                      <p className="mt-2 ">
                       ఈ సీజన్‌లో నా ప్రాంతంలో ఏ హాస్టల్స్ బుక్ చేయడం మంచిదని సూచిస్తారు?
                      </p>
                    </div>
                    <div className="p-8 bg-green-50 rounded-xl mt-2">
                      <p className="text-gray-500 font-medium">HostelFind AI</p>
                      <p className="mt-2 ">
                        హైదరాబాద్‌లో బెస్ట్ స్టూడెంట్ మరియు ట్రావెలర్ హాస్టల్స్:

అమీరేపేట్, మాధాపూర్, కొండాపూర్, గచ్చిబౌలీ ప్రాంతాల హాస్టల్స్ – విద్యార్థులకు మరియు యువ ప్రొఫెషనల్స్‌కి సౌకర్యవంతమైన ఎంపికలు.

సౌకర్యాలు: Wi-Fi, స్టడీ రూమ్‌లు, భోజనం, 24/7 సెక్యూరిటీ.

విద్యార్థులు: ఉస్మానియా యూనివర్శిటీ, JNTU వంటి విద్యాసంస్థలకు దగ్గరగా ఉండే హాస్టల్స్ ఉత్తమం.

సలహాలు: రివ్యూలు చదవడం, హాస్టల్‌ను వ్యక్తిగతంగా చూడడం, సక్రమమైన ధరలతో మరియు నాణ్యమైన సౌకర్యాలతో హాస్టల్స్‌ని ఎంచుకోవడం.

చివరి సూచన: మీ ప్రాంతంలోని హాస్టల్స్ పై సమీక్షలు మరియు రేటింగ్స్‌ను పరిశీలించండి, సురక్షితమైన మరియు సౌకర్యవంతమైన హాస్టల్స్‌ను ఎంచుకోవడం ద్వారా మంచి స్టే అనుభవాన్ని పొందవచ్చు. 🏨✨
                      </p>
                    </div>
                    <div className="p-6 bg-gray-100 rounded-xl mt-5">
                      <p className="text-gray-500 font-medium">User</p>
                      <p className="mt-2 ">
                        घर पर सुरक्षित और स्वच्छ हॉस्टल कैसे खोजें और चुनें? 
                      </p>
                    </div>
                    <div className="p-8 bg-green-50 rounded-xl mt-2">
                      <p className="text-gray-500 font-medium">HostelFind AI</p>
                      <p className="mt-2 ">
                       घर पर सुरक्षित और स्वच्छ हॉस्टल खोजने के आसान तरीके:

रीव्यू और रेटिंग्स देखें: पहले से रहने वाले छात्रों और यात्रियों के अनुभव पढ़ें ताकि हॉस्टल की विश्वसनीयता और साफ-सफाई का पता चले।

सुविधाओं की जाँच करें: Wi-Fi, स्टडी रूम, भोजन, लॉन्ड्री और सुरक्षा जैसी सुविधाओं की पुष्टि करें।

स्थान का मूल्यांकन करें: कॉलेज, विश्वविद्यालय या कार्यस्थल के पास हॉस्टल चुनें ताकि यात्रा आसान और सुरक्षित हो।

सुरक्षा और स्वच्छता: हॉस्टल में 24/7 सुरक्षा, क्लीनींग और अच्छे मेंटेनेंस की जांच करें।

बजट के अनुसार विकल्प: अपने बजट के अनुसार हॉस्टल की तुलना करें और उचित किराए वाले हॉस्टल को प्राथमिकता दें।

बुकिंग प्रक्रिया: ऑनलाइन बुकिंग की उपलब्धता, अग्रिम बुकिंग विकल्प और रिफंड नीति की जानकारी लें।

समीक्षा और प्रतिक्रिया: हॉस्टल में रहने के बाद अपनी प्रतिक्रिया दें ताकि भविष्य के उपयोगकर्ताओं को मदद मिल सके।

सुझाव: इन चरणों का पालन करके आप सुरक्षित, आरामदायक और बजट-फ्रेंडली हॉस्टल चुन सकते हैं।
                      </p>
                    </div>
                  </motion.p>
                ) : sample == "Pesticides" ? (
                  <motion.p
                    className="leading-relaxed font-sans text-sm mt-5"
                    variants={textVariants}
                  >
                    <div className="p-6 bg-gray-100 rounded-xl">
                      <p className="text-gray-500 font-medium">User</p>
                      <p className="mt-2 ">
                        Which hostels are recommended for students or travelers seeking safe and hygienic stays?
                      </p>
                    </div>
                    <div className="p-8 bg-green-50 rounded-xl mt-2">
                      <p className="text-gray-500 font-medium">FarmlyAi</p>
                      <p className="mt-2 ">
                        For finding safe and comfortable hostels, you can follow these tips:

Check reviews and ratings: Read feedback from previous students and travelers to ensure reliability and cleanliness.

Look for essential facilities: Wi-Fi, study rooms, meals, laundry, and 24/7 security are important.

Choose location wisely: Pick hostels near colleges, universities, or workplaces for convenience.

Safety and hygiene: Verify proper cleaning, maintenance, and security measures.

Budget-friendly options: Compare hostels based on rent and amenities to find cost-effective choices.

Booking tips: Use online booking, check cancellation policies, and confirm availability.

Community and peer feedback: Engage with hostel communities or forums to get insider tips.

Timing and visits: If possible, visit the hostel in person before finalizing to ensure everything is as expected.
                      </p>
                    </div>
                    <div className="p-6 bg-gray-100 rounded-xl mt-5">
                      <p className="text-gray-500 font-medium">User</p>
                      <p className="mt-2 ">
                        How can I ensure a hostel is safe, clean, and comfortable before booking?
                      </p>
                    </div>
                    <div className="p-8 bg-green-50 rounded-xl mt-2">
                      <p className="text-gray-500 font-medium">HostelFind Ai</p>
                      <p className="mt-2 ">
                        To ensure a safe and comfortable hostel stay:

Check online reviews and ratings: Learn from previous students’ or travelers’ experiences to identify reliable hostels.

Look for essential facilities: Wi-Fi, study rooms, clean meals, laundry, and 24/7 security.

Verify hygiene and cleanliness: Inspect rooms, bathrooms, and common areas, or confirm with staff before booking.

Safety measures: Check for proper security, CCTV, and hostel rules.

Compare options: Evaluate hostels based on location, price, and amenities.

Book wisely: Use trusted booking platforms, confirm availability, and check cancellation policies.

Community feedback: Talk to current tenants if possible to get firsthand insights.

Regular checks: Even after moving in, monitor cleanliness and facilities to ensure a consistent safe experience.
                      </p>
                    </div>
                  </motion.p>
                ) : sample == "Irrigation" ? (
                  <motion.p
                    className="leading-relaxed font-sans text-sm mt-5"
                    variants={textVariants}
                  >
                    <div className="p-6 bg-gray-100 rounded-xl">
                      <p className="text-gray-500 font-medium">User</p>
                      <p className="mt-2 ">
                       What is the best way to manage hostel bookings efficiently and save costs?
                      </p>
                    </div>
                    <div className="p-8 bg-green-50 rounded-xl mt-2">
                      <p className="text-gray-500 font-medium">HostelFind AI</p>
                      <p className="mt-2 ">
                        Efficient hostel booking and management tips:

Use online platforms: Book hostels via trusted websites or apps to compare prices and availability.

Direct communication: Contact hostels directly to confirm rates, facilities, and discounts.

Plan in advance: Early bookings often secure better rates and preferred rooms.

Check for package deals: Some hostels offer monthly or semester-long discounts for students.

Compare amenities: Evaluate Wi-Fi, meals, laundry, and security services before booking.

Stay flexible: If possible, choose refundable or flexible booking options to save costs.

Track reviews and ratings: Regularly check hostel reviews for updated feedback.

Optimize location: Pick hostels near colleges, workplaces, or transport hubs to reduce commute and save time.
                      </p>
                    </div>
                    <div className="p-6 bg-gray-100 rounded-xl mt-5">
                      <p className="text-gray-500 font-medium">User</p>
                      <p className="mt-2 ">
                        How often should I check in or renew my hostel booking during my stay?
                      </p>
                    </div>
                    <div className="p-8 bg-green-50 rounded-xl mt-2">
                      <p className="text-gray-500 font-medium">FarmlyAi</p>
                      <p className="mt-2 ">
                        Hostel check-in and stay schedule tips:

Arrival / Initial check-in: Inspect the hostel, verify facilities, and settle in comfortably.

Weekly room checks: Ensure cleanliness, Wi-Fi, meals, and security are maintained regularly.

Monthly review: Evaluate hostel conditions, amenities, and any maintenance needs.

Mid-stay feedback: Provide feedback to the hostel staff or management if any issues arise.

Before renewal / departure: Confirm any next-month booking or extension plans and check pricing/availability.

Total schedule: Regular monitoring ensures a comfortable and safe stay throughout.
                      </p>
                    </div>
                  </motion.p>
                ) : (
                  <motion.p
                    className="leading-relaxed font-sans text-sm mt-5"
                    variants={textVariants}
                  >
                    <div className="p-6 bg-gray-100 rounded-xl">
                      <p className="text-gray-500 font-medium">User</p>
                      <p className="mt-2 ">
                        How can I improve my hostel stay experience naturally without spending extra money?
                      </p>
                    </div>
                    <div className="p-8 bg-green-50 rounded-xl mt-2">
                      <p className="text-gray-500 font-medium">HostelFind Ai</p>
                      <p className="mt-2 ">
                        Natural ways to improve your hostel stay experience:

Keep your space organized: Maintain cleanliness in your room and common areas to create a comfortable environment.

Build good habits with roommates: Communicate effectively, share chores, and respect shared spaces.

Use hostel resources wisely: Utilize study rooms, kitchen, and other amenities responsibly.

Engage with the community: Participate in hostel events or forums to enhance your stay experience.

Plan your routine: Manage your schedule for meals, laundry, and study to avoid conflicts.

Seek feedback: Talk to hostel staff or management for improvements and report issues promptly.

Maintain personal hygiene: Regularly clean your belongings and living space.

Respect hostel rules: Following rules ensures a safe, friendly, and harmonious environment.
                      </p>
                    </div>
                    <div className="p-6 bg-gray-100 rounded-xl mt-5">
                      <p className="text-gray-500 font-medium">User</p>
                      <p className="mt-2 ">
                       What are the signs that a hostel is poorly maintained or not safe?
                      </p>
                    </div>
                    <div className="p-8 bg-green-50 rounded-xl mt-2">
                      <p className="text-gray-500 font-medium">HostelFind AI</p>
                      <p className="mt-2 ">
                       Common signs that a hostel may be poorly maintained or unsafe:

Cleanliness issues: Dirty rooms, bathrooms, or common areas.

Damaged or missing facilities: Broken furniture, non-functioning Wi-Fi, or inadequate lighting.

Safety concerns: Poor security measures, malfunctioning locks, or lack of 24/7 supervision.

Noise and disturbances: Excessive noise from neighbors or nearby areas affecting comfort.

Unhygienic food or kitchen areas: Poorly maintained meal services or shared kitchens.

Lack of maintenance: Leaks, pests, or neglected repairs in rooms and common areas.

Inconsistent utilities: Irregular water, electricity, or heating supply.

Feedback from peers: Negative reviews or complaints from current/past tenants indicate potential issues.
                      </p>
                    </div>
                  </motion.p>
                )}

                <motion.div className="heading" variants={textVariants}>
                  <h1 className="text-xl md:text-2xl lg:text-3xl font-medium font-sans mt-5">
                    Limitations
                  </h1>
                </motion.div>
                <motion.p
                  className="leading-relaxed font-sans"
                  variants={textVariants}
                >
                  <ul className="list-disc flex flex-col gap-5 px-8 py-2">
                    <li>
                   Sensitivity to phrasing: HostelFind AI is sensitive to how accommodation questions are phrased. For example, a direct query like "Which hostels are near Osmania University?" works well, but a differently worded question such as "Where can I stay close to my college?" might sometimes be misinterpreted or rejected.
                    </li>
                    <li>
                     Verbose responses: The model can be repetitive, restating its role as a hostel guide or overusing safety disclaimers, due to biases in the underlying API responses and limited fine-tuning for hostel-specific contexts.
                    </li>
                    <li>
                      Clarifying ambiguous queries: Ideally, the system would ask follow-up questions when users provide vague queries about their preferences, budget, or stay duration. Instead, HostelFind AI may give general advice that doesn’t fully address specific location or budget needs.
                    </li>
                    <li>
                      False positives: Although designed to filter non-hostel topics, HostelFind AI may occasionally misclassify questions that include hostel-related keywords but focus on unrelated domains (e.g., "hostel-style data rooms"). This can result in unnecessary rejections.
                    </li>
                    <li>
                     No permanent chat history: HostelFind AI does not retain previous conversation history. Each session exists independently, limiting continuity and personalized accommodation recommendations based on past interactions.
                    </li>
                    <li>
                      API dependency: Since the tool relies on the Gemini API, downtime, rate limits, or API changes can directly impact availability and performance for users seeking urgent hostel guidance.
                    </li>
                    <li>
                      Lack of real-time local data: The AI may not have access to real-time information about hostel vacancies, pricing changes, or nearby events, which are crucial for providing accurate and timely accommodation advice.
                    </li>
                  </ul>
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        </div>
        <div>
          <Footer />
        </div>
      </motion.main>
    </div>
  );
};

export default Home;

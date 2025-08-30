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
            className="max-w-4xl mx-auto mt-8 flex flex-col gap-6 items-center text-center md:gap-8"
            initial="initial"
            animate="animate"
            variants={textVariants}
          >
            <motion.div className="heading" variants={textVariants}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium font-sans">
                Introducing FarmlyAi
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
                  FarmlyAi is an intelligent AI chatbot designed to assist farmers
                  with agricultural guidance and farming practices. This chatbot
                  is specifically created to interact conversationally,
                  providing expert advice on crop management, pest control,
                  fertilizers, irrigation, and various farming techniques. The
                  conversational format allows farmers to ask follow-up
                  questions, clarify their doubts, and receive personalized
                  agricultural recommendations.
                </motion.p>

                <motion.p className="leading-relaxed" variants={textVariants}>
                  This chatbot is built using the Gemini API, enabling it to
                  understand and respond to a wide range of queries related to
                  modern farming practices, traditional agriculture methods, and
                  sustainable farming techniques. We believe this tool can be a
                  valuable resource for farmers, agricultural students, and
                  farming communities looking to improve their crop yields and
                  farming strategies. We are eager to gather feedback from the
                  farming community to enhance its performance and address
                  specific agricultural needs.
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
                    "Crops",
                    "Languages",
                    "Pesticides",
                    "Irrigation",
                    "Soil Health",
                  ].map((items, index) => (
                    <div key={index} onClick={() => setSample(items)}>
                      <button
                        className={`font-sans ${
                          sample === items ? "bg-gray-300" : "bg-gray-100"
                        }
                          hover:bg-gray-300 p-2 pl-5 pr-5 rounded-3xl text-sm cursor-pointer`}
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
                      <p className="text-gray-500 font-medium">Farmer</p>
                      <p className="mt-2 ">
                        What are the best crops to grow in Telangana during
                        monsoon season?
                      </p>
                    </div>
                    <div className="p-8 bg-green-50 rounded-xl mt-2">
                      <p className="text-gray-500 font-medium">FarmlyAi</p>
                      <p className="mt-2 ">
                        In Telangana during monsoon (June-September), the best
                        crops to grow are Rice (the primary kharif crop),
                        Cotton, Maize, Sugarcane, Turmeric, and Red gram (Pigeon
                        pea). Rice varieties like BPT-5204, MTU-1010 are
                        well-suited for the region. Cotton varieties like
                        Narasimha and Surabhi perform excellently. Make sure to
                        prepare fields before monsoon arrival and ensure proper
                        drainage to avoid waterlogging. Always choose certified
                        seeds from authorized dealers for better yields. 🌾
                      </p>
                    </div>
                    <div className="p-6 bg-gray-100 rounded-xl mt-5">
                      <p className="text-gray-500 font-medium">Farmer</p>
                      <p className="mt-2 ">
                        Can you help me with software programming for my
                        computer?
                      </p>
                    </div>
                    <div className="p-8 bg-green-50 rounded-xl mt-2">
                      <p className="text-gray-500 font-medium">FarmlyAi</p>
                      <p className="mt-2 ">
                        ❌ Sorry! I am specialized in agricultural guidance and
                        farming practices. Kindly please ask questions related
                        to crops, farming, pesticides, irrigation, or
                        agricultural techniques. 🌱
                      </p>
                    </div>
                  </motion.p>
                ) : sample == "Languages" ? (
                  <motion.p
                    className="leading-relaxed font-sans text-sm mt-5"
                    variants={textVariants}
                  >
                    <div className="p-6 bg-gray-100 rounded-xl">
                      <p className="text-gray-500 font-medium">Farmer</p>
                      <p className="mt-2 ">
                        వేసవి కాలంలో ఏ కూరగాయలు పండిస్తే లాభం ఉంటుంది?
                      </p>
                    </div>
                    <div className="p-8 bg-green-50 rounded-xl mt-2">
                      <p className="text-gray-500 font-medium">FarmlyAi</p>
                      <p className="mt-2 ">
                        వేసవి కాలంలో పండించడానికి అనువైన కొన్ని లాభదాయకమైన
                        కూరగాయలు ఇక్కడ ఉన్నాయి: టొమాటోలు: వేడి వాతావరణంలో బాగా
                        పెరుగుతాయి. మిరపకాయలు: వివిధ రంగుల్లో మరియు సైజుల్లో
                        ఉంటాయి, వీటికి మార్కెట్లో మంచి డిమాండ్ ఉంది. వంకాయ: ఇది
                        కూడా వేసవిలో బాగా పండుతుంది మరియు దీనికి మంచి మార్కెట్
                        ఉంది. సొరకాయ మరియు బీరకాయ: ఇవి త్వరగా పెరిగే పంటలు మరియు
                        వేసవిలో బాగా కాస్తాయి. దోసకాయ: వేసవిలో దీనికి చల్లదనం
                        కోసం ఎక్కువ డిమాండ్ ఉంటుంది. బొబ్బర్లు మరియు చిక్కుళ్ళు:
                        ఇవి కూడా వేసవిలో బాగా పండుతాయి. ఈ పంటలు వేయడానికి ముందు,
                        మీ ప్రాంతంలోని వాతావరణ పరిస్థితులు మరియు మార్కెట్
                        డిమాండ్ను పరిగణనలోకి తీసుకోవడం చాలా ముఖ్యం. అలాగే, మీరు
                        నాణ్యమైన విత్తనాలను ఎంచుకోవడం మరియు సరైన నీటి యాజమాన్యం
                        పాటించడం ద్వారా మంచి దిగుబడి పొందవచ్చు.
                      </p>
                    </div>
                    <div className="p-6 bg-gray-100 rounded-xl mt-5">
                      <p className="text-gray-500 font-medium">Farmer</p>
                      <p className="mt-2 ">
                        घर पर बने कीटनाशक कैसे तैयार करें?
                      </p>
                    </div>
                    <div className="p-8 bg-green-50 rounded-xl mt-2">
                      <p className="text-gray-500 font-medium">FarmlyAi</p>
                      <p className="mt-2 ">
                        निश्चित रूप से! घर पर बने कीटनाशक बनाने के कई तरीके हैं,
                        जो आपके बगीचे के लिए सुरक्षित और प्रभावी हो सकते हैं।
                        यहाँ कुछ आसान और उपयोगी तरीके दिए गए हैं: नीम तेल
                        स्प्रे: यह एक बहुत ही प्रभावी कीटनाशक है और कई प्रकार के
                        कीटों को नियंत्रित करने में मदद करता है। 1 लीटर पानी में
                        5 मिलीलीटर नीम तेल और 1 मिलीलीटर तरल साबुन मिलाएं। इसे
                        अच्छी तरह से हिलाएं और पौधों पर स्प्रे करें। लहसुन और
                        प्याज का स्प्रे: लहसुन और प्याज में तीखी गंध होती है जो
                        कीटों को दूर रखती है। 2 लहसुन की कली और 1 प्याज को पीसकर
                        1 लीटर पानी में मिलाएं। इसे रात भर भिगो दें, फिर छानकर
                        पौधों पर स्प्रे करें। मिर्च स्प्रे: मिर्च में कैप्साइसिन
                        होता है, जो कीटों को भगाने में मदद करता है। 1 लीटर पानी
                        में 1 चम्मच लाल मिर्च पाउडर और कुछ बूंदें तरल साबुन
                        मिलाएं। इसे अच्छी तरह से हिलाएं और पौधों पर स्प्रे करें।
                        छिड़काव करते समय हाथों में दस्ताने पहनें और आंखों को
                        बचाएं। साबुन का पानी: यह एफिड्स, व्हाइटफ्लाई और अन्य
                        छोटे कीटों के खिलाफ प्रभावी है। 1 लीटर पानी में 1 चम्मच
                        तरल साबुन मिलाएं और इसे अच्छी तरह से हिलाएं। इसे पौधों
                        पर स्प्रे करें, खासकर पत्तियों के नीचे। बेकिंग सोडा
                        स्प्रे: यह फंगल संक्रमण को रोकने में मदद करता है और कुछ
                        कीटों को भी नियंत्रित करता है। 1 लीटर पानी में 1 चम्मच
                        बेकिंग सोडा और कुछ बूंदें तरल साबुन मिलाएं। इसे अच्छी
                        तरह से हिलाएं और पौधों पर स्प्रे करें। टमाटर पत्ती
                        स्प्रे: टमाटर की पत्तियों में सोलनिन नामक एक एल्कलॉइड
                        होता है, जो कीटों के लिए जहरीला होता है। 1 कप कटी हुई
                        टमाटर की पत्तियों को 2 कप पानी में मिलाएं और रात भर भिगो
                        दें। इसे छानकर पौधों पर स्प्रे करें। यह सुनिश्चित करें
                        कि आप इन घरेलू कीटनाशकों का उपयोग करते समय सावधानी बरतें
                        और हमेशा पौधों की प्रतिक्रिया की निगरानी करें। 🌱
                      </p>
                    </div>
                  </motion.p>
                ) : sample == "Pesticides" ? (
                  <motion.p
                    className="leading-relaxed font-sans text-sm mt-5"
                    variants={textVariants}
                  >
                    <div className="p-6 bg-gray-100 rounded-xl">
                      <p className="text-gray-500 font-medium">Farmer</p>
                      <p className="mt-2 ">
                        What organic pesticides can I use for tomato leaf curl
                        disease?
                      </p>
                    </div>
                    <div className="p-8 bg-green-50 rounded-xl mt-2">
                      <p className="text-gray-500 font-medium">FarmlyAi</p>
                      <p className="mt-2 ">
                        For tomato leaf curl disease (caused by whiteflies), you
                        can use these organic solutions: Neem oil spray (3-5ml
                        per liter), Soap solution with neem, Yellow sticky traps
                        to catch whiteflies, Garlic-chili spray as a natural
                        repellent, Encourage beneficial insects like ladybugs
                        and lacewings. For prevention: Use reflective mulch,
                        Remove infected plants immediately, Maintain proper
                        spacing between plants for air circulation, Apply neem
                        cake to soil as organic fertilizer. Always spray during
                        early morning or evening to avoid leaf burn. 🍅
                      </p>
                    </div>
                    <div className="p-6 bg-gray-100 rounded-xl mt-5">
                      <p className="text-gray-500 font-medium">Farmer</p>
                      <p className="mt-2 ">
                        How to control aphids on my cotton crop safely?
                      </p>
                    </div>
                    <div className="p-8 bg-green-50 rounded-xl mt-2">
                      <p className="text-gray-500 font-medium">FarmlyAi</p>
                      <p className="mt-2 ">
                        To control aphids on cotton safely: Use biological
                        control with ladybugs and parasitic wasps, Spray
                        neem-based insecticides (Azadirachtin), Apply soap water
                        solution (mild detergent), Use reflective mulches to
                        confuse aphids, Regular monitoring and early detection
                        is key. Chemical options (if necessary): Imidacloprid,
                        Thiamethoxam - but use sparingly and follow label
                        instructions. Always maintain beneficial insect
                        populations for natural control. 🦗
                      </p>
                    </div>
                  </motion.p>
                ) : sample == "Irrigation" ? (
                  <motion.p
                    className="leading-relaxed font-sans text-sm mt-5"
                    variants={textVariants}
                  >
                    <div className="p-6 bg-gray-100 rounded-xl">
                      <p className="text-gray-500 font-medium">Farmer</p>
                      <p className="mt-2 ">
                        What is the best irrigation method for water
                        conservation in vegetable farming?
                      </p>
                    </div>
                    <div className="p-8 bg-green-50 rounded-xl mt-2">
                      <p className="text-gray-500 font-medium">FarmlyAi</p>
                      <p className="mt-2 ">
                        Drip irrigation is the most water-efficient method for
                        vegetables, saving 30-50% water compared to flood
                        irrigation. Benefits include: Direct water delivery to
                        root zones, Reduced water evaporation, Better nutrient
                        management through fertigation, Prevention of foliar
                        diseases, Consistent soil moisture. For small farms, you
                        can start with simple drip systems or even bottle drip
                        methods. Mulching combined with drip irrigation further
                        conserves water and suppresses weeds. Schedule
                        irrigation based on soil moisture, not fixed timings. 💧
                      </p>
                    </div>
                    <div className="p-6 bg-gray-100 rounded-xl mt-5">
                      <p className="text-gray-500 font-medium">Farmer</p>
                      <p className="mt-2 ">
                        How often should I water my wheat crop during different
                        growth stages?
                      </p>
                    </div>
                    <div className="p-8 bg-green-50 rounded-xl mt-2">
                      <p className="text-gray-500 font-medium">FarmlyAi</p>
                      <p className="mt-2 ">
                        Wheat irrigation schedule varies by growth stage: Crown
                        Root Initiation (20-25 days): First critical irrigation,
                        Tillering (40-45 days): Second irrigation for better
                        tillers, Jointing (60-65 days): Third irrigation - very
                        critical, Flowering (85-90 days): Fourth irrigation for
                        grain formation, Milk stage (105-110 days): Final
                        irrigation if needed. Provide 4-6 irrigations total,
                        with 5-6cm water each time. Avoid irrigation during
                        grain maturity to prevent lodging. Monitor soil moisture
                        at 10cm depth. 🌾
                      </p>
                    </div>
                  </motion.p>
                ) : (
                  <motion.p
                    className="leading-relaxed font-sans text-sm mt-5"
                    variants={textVariants}
                  >
                    <div className="p-6 bg-gray-100 rounded-xl">
                      <p className="text-gray-500 font-medium">Farmer</p>
                      <p className="mt-2 ">
                        How can I improve soil fertility naturally without
                        chemicals?
                      </p>
                    </div>
                    <div className="p-8 bg-green-50 rounded-xl mt-2">
                      <p className="text-gray-500 font-medium">FarmlyAi</p>
                      <p className="mt-2 ">
                        Natural ways to improve soil fertility: Add organic
                        compost and farmyard manure, Practice crop rotation with
                        legumes (beans, peas), Use cover crops like mustard and
                        clover, Apply vermicompost (earthworm compost),
                        Incorporate green manures, Use biofertilizers
                        (Rhizobium, Azotobacter), Maintain proper soil pH, and
                        avoid over-tilling to preserve soil structure. These
                        methods enhance soil organic matter and beneficial
                        microorganisms! 🌱
                      </p>
                    </div>
                    <div className="p-6 bg-gray-100 rounded-xl mt-5">
                      <p className="text-gray-500 font-medium">Farmer</p>
                      <p className="mt-2 ">
                        What are the signs of nutrient deficiency in plants?
                      </p>
                    </div>
                    <div className="p-8 bg-green-50 rounded-xl mt-2">
                      <p className="text-gray-500 font-medium">FarmlyAi</p>
                      <p className="mt-2 ">
                        Common nutrient deficiency signs: Nitrogen (N): Yellow
                        older leaves, stunted growth, Phosphorus (P):
                        Purple/reddish leaves, poor root development, Potassium
                        (K): Yellow leaf edges, weak stems, Iron: Yellow leaves
                        with green veins (chlorosis), Magnesium: Yellow between
                        leaf veins, Calcium: Blossom end rot in tomatoes, brown
                        leaf tips. Regular soil testing helps identify specific
                        deficiencies. Address through targeted organic
                        fertilizers or foliar sprays! 🍃
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
                      FarmlyAi is sensitive to how agricultural questions are
                      phrased. For example, a direct query like "How do I
                      control pests on rice?" may work well, but a differently
                      worded question such as "What to do about insects eating
                      my grain?" might be misinterpreted or rejected.
                    </li>
                    <li>
                      The model is sometimes verbose and repetitive, restating
                      its role as an agricultural specialist or overusing
                      farming disclaimers. This results from biases in the
                      underlying API responses and limited control over
                      fine-tuning for agricultural contexts.
                    </li>
                    <li>
                      Ideally, the system would ask clarifying questions when
                      farmers provide ambiguous queries about their crops or
                      farming conditions. Instead, FarmlyAi often provides general
                      advice, which may not always address the specific regional
                      or seasonal farming needs.
                    </li>
                    <li>
                      Although designed to filter out non-agricultural topics,
                      FarmlyAi may occasionally misclassify queries that include
                      farming keywords but focus on non-farming domains (e.g.,
                      "crop rotation in data processing"). This can result in
                      false positives or unnecessary rejections.
                    </li>
                    <li>
                      FarmlyAi does not retain permanent chat history about
                      previous farming consultations. Conversations exist only
                      during the active session, which limits continuity and
                      personalized farming advice based on past interactions.
                    </li>
                    <li>
                      Since the tool relies fully on the Gemini API, downtime,
                      rate limits, or API changes directly impact availability
                      and performance for farmers seeking urgent agricultural
                      guidance.
                    </li>
                    <li>
                      The AI may not have access to real-time local weather
                      data, soil conditions, or region-specific pest outbreaks,
                      which are crucial for providing accurate, timely farming
                      advice.
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

// Sample course data with descriptions
const courses = [
  {
    id: 1,
    name: "Bachelor of Education (B.Ed)",
    type: "Degree",
    stream: "Teaching",
    price: "₹80,000 - ₹1,30,000",
    duration: "2-year",
    session: "2025-2027",
    description:
      "Bachelor of Education (B.Ed) प्रोग्राम उन छात्रों के लिए डिज़ाइन किया गया है जो शिक्षण के पेशे में करियर बनाना चाहते हैं। यह प्रोग्राम छात्रों को कक्षा प्रबंधन, शिक्षण विधियों, और शैक्षिक प्रौद्योगिकी का व्यावहारिक ज्ञान प्रदान करता है। B.Ed कोर्स शिक्षकों को न केवल छात्रों को पढ़ाने के लिए तैयार करता है बल्कि उन्हें एक जिम्मेदार और प्रेरक शिक्षक बनने के लिए भी प्रशिक्षित करता है। यह कोर्स सरकारी और निजी स्कूलों में शिक्षण के लिए अनिवार्य है और शिक्षा के क्षेत्र में रोजगार के कई अवसर प्रदान करता है।",
    image:
      "https://images.unsplash.com/photo-1496469888073-80de7e952517?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    details: {
      overview:
        "B.Ed एक पेशेवर डिग्री प्रोग्राम है जो छात्रों को स्कूल स्तर पर शिक्षा प्रदान करने के लिए तैयार करता है। इस कोर्स का उद्देश्य छात्रों को शिक्षण में आवश्यक कौशल और ज्ञान प्रदान करना है। यह कोर्स आधुनिक शिक्षा प्रणाली के अनुरूप है और छात्रों को शिक्षण की तकनीकों, मनोविज्ञान, और शिक्षण के विविध दृष्टिकोणों में पारंगत करता है। B.Ed कोर्स के दौरान, छात्रों को प्रैक्टिकल ट्रेनिंग और वास्तविक कक्षा अनुभव दिया जाता है जो उन्हें पेशेवर शिक्षण के लिए तैयार करता है।",
      courseInformation: {
        title: "B.Ed (Bachelor of Education)",
        image:
          "https://admissionaadda.com/course_images/1733381208_4a2f7309144054db3044.png",
        detailsDescription:
          "B.Ed यानी Bachelor of Education एक स्नातक कोर्स है जो छात्रों को शिक्षण के क्षेत्र में करियर बनाने के लिए तैयार करता है। यह कोर्स उन्हें शैक्षिक मनोविज्ञान, पाठ्यक्रम विकास, शिक्षण विधियों, और कक्षा प्रबंधन जैसे विषयों में प्रशिक्षित करता है। B.Ed कोर्स पूरा करने के बाद,  माध्यमिक और उच्च माध्यमिक स्कूलों में शिक्षण के लिए पात्र हो जाते हैं।",
      },
      whatIsThis: {
        title: "B.Ed (Bachelor of Education) क्या है?",
        image: "https://admissionaadda.com/images/know.png",
        detailsDescription:
          "B.Ed एक ऐसा कोर्स है जो छात्रों को शिक्षण के लिए आवश्यक विशेषज्ञता प्रदान करता है। यह प्रोग्राम उन छात्रों के लिए है जो शिक्षा के क्षेत्र में योगदान देना चाहते हैं और बच्चों को गुणवत्तापूर्ण शिक्षा प्रदान करने के इच्छुक हैं। B.Ed का मुख्य उद्देश्य शिक्षकों को शिक्षण की नई तकनीकों और दृष्टिकोणों में प्रशिक्षित करना है। यह कोर्स शिक्षकों को न केवल कक्षा में पढ़ाने के लिए तैयार करता है, बल्कि उन्हें प्रेरणा देने और छात्रों को एक बेहतर भविष्य के लिए तैयार करने की क्षमता भी देता है।",
      },
      whyChooseThis: {
        title: "B.Ed क्यों चुनें?",
        image: "https://admissionaadda.com/images/why1.png",
        detailsDescription:
          "B.Ed कोर्स को चुनने का सबसे बड़ा कारण यह है कि यह शिक्षण में करियर बनाने के लिए एक अनिवार्य योग्यता है। यह कोर्स आपको शिक्षण के लिए आवश्यक कौशल, शैक्षिक प्रौद्योगिकी, और कक्षा प्रबंधन का ज्ञान प्रदान करता है। इसके अलावा, B.Ed कोर्स सरकारी और निजी स्कूलों में नौकरी पाने के लिए आपके अवसरों को बढ़ाता है। यह कोर्स छात्रों को न केवल एक अच्छा शिक्षक बनने में मदद करता है बल्कि उन्हें शैक्षिक प्रशासन, पाठ्यक्रम योजना और शिक्षा के क्षेत्र में अनुसंधान के लिए भी तैयार करता है।",
      },
      who: {
        title: "B.Ed कौन कर सकता है?",
        image: "https://admissionaadda.com/images/know.png",
        detailsDescription:
          "B.Ed उन छात्रों के लिए है जो अस्नातक 50% अंकों से पास हो और शिक्षा के क्षेत्र में करियर बनाना चाहते है शिक्षण के प्रति गहरी रुचि रखते हैं। यदि आप एक जिम्मेदार शिक्षक बनने का सपना देखते हैं और बच्चों की शिक्षा में योगदान देना चाहते हैं, तो यह कोर्स आपके लिए है। यह कोर्स उन लोगों के लिए भी है जो सरकारी और निजी स्कूलों में शिक्षण के लिए पात्र बनना चाहते हैं।",
      },
    },
  },
  {
    id: 2,
    name: "Diploma in Elementary Education (D.El.Ed)",
    type: "Diploma",
    stream: "Teaching",
    price: "₹80,000 - ₹1,30,000",
    duration: "2-year",
    session: "2025-2027",
    description:
      "D.El.Ed प्रोग्राम मुख्यतः प्राथमिक शिक्षा के लिए डिज़ाइन किया गया है। यह कार्यक्रम छात्रों को प्राथमिक कक्षाओं के लिए प्रभावी शिक्षक बनने के लिए आवश्यक कौशल और ज्ञान प्रदान करता है।",
    image:
      "https://images.unsplash.com/photo-1496469888073-80de7e952517?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    details: {
      overview:
        "Diploma in Elementary Education (D.El.Ed) एक पेशेवर कोर्स है जो छात्रों को प्राथमिक शिक्षा में करियर बनाने के लिए तैयार करता है। यह प्रोग्राम मुख्यतः प्राथमिक कक्षाओं के छात्रों की शैक्षिक आवश्यकताओं को समझने और उनके लिए प्रभावी शिक्षण तकनीक लागू करने पर केंद्रित है।",
      courseInformation: {
        title: "D.El.Ed (Diploma in Elementary Education)",
        image:
          "https://admissionaadda.com/course_images/1733381208_4a2f7309144054db3044.png",
        detailsDescription:
          "D.El.Ed कोर्स प्राथमिक स्तर के शिक्षकों के लिए एक अनिवार्य योग्यता है। यह कोर्स छात्रों को शैक्षिक मनोविज्ञान, प्राथमिक शिक्षा की विधियाँ, और कक्षा प्रबंधन में प्रशिक्षित करता है। इसमें बच्चों के साथ संवाद कौशल, पाठ्यक्रम योजना, और शैक्षिक गतिविधियों का प्रबंधन शामिल है।",
      },
      whatIsThis: {
        title: "D.El.Ed (Diploma in Elementary Education) क्या है?",
        image: "https://admissionaadda.com/images/know.png",
        detailsDescription:
          "D.El.Ed कोर्स एक 2-वर्षीय डिप्लोमा प्रोग्राम है जो प्राथमिक शिक्षकों को व्यावसायिक रूप से प्रशिक्षित करता है। यह कोर्स छात्रों को बच्चों के मानसिक और शैक्षिक विकास को समझने में मदद करता है और प्रभावी शिक्षण तकनीकों को सिखाता है।",
      },
      whyChooseThis: {
        title: "D.El.Ed क्यों चुनें?",
        image: "https://admissionaadda.com/images/why1.png",
        detailsDescription:
          "D.El.Ed उन छात्रों के लिए एक आदर्श कोर्स है जो प्राथमिक शिक्षा में करियर बनाना चाहते हैं। यह कोर्स आपको बच्चों की शैक्षिक और मानसिक आवश्यकताओं को समझने में मदद करता है। D.El.Ed पूरा करने के बाद, आप सरकारी और निजी प्राथमिक स्कूलों में शिक्षण के लिए योग्य हो जाते हैं। यह कोर्स आपको एक मजबूत आधार प्रदान करता है, जिससे आप शिक्षा के क्षेत्र में स्थिरता और प्रगति दोनों पा सकते हैं।",
      },
      who: {
        title: "D.El.Ed कौन कर सकता है?",
        image: "https://admissionaadda.com/images/know.png",
        detailsDescription:
          "D.El.Ed उन छात्रों के लिए है जो बच्चों के साथ काम करने में रुचि रखते हैं और प्राथमिक शिक्षा के क्षेत्र में करियर बनाना चाहते हैं। इस कोर्स के लिए न्यूनतम योग्यता किसी भी विषय में 10+2 है। एवम  UP में अस्नातक 50% है  यदि आप बच्चों को शिक्षित करने और उनकी शिक्षा में योगदान देने का सपना देखते हैं, तो यह कोर्स आपके लिए आदर्श है। यह कोर्स आपको एक पेशेवर शिक्षक बनने के लिए आवश्यक कौशल और आत्मविश्वास प्रदान करता है।",
      },
    },
  },
  {
    id: 3,
    name: "Bachelor of Computer Applications (BCA)",
    type: "Degree",
    stream: "IT and Software",
    price: "₹90,000 - ₹1,50,000",
    duration: "3-year",
    session: "2025-2028",
    description:
      "BCA प्रोग्राम छात्रों को सॉफ्टवेयर विकास, प्रोग्रामिंग, और कंप्यूटर विज्ञान के क्षेत्र में विशेषज्ञता प्रदान करता है।",
    image:
      "https://images.unsplash.com/photo-1496469888073-80de7e952517?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    details: {
      overview:
        "BCA कोर्स आईटी के क्षेत्र में करियर बनाने के इच्छुक छात्रों के लिए एक आदर्श विकल्प है। यह कोर्स छात्रों को कंप्यूटर प्रोग्रामिंग, डेटा स्ट्रक्चर, और सॉफ्टवेयर विकास में विशेषज्ञता प्रदान करता है।",
      courseInformation: {
        title: "BCA (Bachelor of Computer Applications)",
        image:
          "https://admissionaadda.com/course_images/1733381208_4a2f7309144054db3044.png",
        detailsDescription:
          "BCA कोर्स छात्रों को कंप्यूटर प्रोग्रामिंग, डेटा स्ट्रक्चर, और सॉफ्टवेयर विकास में प्रशिक्षित करता है। इस कोर्स के दौरान, छात्रों को प्रोग्रामिंग भाषाएँ, वेब डेवलपमेंट, और डाटाबेस प्रबंधन जैसे महत्वपूर्ण क्षेत्रों में गहरी समझ प्राप्त होती है।",
      },
      whatIsThis: {
        title: "BCA क्या है?",
        image: "https://admissionaadda.com/images/know.png",
        detailsDescription:
          "BCA एक स्नातक डिग्री प्रोग्राम है जो छात्रों को कंप्यूटर एप्लीकेशन और सॉफ्टवेयर विकास में विशेषज्ञता प्रदान करता है। इस कोर्स का उद्देश्य छात्रों को आईटी और सॉफ्टवेयर क्षेत्र में गहरी समझ और कौशल प्रदान करना है, ताकि वे तकनीकी चुनौतियों का समाधान करने में सक्षम हो सकें।",
      },
      whyChooseThis: {
        title: "BCA क्यों चुनें?",
        image: "https://admissionaadda.com/images/why1.png",
        detailsDescription:
          "BCA कोर्स छात्रों को सॉफ्टवेयर उद्योग में करियर बनाने और आईटी क्षेत्र में रोजगार के अवसर प्राप्त करने में मदद करता है। यह कोर्स छात्रों को  सरकारी स्कूल में कंप्यूटर टीचर, वेब डेवलपमेंट, ऐप डेवलपमेंट, और सॉफ़्टवेयर इंजीनियरिंग जैसे क्षेत्रों में भी प्रशिक्षण प्रदान करता है।",
      },
      who: {
        title: "BCA कौन कर सकता है?",
        image: "https://admissionaadda.com/images/know.png",
        detailsDescription:
          "यह कोर्स उन छात्रों के लिए है जिनकी योग्यता 10+2 है  जो कंप्यूटर विज्ञान और सॉफ्टवेयर विकास के क्षेत्र में रुचि रखते हैं। यदि आप तकनीकी कौशल हासिल करना चाहते हैं और आईटी और सॉफ़्टवेयर क्षेत्र में एक मजबूत करियर बनाना चाहते हैं, तो यह कोर्स आपके लिए आदर्श है।",
      },
    },
  },
  {
    id: 4,
    name: "Master of Computer Applications (MCA)",
    type: "Postgraduate Degree",
    stream: "IT and Software",
    price: "₹1,00,000 - ₹3,25,000",
    duration: "2-year",
    session: "2025-2027",
    description:
      "MCA प्रोग्राम छात्रों को उन्नत सॉफ्टवेयर विकास और कंप्यूटर प्रोग्रामिंग में विशेषज्ञता प्रदान करता है।",
    image:
      "https://images.unsplash.com/photo-1496469888073-80de7e952517?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    details: {
      overview:
        "MCA कोर्स आईटी के क्षेत्र में उन्नत तकनीकी ज्ञान प्राप्त करने के इच्छुक छात्रों के लिए है। यह कोर्स छात्रों को कंप्यूटर प्रोग्रामिंग, सॉफ़्टवेयर डेवलपमेंट, और डेटा एनालिटिक्स में विशेषज्ञता प्रदान करता है।",
      courseInformation: {
        title: "MCA (Master of Computer Applications)",
        image:
          "https://admissionaadda.com/course_images/1733381208_4a2f7309144054db3044.png",
        detailsDescription:
          "MCA कोर्स छात्रों को उन्नत कंप्यूटर प्रोग्रामिंग, सॉफ़्टवेयर डेवलपमेंट, और डेटा एनालिटिक्स में प्रशिक्षित करता है। इस कोर्स में छात्रों को कंप्यूटर विज्ञान और तकनीकी क्षेत्र में उन्नत ज्ञान प्राप्त होता है, जिससे उन्हें उच्च स्तर के तकनीकी कार्यों के लिए तैयार किया जाता है।",
      },
      whatIsThis: {
        title: "MCA क्या है?",
        image: "https://admissionaadda.com/images/know.png",
        detailsDescription:
          "MCA एक स्नातकोत्तर प्रोग्राम है जो छात्रों को आईटी और सॉफ़्टवेयर विकास के क्षेत्र में विशेषज्ञता प्रदान करता है। इस कोर्स के दौरान, छात्रों को जटिल सॉफ़्टवेयर और एप्लिकेशन विकसित करने के लिए आवश्यक तकनीकी और व्यावहारिक ज्ञान मिलता है।",
      },
      whyChooseThis: {
        title: "MCA क्यों चुनें?",
        image: "https://admissionaadda.com/images/why1.png",
        detailsDescription:
          "MCA कोर्स आईटी और सॉफ़्टवेयर विकास के क्षेत्र में उन्नत तकनीकी ज्ञान प्रदान करता है। यह कोर्स आपको  Bihar की सरकारी स्कूल में कंप्यूटर टीचर एवं उच्च तकनीकी मानकों के अनुरूप तैयार करता है और आईटी कंपनियों में नौकरी पाने के लिए आवश्यक कौशल प्रदान करता है।",
      },
      who: {
        title: "MCA कौन कर सकता है?",
        image: "https://admissionaadda.com/images/know.png",
        detailsDescription:
          "यह कोर्स उन छात्रों के लिए है जो अस्नातक 50% के बाद कर सकते है  और सॉफ़्टवेयर विकास के क्षेत्र में उन्नति करना चाहते हैं। यदि आप कंप्यूटर विज्ञान और तकनीकी क्षेत्रों में विशेष रुचि रखते हैं और इनमें करियर बनाना चाहते हैं, तो यह कोर्स आपके लिए आदर्श है।",
      },
    },
  },
  {
    id: 5,
    name: "Post Graduate Diploma in Computer Applications (PGDCA)",
    type: "Diploma",
    stream: "IT and Software",
    price: "₹30,000 - ₹60,000",
    duration: "1-year",
    session: "2025-2026",
    description:
      "PGDCA एक वर्षीय डिप्लोमा प्रोग्राम है जो छात्रों को कंप्यूटर अनुप्रयोगों और प्रोग्रामिंग में ज्ञान प्रदान करता है। यह कोर्स छात्रों को सॉफ्टवेयर उद्योग में करियर बनाने के लिए तैयार करता है।",
    image:
      "https://images.unsplash.com/photo-1496469888073-80de7e952517?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    details: {
      overview:
        "PGDCA कोर्स आईटी और सॉफ्टवेयर अनुप्रयोगों के क्षेत्र में ज्ञान और कौशल विकसित करने के लिए डिज़ाइन किया गया है। यह कोर्स छात्रों को सॉफ़्टवेयर डेवलपमेंट, डेटा प्रबंधन, और प्रोग्रामिंग की गहरी समझ प्रदान करता है।",
      courseInformation: {
        title: "PGDCA (Post Graduate Diploma in Computer Applications)",
        image:
          "https://admissionaadda.com/course_images/1733381208_4a2f7309144054db3044.png",
        detailsDescription:
          "PGDCA कोर्स छात्रों को प्रोग्रामिंग, डेटा प्रबंधन, और सॉफ्टवेयर विकास के लिए आवश्यक तकनीकी कौशल सिखाता है। यह कोर्स छात्रों को सॉफ़्टवेयर उद्योग में विभिन्न भूमिकाओं के लिए तैयार करता है, जिससे उन्हें करियर में सफलता प्राप्त होती है।",
      },
      whatIsThis: {
        title: "PGDCA क्या है?",
        image: "https://admissionaadda.com/images/know.png",
        detailsDescription:
          "PGDCA एक डिप्लोमा प्रोग्राम है जो छात्रों को कंप्यूटर अनुप्रयोगों और प्रोग्रामिंग की गहरी समझ प्रदान करता है। इस कोर्स के दौरान, छात्र कंप्यूटर प्रोग्रामिंग, डेटा संरचनाओं, और सॉफ्टवेयर विकास के विभिन्न पहलुओं में प्रशिक्षण प्राप्त करते हैं।",
      },
      whyChooseThis: {
        title: "PGDCA क्यों चुनें?",
        image: "https://admissionaadda.com/images/why1.png",
        detailsDescription:
          "PGDCA छात्रों को आईटी और सॉफ्टवेयर उद्योग में करियर बनाने और उच्च तकनीकी कौशल हासिल करने में मदद करता है। यह कोर्स छात्रों को बुनियादी से लेकर उन्नत प्रोग्रामिंग, सॉफ्टवेयर विकास, Bihar के सरकारी स्कूल में कंप्यूटर टीचर  और डेटा प्रबंधन में विशेषज्ञता प्रदान करता है।",
      },
      who: {
        title: "PGDCA कौन कर सकता है?",
        image: "https://admissionaadda.com/images/know.png",
        detailsDescription:
          "यह कोर्स उन छात्रों के लिए है जो  10+2 कर रखा है  आईटी और सॉफ्टवेयर अनुप्रयोगों में रुचि रखते हैं और कंप्यूटर प्रोग्रामिंग सीखना चाहते हैं। यदि आप सॉफ़्टवेयर उद्योग में करियर बनाने का सपना देखते हैं, तो यह कोर्स आपके लिए आदर्श है।",
      },
    },
  },
  {
    id: 6,
    name: "Bachelor of Library and Information Science (B.Lis)",
    type: "Degree",
    stream: "Library and Information Science",
    price: "₹15,000 - ₹30,000",
    duration: "1-year",
    session: "2025-2026",
    description:
      "B.Lis प्रोग्राम उन छात्रों के लिए डिज़ाइन किया गया है जो पुस्तकालय और सूचना विज्ञान के क्षेत्र में करियर बनाना चाहते हैं। यह कोर्स छात्रों को पुस्तकालय प्रबंधन और सूचना संगठन के लिए तैयार करता है।",
    image:
      "https://images.unsplash.com/photo-1496469888073-80de7e952517?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    details: {
      overview:
        "B.Lis कोर्स छात्रों को पुस्तकालय और सूचना प्रबंधन की तकनीकों में प्रशिक्षित करता है।",
      courseInformation: {
        title: "B.Lis (Bachelor of Library and Information Science)",
        image:
          "https://admissionaadda.com/course_images/1733381208_4a2f7309144054db3044.png",
        detailsDescription:
          "B.Lis कोर्स छात्रों को पुस्तकालय सेवाओं, सूचना प्रबंधन, और डेटा संगठन में प्रशिक्षित करता है। यह कोर्स छात्रों को पुस्तकालय प्रबंधन और सूचना तकनीकी को समझने और उनमें दक्षता हासिल करने में मदद करता है।",
      },
      whatIsThis: {
        title: "B.Lis क्या है?",
        image: "https://admissionaadda.com/images/know.png",
        detailsDescription:
          "B.Lis यानी Bachelor of Library and Information Science, एक ऐसा कोर्स है जो छात्रों को पुस्तकालय और सूचना विज्ञान के क्षेत्र में विशेषज्ञता प्रदान करता है। इस कोर्स में छात्रों को पुस्तकालय प्रबंधन, सूचना संगठन, और डेटा संग्रहण के बारे में शिक्षित किया जाता है।",
      },
      whyChooseThis: {
        title: "B.Lis क्यों चुनें?",
        image: "https://admissionaadda.com/images/why1.png",
        detailsDescription:
          "B.Lis कोर्स पुस्तकालय प्रबंधन, सूचना संगठन, बिहार के स्कूल/कॉलेज में लायबरेरी टीचर और अनुसंधान के क्षेत्र में रोजगार के अवसर प्रदान करता है। इस कोर्स के दौरान छात्र पुस्तकालय विज्ञान के उन्नत पहलुओं के बारे में सीखते हैं, जो उन्हें इस क्षेत्र में बेहतर करियर बनाने में मदद करते हैं।",
      },
      who: {
        title: "B.Lis कौन कर सकता है?",
        image: "https://admissionaadda.com/images/know.png",
        detailsDescription:
          "यह कोर्स उन छात्रों के लिए है जिनकी अस्नातक 50% मार्क्स हो| जो पुस्तकालय और सूचना प्रबंधन में रुचि रखते हैं और जो इस क्षेत्र में अपना करियर बनाना चाहते हैं। यदि आप शिक्षा, शोध और पुस्तकालय प्रबंधन में रुचि रखते हैं, तो यह कोर्स आपके लिए आदर्श है।",
      },
    },
  },
  {
    id: 7,
    name: "Auxiliary Nurse Midwifery (ANM)",
    type: "Diploma",
    stream: "Nursing",
    price: "₹1,20,000 - ₹1,50,000",
    duration: "2-year",
    session: "2025-2027",
    description:
      "ANM एक डिप्लोमा प्रोग्राम है जो छात्रों को प्राथमिक स्वास्थ्य देखभाल और नर्सिंग कौशल में प्रशिक्षित करता है। यह कोर्स छात्रों को चिकित्सा क्षेत्र में शुरुआती स्तर की नौकरी के लिए तैयार करता है।",
    image:
      "https://images.unsplash.com/photo-1496469888073-80de7e952517?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    details: {
      overview:
        "ANM कोर्स स्वास्थ्य देखभाल और नर्सिंग के क्षेत्र में करियर बनाने के इच्छुक छात्रों के लिए है।",
      courseInformation: {
        title: "ANM (Auxiliary Nurse Midwifery)",
        image:
          "https://admissionaadda.com/course_images/1733381208_4a2f7309144054db3044.png",
        detailsDescription:
          "ANM कोर्स छात्रों को प्राथमिक चिकित्सा, मातृत्व देखभाल, और नर्सिंग प्रथाओं में प्रशिक्षित करता है।",
      },
      whatIsThis: {
        title: "ANM क्या है?",
        image: "https://admissionaadda.com/images/know.png",
        detailsDescription:
          "ANM यानी Auxiliary Nurse Midwifery, एक डिप्लोमा प्रोग्राम है जो छात्रों को नर्सिंग और स्वास्थ्य देखभाल के बुनियादी कौशल प्रदान करता है।",
      },
      whyChooseThis: {
        title: "ANM क्यों चुनें?",
        image: "https://admissionaadda.com/images/why1.png",
        detailsDescription:
          "ANM कोर्स छात्रों को स्वास्थ्य देखभाल के क्षेत्र में शुरुआती नौकरी पाने और नर्सिंग में करियर बनाने में मदद करता है।",
      },
      who: {
        title: "ANM कौन कर सकता है?",
        image: "https://admissionaadda.com/images/know.png",
        detailsDescription:
          "यह कोर्स उन छात्रों के लिए है जो स्वास्थ्य देखभाल और नर्सिंग के क्षेत्र में रुचि रखते हैं।",
      },
    },
  },
  {
    id: 8,
    name: "General Nursing and Midwifery (GNM)",
    type: "Diploma",
    stream: "Nursing",
    price: "₹4,00,000 - ₹5,50,000",
    duration: "3-year",
    session: "2025-2028",
    description:
      "GNM प्रोग्राम उन छात्रों के लिए है जो नर्सिंग के क्षेत्र में गहराई से अध्ययन करना चाहते हैं। यह कोर्स छात्रों को उन्नत नर्सिंग कौशल और स्वास्थ्य देखभाल प्रथाओं में प्रशिक्षित करता है।",
    image:
      "https://images.unsplash.com/photo-1496469888073-80de7e952517?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    details: {
      overview:
        "GNM कोर्स स्वास्थ्य देखभाल के क्षेत्र में एक मजबूत नींव तैयार करता है।",
      courseInformation: {
        title: "GNM (General Nursing and Midwifery)",
        image:
          "https://admissionaadda.com/course_images/1733381208_4a2f7309144054db3044.png",
        detailsDescription:
          "GNM कोर्स छात्रों को उन्नत नर्सिंग, मातृत्व देखभाल, और स्वास्थ्य सेवाओं के क्षेत्र में प्रशिक्षित करता है।",
      },
      whatIsThis: {
        title: "GNM क्या है?",
        image: "https://admissionaadda.com/images/know.png",
        detailsDescription:
          "GNM एक डिप्लोमा प्रोग्राम है जो छात्रों को उन्नत नर्सिंग और स्वास्थ्य सेवाओं के लिए तैयार करता है।",
      },
      whyChooseThis: {
        title: "GNM क्यों चुनें?",
        image: "https://admissionaadda.com/images/why1.png",
        detailsDescription:
          "GNM कोर्स छात्रों को नर्सिंग में करियर बनाने और स्वास्थ्य देखभाल सेवाओं में योगदान देने के लिए तैयार करता है।",
      },
      who: {
        title: "GNM कौन कर सकता है?",
        image: "https://admissionaadda.com/images/know.png",
        detailsDescription:
          "यह कोर्स उन छात्रों के लिए है जो स्वास्थ्य देखभाल और नर्सिंग के क्षेत्र में रुचि रखते हैं।",
      },
    },
  },
];

export { courses };

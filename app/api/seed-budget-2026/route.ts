import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import Content from "@/models/Content";

export async function GET() {
    try {
        await dbConnect();

        const article = {
            title: "भारत का केंद्रीय बजट 2026: 1 फरवरी को पेश, संसद सत्र 28 जनवरी से शुरू – जनता पर क्या असर होगा?",
            slug: "central-budget-2026-india-dates-details-impact",
            type: "5-min-news",
            categoryId: "694582c3c7cda2251c0e914e", // 5 Minute News
            author: "Admin",
            coverImage: "https://res.cloudinary.com/ddy5pkbkc/image/upload/v1768453658/market-share-challenge-competitor-excellent-growing_2_c24otz.jpg",
            published: true,
            tags: [
                "Union Budget 2026",
                "केंद्रीय बजट 2026",
                "Budget 2026 India",
                "Sitharaman Budget 2026",
                "Modi Govt Budget",
                "Income Tax 2026",
                "Railway Budget 2026"
            ],
            meta: {
                title: "भारत का केंद्रीय बजट 2026 – तारीख, प्रक्रिया, प्रभाव और संभावित समीक्षा",
                description: "भारत का केंद्रीय बजट 2026 1 फरवरी को पेश होगा, संसद की बजट सत्र 28 जनवरी से शुरू। जानें तैयारी, चर्चा, जनता पर असर और संभावित प्रावधान।",
                keywords: [
                    "केंद्रीय बजट 2026",
                    "भारत बजट 1 फरवरी",
                    "संसद बजट सत्र 28 जनवरी",
                    "Union Budget 2026",
                    "बजट प्रक्रिया",
                    "बजट प्रभाव",
                    "Union budget 2026 housing",
                    "Samhsa budget cuts",
                    "Railway Budget 2026 date",
                    "Central government Budget 2026 date",
                    "Union Budget 2026-27 date",
                    "Union Budget 2026-27 expectations",
                    "Budget 2026 expectations India",
                    "Union Budget 2026 expectations"
                ],
                ogImage: "https://res.cloudinary.com/ddy5pkbkc/image/upload/v1768453658/market-share-challenge-competitor-excellent-growing_2_c24otz.jpg"
            },
            contentBlocks: [
                {
                    type: "heading",
                    data: { text: "परिचय: बजट 2026 क्यों महत्वपूर्ण है", level: 2 }
                },
                {
                    type: "paragraph",
                    data: { text: "केंद्रीय बजट सिर्फ़ सरकार का वित्तीय दस्तावेज़ नहीं, बल्कि देश की आर्थिक दिशा और जनता की जेब को प्रभावित करने वाला सबसे बड़ा आर्थिक निर्णय है।" }
                },
                {
                    type: "paragraph",
                    data: { text: "वित्त वर्ष 2026–27 का केंद्रीय बजट 1 फरवरी 2026 को पेश किया जाएगा। इसे संसद में पेश करने से पहले 28 जनवरी 2026 से बजट सत्र शुरू होगा, जिसमें प्रस्तावित खर्च, कर नीति और योजनाओं पर विस्तार से चर्चा होगी।" }
                },
                {
                    type: "paragraph",
                    data: { text: "हर वर्ष की तरह इस बजट में भी कृषि, स्वास्थ्य, शिक्षा, इंफ्रास्ट्रक्चर, रोजगार और डिजिटल इंडिया जैसी नीतियों पर ध्यान केंद्रित किया जाएगा। आम नागरिक, निवेशक और उद्योग इस बजट की घोषणा से सीधे प्रभावित होंगे।" }
                },
                {
                    type: "heading",
                    data: { text: "केंद्रीय बजट क्या होता है?", level: 2 }
                },
                {
                    type: "paragraph",
                    data: { text: "केंद्रीय बजट भारत सरकार का वार्षिक वित्तीय दस्तावेज़ है। यह बताता है कि सरकार आगामी वित्त वर्ष में:" }
                },
                {
                    type: "list",
                    data: {
                        items: [
                            "राजस्व कैसे जुटाएगी (कर और गैर‑कर स्रोतों से)",
                            "खर्च कहां और कितना करेगी",
                            "योजनाओं और सब्सिडी में कितना निवेश करेगी"
                        ],
                        style: "unordered"
                    }
                },
                {
                    type: "heading",
                    data: { text: "मुख्य उद्देश्य", level: 3 }
                },
                {
                    type: "list",
                    data: {
                        items: [
                            "सरकार की आय और खर्च का संतुलन",
                            "कर संरचना का निर्धारण",
                            "विकास योजनाओं का वित्तीय रोडमैप",
                            "आर्थिक प्राथमिकताओं का निर्धारण"
                        ],
                        style: "unordered"
                    }
                },
                {
                    type: "heading",
                    data: { text: "बजट के दो प्रमुख भाग", level: 3 }
                },
                {
                    type: "list",
                    data: {
                        items: [
                            "राजस्व बजट (Revenue Budget): सरकार की अनुमानित आय और कर व्यवस्था",
                            "विकास/व्यय बजट (Capital/Expenditure Budget): योजनाओं, सामाजिक खर्च और सरकारी निवेश का विवरण"
                        ],
                        style: "unordered"
                    }
                },
                {
                    type: "heading",
                    data: { text: "बजट सत्र: तारीख और प्रक्रिया", level: 2 }
                },
                {
                    type: "paragraph",
                    data: { text: "बजट सत्र संसद में 28 जनवरी 2026 से शुरू होगा। यह सुनिश्चित करता है कि वित्त वर्ष से पहले सभी वित्तीय योजनाएं अनुमोदित और चर्चा योग्य हों।" }
                },
                {
                    type: "heading",
                    data: { text: "बजट सत्र के चरण", level: 3 }
                },
                {
                    type: "list",
                    data: {
                        items: [
                            "प्रस्तुति: वित्त मंत्री बजट 1 फरवरी 2026 को संसद में पेश करेंगे。",
                            "सामान्य चर्चा: सांसद विभिन्न मंत्रालयों और योजनाओं पर बहस करेंगे。",
                            "संसदीय समीक्षा: वित्तीय और परामर्श समितियां सुझाव देंगी。",
                            "अंतिम अनुमोदन: सदन में वोटिंग और बजट का पारित होना।"
                        ],
                        style: "unordered"
                    }
                },
                {
                    type: "heading",
                    data: { text: "बजट की तैयारी: Step by Step", level: 2 }
                },
                {
                    type: "paragraph",
                    data: { text: "बजट की तैयारी साल भर चलती है।" }
                },
                {
                    type: "heading",
                    data: { text: "मंत्रालयों की मांगें", level: 3 }
                },
                {
                    type: "paragraph",
                    data: { text: "हर मंत्रालय अपनी वार्षिक योजनाओं और खर्च का अनुमान वित्त मंत्रालय को भेजता है।" }
                },
                {
                    type: "heading",
                    data: { text: "वित्त विभाग का समन्वय", level: 3 }
                },
                {
                    type: "paragraph",
                    data: { text: "विभाग इन मांगों को राजस्व अनुमान, मौजूदा आर्थिक स्थिति और प्राथमिकताओं के आधार पर तौलता है।" }
                },
                {
                    type: "heading",
                    data: { text: "आर्थिक सर्वेक्षण (Economic Survey)", level: 3 }
                },
                {
                    type: "paragraph",
                    data: { text: "बजट से पहले Economic Survey प्रकाशित होती है, जो देश की आर्थिक स्थिति, विकास दर, मुद्रास्फीति और राजकोषीय स्थिरता का विश्लेषण करती है।" }
                },
                {
                    type: "heading",
                    data: { text: "अंतिम मसौदा", level: 3 }
                },
                {
                    type: "paragraph",
                    data: { text: "फाइनेंस मिनिस्टर और सलाहकार बजट का अंतिम मसौदा तैयार करते हैं। यह मसौदा संसद में पेश किया जाता है।" }
                },
                {
                    type: "heading",
                    data: { text: "बजट में शामिल मुख्य घटक", level: 2 }
                },
                {
                    type: "list",
                    data: {
                        items: [
                            "राजस्व: प्रत्यक्ष कर (Income Tax, Corporate Tax), अप्रत्यक्ष कर (GST, Customs), गैर‑कर राजस्व (Fees, Dividends)",
                            "व्यय: योजनाएं, सामाजिक विकास, रक्षा, प्रशासनिक खर्च, ऋण भुगतान",
                            "वित्तीय घाटा: जब व्यय राजस्व से अधिक होता है",
                            "वोट ऑन अकाउंट: बजट अनुमोदन से पहले अस्थायी खर्च"
                        ],
                        style: "unordered"
                    }
                },
                {
                    type: "heading",
                    data: { text: "बजट 2026 के मुख्य फोकस क्षेत्र", level: 2 }
                },
                {
                    type: "heading",
                    data: { text: "कृषि और ग्रामीण विकास", level: 3 }
                },
                {
                    type: "paragraph",
                    data: { text: "भारत की लगभग आधी आबादी कृषि से जुड़ी है। बजट में:" }
                },
                {
                    type: "list",
                    data: {
                        items: [
                            "फसल बीमा और सिंचाई परियोजनाओं का विस्तार",
                            "प्रधानमंत्री किसान सम्मान निधि (PM-Kisan) में अधिक आवंटन",
                            "ग्रामीण रोजगार गारंटी (MGNREGA) में निवेश"
                        ],
                        style: "unordered"
                    }
                },
                {
                    type: "heading",
                    data: { text: "स्वास्थ्य", level: 3 }
                },
                {
                    type: "list",
                    data: {
                        items: [
                            "राष्ट्रीय स्वास्थ्य मिशन और ग्रामीण स्वास्थ्य केंद्रों को अधिक बजट",
                            "टीकाकरण और चिकित्सा बुनियादी ढांचे में निवेश"
                        ],
                        style: "unordered"
                    }
                },
                {
                    type: "heading",
                    data: { text: "शिक्षा और कौशल विकास", level: 3 }
                },
                {
                    type: "list",
                    data: {
                        items: [
                            "सरकारी स्कूलों और डिजिटल शिक्षा में निवेश",
                            "छात्रवृत्ति और अनुसंधान योजनाओं को बढ़ावा"
                        ],
                        style: "unordered"
                    }
                },
                {
                    type: "heading",
                    data: { text: "इन्फ्रास्ट्रक्चर और अर्थव्यवस्था", level: 3 }
                },
                {
                    type: "list",
                    data: {
                        items: [
                            "सड़क, रेलवे, स्मार्ट सिटी प्रोजेक्ट्स में निवेश",
                            "डिजिटल इंडिया और स्टार्टअप इंडिया जैसी पहल को समर्थन",
                            "रोजगार सृजन और औद्योगिक प्रोत्साहन"
                        ],
                        style: "unordered"
                    }
                },
                {
                    type: "heading",
                    data: { text: "कर नीति और राजस्व", level: 3 }
                },
                {
                    type: "list",
                    data: {
                        items: [
                            "आयकर स्लैब में मामूली सुधार या राहत",
                            "GST और अप्रत्यक्ष कर प्रणाली में बदलाव",
                            "घरेलू उत्पादन और निवेश को प्रोत्साहन"
                        ],
                        style: "unordered"
                    }
                },
                {
                    type: "heading",
                    data: { text: "पर्यावरण और हरित पहल", level: 3 }
                },
                {
                    type: "list",
                    data: {
                        items: [
                            "नवीकरणीय ऊर्जा परियोजनाओं में निवेश",
                            "इलेक्ट्रिक वाहन और स्वच्छ तकनीक प्रोत्साहन"
                        ],
                        style: "unordered"
                    }
                },
                {
                    type: "heading",
                    data: { text: "संसद में बजट प्रक्रिया", level: 2 }
                },
                {
                    type: "list",
                    data: {
                        items: [
                            "बजट प्रस्तुति (1 फरवरी 2026)",
                            "सामान्य चर्चा (सांसद बहस)",
                            "वित्तीय समितियों द्वारा समीक्षा",
                            "संशोधन और अंतिम अनुमोदन"
                        ],
                        style: "unordered"
                    }
                },
                {
                    type: "heading",
                    data: { text: "बजट का जनता पर प्रभाव", level: 2 }
                },
                {
                    type: "list",
                    data: {
                        items: [
                            "कर और खर्च क्षमता: कर में बदलाव से मध्य वर्ग की खर्च क्षमता प्रभावित होती है。",
                            "सरकारी योजनाएँ: स्वास्थ्य, शिक्षा, कृषि योजनाओं में निवेश से जीवन स्तर में सुधार。",
                            "रोजगार: सार्वजनिक और निजी निवेश से नई नौकरियां पैदा होती हैं。",
                            "मुद्रास्फीति और जीवन लागत: बड़े पैमाने पर खर्च से कीमतों पर असर पड़ सकता है।"
                        ],
                        style: "unordered"
                    }
                },
                {
                    type: "heading",
                    data: { text: "संभावित बजट प्रावधान: विश्लेषण (Analysis Based on Past Trends)", level: 2 }
                },
                {
                    type: "paragraph",
                    data: { text: "नोट: ये केवल संभावनाएँ हैं, वास्तविक घोषणा नहीं।" }
                },
                {
                    type: "list",
                    data: {
                        items: [
                            "कृषि: फसल बीमा, सिंचाई, ग्रामीण डिजिटल कृषि (ग्रामीण स्थिरता, किसानों की आमदनी)",
                            "स्वास्थ्य: NHM, ग्रामीण स्वास्थ्य केंद्र, टीकाकरण (बेहतर स्वास्थ्य सेवाएँ)",
                            "शिक्षा: स्कूल इंफ्रास्ट्रक्चर, डिजिटल शिक्षा, छात्रवृत्ति (मानव पूंजी विकास)",
                            "इन्फ्रास्ट्रक्चर: सड़क, रेल, स्मार्ट सिटी, डिजिटल कनेक्टिविटी (रोजगार, आर्थिक गतिविधि)",
                            "कर नीति: आयकर सुधार, GST में बदलाव, व्यापार छूट (खर्च क्षमता, निवेश प्रोत्साहन)",
                            "पर्यावरण: नवीकरणीय ऊर्जा, इलेक्ट्रिक वाहन (पर्यावरणीय गुणवत्ता, टिकाऊ विकास)"
                        ],
                        style: "unordered"
                    }
                },
                {
                    type: "heading",
                    data: { text: "बजट 2026 लाइव कवरेज योजना", level: 2 }
                },
                {
                    type: "list",
                    data: {
                        items: [
                            "प्रस्तुति समय: 1 फरवरी 2026",
                            "मीडिया कवरेज: टीवी, डिजिटल पोर्टल, लाइव स्ट्रीम",
                            "विशेष कवरेज: मंत्रालय और योजनाओं का विस्तृत विश्लेषण",
                            "संसदीय अपडेट: बहस, संशोधन और अनुमोदन लाइव ट्रैक"
                        ],
                        style: "unordered"
                    }
                },
                {
                    type: "heading",
                    data: { text: "प्रमुख मंत्रालयों के अनुमानित आवंटन (Analysis)", level: 2 }
                },
                {
                    type: "list",
                    data: {
                        items: [
                            "कृषि: फसल बीमा, सिंचाई, ग्रामीण विकास → ग्रामीण अर्थव्यवस्था स्थिर",
                            "स्वास्थ्य: NHM, टीकाकरण → स्वास्थ्य सेवाओं में सुधार",
                            "शिक्षा: स्कूल, छात्रवृत्ति, डिजिटल शिक्षा → कौशल और मानव पूंजी विकास",
                            "इन्फ्रास्ट्रक्चर: सड़क, रेल, स्मार्ट सिटी → रोजगार और व्यापार",
                            "पर्यावरण: नवीकरणीय ऊर्जा, इलेक्ट्रिक वाहन → पर्यावरण संरक्षण"
                        ],
                        style: "unordered"
                    }
                },
                {
                    type: "heading",
                    data: { text: "राज्य‑विशेष संभावित असर (Hypothetical)", level: 2 }
                },
                {
                    type: "list",
                    data: {
                        items: [
                            "उत्तर प्रदेश: कृषि, ग्रामीण रोजगार, शिक्षा (ग्रामीण स्थिरता, नौकरी)",
                            "महाराष्ट्र: डिजिटल निवेश, उद्योग (आर्थिक गति, स्टार्टअप)",
                            "बिहार: कृषि, स्वास्थ्य (जीवन स्तर में सुधार)",
                            "तमिलनाडु: औद्योगिक प्रोत्साहन, जल संसाधन (आर्थिक विकास)",
                            "कर्नाटक: टेक्नोलॉजी, स्टार्टअप (डिजिटल अर्थव्यवस्था, रोजगार)"
                        ],
                        style: "unordered"
                    }
                },
                {
                    type: "heading",
                    data: { text: "Additional Statistics & Charts (Analysis)", level: 2 }
                },
                {
                    type: "list",
                    data: {
                        items: [
                            "2025–26 में कृषि के लिए केंद्रीय बजट: ₹1.2 लाख करोड़ (पिछले साल +8%)",
                            "शिक्षा: ₹1.05 लाख करोड़",
                            "स्वास्थ्य: ₹85,000 करोड़"
                        ],
                        style: "unordered"
                    }
                },
                {
                    type: "factBox",
                    data: {
                        title: "तथ्य बिंदु (Fast Facts)",
                        facts: [
                            "केंद्रीय बजट 2026 संसद में 1 फरवरी 2026 को पेश होगा।",
                            "बजट सत्र संसद में 28 जनवरी 2026 से शुरू होगा।",
                            "बजट आम जनता, उद्योग, कृषि और शिक्षा पर प्रभाव डालता है।",
                            "संभावित प्रावधान विश्लेषण केवल पिछले रुझानों पर आधारित हैं।",
                            "संसद में चर्चा और अनुमोदन प्रक्रिया पारदर्शी और लोकतांत्रिक है।"
                        ]
                    }
                },
                {
                    type: "heading",
                    data: { text: "FAQs (User Search Value)", level: 2 }
                },
                {
                    type: "paragraph",
                    data: { text: "केंद्रीय बजट 2026 कब पेश होगा?<br>1 फरवरी 2026" }
                },
                {
                    type: "paragraph",
                    data: { text: "बजट सत्र कब शुरू होता है?<br>28 जनवरी 2026" }
                },
                {
                    type: "paragraph",
                    data: { text: "बजट आम जनता को कैसे प्रभावित करता है?<br>कर, सरकारी योजनाएँ, रोजगार और खर्च क्षमता प्रभावित होती है।" }
                },
                {
                    type: "paragraph",
                    data: { text: "बजट में करों के बदलाव कब स्पष्ट होंगे?<br>वित्त मंत्री बजट प्रस्तुति में स्पष्ट करेंगे।" }
                },
                {
                    type: "paragraph",
                    data: { text: "क्या बजट में सब्सिडी हर किसी को मिलती है?<br>नहीं, यह लक्षित योजनाओं के अनुसार दी जाती है।" }
                },
                {
                    type: "paragraph",
                    data: { text: "बजट संशोधन कैसे होते हैं?<br>संसद में बहस, समिति समीक्षा और वोटिंग के बाद।" }
                },
                {
                    type: "paragraph",
                    data: { text: "बजट डिजिटल इंडिया प्रोजेक्ट्स को कैसे प्रभावित करेगा?<br>निवेश बढ़ने से डिजिटल कनेक्टिविटी और स्टार्टअप्स को लाभ होगा।" }
                },
                {
                    type: "link",
                    data: {
                        url: "https://www.bharatkibat.com/8th-pay-commission-after-7th-cpc-salary-structure-hindi",
                        text: "8वां वेतन आयोग: 7th CPC के बाद सरकारी सैलरी सिस्टम में क्या बदल सकता है"
                    }
                },
                {
                    type: "link",
                    data: {
                        url: "https://www.bharatkibat.com/8th-pay-commission-2026-salary-pension-allowances-guide",
                        text: "8वां वेतन आयोग 2026: सैलरी, पेंशन, भत्ते और FAQs – पूरी गाइड"
                    }
                }
            ]
        };

        const result = await Content.findOneAndUpdate(
            { slug: article.slug },
            article,
            { upsert: true, new: true, setDefaultsOnInsert: true }
        );

        return NextResponse.json({ success: true, id: result._id, title: result.title });
    } catch (error) {
        console.error("Seeding error:", error);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return NextResponse.json({ success: false, error: (error as any).message }, { status: 500 });
    }
}

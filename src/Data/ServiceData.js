import backG from "../image/general-surgery.jpg"
import pic from "../image/doc.jpg"
import doc from "../image/drNew.png"


const serviceData = [
    {
        logo: backG,
        title: "GENERAL SURGERY",
        desc: "General surgery is a surgical specialty that focuses on abdominal contents including the esophagus, stomach, small intestine, large intestine, liver, pancreas, gallbladder, appendix and bile ducts, and often the thyroid gland.",
        doc_img: doc,
        docName: "s s bora",
        docEduc: "MBBS",
        location: "B D PANDEY HOSPITAL Pithoragarh",
        docProf: "GENERAL SURGEAN",
        roomNo: 10,
        img2: "opd schedule",
        data: [
            {
                name: "surgery ",
                cost: 1000
            },
            {
                name: "xyz ",
                cost: 5000

            },
            {
                name: "xyz",
                cost: 600
            }
        ],
        DETAILS : `General surgery is a surgical specialty that focuses on abdominal contents including the esophagus, stomach, small intestine, large intestine, liver, pancreas, gallbladder, appendix and bile ducts, and often the thyroid gland. They also deal with diseases involving the skin, breast, soft tissue, trauma, Peripheral artery disease and hernias and perform endoscopic procedures such as gastroscopy and colonoscopy. \n For more information https://en.wikipedia.org/wiki/General_surgery`,
        DETAILS1 :`  `
    },
   {

        logo: pic,
        title: "Child Disease",
        desc: "A pediatrician examines all the diseases related to children",
        doc_img: doc,
        type: "Child Disease",
        docName: "Dr S S NABIYAL",
        docEduc: "MBBS",
        location: "B D PANDEY HOSPITAL Pithoragarh",
        docProf: "PEDIATRICIAN",
        roomNo: 36,
        img3: "OPD SCHEDULE",
        data: [
            {
                name: "xyz ",
                cost: 100
            },
            {
                name: "PQR ",
                cost: 5000

            },
            {
                name: "ABC",
                cost: 600
            }
        ],
        DETAILS: " A pediatrician is a medical doctor who specializes in treating infants, children, adolescents, and young adults. Pediatric care can begin before conception and continue through pregnancy.          What do they do?",
        DETAILS1 :`Pediatricians perform a diverse range of health- related services that range from health and wellness screenings to management of complex medical conditions.
   Pediatricians generally perform the following procedures:
   1)physical exams
   2)giving vaccinations
   3)treating injuries, including fractures and dislocations
   4)evaluating a child’s physical, emotional, and social development
   5)prescribing medications, such as pain relievers and antibiotics
   6)providing general health advice
   7)diagnosing and treating various medical conditions
   8)connecting families with other pediatric specialists, if needed.
   For more information click here.https://www.medicalnewstoday.com/articles/what-is-a-pediatrician#what-do-they-do"`
},

    {
        logo: backG,
        title: "ORTHOPADIC",
        desc: "Orthopedics is a branch of medicine that focuses on the care of the skeletal system and its interconnecting parts.",
        doc_img: doc,
        type: "RTHOPADIC",
        docName: "Dr DEEPAK CHANKANYAL",
        docEduc: "MBBS",
        location: "B D PANDEY HOSPITAL Pithoragarh",
        docProf: "ORTHOPADIST",
        roomNo: 26,
        img2: "opd schedule",
        data: [
            {
                name: "ABC ",
                cost: 100
            },
            {
                name: "xyz ",
                cost: 5000

            },
            {
                name: "PQR",
                cost: 600
            }
        ],
   DETAILS:  "What do orthopedists treat?  Orthopedists treat a wide variety of musculoskeletal conditions. These conditions may be present from birth, or they may occur as a result of injury or age-related wear and tear.",
   DETAILS1 :` Below are some of the most common conditions that an orthopedist may treat:
1) joint pain from arthritis
2) bone fractures
3) soft tissue (muscle, tendon, and ligament) injuries
4) back pain
5) neck pain
6) shoulder pain and problems, such as bursitis
7) carpal tunnel syndrome
8) overuse and sports injuries, including tendinitis, meniscus tears, and anterior cruciate ligament (ACL) tears
9) congenital conditions, such as clubfoot and scoliosis
For more information click on this : https://www.medicalnewstoday.com/articles/what-is-orthopedics#conditions `
  },   

    {
         logo: backG,
            title: "EYE SURGERY",
            desc: "Eye doctor deals with the diseases related to eyes.",
            doc_img: doc,
            type: "EYE TREATMENTS",
            docName: "K S BRIJWAL",
            docEduc: "MBBS",
            location: "B D PANDEY HOSPITAL Pithoragarh",
            docProf: "ORTHOPADIST",
            roomNo: 5,
            img2: "opd schedule",
            data: [
                {
                    name: "ABC ",
                    cost: 100
                },
                {
                    name: "xyz ",
                    cost: 50
    
                },
                {
                    name: "PQR",
                    cost: 600
                }
            ],
   
          DETAILS:  "There are mainly two type of eye doctors: ",
          DETAILS1 :` Ophthalmologist: Medical and Surgical Eye Care
    Optometrist (OD): Vision Care and Eye Care Services
    For more information click on this link:
    https://www.webmd.com/eye-health/eye-doctors-optometrists-ophthalmologists`

},
    {
        logo: backG,
        title: "ENT",
        desc: "An ear, nose, and throat doctor (ENT) specializes in everything having to do with those parts of the body.",
        doc_img: doc,
        type: "ENT",
        docName: "Dr Kavita Lohani",
        docEduc: "MBBS",
        location: "B D PANDEY HOSPITAL Pithoragarh",
        docProf: "ENT SURGON",
        roomNo: 41,
        img2: "opd schedule",
        data: [
                {
                    name: "ABC ",
                    cost: 100
                },
                {
                    name: "xyz ",
                    cost: 500
        
                },
                {
                    name: "PQR",
                    cost: 600
                }                      
                ],
         DETAILS:  "An ear, nose, and throat doctor (ENT) specializes in everything having to do with those parts of the body. They’re also called otolaryngologists.      What Does an ENT do?",
         DETAILS1 :`ENTs deal with anything that has to do with the head, neck, and ears in adults and children, including:
Hearing
The adenoids and tonsils
The thyroid
The sinuses
The larynx
The mouth
The throat
Ear tubes
Ear surgeries
Cancers of the head, neck, and throat
Reconstructive and cosmetic surgery on the head and neck    
For more information click here:
       https://www.webmd.com/a-to-z-guides/what-is-an-ent-ear-nose-throat-doctor`
   },
     {
        logo: backG,
        title: "DENTIST",
        desc: "Dentists are trained professionals who help care for the teeth and mouth.",
        doc_img: doc,
        type: "DENTIST",
        docName: "Dr AKANSHA VATSHA",
        docEduc: "MBBS",
        location: "B D PANDEY HOSPITAL Pithoragarh",
        docProf: "DENIST",
        roomNo: 26,
        img2: "opd schedule",
        data: [
                {
                    name: "ABC ",
                    cost: 100
                },
                {
                    name: "xyz ",
                    cost: 50
        
                },
                {
                    name: "PQR",
                    cost: 600
                }
        ],

  DETAILS:  "What Does a Dentist Do?    A dentist has many responsibilities, and one of the most important is promoting good dental hygiene. This helps to prevent complications in your mouth or other parts of the body.",
 
  DETAILS1 :`A dentist also diagnoses and treats problems of the gums, teeth, and mouth. Dentists use modern technology and equipment like X-ray machines, lasers, drills, brushes, scalpels, and other medical tools when performing dental procedures. They also wear protective equipment like gloves, masks, and safety glasses to prevent the spread of germs or bacteria.
For more information click here: https://www.webmd.com/a-to-z-guides/what-is-a-dentist `
},
        {
            logo: backG,
            title: "PATHOLOGIST",
            desc: "A pathologist is a medical healthcare provider who examines bodies and body tissues..",
            doc_img: doc,
            type: "PATHOLOGY",
            docName: "Dr Sunil Kapkoti",
            docEduc: "MBBS",
            location: "B D PANDEY HOSPITAL Pithoragarh",
            docProf: "PATHOLOGIST",
            roomNo: 26,
            img2: "opd schedule",
            data: [
                    {
                        name: "ABC ",
                        cost: 100 
                    },
                    {
                        name: "xyz ",
                        cost: 50
            
                    },
                    {
                        name: "PQR",
                        cost: 600
                    }
            ],

  DETAILS:  "A pathologist is a medical healthcare provider who examines bodies and body tissues. He or she is also responsible for performing lab tests. A pathologist helps other healthcare providers reach diagnoses and is an important member of the treatment team.",
  DETAILS1 :` https://www.hopkinsmedicine.org/health/treatment-tests-and-therapies/the-pathologist#:~:text=A%20pathologist%20is%20a%20medical,member%20of%20the%20treatment%20team.`
  },
 {
        logo: backG,
        title: "PHYSICIAN",
        desc: "Physicians work to maintain, promote, and restore health by studying, diagnosing, and treating injuries and diseases..",
        doc_img: doc,
        type: "PHYSICIAN",
        docName: "Dr D S DHRAMKSHTU",
        docEduc: "MBBS",
        location: "B D PANDEY HOSPITAL Pithoragarh",
        docProf: "PHYSICIAN",
        roomNo: 20,
        img2: "opd schedule",
        data: [
                {
                    name: "ABC ",
                    cost: 100
                },
                {
                    name: "xyz ",
                    cost: 50
        
                },
                {
                    name: "PQR",
                    cost: 600
                }
        ],
   DETAILS:  "A physician is a general term for a doctor who has earned a medical degree. Physicians work to maintain, promote, and restore health by studying, diagnosing, and treating injuries and diseases.",
   DETAILS1 :` For more information click here:
   https://www.webmd.com/a-to-z-guides/what-is-physician`
},
    {
        logo: backG,
        title: "RADIOLOGY",
        desc: "Radiology is a branch of medicine that uses imaging technology to diagnose and treat disease.Radiology is a branch of medicine that uses imaging technology to diagnose and treat disease..",
        doc_img: doc,
        type: "RADIOLOGIST",
        docName: "Dr N S GUNJYAL",
        docEduc: "MBBS",
        location: "B D PANDEY HOSPITAL Pithoragarh",
        docProf: "RADIOLOGIST",
        roomNo: 42,
        img2: "opd schedule",
        data: [
                {
                    name: "ABC ",
                    cost: 100
                },
                {
                    name: "xyz ",
                    cost: 50
        
                },
                {
                    name: "PQR",
                    cost: 600
                }
        ],
      DETAILS:  "Radiology is a branch of medicine that uses imaging technology to diagnose and treat disease.",
      DETAILS1 :` Radiology may be divided into two different areas, diagnostic radiology and interventional radiology. Doctors who specialize in radiology are called radiologists.
   For more information click here:
   https://medlineplus.gov/ency/article/007451.htm`
    },
    {
        logo: backG,
        title: "SKIN TREATMENT",
        desc: "A dermatologist is a doctor who specializes in conditions involving the skin, hair, and nails. A dermatologist can identify and treat more than 3,000 conditions.",
        doc_img: doc,
        type: "DERMATOLOGIST",
        docName: "Dr SUNIL",
        docEduc: "MBBS",
        location: "B D PANDEY HOSPITAL Pithoragarh",
        docProf: "ERMATOLOGIST",
        roomNo: 20,
        img2: "opd schedule",
        data: [
                {
                    name: "ABC ",
                    cost: 100
                },
                {
                    name: "xyz ",
                    cost: 50
                },
                {
                    name: "PQR",
                    cost: 600
                }
        ],
     DETAILS:  " What is a dermatologist?  A dermatologist is a doctor who specializes in conditions involving the skin, hair, and nails. A dermatologist can identify and treat more than 3,conditions. These conditions include eczema, psoriasis, and skin cancer, among many others.",
     DETAILS1 :` For more information click here:
   https://www.aad.org/public/fad/what-is-a-derm`
   }
]

export default serviceData;
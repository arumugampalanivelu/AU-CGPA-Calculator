/*

THIS ENTIRE CODE WORK AS A DATA BASE; THAT STORE THE SUBJECTS AND IT'S CREDITS.

CONSTRUCTION OF THIS CODE.

const subjects = {
    'Year': {                                   // in "year" add the regulaion
      'Dep': {                                 // in "dep" add the department
      1: [                                    // the numbers "1:" and "2:" represent the semsters
        { name: 'Subject name', credit: 4 }, // iadd the subject name and credit
        {....
      ],
      2: [
        { name: 'Subject name', credit: 4 },
        {...
      .....
      }
    },
    'Year's': {
      'Dep': {
      1: [
        { name: 'Subject name', credit: 4 },
        {....
      ],
      2: [
        { name: 'Subject name', credit: 4 },
        {...
      .....
      }
    }
}
};
*/
const subjects = {
  '2017': {
      'ECE': {
        1: [
          { name: 'HS8151 Communicative English', credit: 4 },
          { name: 'MA8151 Engineering Mathematics - I', credit: 4 },
          { name: 'PH8151 Engineering Physics', credit: 3 },
          { name: 'CY8151 Engineering Chemistry', credit: 3 },
          { name: 'GE8151 Problem Solving and Python Programming', credit: 3 },
          { name: 'GE8152 Engineering Graphics', credit: 4 },
          { name: 'GE8161 Problem Solving and Python Programming Laboratory', credit: 2 },
          { name: 'BS8161 Physics and Chemistry Laboratory', credit: 2 }
        ],
        2: [
          { name: 'HS8251 Technical English', credit: 4 },
          { name: 'MA8251 Engineering Mathematics - II', credit: 4 },
          { name: 'PH8253 Physics for Electronics Engineering', credit: 3 },
          { name: 'BE8254 Basic Electrical and Instrumentation Engineering', credit: 3 },
          { name: 'EC8251 Circuit Analysis', credit: 4 },
          { name: 'EC8252 Electronic Devices', credit: 3 },
          { name: 'EC8261 Circuits and Devices Laboratory', credit: 2 },
          { name: 'GE8261 Engineering Practices Laboratory', credit: 2 }
        ],
        3: [
          { name: 'MA8352 Linear Algebra and Partial Differential Equations', credit: 4 },
          { name: 'EC8393 Fundamentals of Data Structures In C', credit: 3 },
          { name: 'EC8351 Electronic Circuits- I', credit: 3 },
          { name: 'EC8352 Signals and Systems', credit: 4 },
          { name: 'EC8392 Digital Electronics', credit: 3 },
          { name: 'EC8391 Control Systems Engineering', credit: 3 },
          { name: 'EC8381 Fundamentals of Data Structures in C Laboratory', credit: 2 },
          { name: 'EC8361 Analog and Digital Circuits Laboratory', credit: 2 },
          { name: 'HS8381 Interpersonal Skills/Listening & Speaking', credit: 1 }
        ],
        4: [
          { name: 'MA8451 Probability and Random Processes', credit: 4 },
          { name: 'EC8452 Electronic Circuits II', credit: 3 },
          { name: 'EC8491 Communication Theory', credit: 3 },
          { name: 'EC8451 Electromagnetic Fields', credit: 4 },
          { name: 'EC8453 Linear Integrated Circuits', credit: 3 },
          { name: 'GE8291 Environmental Science and Engineering', credit: 3 },
          { name: 'EC8461 Circuits Design and Simulation Laboratory', credit: 2 },
          { name: 'EC8462 Linear Integrated Circuits Laboratory', credit: 2 }
        ],
        5: [
          { name: 'EC8501 Digital Communication', credit: 3 },
          { name: 'EC8553 Discrete-Time Signal Processing', credit: 4 },
          { name: 'EC8552 Computer Architecture and Organization', credit: 3 },
          { name: 'EC8551 Communication Networks', credit: 3 },
          { name: 'Professional Elective I', credit: 3 },
          { name: 'Open Elective I', credit: 3 },
          { name: 'EC8562 Digital Signal Processing Laboratory', credit: 2 },
          { name: 'EC8561 Communication Systems Laboratory', credit: 2 },
          { name: 'EC8563 Communication Networks Laboratory', credit: 2 }
        ],
        6:[
          {name:'EC8691 Microprocessors and Microcontrollers' ,credit :3},
          {name:'EC8095 VLSI Design' ,credit :3},
          {name:'EC8652 Wireless Communication' ,credit :3},
          {name:'MG8591 Principles of Management' ,credit :3},
          {name:'EC8651 Transmission Lines and RF Systems' ,credit :3},
          {name:'Professional Elective -II' ,credit :3},
          {name:'EC8681 Microprocessors and Microcontrollers Laboratory' ,credit :2},
          {name:'EC8661 VLSI Design Laboratory' ,credit :2},
          {name:'EC8611 Technical Seminar' ,credit :1},
          {name:'HS8581 Professional Communication' ,credit :1}
        ],
        7:[
          {name:'EC8701 Antennas and Microwave Engineering' ,credit :3},
          {name:'EC8751 Optical Communication' ,credit :3},
          {name:'EC8791 Embedded and Real Time Systems' ,credit :3},
          {name:'EC8702 Ad hoc and Wireless Sensor Networks' ,credit :3},
          {name:'Professional Elective -III' ,credit :3},
          {name:'Open Elective - II' ,credit :3},
          {name:'EC8711 Embedded Laboratory' ,credit :2},
          {name:'EC8761 Advanced Communication Laboratory' ,credit :2}
        ],
        8:[
          {name:'Professional Elective IV' ,credit :3},
          {name:'Professional Elective V' ,credit :3},
          {name:'Project Work' ,credit :20}
        ]
      },
    'EEE': {
        
    },
    'CSE': {
      
    },
    'Civil': {
      
    },
    'Mech': {
      
    },
    
    // Add other departments (ECE, CSE, Civil, Mech) similarly...
  },
  '2021': {
      'ECE': {
        1: [
        { name: 'HS3152 Professional English - I', credit: 3 },
        { name: 'MA3151 Matrices and Calculus', credit: 4 },
        { name: 'PH3151 Engineering Physics', credit: 3 },
        { name: 'CY3151 Engineering Chemistry', credit: 3 },
        { name: 'GE3151 Problem Solving and Python Programming', credit: 3 },
        { name: 'GE3152 Heritage of Tamils', credit: 1 },
        { name: 'GE3171 Problem Solving and Python Programming Laboratory', credit: 2 },
        { name: 'BS3171 Physics and Chemistry Laboratory', credit: 2 },
        { name: 'GE3172 English Laboratory', credit: 1 }
        ],
        2: [
        { name: 'HS3252 Professional English - II', credit: 2 },
        { name: 'MA3251 Statistics and Numerical Methods', credit: 4 },
        { name: 'PH3254 Physics for Electronics Engineering', credit: 3 },
        { name: 'BE3254 Electrical and Instrumentation Engineering', credit: 3 },
        { name: 'GE3251 Engineering Graphics', credit: 4 },
        { name: 'EC3251 Circuit Analysis', credit: 4 },
        { name: 'GE3252 Tamils and Technology', credit: 1 },
        { name: 'GE3271 Engineering Practices Laboratory', credit: 2 },
        { name: 'EC3271 Circuits Analysis Laboratory', credit: 1 },
        { name: 'GE3272 Communication Laboratory / Foreign Language', credit: 2 }
        ],
        3:[
        {name:'MA3355 Random Processes and Linear Algebra' ,credit :4},
        {name:'CS3353 C Programming and Data Structures' ,credit :3},
        {name:'EC3354 Signals and Systems' ,credit :4},
        {name:'EC3353 Electronic Devices and Circuits' ,credit :3},
        {name:'EC3351 Control Systems' ,credit :3},
        {name:'EC3352 Digital Systems Design' ,credit :4},
        {name:'EC3361 Electronic Devices and Circuits Laboratory' ,credit :1.5},
        {name:'CS3362 C Programming and Data Structures Laboratory' ,credit :1.5},
        {name:'GE3361 Professional Development' ,credit :1}
        ],
        4:[
        {name:'EC3452 Electromagnetic Fields' ,credit :3},
        {name:'EC3401 Networks and Security' ,credit :4},
        {name:'EC3451 Linear Integrated Circuits' ,credit :3},
        {name:'EC3492 Digital Signal Processing' ,credit :4},
        {name:'EC3491 Communication Systems' ,credit :3},
        {name:'GE3451 Environmental Sciences and Sustainability' ,credit :2},
        {name:'NCC Credit Course Level 2' ,credit :3},
        {name:'EC3461 Communication Systems Laboratory' ,credit :1.5},
        {name:'EC3462 Linear Integrated Circuits Laboratory' ,credit :1.5}
        ],
        5:[
        {name:'EC3501 Wireless Communication' ,credit :4},
        {name:'EC3552 VLSI and Chip Design' ,credit :3},
        {name:'EC3551 Transmission Lines and RF Systems' ,credit :3},
        {name:'Professional Elective I' ,credit :3},
        {name:'Professional Elective II' ,credit :3},
        {name:'Professional Elective III' ,credit :3},
        {name:'Mandatory Course-I' ,credit :0}
        ],
        6:[
        {name:'ET3491 Embedded Systems and IOT Design' ,credit :4},
        {name:'CS3491 Artificial Intelligence and Machine Learning' ,credit :4},
        {name:'Open Elective- I' ,credit :3},
        {name:'Professional Elective IV' ,credit :3},
        {name:'Professional Elective V' ,credit :3},
        {name:'Professional Elective VI' ,credit :3},
        {name:'Mandatory Course-II' ,credit :0},
        {name:'NCC Credit Course Level 3' ,credit :3}
        ],
        7:[
        { name: 'GE3791 Human Values and Ethics', credit: 2 },
        { name: 'Elective - Management', credit: 3 },
        { name: 'Open Elective - II', credit: 3 },
        { name: 'Open Elective - III', credit: 3 },
        { name: 'Open Elective - IV', credit: 3 }
        ],
        8:[
        { name: 'EC3811 Project Work / Internship', credit: 10 }
        ]
      },
      'EEE': {
        
      },
      'CSE': {
        
      },
      'Civil': {
        1: [
        { name: 'HS3152 Professional English - I', credit: 3 },
        { name: 'MA3151 Matrices and Calculus', credit: 4 },
        { name: 'PH3151 Engineering Physics', credit: 3 },
        { name: 'CY3151 Engineering Chemistry', credit: 3 },
        { name: 'GE3151 Problem Solving and Python Programming', credit: 3 },
        { name: 'GE3152 Heritage of Tamils', credit: 1 },
        { name: 'GE3171 Problem Solving and Python Programming Laboratory', credit: 2 },
        { name: 'BS3171 Physics and Chemistry Laboratory', credit: 2 },
        { name: 'GE3172 English Laboratory', credit: 1 }
        ],
        2: [
        { name: 'HS3252 Professional English - II', credit: 2 },
        { name: 'MA3251 Statistics and Numerical Methods', credit: 4 },
        { name: 'PH3201 Physics for Civil Engineering', credit: 3 },
        { name: 'BE3252 Basic Electrical, Electronics and Instrumentation Engineering', credit: 3 },
        { name: 'GE3251 Engineering Graphics', credit: 4 },
        { name: 'NCC Credit Course Level 1', credit: 2 },
        { name: 'GE3252 Tamils and Technology', credit: 1 },
        { name: 'GE3271 Engineering Practices Laboratory', credit: 2 },
        { name: 'BE3272 Basic Electrical, Electronics and Instrumentation Engineering Laboratory', credit: 2 },
        { name: 'GE3272 Communication Laboratory / Foreign Language', credit: 2 }
        ],
        3:[
        {name:'MA3351 Transforms and Partial Differential Equations' ,credit :4},
        {name:'ME3351 Engineering Mechanics' ,credit :3},
        {name:'CE3301 Fluid Mechanics' ,credit :3},
        {name:'CE3302 Construction Materials and Technology' ,credit :3},
        {name:'CE3303 Water Supply and Wastewater Engineering' ,credit :4},
        {name:'CE3351 Surveying and Levelling' ,credit :3},
        {name:'CE3361 Surveying and Levelling Laboratory' ,credit :1.5},
        {name:'CE3311 Water and Wastewater Analysis Laboratory' ,credit :1.5},
        {name:'GE3361 Professional Development' ,credit :1}
        ],
        4:[
        {name:'CE3401 Applied Hydraulics Engineering' ,credit :4},
        {name:'CE3402 Strength of Materials' ,credit :3},
        {name:'CE3403 Concrete Technology' ,credit :3},
        {name:'CE3404 Soil Mechanics' ,credit :3},
        {name:'CE3405 Highway and Railway Engineering' ,credit :3},
        {name:'GE3451 Environmental Sciences and Sustainability' ,credit :2},
        {name:'NCC Credit Course Level 2' ,credit :3},
        {name:'CE3411 Hydraulic Engineering Laboratory' ,credit :1.5},
        {name:'CE3412 Materials Testing Laboratory' ,credit :2}
        ]
      },
      'Mech': {
        1: [
        { name: 'HS3152 Professional English - I', credit: 3 },
        { name: 'MA3151 Matrices and Calculus', credit: 4 },
        { name: 'PH3151 Engineering Physics', credit: 3 },
        { name: 'CY3151 Engineering Chemistry', credit: 3 },
        { name: 'GE3151 Problem Solving and Python Programming', credit: 3 },
        { name: 'GE3152 Heritage of Tamils', credit: 1 },
        { name: 'GE3171 Problem Solving and Python Programming Laboratory', credit: 2 },
        { name: 'BS3171 Physics and Chemistry Laboratory', credit: 2 },
        { name: 'GE3172 English Laboratory', credit: 1 }
        ],
        2: [
        { name: 'HS3252 Professional English - II', credit: 2 },
        { name: 'MA3251 Statistics and Numerical Methods', credit: 4 },
        { name: 'PH3251 Materials Science', credit: 3 },
        { name: 'BE3251 Basic Electrical and Electronics Engineering', credit: 3 },
        { name: 'GE3251 Engineering Graphics', credit: 4 },
        { name: 'GE3252 Tamils and Technology', credit: 1 },
        { name: 'NCC Credit Course Level 1', credit: 2 },
        { name: 'GE3271 Engineering Practices Laboratory', credit: 2 },
        { name: 'BE3271 Basic Electrical and Electronics Engineering Laboratory', credit: 2 },
        { name: 'GE3272 Communication Laboratory / Foreign Language', credit: 2 }
        ],
        3:[
        {name:'MA3351 Transforms and Partial Differential Equations' ,credit :4},
        {name:'ME3351 Engineering Mechanics' ,credit :3},
        {name:'ME3391 Engineering Thermodynamics' ,credit :3},
        {name:'CE3391 Fluid Mechanics and Machinery' ,credit :4},
        {name:'ME3392 Engineering Materials and Metallurgy' ,credit :3},
        {name:'ME3393 Manufacturing Processes' ,credit :3},
        {name:'ME3381 Computer Aided Machine Drawing' ,credit :2},
        {name:'ME3382 Manufacturing Technology Laboratory' ,credit :2},
        {name:'GE3361 Professional Development' ,credit :1}
        ],
        4:[
        {name:'ME3491 Theory of Machines' ,credit :3},
        {name:'ME3451 Thermal Engineering' ,credit :4},
        {name:'ME3492 Hydraulics and Pneumatics' ,credit :3},
        {name:'ME3493 Manufacturing Technology' ,credit :3},
        {name:'CE3491 Strength of Materials' ,credit :3},
        {name:'GE3451 Environmental Sciences and Sustainability' ,credit :2},
        {name:'NCC Credit Course Level 2', credit :3},
        {name:'CE3481 Strength of Materials and Fluid Machinery Laboratory' ,credit :2},
        {name:'ME3461 Thermal Engineering Laboratory' ,credit :2}
        ],
        5:[
        {name:'ME3591 Design of Machine Elements' ,credit :4},
        {name:'ME3592 Metrology and Measurements' ,credit :3},
        {name:'Professional Elective I' ,credit :3},
        {name:'Professional Elective II' ,credit :3},
        {name:'Professional Elective III' ,credit :3},
        {name:'Mandatory Course-I' ,credit :0},
        {name:'ME3511 Summer Internship*' ,credit :1},
        {name:'ME3581 Metrology and Dynamics Laboratory' ,credit :2}
        ],
        6:[
        {name:'ME3691 Heat and Mass Transfer' ,credit :4},
        {name:'Professional Elective IV' ,credit :3},
        {name:'Professional Elective V' ,credit :3},
        {name:'Professional Elective VI' ,credit :3},
        {name:'Professional Elective VII' ,credit :3},
        {name:'Open Elective - I*' ,credit :3},
        {name:'Mandatory Course-II&' ,credit :0},
        {name:'NCC Credit Course Level 3#' ,credit :3},
        {name:'ME3681 CAD/CAM Laboratory' ,credit :2},
        {name:'ME3682 Heat Transfer Laboratory' ,credit :2}
        ],
        7:[
        { name: 'ME3791 Mechatronics and IoT', credit: 3 },
        { name: 'ME3792 Computer Integrated Manufacturing', credit: 3 },
        { name: 'GE3791 Human Values and Ethics', credit: 2 },
        { name: 'GE3792 Industrial Management', credit: 3 },
        { name: 'Open Elective - II**', credit: 3 },
        { name: 'Open Elective - III***', credit: 3 },
        { name: 'Open Elective - IV***', credit: 3 },
        { name: 'ME3781 Mechatronics and IoT Laboratory', credit: 2 },
        { name: 'ME3711 Summer Internship#', credit: 1 }
        ],
        8:[
        { name: 'ME3811 Project Work / Internship', credit: 10 }
        ]
      },
  }
};
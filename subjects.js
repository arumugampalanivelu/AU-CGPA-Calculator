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
      { name: 'BE8252 Basic Civil and Mechanical Engineering', credit: 4 },
      { name: 'EE8251 Circuit Theory', credit: 3 },
      { name: 'GE8291 Environmental Science and Engineering', credit: 3 },
      { name: 'GE8261 Engineering Practices Laboratory', credit: 2 },
      { name: 'EE8261 Electric Circuits Laboratory', credit: 2 }
      ],
      3:[
      {name:'MA8353 Transforms and Partial Differential Equations' ,credit :4},
      {name:'EE8351 Digital Logic Circuits' ,credit :3},
      {name:'EE8391 Electromagnetic Theory' ,credit :3},
      {name:'EE8301 Electrical Machines - I' ,credit :3},
      {name:'EC8353 Electron Devices and Circuits' ,credit :3},
      {name:'ME8792 Power Plant Engineering' ,credit :3},
      {name:'EC8311 Electronics Laboratory' ,credit :2},
      {name:'EE8311 Electrical Machines Laboratory - I' ,credit :2}
      ],
      4:[
      {name:'MA8491 Numerical Methods' ,credit :4},
      {name:'EE8401 Electrical Machines - II' ,credit :3},
      {name:'EE8402 Transmission and Distribution' ,credit :3},
      {name:'EE8403 Measurements and Instrumentation' ,credit :3},
      {name:'EE8451 Linear Integrated Circuits and Applications' ,credit :3},
      {name:'IC8451 Control Systems' ,credit :4},
      {name:'EE8411 Electrical Machines Laboratory - II' ,credit :2},
      {name:'EE8461 Linear and Digital Integrated Circuits Laboratory' ,credit :2},
      {name:'EE8412 Technical Seminar' ,credit :1}
      ],
      5:[
      {name:'EE8501 Power System Analysis' ,credit :3},
      {name:'EE8551 Microprocessors and Microcontrollers' ,credit :3},
      {name:'EE8552 Power Electronics' ,credit :3},
      {name:'EE8591 Digital Signal Processing' ,credit :3},
      {name:'CS8392 Object Oriented Programming' ,credit :3},
      {name:'Open Elective I' ,credit :3},
      {name:'EE8511 Control and Instrumentation Laboratory' ,credit :2},
      {name:'HS8581 Professional Communication' ,credit :1},
      {name:'CS8383 Object Oriented Programming Laboratory' ,credit :2}
      ],
      6:[
      {name:'EE8601 Solid State Drives' ,credit :3},
      {name:'EE8602 Protection and Switchgear' ,credit :3},
      {name:'EE8691 Embedded Systems' ,credit :3},
      {name:'Professional Elective I' ,credit :3},
      {name:'Professional Elective II' ,credit :3},
      {name:'EE8661 Power Electronics and Drives Laboratory' ,credit :2},
      {name:'EE8681 Microprocessors and Microcontrollers Laboratory' ,credit :2},
      {name:'EE8611 Mini Project' ,credit :2}
      ],
      7:[
      { name: 'EE8701 High Voltage Engineering', credit: 3 },
      { name: 'EE8702 Power System Operation and Control', credit: 3 },
      { name: 'EE8703 Renewable Energy Systems', credit: 3 },
      { name: 'Open Elective II', credit: 3 },
      { name: 'Professional Elective III', credit: 3 },
      { name: 'Professional Elective IV', credit: 3 },
      { name: 'EE8711 Power System Simulation Laboratory', credit: 2 },
      { name: 'EE8712 Renewable Energy Systems Laboratory', credit: 2 }
      ],
      8:[
      { name: 'Professional Elective V', credit: 3 },
      { name: 'Professional Elective VI', credit: 3 },
      { name: 'EE8811 Project Work', credit: 10 }
      ]
    },
    'CSE': {
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
      { name: 'PH8252 Physics for Information Science', credit: 3 },
      { name: 'BE8255 Basic Electrical, Electronics and Measurement Engineering', credit: 4 },
      { name: 'GE8291 Environmental Science and Engineering', credit: 3 },
      { name: 'CS8251 Programming in C', credit: 3 },
      { name: 'GE8261 Engineering Practices Laboratory', credit: 2 },
      { name: 'CS8261 C Programming Laboratory', credit: 2 }
      ],
      3: [
          { name: 'MA8351 Discrete Mathematics', credit: 4 },
          { name: 'CS8351 Digital Principles and System Design', credit: 3 },
          { name: 'CS8391 Data Structures', credit: 3 },
          { name: 'CS8392 Object Oriented Programming', credit: 3 },
          { name: 'EC8395 Communication Engineering', credit: 3 },
          { name: 'CS8381 Data Structures Laboratory', credit: 2 },
          { name: 'CS8382 Object Oriented Programming Laboratory', credit: 2 },
          { name: 'CS8383 Digital Systems Laboratory', credit: 2 },
          { name: 'HS8381 Interpersonal Skills/Listening & Speaking', credit: 2 }
      ],
      4: [
          { name: 'MA8402 Probability and Queueing Theory', credit: 4 },
          { name: 'CS8491 Computer Architecture', credit: 3 },
          { name: 'CS8492 Database Management Systems', credit: 3 },
          { name: 'CS8451 Design and Analysis of Algorithms', credit: 3 },
          { name: 'CS8493 Operating Systems', credit: 3 },
          { name: 'CS8494 Software Engineering', credit: 3 },
          { name: 'CS8481 Database Management Systems Laboratory', credit: 2 },
          { name: 'CS8461 Operating Systems Laboratory', credit: 2 },
          { name: 'HS8461 Advanced Reading and Writing', credit: 2 }
      ],
      5: [
          { name: 'MA8551 Algebra and Number Theory', credit: 4 },
          { name: 'CS8591 Computer Networks', credit: 3 },
          { name: 'EC8691 Microprocessors and Microcontrollers', credit: 3 },
          { name: 'CS8501 Theory of Computation', credit: 3 },
          { name: 'CS8592 Object Oriented Analysis and Design', credit: 3 },
          { name: 'OE33003 Open Elective I', credit: 3 },
          { name: 'EC8681 Microprocessors and Microcontrollers Laboratory', credit: 2 },
          { name: 'CS8582 Object Oriented Analysis and Design Laboratory', credit: 2 },
          { name: 'CS8581 Networks Laboratory', credit: 2 }
      ],
      6: [
          { name: 'CS8651 Internet Programming', credit: 4 },
          { name: 'CS8691 Artificial Intelligence', credit: 3 },
          { name: 'CS8601 Mobile Computing', credit: 3 },
          { name: 'CS8602 Compiler Design', credit: 3 },
          { name: 'CS8603 Distributed Systems', credit: 3 },
          { name: 'PE Professional Elective I', credit: 3 },
          { name: 'CS8661 Internet Programming Laboratory', credit: 2 },
          { name: 'CS8662 Mobile Application Development Laboratory', credit: 2 },
          { name: 'CS8611 Mini Project', credit: 2 },
          { name: 'HS8581 Professional Communication', credit: 2 }
      ],
      7: [
          { name: 'MG8591 Principles of Management', credit: 4 },
          { name: 'CS8792 Cryptography and Network Security', credit: 3 },
          { name: 'CS8791 Cloud Computing', credit: 3 },
          { name: 'OE Open Elective II', credit: 3 },
          { name: 'PE Professional Elective II', credit: 3 },
          { name: 'PE Professional Elective III', credit: 3 },
          { name: 'CS8711 Cloud Computing Laboratory', credit: 2 },
          { name: 'IT8761 Security Laboratory', credit: 2 }
      ],
      8: [
          { name: 'PE Professional Elective IV', credit: 3 },
          { name: 'PE Professional Elective V', credit: 3 },
          { name: 'CS8811 Project Work', credit: 4 }
      ],
    },
    'Civil': {
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
      { name: 'PH8201 Physics for Civil Engineering', credit: 3 },
      { name: 'BE8251 Basic Electrical and Electronics Engineering', credit: 3 },
      { name: 'GE8291 Environmental Science and Engineering', credit: 3 },
      { name: 'GE8292 Engineering Mechanics', credit: 3 },
      { name: 'GE8261 Engineering Practices Laboratory', credit: 2 },
      { name: 'CE8211 Computer Aided Building Drawing', credit: 2 }
      ],
      3: [
          { name: 'MA8353 Transforms and Partial Differential Equations', credit: 4 },
          { name: 'CE8301 Strength of Materials I', credit: 3 },
          { name: 'CE8302 Fluid Mechanics', credit: 3 },
          { name: 'CE8351 Surveying', credit: 3 },
          { name: 'CE8391 Construction Materials', credit: 3 },
          { name: 'CE8392 Engineering Geology', credit: 3 },
          { name: 'CE8311 Construction Materials Laboratory', credit: 2 },
          { name: 'CE8361 Surveying Laboratory', credit: 2 },
          { name: 'HS8381 Interpersonal Skills / Listening and Speaking', credit: 2 }
      ],
      4: [
          { name: 'MA8491 Numerical Methods', credit: 4 },
          { name: 'CE8401 Construction Techniques and Practices', credit: 3 },
          { name: 'CE8402 Strength of Materials II', credit: 3 },
          { name: 'CE8403 Applied Hydraulic Engineering', credit: 3 },
          { name: 'CE8404 Concrete Technology', credit: 3 },
          { name: 'CE8491 Soil Mechanics', credit: 3 },
          { name: 'CE8481 Strength of Materials Laboratory', credit: 2 },
          { name: 'CE8461 Hydraulic Engineering Laboratory', credit: 2 },
          { name: 'HS8461 Advanced Reading and Writing', credit: 2 }
      ],
      5: [
          { name: 'CE8501 Design of Reinforced Cement Concrete Elements', credit: 3 },
          { name: 'CE8502 Structural Analysis I', credit: 3 },
          { name: 'EN8491 Water Supply Engineering', credit: 3 },
          { name: 'CE8591 Foundation Engineering', credit: 3 },
          { name: 'PE Professional Elective I', credit: 3 },
          { name: 'OE Open Elective I', credit: 3 },
          { name: 'CE8511 Soil Mechanics Laboratory', credit: 2 },
          { name: 'CE8512 Water and Waste Water Analysis Laboratory', credit: 2 },
          { name: 'CE8513 Survey Camp (2 weeks – During IV Semester)', credit: 0 }
      ],
      6: [
          { name: 'CE8601 Design of Steel Structural Elements', credit: 4 },
          { name: 'CE8602 Structural Analysis II', credit: 3 },
          { name: 'CE8603 Irrigation Engineering', credit: 3 },
          { name: 'CE8604 Highway Engineering', credit: 3 },
          { name: 'EN8592 Wastewater Engineering', credit: 3 },
          { name: 'PE Professional Elective II', credit: 3 },
          { name: 'CE8611 Highway Engineering Laboratory', credit: 2 },
          { name: 'CE8612 Irrigation and Environmental Engineering Drawing', credit: 2 },
          { name: 'HS8581 Professional Communication', credit: 2 }
      ],
      7: [
          { name: 'CE8701 Estimation, Costing and Valuation', credit: 3 },
          { name: 'CE8702 Railways, Airports, Docks and Harbour Engineering', credit: 3 },
          { name: 'CE8703 Structural Design and Drawing', credit: 3 },
          { name: 'PE Professional Elective III', credit: 3 },
          { name: 'OE Open Elective II', credit: 3 },
          { name: 'CE8711 Creative and Innovative Project (Activity Based - Subject Related)', credit: 2 },
          { name: 'CE8712 Industrial Training (4 weeks During VI Semester – Summer)', credit: 0 }
      ],
      8: [
          { name: 'PE Professional Elective IV', credit: 3 },
          { name: 'PE Professional Elective V', credit: 3 },
          { name: 'CE8811 Project Work', credit: 2 }
      ],
    },
    'Mech': {
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
          { name: 'PH8251 Materials Science', credit: 3 },
          { name: 'BE8253 Basic Electrical, Electronics and Instrumentation Engineering', credit: 3 },
          { name: 'GE8291 Environmental Science and Engineering', credit: 3 },
          { name: 'GE8292 Engineering Mechanics', credit: 3 },
          { name: 'GE8261 Engineering Practices Laboratory', credit: 2 },
          { name: 'BE8261 Basic Electrical, Electronics and Instrumentation Engineering Laboratory', credit: 2 }
      ],
      3: [
          { name: 'MA8353 Transforms and Partial Differential Equations', credit: 4 },
          { name: 'ME8391 Engineering Thermodynamics', credit: 5 },
          { name: 'CE8394 Fluid Mechanics and Machinery', credit: 4 },
          { name: 'ME8351 Manufacturing Technology - I', credit: 3 },
          { name: 'EE8353 Electrical Drives and Controls', credit: 3 },
          { name: 'ME8361 Manufacturing Technology Laboratory - I', credit: 2 },
          { name: 'ME8381 Computer Aided Machine Drawing', credit: 2 },
          { name: 'EE8361 Electrical Engineering Laboratory', credit: 2 },
          { name: 'HS8381 Interpersonal Skills / Listening & Speaking', credit: 2 }
      ],
      4: [
          { name: 'MA8452 Statistics and Numerical Methods', credit: 4 },
          { name: 'ME8492 Kinematics of Machinery', credit: 3 },
          { name: 'ME8451 Manufacturing Technology – II', credit: 3 },
          { name: 'ME8491 Engineering Metallurgy', credit: 3 },
          { name: 'CE8395 Strength of Materials for Mechanical Engineers', credit: 3 },
          { name: 'ME8493 Thermal Engineering - I', credit: 3 },
          { name: 'ME8462 Manufacturing Technology Laboratory – II', credit: 2 },
          { name: 'CE8381 Strength of Materials and Fluid Mechanics and Machinery Laboratory', credit: 2 },
          { name: 'HS8461 Advanced Reading and Writing', credit: 2 }
      ],
      5: [
          { name: 'ME8595 Thermal Engineering - II', credit: 3 },
          { name: 'ME8593 Design of Machine Elements', credit: 3 },
          { name: 'ME8501 Metrology and Measurements', credit: 4 },
          { name: 'ME8594 Dynamics of Machines', credit: 3 },
          { name: 'OE Open Elective I', credit: 3 },
          { name: 'ME8511 Kinematics and Dynamics Laboratory', credit: 2 },
          { name: 'ME8512 Thermal Engineering Laboratory', credit: 2 },
          { name: 'ME8513 Metrology and Measurements Laboratory', credit: 2 }
      ],
      6: [
          { name: 'ME8651 Design of Transmission Systems', credit: 4 },
          { name: 'ME8691 Computer Aided Design and Manufacturing', credit: 3 },
          { name: 'ME8693 Heat and Mass Transfer', credit: 3 },
          { name: 'ME8692 Finite Element Analysis', credit: 3 },
          { name: 'ME8694 Hydraulics and Pneumatics', credit: 3 },
          { name: 'PE Professional Elective - I', credit: 3 },
          { name: 'ME8681 CAD / CAM Laboratory', credit: 2 },
          { name: 'ME8682 Design and Fabrication Project', credit: 2 },
          { name: 'HS8581 Professional Communication', credit: 2 }
      ],
      7: [
          { name: 'ME8792 Power Plant Engineering', credit: 3 },
          { name: 'ME8793 Process Planning and Cost Estimation', credit: 3 },
          { name: 'ME8791 Mechatronics', credit: 3 },
          { name: 'OE Open Elective - II', credit: 3 },
          { name: 'PE Professional Elective – II', credit: 3 },
          { name: 'PE Professional Elective – III', credit: 3 },
          { name: 'ME8711 Simulation and Analysis Laboratory', credit: 2 },
          { name: 'ME8781 Mechatronics Laboratory', credit: 2 },
          { name: 'ME8712 Technical Seminar', credit: 1 }
      ],
      8: [
          { name: 'MG8591 Principles of Management', credit: 3 },
          { name: 'PE Professional Elective – IV', credit: 3 },
          { name: 'ME8811 Project Work', credit: 2 }
      ],
    },
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
        {name:'Open Elective– I' ,credit :3},
        {name:'Professional Elective IV' ,credit :3},
        {name:'Professional Elective V' ,credit :3},
        {name:'Professional Elective VI' ,credit :3},
        {name:'Mandatory Course-II' ,credit :0},
        {name:'NCC Credit Course Level 3' ,credit :3}
        ],
        7:[
        { name: 'GE3791 Human Values and Ethics', credit: 2 },
        { name: 'Elective - Management', credit: 3 },
        { name: 'Open Elective – II', credit: 3 },
        { name: 'Open Elective – III', credit: 3 },
        { name: 'Open Elective – IV', credit: 3 }
        ],
        8:[
        { name: 'EC3811 Project Work / Internship', credit: 10 }
        ]
      },
      'EEE': {
        1: [
          { name: 'HS3152 Professional English - I', credit: 3 },
          { name: 'MA3151 Matrices and Calculus', credit: 4 },
          { name: 'PH3151 Engineering Physics', credit: 3 },
          { name: 'CY3151 Engineering Chemistry', credit: 3 },
          { name: 'GE3151 Problem Solving and Python Programming', credit: 3 },
          { name: 'GE3152 தமிழர் மரபு /Heritage of Tamils', credit: 1 },
          { name: 'GE3171 Problem Solving and Python Programming Laboratory', credit: 2 },
          { name: 'BS3171 Physics and Chemistry Laboratory', credit: 2 },
          { name: 'GE3172 English Laboratory $', credit: 1 }
        ],
        2: [
          { name: 'HS3252 Professional English - II', credit: 2 },
          { name: 'MA3251 Statistics and Numerical Methods', credit: 4 },
          { name: 'PH3202 Physics for Electrical Engineering', credit: 3 }, 
          { name: 'BE3255 Basic Civil and Mechanical Engineering', credit: 3 },
          { name: 'GE3251 Engineering Graphics', credit: 4 },
          { name: 'EE3251 Electric Circuit Analysis', credit: 4 },
          { name: 'NCC Credit Course Level 1#', credit: 2 }, 
          { name: 'GE3252 தமழரும் தொழில்நுட்பமும் /Tamils and Technology', credit: 1 },
          { name: 'GE3271 Engineering Practices Laboratory', credit: 2 },
          { name: 'EE3271 Electric Circuits Laboratory', credit: 2 },
          { name: 'GE3272 Communication Laboratory / Foreign Language $', credit: 2 } 
        ],
        3: [
          { name: 'MA3303 Probability and Complex Functions', credit: 4 },
          { name: 'EE3301 Electromagnetic Fields', credit: 4 },
          { name: 'EE3302 Digital Logic Circuits', credit: 3 },
          { name: 'EC3301 Electron Devices and Circuits', credit: 3 },
          { name: 'EE3303 Electrical Machines - I', credit: 3 },
          { name: 'CS3353 C Programming and Data Structures', credit: 3 },
          { name: 'EC3311 Electronic Devices and Circuits Laboratory', credit: 1.5 },
          { name: 'EE3311 Electrical Machines Laboratory – I', credit: 1.5 },
          { name: 'CS3362 C Programming and Data Structures Laboratory', credit: 1.5 },
          { name: 'GE3361 Professional Development', credit: 1 } 
        ],
        4: [
          { name: 'GE3451 Environmental Sciences and Sustainability', credit: 2 },
          { name: 'EE3401 Transmission and Distribution', credit: 3 },
          { name: 'EE3402 Linear Integrated Circuits', credit: 3 },
          { name: 'EE3403 Measurements and Instrumentation', credit: 3 },
          { name: 'EE3404 Microprocessor and Microcontroller', credit: 3 },
          { name: 'EE3405 Electrical Machines - II', credit: 3 },
          { name: 'NCC Credit Course Level 2#', credit: 3 },
          { name: 'EE3411 Electrical Machines Laboratory - II', credit: 1.5 },
          { name: 'EE3412 Linear and Digital Circuits Laboratory', credit: 1.5 },
          { name: 'EE3413 Microprocessor and Microcontroller laboratory', credit: 1.5 }
        ],
        5: [ 
          { name: 'EE3501 Power System Analysis', credit: 3 },
          { name: 'EE3591 Power Electronics', credit: 3 },
          { name: 'EE3503 Control Systems', credit: 3 },
          { name: 'Professional Elective I', credit: 3 },
          { name: 'Professional Elective II', credit: 3 },
          { name: 'Professional Elective III', credit: 3 },
          { name: 'Mandatory Course-I', credit: '0' }, 
          { name: 'EE3511 Power Electronics Laboratory', credit: 1.5 },
          { name: 'EE3512 Control and Instrumentation Laboratory', credit: 2 } 
        ],
        6: [
          { name: 'EE3601 Protection and Switchgear', credit: 3 },
          { name: 'EE3602 Power System Operation and Control', credit: 3 },
          { name: 'Open Elective – I*', credit: 3 },
          { name: 'Professional Elective IV', credit: 3 },
          { name: 'Professional Elective V', credit: 3 },
          { name: 'Professional Elective VI', credit: 3 },
          { name: 'Mandatory Course-II&', credit: '0' },
          { name: 'NCC Credit Course Level 3', credit: 3 },
          { name: 'EE3611 Power System Laboratory', credit: 1.5 }
        ],
        7: [ 
          { name: 'EE3701 High Voltage Engineering', credit: 3 },
          { name: 'GE3791 Human Values and Ethics', credit: 2 },
          { name: 'Elective – Management', credit: 3 }, 
          { name: 'Open Elective – II', credit: 3 },
          { name: 'Open Elective – III', credit: 3 },
          { name: 'Open Elective – IV', credit: 3 },
          { name: 'Professional Elective VII', credit: 3 } 
        ],
        8: [
          { name: 'EE3811 Project Work / Internship', credit: 10 } 
        ]
      },
      'CSE': {
        1: [
        {name: 'HS3152 Professional English - I', credit: 3},
        {name: 'MA3151 Matrices and Calculus', credit: 4},
        {name: 'PH3151 Engineering Physics', credit: 3},
        {name: 'CY3151 Engineering Chemistry', credit: 3},
        {name: 'GE3151 Problem Solving and Python Programming', credit: 3},
        {name: 'GE3152 தமிழர் மரபு /Heritage of Tamils', credit: 1},
        {name: 'GE3171 Problem Solving and Python Programming Laboratory', credit: 2},
        {name: 'BS3171 Physics and Chemistry Laboratory', credit: 2},
        {name: 'GE3172 English Laboratory', credit: 1}
        ],
        2: [
        {name: 'HS3252 Professional English - II', credit: 2},
        {name: 'MA3251 Statistics and Numerical Methods', credit: 4},
        {name: 'PH3256 Physics for Information Science', credit: 3},
        {name: 'BE3251 Basic Electrical and Electronics Engineering', credit: 3},
        {name: 'GE3251 Engineering Graphics', credit: 4},
        {name: 'CS3251 Programming in C', credit: 3},
        {name: 'GE3252 தமிழரும் ததொழில்நுட்பமும் /Tamils and Technology', credit: 1},
        {name: 'NCC Credit Course Level', credit: 2},
        {name: 'GE3271 Engineering Practices Laboratory', credit: 2},
        {name: 'CS3271 Programming in C Laboratory', credit: 2},
        {name: 'GE3272 Communication Laboratory / Foreign Language', credit: 2}
        ],
        3: [
        {name: 'MA3354 Discrete Mathematics', credit: 4},
        {name: 'CS3351 Digital Principles and Computer Organization', credit: 4},
        {name: 'CS3352 Foundations of Data Science', credit: 3},
        {name: 'CS3301 Data Structures', credit: 3},
        {name: 'CS3391 Object Oriented Programming', credit: 3},
        {name: 'CS3311 Data Structures Laboratory', credit: 1.5},
        {name: 'CS3381 Object Oriented Programming Laboratory', credit: 1.5},
        {name: 'CS3361 Data Science Laboratory', credit: 2},
        {name: 'GE3361 Professional Development', credit: 1}
        ],
        4: [
        {name: 'CS3452 Theory of Computation', credit: 3},
        {name: 'CS3491 Artificial Intelligence and Machine Learning', credit: 4},
        {name: 'CS3492 Database Management Systems', credit: 3},
        {name: 'CS3401 Algorithms', credit: 4},
        {name: 'CS3451 Introduction to Operating Systems', credit: 3},
        {name: 'GE3451 Environmental Sciences and Sustainability', credit: 2},
        {name: 'NCC Credit Course Level 2#', credit: 3},
        {name: 'CS3461 Operating Systems Laboratory', credit: 1.5},
        {name: 'CS3481 Database Management Systems Laboratory', credit: 1.5}
        ],
        5: [
        { name: 'CS3591 Computer Networks', credit: 4 },
        { name: 'CS3501 Compiler Design', credit: 4 },
        { name: 'CB3491 Cryptography and Cyber Security', credit: 3 },
        { name: 'CS3551 Distributed Computing', credit: 3 },
        { name: 'Professional Elective I', credit: 3 }, 
        { name: 'Professional Elective II', credit: 3 },
        { name: 'Mandatory Course-I', credit: '0' } 
        ],
        6: [
        { name: 'CCS356 Object Oriented Software Engineering', credit: 4 },  
        { name: 'CS3691 Embedded Systems and IoT', credit: 4 },
        { name: 'Open Elective I', credit: 3 },
        { name: 'Professional Elective III', credit: 3 },
        { name: 'Professional Elective IV', credit: 3 },
        { name: 'Professional Elective V', credit: 3 },
        { name: 'Professional Elective VI', credit: 3 },
        { name: 'Mandatory Course-II', credit: '0' },
        {name: 'NCC Credit Course Level 3#', credit: 3}
        ],
        7: [
        { name: 'GE3791 Human Values and Ethics', credit: 2 },
        { name: 'Elective - Management', credit: 3 },
        { name: 'Open Elective-II', credit: 3 },
        { name: 'Open Elective-III', credit: 3 },
        { name: 'Open Elective-IV', credit: 3 },
        { name: 'CS3711 Summer internship', credit: 2 }
        ],
        8: [
          { name: 'Project Work', credit: 10 }
        ]
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
        {name:'Open Elective – I*' ,credit :3},
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
        { name: 'Open Elective – II**', credit: 3 },
        { name: 'Open Elective – III***', credit: 3 },
        { name: 'Open Elective – IV***', credit: 3 },
        { name: 'ME3781 Mechatronics and IoT Laboratory', credit: 2 },
        { name: 'ME3711 Summer Internship#', credit: 1 }
        ],
        8:[
        { name: 'ME3811 Project Work / Internship', credit: 10 }
        ]
      },
  }
};
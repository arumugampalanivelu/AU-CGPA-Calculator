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
          5:[
            {name:'EC8501 Digital Communication' ,credit :3},
            {name:'EC8553 Discrete-Time Signal Processing' ,credit :4},
            {name:'EC8552 Computer Architecture and Organization' ,credit :3},
            {name:'EC8551 Communication Networks' ,credit :3},
            {name:'Professional Elective I' ,credit :3},
            {name:'Open Elective I' ,credit :3},
            {name:'EC8562 Digital Signal Processing Laboratory' ,credit :2},
            {name:'EC8561 Communication Systems Laboratory' ,credit :2},
            {name:'EC8563 Communication Networks Laboratory' ,credit :2}
          ],
          6:[
            {name:'EC8691 Microprocessors and Microcontrollers' ,credit :3},
            {name:'EC8095 VLSI Design' ,credit :3},
            {name:'EC8652 Wireless Communication' ,credit :3},
            {name:'MG8591 Principles of Management' ,credit :3},
            {name:'EC8651 Transmission Lines and RF Systems' ,credit :3},
            {name:'Professional Elective - II' ,credit :3},
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
            {name:'Professional Elective - III' ,credit :3},
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
        4:[
          {name:'MA8451 Probability and Random Processes' ,credit :4},
          {name:'EC8452 Electronic Circuits II' ,credit :3},
          {name:'EC8491 Communication Theory' ,credit :3},
          {name:'EC8451 Electromagnetic Fields' ,credit :4},
          {name:'EC8453 Linear Integrated Circuits' ,credit :3},
          {name:'GE8291 Environmental Science and Engineering' ,credit :3},
          {name:'EC8461 Circuits Design and Simulation Laboratory' ,credit :2},
          {name:'EC8462 Linear Integrated Circuits Laboratory' ,credit :2}
        ],
        5:[
          {name:'EC8501 Digital Communication' ,credit :3},
          {name:'EC8553 Discrete-Time Signal Processing' ,credit :4},
          {name:'EC8552 Computer Architecture and Organization' ,credit :3},
          {name:'EC8551 Communication Networks' ,credit :3},
          {name:'Professional Elective I' ,credit :3},
          {name:'Open Elective I' ,credit :3},
          {name:'EC8562 Digital Signal Processing Laboratory' ,credit :2},
          {name:'EC8561 Communication Systems Laboratory' ,credit :2},
          {name:'EC8563 Communication Networks Laboratory' ,credit :2}
        ],
        6:[
          {name:'EC8691 Microprocessors and Microcontrollers' ,credit :3},
          {name:'EC8095 VLSI Design' ,credit :3},
          {name:'EC8652 Wireless Communication' ,credit :3},
          {name:'MG8591 Principles of Management' ,credit :3},
          {name:'EC8651 Transmission Lines and RF Systems' ,credit :3},
          {name:'Professional Elective - II' ,credit :3},
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
          {name:'Professional Elective - III' ,credit :3},
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
          { name: 'PH8253 Physics for Electronics Engineering', credit: 3 },
          { name: 'BE8254 Basic Electrical and Instrumentation Engineering', credit: 3 },
          { name: 'EC8251 Circuit Analysis', credit: 4 },
          { name: 'EC8252 Electronic Devices', credit: 3 },
          { name: 'EC8261 Circuits and Devices Laboratory', credit: 2 },
          { name: 'GE8261 Engineering Practices Laboratory', credit: 2 }
        ],
        3:[
        {name:'MA8352 Linear Algebra and Partial Differential Equations' ,credit :4},
          {name:'EC8393 Fundamentals of Data Structures In C' ,credit :3},
          {name:'EC8351 Electronic Circuits- I' ,credit :3},
          {name:'EC8352 Signals and Systems' ,credit :4},
          {name:'EC8392 Digital Electronics' ,credit :3},
          {name:'EC8391 Control Systems Engineering' ,credit :3},
          {name:'EC8381 Fundamentals of Data Structures in C Laboratory' ,credit :2},
          {name:'EC8361 Analog and Digital Circuits Laboratory' ,credit :2},
          {name:'HS8381 Interpersonal Skills/Listening &Speaking' ,credit :1}
        ],
        4:[
          {name:'MA8451 Probability and Random Processes' ,credit :4},
          {name:'EC8452 Electronic Circuits II' ,credit :3},
          {name:'EC8491 Communication Theory' ,credit :3},
          {name:'EC8451 Electromagnetic Fields' ,credit :4},
          {name:'EC8453 Linear Integrated Circuits' ,credit :3},
          {name:'GE8291 Environmental Science and Engineering' ,credit :3},
          {name:'EC8461 Circuits Design and Simulation Laboratory' ,credit :2},
          {name:'EC8462 Linear Integrated Circuits Laboratory' ,credit :2}
        ],
        5:[
          {name:'EC8501 Digital Communication' ,credit :3},
          {name:'EC8553 Discrete-Time Signal Processing' ,credit :4},
          {name:'EC8552 Computer Architecture and Organization' ,credit :3},
          {name:'EC8551 Communication Networks' ,credit :3},
          {name:'Professional Elective I' ,credit :3},
          {name:'Open Elective I' ,credit :3},
          {name:'EC8562 Digital Signal Processing Laboratory' ,credit :2},
          {name:'EC8561 Communication Systems Laboratory' ,credit :2},
          {name:'EC8563 Communication Networks Laboratory' ,credit :2}
        ],
        6:[
        {name:'EC8691 Microprocessors and Microcontrollers' ,credit :3},
          {name:'EC8095 VLSI Design' ,credit :3},
          {name:'EC8652 Wireless Communication' ,credit :3},
          {name:'MG8591 Principles of Management' ,credit :3},
          {name:'EC8651 Transmission Lines and RF Systems' ,credit :3},
          {name:'Professional Elective - II' ,credit :3},
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
          {name:'Professional Elective - III' ,credit :3},
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
          { name: 'PH8253 Physics for Electronics Engineering', credit: 3 },
          { name: 'BE8254 Basic Electrical and Instrumentation Engineering', credit: 3 },
          { name: 'EC8251 Circuit Analysis', credit: 4 },
          { name: 'EC8252 Electronic Devices', credit: 3 },
          { name: 'EC8261 Circuits and Devices Laboratory', credit: 2 },
          { name: 'GE8261 Engineering Practices Laboratory', credit: 2 }
        ],
        3:[
          {name:'MA8352 Linear Algebra and Partial Differential Equations' ,credit :4},
          {name:'EC8393 Fundamentals of Data Structures In C' ,credit :3},
          {name:'EC8351 Electronic Circuits- I' ,credit :3},
          {name:'EC8352 Signals and Systems' ,credit :4},
          {name:'EC8392 Digital Electronics' ,credit :3},
          {name:'EC8391 Control Systems Engineering' ,credit :3},
          {name:'EC8381 Fundamentals of Data Structures in C Laboratory' ,credit :2},
          {name:'EC8361 Analog and Digital Circuits Laboratory' ,credit :2},
          {name:'HS8381 Interpersonal Skills/Listening &Speaking' ,credit :1}
        ],
        4:[
          {name:'MA8451 Probability and Random Processes' ,credit :4},
          {name:'EC8452 Electronic Circuits II' ,credit :3},
          {name:'EC8491 Communication Theory' ,credit :3},
          {name:'EC8451 Electromagnetic Fields' ,credit :4},
          {name:'EC8453 Linear Integrated Circuits' ,credit :3},
          {name:'GE8291 Environmental Science and Engineering' ,credit :3},
          {name:'EC8461 Circuits Design and Simulation Laboratory' ,credit :2},
          {name:'EC8462 Linear Integrated Circuits Laboratory' ,credit :2}
        ],
        5:[
          {name:'EC8501 Digital Communication' ,credit :3},
          {name:'EC8553 Discrete-Time Signal Processing' ,credit :4},
          {name:'EC8552 Computer Architecture and Organization' ,credit :3},
          {name:'EC8551 Communication Networks' ,credit :3},
          {name:'Professional Elective I' ,credit :3},
          {name:'Open Elective I' ,credit :3},
          {name:'EC8562 Digital Signal Processing Laboratory' ,credit :2},
          {name:'EC8561 Communication Systems Laboratory' ,credit :2},
          {name:'EC8563 Communication Networks Laboratory' ,credit :2}
        ],
        6:[
          {name:'EC8691 Microprocessors and Microcontrollers' ,credit :3},
          {name:'EC8095 VLSI Design' ,credit :3},
          {name:'EC8652 Wireless Communication' ,credit :3},
          {name:'MG8591 Principles of Management' ,credit :3},
          {name:'EC8651 Transmission Lines and RF Systems' ,credit :3},
          {name:'Professional Elective - II' ,credit :3},
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
          {name:'Professional Elective - III' ,credit :3},
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
      
      // Add other departments (ECE, CSE, Civil, Mech) similarly...
    },
    '2021': {
        'ECE': {
            
        },
        'EEE': {
          
        },
        'CSE': {
          
        },
        'Civil': {
          
        },
        'Mech': {
          
        },
    }
};
const courses = [
  {
    title: "Human Computer Interaction",
    code: "COMP6176",
    classCode: "LH01 - LEC",
    progress: 0,
    sessions: Array.from({ length: 13 }, (_, i) => ({
      date: `Session ${i + 1}`,
      room: "Room B0301",
      start: "09:00",
      end: "10:40",
      title: `HCI Theory Part ${i + 1}`,
      outline: "Focus on UI/UX principles, user-centered design, and cognitive psychology in interface development."
    }))
  },
  {
    title: "Human Computer Interaction",
    code: "COMP6176",
    classCode: "LH01 - LAB",
    progress: 0,
    sessions: Array.from({ length: 7 }, (_, i) => ({
      date: `Lab ${i + 1}`,
      room: "Lab 01",
      start: "13:20",
      end: "15:00",
      title: `HCI Practical ${i + 1}`,
      outline: "Hands-on prototyping using tools like Figma, Adobe XD, and front-end implementation (HTML/CSS)."
    }))
  },
  {
    title: "Data Structures",
    code: "CS201",
    classCode: "B201 - LEC",
    progress: 0,
    sessions: [
      {
        date: "2025-08-03",
        room: "Room 202",
        start: "10:00",
        end: "11:30",
        title: "Advanced List Structures",
        outline: "Deep dive into Linked Lists, Doubly Linked Lists, and Tree Traversal algorithms."
      }
    ]
  },
  {
    title: "Calculus",
    code: "MATH6031001",
    classCode: "LO01 - LEC",
    progress: 0,
    sessions: Array.from({ length: 26 }, (_, i) => ({
      date: `Session ${i + 1}`,
      room: "Room A1805",
      start: "07:20",
      end: "09:00",
      title: `Calculus Topic ${i + 1}`,
      outline: "Comprehensive study of limits, derivatives, integrals, and multivariable calculus applications."
    }))
  },
  {
    title: "Scientific Computing",
    code: "MATH6183001",
    classCode: "B201 - LEC",
    progress: 0,
    sessions: [
      {
        date: "2025-08-05",
        room: "Hall A",
        start: "13:00",
        end: "15:00",
        title: "Numerical Analysis",
        outline: "Intro to error analysis, root-finding algorithms, and linear algebraic systems."
      }
    ]
  },
  {
    title: "Scientific Computing",
    code: "MATH6183001",
    classCode: "B201 - LAB",
    progress: 0,
    sessions: Array.from({ length: 7 }, (_, i) => ({
      date: `Lab ${i + 1}`,
      room: "Lab 2",
      start: "15:00",
      end: "17:00",
      title: `Practical Computing ${i + 1}`,
      outline: "Implementation of mathematical models using MATLAB, Python (NumPy/SciPy), and visualization."
    }))
  },
  {
    title: "Character Building: Kewarganegaraan",
    code: "CHAR6013",
    classCode: "CB01 - LEC",
    progress: 0,
    sessions: Array.from({ length: 13 }, (_, i) => ({
      date: `Session ${i + 1}`,
      room: "Auditorium",
      start: "11:00",
      end: "12:40",
      title: `Civics & Ethics ${i + 1}`,
      outline: "Exploration of national identity, state philosophy (Pancasila), and civic responsibility in a digital age."
    }))
  }
];
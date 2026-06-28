export const curriculum = [
  {
    term: 'Semester 1',
    title: 'Foundations',
    focus:
      'Core programming, electronics, and the mathematics that everything later depends on.',
    hours: { lecture: 6, lab: 8 },
    courses: ['CS101 · Programming Fundamentals', 'EE110 · Circuits & Electronics', 'MA101 · Linear Algebra for Engineers'],
    milestone: 'Build & program a line-following robot from a bare microcontroller.'
  },
  {
    term: 'Semester 2',
    title: 'Core Robotics',
    focus:
      'Sensing, actuation, and control — how a machine perceives and moves through the physical world.',
    hours: { lecture: 6, lab: 10 },
    courses: ['RB201 · Sensors & Actuators', 'RB210 · Control Systems', 'CS205 · Data Structures & Algorithms'],
    milestone: 'Design and tune a closed-loop control system for a two-wheeled balancing robot.'
  },
  {
    term: 'Semester 3',
    title: 'Applied AI',
    focus:
      'Machine learning and perception, applied directly to robotic systems rather than studied in the abstract.',
    hours: { lecture: 6, lab: 10 },
    courses: ['AI301 · Machine Learning', 'AI310 · Computer Vision', 'RB305 · Robot Motion Planning'],
    milestone: 'Train a vision model that lets a robot arm sort objects by shape and colour.'
  },
  {
    term: 'Semester 4',
    title: 'Capstone & Industry Project',
    focus:
      'A self-directed build, paired with a mentor from an industry partner, presented at a public demo day.',
    hours: { lecture: 2, lab: 14 },
    courses: ['CAP401 · Capstone Studio', 'RB410 · Multi-Robot Systems (elective)', 'AI420 · Reinforcement Learning (elective)'],
    milestone: 'Ship a working prototype and defend it in front of a faculty + industry panel.'
  }
]

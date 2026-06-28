export const categories = ['All', 'Robotics', 'AI', 'Programming', 'Mathematics']

export const courses = [
  {
    code: 'CS101',
    title: 'Programming Fundamentals',
    category: 'Programming',
    credits: 4,
    semester: 1,
    description:
      'Variables to objects: Python and C++ fundamentals used as the working languages for every later lab.',
    topics: ['Control flow', 'Data types', 'Functions & recursion', 'Intro to OOP']
  },
  {
    code: 'EE110',
    title: 'Circuits & Electronics',
    category: 'Robotics',
    credits: 3,
    semester: 1,
    description:
      'The physical layer underneath every robot: how current, voltage, and basic components actually behave.',
    topics: ['Ohm & Kirchhoff', 'Breadboarding', 'Digital logic', 'Microcontroller I/O']
  },
  {
    code: 'MA101',
    title: 'Linear Algebra for Engineers',
    category: 'Mathematics',
    credits: 3,
    semester: 1,
    description:
      'Vectors, matrices, and transformations — the language that robotics and machine learning are both written in.',
    topics: ['Matrix operations', 'Eigenvalues', 'Transformations', 'Least squares']
  },
  {
    code: 'RB201',
    title: 'Sensors & Actuators',
    category: 'Robotics',
    credits: 4,
    semester: 2,
    description:
      'How a robot reads the world and acts on it: encoders, IMUs, lidar, servos, and motor drivers.',
    topics: ['Encoders & IMUs', 'Lidar & ultrasonic', 'Motor drivers', 'Signal noise & filtering']
  },
  {
    code: 'RB210',
    title: 'Control Systems',
    category: 'Robotics',
    credits: 4,
    semester: 2,
    description:
      'PID and state-space control, taught by tuning real hardware until it stops falling over.',
    topics: ['PID tuning', 'State-space models', 'Stability analysis', 'Feedback loops']
  },
  {
    code: 'CS205',
    title: 'Data Structures & Algorithms',
    category: 'Programming',
    credits: 4,
    semester: 2,
    description:
      'The structures and complexity analysis behind every planning and perception algorithm later in the program.',
    topics: ['Trees & graphs', 'Search algorithms', 'Complexity analysis', 'Heaps & queues']
  },
  {
    code: 'AI301',
    title: 'Machine Learning',
    category: 'AI',
    credits: 4,
    semester: 3,
    description:
      'Supervised and unsupervised learning, from first principles through to a working trained model.',
    topics: ['Regression & classification', 'Neural networks', 'Model evaluation', 'Overfitting & regularization']
  },
  {
    code: 'AI310',
    title: 'Computer Vision',
    category: 'AI',
    credits: 3,
    semester: 3,
    description:
      'Teaching a camera-equipped robot to recognise, localise, and track objects in real time.',
    topics: ['Image filtering', 'Object detection', 'Pose estimation', 'Real-time pipelines']
  },
  {
    code: 'RB305',
    title: 'Robot Motion Planning',
    category: 'Robotics',
    credits: 3,
    semester: 3,
    description:
      'Getting a robot from point A to B without hitting anything — path planning and obstacle avoidance.',
    topics: ['A* & RRT', 'Configuration space', 'SLAM basics', 'Obstacle avoidance']
  },
  {
    code: 'CAP401',
    title: 'Capstone Studio',
    category: 'Robotics',
    credits: 6,
    semester: 4,
    description:
      'A semester-long, mentor-guided build culminating in a public demo day in front of industry partners.',
    topics: ['Project scoping', 'Weekly design reviews', 'Industry mentorship', 'Public demo day']
  },
  {
    code: 'RB410',
    title: 'Multi-Robot Systems (Elective)',
    category: 'Robotics',
    credits: 3,
    semester: 4,
    description:
      'Coordination, swarm behaviour, and communication protocols across fleets of robots.',
    topics: ['Swarm algorithms', 'Distributed coordination', 'Communication protocols', 'Task allocation']
  },
  {
    code: 'AI420',
    title: 'Reinforcement Learning (Elective)',
    category: 'AI',
    credits: 3,
    semester: 4,
    description:
      'Training agents that learn from trial and error — applied to simulated and physical robots alike.',
    topics: ['Markov decision processes', 'Q-learning', 'Policy gradients', 'Sim-to-real transfer']
  }
]

export const weightage = [
  { name: 'Lab & Continuous Assessment', value: 30, color: '#2E8B7A' },
  { name: 'Mid-Semester Exam', value: 20, color: '#8C9AA0' },
  { name: 'End-Semester Exam', value: 35, color: '#C2613A' },
  { name: 'Capstone / Project Defense', value: 15, color: '#E0A458' }
]

export const examCycle = [
  {
    week: 'Week 1–4',
    label: 'Lab Checkpoints',
    detail: 'Short practical checks during weekly lab sessions — graded for understanding, not just output.'
  },
  {
    week: 'Week 7',
    label: 'Mid-Semester Exam',
    detail: 'Written exam covering theory and problem-solving from the first half of the term.'
  },
  {
    week: 'Week 10–13',
    label: 'Continuous Assessment',
    detail: 'Assignments and a graded mini-project that build toward the end-semester practical.'
  },
  {
    week: 'Week 15',
    label: 'End-Semester Exam',
    detail: 'Written paper plus a hands-on practical exam on live hardware.'
  },
  {
    week: 'Week 16',
    label: 'Project Defense',
    detail: 'Oral defense of the semester project in front of two faculty reviewers (Semester 4: industry panel).'
  }
]

export const gradingScale = [
  { grade: 'A', range: '90–100', meaning: 'Outstanding' },
  { grade: 'B', range: '80–89', meaning: 'Strong' },
  { grade: 'C', range: '70–79', meaning: 'Satisfactory' },
  { grade: 'D', range: '60–69', meaning: 'Passing' },
  { grade: 'F', range: 'Below 60', meaning: 'Not passing — retake required' }
]

export const policies = [
  'A passing lab practical is required to sit the end-semester written exam.',
  'One re-examination per course is permitted per semester, scheduled four weeks after results.',
  'Capstone defenses (Semester 4) are scored independently by two faculty and one industry mentor; scores are averaged.',
  'Medical or emergency deferrals must be filed with the program office within 72 hours of the missed exam.'
]

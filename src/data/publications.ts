export type Publication = {
  title: string
  conference: string
  venue: string
  date: string
  highlights: string[]
  tags: string[]
  url: string
}

export const publications: Publication[] = [
  {
    title: 'A Comparative Analysis on Fake News Detection Methods',
    conference: "International Conference on Computing Advancements (ICCA '22)",
    venue: 'ACM Digital Library',
    date: 'March 2022',
    highlights: [
      'Conducted a comprehensive review and comparative analysis of various fake news detection techniques, including propagation path classification, geometric deep learning, multiple feature-based approaches, and unsupervised learning.',
      'Analyzed datasets such as LIAR, BuzzFeed, Weibo, and Twitter, evaluating models like RNN, CNN, GNN, and machine learning classifiers (SVM, KNN, LSTM).',
      'Summarized advantages, limitations, and applicability of each method for social media platforms like Facebook and Twitter.',
      'Developing platform-specific strategies for fake news detection on social media, with a focus on identifying the most accurate and effective methods and approaches.',
    ],
    tags: [
      'NLP',
      'Machine Learning',
      'Deep Learning',
      'GNN',
      'RNN',
      'CNN',
      'LSTM',
      'SVM',
    ],
    url: 'https://dl.acm.org/doi/abs/10.1145/3542954.3543010',
  },
]

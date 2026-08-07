/**
 * CPL — Lesson Service
 * Dynamically loads structured lesson data.
 * Currently uses local mock data, can be easily swapped for an API call later.
 */

export const lessonService = {
  getLessonContent: async (topicId) => {
    try {
      // Dynamically import the JSON/JS object based on topicId
      // In Vite, dynamic imports must have some static path analysis
      const module = await import(`../data/lessons/${topicId}.js`);
      return module.default;
    } catch (err) {
      console.warn(`Lesson content for ${topicId} not found, falling back to placeholder.`);
      return getPlaceholder(topicId);
    }
  },
};

function getPlaceholder(topicId) {
  return {
    blocks: [
      { type: 'h2', content: 'Content Under Construction' },
      { type: 'text', content: 'The theoretical content for this lesson is currently being prepared and will be available soon.' },
      { type: 'note', title: 'Roadmap Navigation', content: 'You can still mark this lesson as complete to test the progression system and unlock the next topic.' },
    ],
  };
}

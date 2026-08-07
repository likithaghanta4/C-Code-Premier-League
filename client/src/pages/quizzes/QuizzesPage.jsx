/**
 * CPL — Quizzes Page (Placeholder)
 * Will be fully built in Module 9.
 */

import { HelpCircle } from 'lucide-react';
import { PageWrapper } from '../../components/common';
import PageHeader from '../../components/common/PageHeader';
import EmptyState from '../../components/common/EmptyState';

export default function QuizzesPage() {
  return (
    <PageWrapper>
      <PageHeader
        title="Quizzes"
        description="Test your knowledge with topic-wise multiple choice quizzes"
        icon={HelpCircle}
      />
      <EmptyState
        icon={HelpCircle}
        title="Quizzes Coming Soon"
        description="Topic-wise MCQ quizzes with timer, instant scoring, correct answers with explanations, and XP rewards for completion."
      />
    </PageWrapper>
  );
}

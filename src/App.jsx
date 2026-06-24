import { useState } from 'react';
import {
  LayoutDashboard,
  Clock3,
  CheckSquare,
  BookOpen,
  ClipboardCheck,
} from 'lucide-react';

const pages = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'pomodoro', label: 'Pomodoro', icon: Clock3 },
  { id: 'planner', label: 'Study Planner', icon: CheckSquare },
  { id: 'flashcards', label: 'Flashcards', icon: BookOpen },
  { id: 'quiz', label: 'Quiz Maker', icon: ClipboardCheck },
];

function App() {
  const [activePage, setActivePage] = useState('dashboard');

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <span>Study Planner Mentor</span>
        </div>
        <nav className="nav-menu">
          {pages.map((page) => {
            const Icon = page.icon;
            return (
              <button
                key={page.id}
                className={activePage === page.id ? 'nav-item active' : 'nav-item'}
                onClick={() => setActivePage(page.id)}
              >
                <Icon size={18} />
                <span>{page.label}</span>
              </button>
            );
          })}
        </nav>
      </aside>

      <main className="panel">
        <header className="panel-header">
          <div>
            <p className="eyebrow">Study Planner Mentor</p>
            <h1>{pages.find((page) => page.id === activePage).label}</h1>
          </div>
        </header>

        <section className="content-card">
          {activePage === 'dashboard' && (
            <div>
              <h2>Weekly progress at a glance</h2>
              <p>
                Stay on top of your study goals with quick metrics for focus time, tasks completed, and upcoming review sessions.
              </p>
            </div>
          )}
          {activePage === 'pomodoro' && (
            <div>
              <h2>Pomodoro Timer</h2>
              <p>Use the Pomodoro technique to manage sessions and breaks for better focus.</p>
            </div>
          )}
          {activePage === 'planner' && (
            <div>
              <h2>Study Planner</h2>
              <p>Organize and prioritize tasks by category to keep assignments, readings, and study time aligned.</p>
            </div>
          )}
          {activePage === 'flashcards' && (
            <div>
              <h2>Flashcards</h2>
              <p>Create decks, flip cards, and review with active recall for long-term retention.</p>
            </div>
          )}
          {activePage === 'quiz' && (
            <div>
              <h2>Quiz Maker</h2>
              <p>Build custom quizzes, test your knowledge, and track your score as you learn.</p>
            </div>
          )}
        </section>

        <section className="workflow-card">
          <h3>How it works</h3>
          <ol>
            <li>Create a study task or flashcard deck.</li>
            <li>Start a Pomodoro session for focused work.</li>
            <li>Review tasks and use quizzes to assess learning.</li>
            <li>Track progress and revise based on results.</li>
          </ol>
        </section>
      </main>
    </div>
  );
}

export default App;

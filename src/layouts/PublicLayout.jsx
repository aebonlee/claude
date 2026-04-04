import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import AuthGuard from '../components/AuthGuard';
import AdminGuard from '../components/AdminGuard';

const Home = lazy(() => import('../pages/Home'));
const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));
const ForgotPassword = lazy(() => import('../pages/ForgotPassword'));
const AboutPage = lazy(() => import('../pages/about/AboutPage'));
const ClaudeCodeGuide = lazy(() => import('../pages/claude-code/ClaudeCodeGuide'));
const ClaudeWorkGuide = lazy(() => import('../pages/claude-work/ClaudeWorkGuide'));
const ClaudeCoworkGuide = lazy(() => import('../pages/claude-cowork/ClaudeCoworkGuide'));
const PromptEngineering = lazy(() => import('../pages/prompt-engineering/PromptEngineering'));
const APIUsage = lazy(() => import('../pages/api-usage/APIUsage'));
const AgentSDK = lazy(() => import('../pages/agent-sdk/AgentSDK'));
const ModelComparison = lazy(() => import('../pages/model-comparison/ModelComparison'));
const Glossary = lazy(() => import('../pages/glossary/Glossary'));
const Roadmap = lazy(() => import('../pages/roadmap/Roadmap'));
const Resources = lazy(() => import('../pages/resources/Resources'));
const PromptPractice = lazy(() => import('../pages/prompt-practice/PromptPractice'));
const PromptGallery = lazy(() => import('../pages/prompt-gallery/PromptGallery'));
const AINews = lazy(() => import('../pages/ai-news/AINews'));
const Board = lazy(() => import('../pages/community/Board'));
const BoardDetail = lazy(() => import('../pages/community/BoardDetail'));
const BoardWrite = lazy(() => import('../pages/community/BoardWrite'));
const AdminDashboard = lazy(() => import('../pages/admin/AdminDashboard'));
const NotFound = lazy(() => import('../pages/NotFound'));

function LoadingFallback() {
  return (
    <div className="loading-page">
      <div className="loading-spinner" />
    </div>
  );
}

export default function PublicLayout() {
  return (
    <div className="site-wrapper">
      <Navbar />
      <main className="site-main">
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/claude-code" element={<ClaudeCodeGuide />} />
            <Route path="/claude-work" element={<ClaudeWorkGuide />} />
            <Route path="/claude-cowork" element={<ClaudeCoworkGuide />} />
            <Route path="/prompt-engineering" element={<PromptEngineering />} />
            <Route path="/api-usage" element={<APIUsage />} />
            <Route path="/agent-sdk" element={<AgentSDK />} />
            <Route path="/model-comparison" element={<ModelComparison />} />
            <Route path="/glossary" element={<Glossary />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/prompt-practice" element={<PromptPractice />} />
            <Route path="/prompt-gallery" element={<PromptGallery />} />
            <Route path="/ai-news" element={<AINews />} />
            <Route path="/community/board" element={<Board />} />
            <Route path="/community/board/:id" element={<BoardDetail />} />
            <Route path="/community/board/write" element={<AuthGuard><BoardWrite /></AuthGuard>} />
            <Route path="/admin/*" element={<AdminGuard><AdminDashboard /></AdminGuard>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

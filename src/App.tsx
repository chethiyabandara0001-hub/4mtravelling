import React from 'react';
import { BrowserRouter, Routes, Route, useParams, Navigate } from 'react-router-dom';
import { CurrencyProvider } from './context/CurrencyContext';
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/HomePage';
import { TourPackagesPage } from './pages/TourPackagesPage';
import { TourDetailPage } from './pages/TourDetailPage';
import { DestinationsPage } from './pages/DestinationsPage';
import { DestinationDetailPage } from './pages/DestinationDetailPage';
import { ToDoPage } from './pages/ToDoPage';
import { MemoriesPage } from './pages/MemoriesPage';
import { BlogsPage } from './pages/BlogsPage';
import { BlogDetailPage } from './pages/BlogDetailPage';
import { MiscAttractionsPage } from './pages/MiscAttractionsPage';
import { ContactPage } from './pages/ContactPage';
import { TermsPage } from './pages/TermsPage';
import { TOURS } from './data/tours';
import { BLOGS } from './data/blogs';

const DynamicRootSlugPage: React.FC = () => {
  const { rootSlug } = useParams<{ rootSlug: string }>();
  const cleanSlug = (rootSlug || '').replace(/\/index\.html$/i, '');

  const matchedTour = TOURS.find((t) => t.slug === cleanSlug);
  if (matchedTour) {
    return <TourDetailPage tour={matchedTour} />;
  }

  const matchedBlog = BLOGS.find((b) => b.slug === cleanSlug);
  if (matchedBlog) {
    return <BlogDetailPage post={matchedBlog} />;
  }

  return <Navigate to="/" replace />;
};

export default function App() {
  return (
    <CurrencyProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/index.html" element={<HomePage />} />
            <Route path="/tour-packages" element={<TourPackagesPage />} />
            <Route path="/tour-packages/index.html" element={<TourPackagesPage />} />
            <Route path="/destinations" element={<DestinationsPage />} />
            <Route path="/destinations/index.html" element={<DestinationsPage />} />
            <Route path="/destinations/:slug" element={<DestinationDetailPage />} />
            <Route path="/destinations/:slug/index.html" element={<DestinationDetailPage />} />
            <Route path="/to-do" element={<ToDoPage />} />
            <Route path="/to-do/index.html" element={<ToDoPage />} />
            <Route path="/memories" element={<MemoriesPage />} />
            <Route path="/memories/index.html" element={<MemoriesPage />} />
            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/blogs/index.html" element={<BlogsPage />} />
            <Route path="/miscellaneous-attractions" element={<MiscAttractionsPage />} />
            <Route path="/miscellaneous-attractions/index.html" element={<MiscAttractionsPage />} />
            <Route path="/contact-us" element={<ContactPage />} />
            <Route path="/contact-us/index.html" element={<ContactPage />} />
            <Route path="/terms-refund-privacy-policy" element={<TermsPage />} />
            <Route path="/terms-refund-privacy-policy/index.html" element={<TermsPage />} />
            <Route path="/:rootSlug" element={<DynamicRootSlugPage />} />
            <Route path="/:rootSlug/index.html" element={<DynamicRootSlugPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </CurrencyProvider>
  );
}

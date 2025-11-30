import { StrictMode, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";

// Lazy load secondary pages for better performance
const TermsOfService = lazy(() => import("./pages/TermsOfService.tsx").then(m => ({ default: m.TermsOfService })));
const Privacy = lazy(() => import("./pages/Privacy.tsx").then(m => ({ default: m.Privacy })));
const Contact = lazy(() => import("./pages/Contact.tsx").then(m => ({ default: m.Contact })));
const Success = lazy(() => import("./pages/Success.tsx").then(m => ({ default: m.Success })));
const Docs = lazy(() => import("./pages/Docs.tsx").then(m => ({ default: m.Docs })));
const NotFound = lazy(() => import("./pages/NotFound.tsx").then(m => ({ default: m.NotFound })));

// Loading component
const PageLoader = () => (
  <div className="min-h-screen bg-[#121212] flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#E0E0E0]"></div>
  </div>
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/termos" element={<TermsOfService />} />
          <Route path="/privacidade" element={<Privacy />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/success" element={<Success />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </StrictMode>
);

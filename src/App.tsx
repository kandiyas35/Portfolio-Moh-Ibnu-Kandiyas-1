import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Halaman-halaman utama
import Index from "./pages/Index";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Blogs from "./pages/Blogs";
import Certifications from "./pages/Certifications";
import Organizations from "./pages/Organizations";
import ProjectDetail1 from "./pages/ProjectDetail1";
import ProjectDetail2 from "./pages/ProjectDetail2";
import ProjectDetail3 from "./pages/ProjectDetail3";
import ProjectDetail4 from "./pages/ProjectDetail4";
import ProjectDetail5 from "./pages/ProjectDetail5";
import NotFound from "./pages/NotFound";

// Efek kursor
import TextCursor from "./components/TextCursor";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      {/* Toaster (notif) */}
      <Toaster />
      <Sonner />

      <BrowserRouter>
        {/* 🔥 Efek kursor aktif di semua halaman */}
        <TextCursor
          text="✨"
          delay={0.01}
          spacing={80}
          followMouseDirection={true}
          randomFloat={true}
          exitDuration={0.3}
          removalInterval={20}
          maxPoints={10}
        />

        {/* 🔗 Routing halaman */}
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/organizations" element={<Organizations />} />
          <Route path="/project-1" element={<ProjectDetail1 />} />
          <Route path="/project-2" element={<ProjectDetail2 />} />
          <Route path="/project-3" element={<ProjectDetail3 />} />
          <Route path="/project-4" element={<ProjectDetail4 />} />
          <Route path="/project-5" element={<ProjectDetail5 />} />
          {/* Rute fallback */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

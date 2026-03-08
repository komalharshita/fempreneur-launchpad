import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ToolsHub from "./pages/ToolsHub";
import ToolPage from "./pages/ToolPage";
import MentorPage from "./pages/MentorPage";
import LearningPage from "./pages/LearningPage";
import ResourcesPage from "./pages/ResourcesPage";
import ShowcasePage from "./pages/ShowcasePage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/mentor" element={<MentorPage />} />
          <Route path="/tools" element={<ToolsHub />} />
          <Route path="/tools/:slug" element={<ToolPage />} />
          <Route path="/learning" element={<LearningPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/showcase" element={<ShowcasePage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

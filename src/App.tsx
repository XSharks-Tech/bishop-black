
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Ponto from "./pages/Ponto";
import Perfil from "./pages/Perfil";
import Equipe from "./pages/Equipe";
import Relatorios from "./pages/Relatorios";
import Solicitacoes from "./pages/Solicitacoes";
import Assistente from "./pages/Assistente";
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
          <Route path="/ponto" element={<Ponto />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/equipe" element={<Equipe />} />
          <Route path="/relatorios" element={<Relatorios />} />
          <Route path="/solicitacoes" element={<Solicitacoes />} />
          <Route path="/assistente" element={<Assistente />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

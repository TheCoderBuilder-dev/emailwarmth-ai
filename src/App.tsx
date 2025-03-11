
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from "@/contexts/AuthContext";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import Index from "@/pages/Index";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Dashboard from "@/pages/Dashboard";
import NotFound from "@/pages/NotFound";
import EmailWarmup from "@/pages/EmailWarmup";
import Campaigns from "@/pages/Campaigns";
import Analytics from "@/pages/Analytics";
import Contacts from "@/pages/Contacts";
import Templates from "@/pages/Templates";
import Schedule from "@/pages/Schedule";
import Settings from "@/pages/Settings";
import EmailPerformance from "@/pages/EmailPerformance";
import CreateCampaign from "@/pages/CreateCampaign";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* Protected routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/warmup" element={<EmailWarmup />} />
            <Route path="/dashboard/campaigns" element={<Campaigns />} />
            <Route path="/dashboard/analytics" element={<Analytics />} />
            <Route path="/dashboard/contacts" element={<Contacts />} />
            <Route path="/dashboard/templates" element={<Templates />} />
            <Route path="/dashboard/schedule" element={<Schedule />} />
            <Route path="/dashboard/settings" element={<Settings />} />
            <Route path="/dashboard/email-performance" element={<EmailPerformance />} />
            <Route path="/dashboard/create-campaign" element={<CreateCampaign />} />
          </Route>
          
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </Router>
      <Toaster />
    </AuthProvider>
  );
}

export default App;

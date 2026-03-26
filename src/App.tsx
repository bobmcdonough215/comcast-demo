import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useScrollToTop } from './hooks/useScrollToTop';
import Home from './pages/Home';
import ClusterOverview from './pages/ClusterOverview';
import PillarPage from './pages/tier1/PillarPage';
import SpeedHubPage from './pages/tier1/SpeedHubPage';
import DevicesSpokePage from './pages/tier1/DevicesSpokePage';
import DedicatedVsSharedPage from './pages/tier1/DedicatedVsSharedPage';
import GamingVenuePage from './pages/tier1/GamingVenuePage';
import BestProvidersPage from './pages/tier1/BestProvidersPage';
import GlossaryBandwidthPage from './pages/tier1/GlossaryBandwidthPage';
import RestaurantPage from './pages/tier1/RestaurantPage';
import WirelessBackupPage from './pages/tier1/WirelessBackupPage';
import CustomerStoriesPage from './pages/tier1/CustomerStoriesPage';
import AIToolsPage from './pages/tier1/AIToolsPage';
import BandwidthCalculatorPage from './pages/tier1/BandwidthCalculatorPage';
import DedicatedInternetHubPage from './pages/tier1/DedicatedInternetHubPage';
import WiFiDevicesHubPage from './pages/tier1/WiFiDevicesHubPage';
import ReliabilityHubPage from './pages/tier1/ReliabilityHubPage';
import IndustryVerticalsHubPage from './pages/tier1/IndustryVerticalsHubPage';
import VideoConferencingPage from './pages/tier2/VideoConferencingPage';
import POSBandwidthPage from './pages/tier2/POSBandwidthPage';
import VoIPSpeedPage from './pages/tier2/VoIPSpeedPage';
import CloudStoragePage from './pages/tier2/CloudStoragePage';
import SLAPage from './pages/tier2/SLAPage';
import SymmetricalSpeedsPage from './pages/tier2/SymmetricalSpeedsPage';
import MultiLocationDIAPage from './pages/tier2/MultiLocationDIAPage';
import SDWANPage from './pages/tier2/SDWANPage';
import LatencyPage from './pages/tier2/LatencyPage';
import StaticIPPage from './pages/tier2/StaticIPPage';
import JitterPage from './pages/tier2/JitterPage';
import MbpsGbpsPage from './pages/tier2/MbpsGbpsPage';
import WiFiProPage from './pages/tier2/WiFiProPage';
import HealthcarePage from './pages/tier2/HealthcarePage';
import ProfessionalServicesPage from './pages/tier2/ProfessionalServicesPage';
import HotelsPage from './pages/tier2/HotelsPage';
import ComcastVsATTPage from './pages/tier2/ComcastVsATTPage';
import PageInventoryPage from './pages/PageInventory';
import StubPage from './pages/tier2-3/StubPage';

function ScrollToTop() {
  useScrollToTop();
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cluster" element={<ClusterOverview />} />
        <Route path="/inventory" element={<PageInventoryPage />} />
        <Route path="/learn/business-internet" element={<PillarPage />} />
        <Route path="/learn/business-internet/speed-guide" element={<SpeedHubPage />} />
        <Route path="/learn/business-internet/how-many-devices" element={<DevicesSpokePage />} />
        <Route path="/learn/business-internet/dedicated-vs-shared" element={<DedicatedVsSharedPage />} />
        <Route path="/learn/business-internet/gaming-venues" element={<GamingVenuePage />} />
        <Route path="/learn/business-internet/restaurants" element={<RestaurantPage />} />
        <Route path="/learn/business-internet/wireless-backup" element={<WirelessBackupPage />} />
        <Route path="/learn/business-internet/best-providers-2026" element={<BestProvidersPage />} />
        <Route path="/learn/business-internet/glossary/bandwidth-vs-speed" element={<GlossaryBandwidthPage />} />
        <Route path="/tools/bandwidth-calculator" element={<BandwidthCalculatorPage />} />
        <Route path="/resources/customer-stories" element={<CustomerStoriesPage />} />
        <Route path="/learn/business-internet/internet-for-ai-tools" element={<AIToolsPage />} />
        <Route path="/learn/business-internet/dedicated-internet" element={<DedicatedInternetHubPage />} />
        <Route path="/learn/business-internet/wifi-devices" element={<WiFiDevicesHubPage />} />
        <Route path="/learn/business-internet/reliability" element={<ReliabilityHubPage />} />
        <Route path="/learn/business-internet/by-industry" element={<IndustryVerticalsHubPage />} />
        <Route path="/learn/business-internet/video-conferencing-bandwidth" element={<VideoConferencingPage />} />
        <Route path="/learn/business-internet/pos-bandwidth" element={<POSBandwidthPage />} />
        <Route path="/learn/business-internet/voip-speed" element={<VoIPSpeedPage />} />
        <Route path="/learn/business-internet/cloud-storage-speed" element={<CloudStoragePage />} />
        <Route path="/learn/business-internet/what-is-sla" element={<SLAPage />} />
        <Route path="/learn/business-internet/symmetrical-speeds" element={<SymmetricalSpeedsPage />} />
        <Route path="/learn/business-internet/multi-location-dia" element={<MultiLocationDIAPage />} />
        <Route path="/learn/business-internet/sd-wan" element={<SDWANPage />} />
        <Route path="/learn/business-internet/healthcare" element={<HealthcarePage />} />
        <Route path="/learn/business-internet/professional-services" element={<ProfessionalServicesPage />} />
        <Route path="/learn/business-internet/hotels" element={<HotelsPage />} />
        <Route path="/learn/business-internet/comcast-vs-att" element={<ComcastVsATTPage />} />
        <Route path="/learn/business-internet/glossary/latency" element={<LatencyPage />} />
        <Route path="/learn/business-internet/glossary/static-ip" element={<StaticIPPage />} />
        <Route path="/learn/business-internet/glossary/jitter" element={<JitterPage />} />
        <Route path="/learn/business-internet/glossary/mbps-gbps" element={<MbpsGbpsPage />} />
        <Route path="/learn/business-internet/wifi-pro" element={<WiFiProPage />} />
        {/* Stub routes for Tier 2/3 pages */}
        <Route path="/learn/business-internet/glossary/:slug" element={<StubPage />} />
        <Route path="/learn/business-internet/:slug" element={<StubPage />} />
        <Route path="/tools/:slug" element={<StubPage />} />
        <Route path="/resources/:slug" element={<StubPage />} />
        <Route path="/about/:slug" element={<StubPage />} />
      </Routes>
    </BrowserRouter>
  );
}

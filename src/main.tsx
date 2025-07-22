import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Import Vercel Speed Insights
import { injectSpeedInsights } from "@vercel/speed-insights";

// Inisialisasi Speed Insights
injectSpeedInsights();

createRoot(document.getElementById("root")!).render(<App />);
s;

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import "./pages/create-employee/createEmployer.css";
import { FormProvider } from "./store/FormContext";
import { Toaster } from "./components/ui/sonner";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <FormProvider>
        <App />
        <Toaster className="text-white border-white" />
      </FormProvider>
    </BrowserRouter>
  </StrictMode>
);

import { useState } from "react";
import { UserSelectionScreen } from "@/components/UserSelectionScreen";
import { NafathLoginScreen } from "@/components/NafathLoginScreen";
import { BeneficiaryDashboard } from "@/components/BeneficiaryDashboard";
import { EmployeeDashboard } from "@/components/EmployeeDashboard";

type Screen = 'selection' | 'login' | 'beneficiary_dashboard' | 'employee_dashboard';
type PortalType = 'beneficiary' | 'employee';

const Index = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>('selection');
  const [selectedPortal, setSelectedPortal] = useState<PortalType>('beneficiary');

  const handleSelectBeneficiary = () => {
    setSelectedPortal('beneficiary');
    setCurrentScreen('login');
  };

  const handleSelectEmployee = () => {
    setSelectedPortal('employee');
    setCurrentScreen('login');
  };

  const handleLogin = () => {
    if (selectedPortal === 'beneficiary') {
      setCurrentScreen('beneficiary_dashboard');
    } else {
      setCurrentScreen('employee_dashboard');
    }
  };

  const handleBackToSelection = () => {
    setCurrentScreen('selection');
  };

  // Render screens based on state
  switch (currentScreen) {
    case 'selection':
      return (
        <UserSelectionScreen 
          onSelectBeneficiary={handleSelectBeneficiary}
          onSelectEmployee={handleSelectEmployee}
        />
      );
    case 'login':
      return (
        <NafathLoginScreen 
          portalType={selectedPortal}
          onBack={handleBackToSelection}
          onLogin={handleLogin}
        />
      );
    case 'beneficiary_dashboard':
      return <BeneficiaryDashboard onBack={handleBackToSelection} />;
    case 'employee_dashboard':
      return <EmployeeDashboard onBack={handleBackToSelection} />;
    default:
      return null;
  }
};

export default Index;

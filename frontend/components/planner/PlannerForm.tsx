'use client';

import React from 'react';
import { usePlanner } from '@/hooks/usePlanner';
import DestinationSelector from './DestinationSelector';
import DateSelector from './DateSelector';
import TravelerSelector from './TravelerSelector';
import BudgetSelector from './BudgetSelector';
import TravelStyleSelector from './TravelStyleSelector';
import InterestSelector from './InterestSelector';
import TransportSelector from './TransportSelector';
import HotelPreferenceSelector from './HotelPreferenceSelector';
import LanguageSelector from './LanguageSelector';
import ReviewPlanner from './ReviewPlanner';
import PlannerLoading from './PlannerLoading';
import PlannerResult from './PlannerResult';

export const PlannerForm = () => {
  const { state } = usePlanner();

  if (state.isGenerating) {
    return <PlannerLoading />;
  }

  switch (state.currentStep) {
    case 1:
      return <DestinationSelector />;
    case 2:
      return <DateSelector />;
    case 3:
      return <TravelerSelector />;
    case 4:
      return <BudgetSelector />;
    case 5:
      return <TravelStyleSelector />;
    case 6:
      return <InterestSelector />;
    case 7:
      return <TransportSelector />;
    case 8:
      return <ReviewPlanner />;
    case 9:
      return <PlannerResult />;
    default:
      return <DestinationSelector />;
  }
};

export default PlannerForm;

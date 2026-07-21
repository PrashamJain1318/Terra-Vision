import { create } from 'zustand';

interface PlannerState {
  currentPlan: any | null;
  plansList: any[];
  setCurrentPlan: (plan: any) => void;
  setPlansList: (plans: any[]) => void;
  clearPlan: () => void;
}

export const usePlannerStore = create<PlannerState>((set) => ({
  currentPlan: null,
  plansList: [],
  setCurrentPlan: (plan) => set({ currentPlan: plan }),
  setPlansList: (plans) => set({ plansList: plans }),
  clearPlan: () => set({ currentPlan: null }),
}));

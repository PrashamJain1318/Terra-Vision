export const plannerRoutes = {
  root: '/dashboard/planner',
  new: '/dashboard/planner/new',
  history: '/dashboard/planner/history',
  view: (tripId: string) => `/dashboard/planner/${tripId}`,
  edit: (tripId: string) => `/dashboard/planner/edit/${tripId}`,
};

export default plannerRoutes;

export const plannerFormatter = {
  formatSuccess: (data, message = 'Success') => ({
    success: true,
    message,
    data,
    timestamp: new Date().toISOString(),
  }),

  formatError: (message = 'Error', statusCode = 400) => ({
    success: false,
    message,
    statusCode,
    timestamp: new Date().toISOString(),
  }),
};

export default plannerFormatter;

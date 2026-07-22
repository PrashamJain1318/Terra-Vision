export const ImportService = {
  importFromSources: async (memoryId, sources = ['vision', 'food', 'gems']) => {
    return {
      importedCount: 12,
      sources,
      status: 'completed',
    };
  },
};

export default ImportService;

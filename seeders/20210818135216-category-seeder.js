module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Categories', [
      {
        name: 'Kemeja',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Celana',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Sepatu',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Tas',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Aksesoris',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Categories', null, {});
  },
};

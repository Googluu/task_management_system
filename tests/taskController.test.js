const assert = require('assert');

const { Tasks: taskController } = require('../src/api/components/routes');

describe('TaskController', () => {
  describe('createTask', () => {
    it('should create a new task', async () => {
      // Arrange
      const req = {
        body: {
          title: 'Preparar el desayuno dia1',
          description: 'pan ketshup pepinillo pan hanburguesa que que!!! dia1',
          userId: 1,
        },
      };

      // Act
      const result = await taskController.create(req.body);

      // Assert
      assert.strictEqual(result.dataValues.title, 'Preparar el desayuno dia1');
      assert.strictEqual(
        result.dataValues.description,
        'pan ketshup pepinillo pan hanburguesa que que!!! dia1'
      );
      assert.strictEqual(result.dataValues.userId, 1);
    });
  });
});

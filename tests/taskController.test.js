const assert = require('assert');

const { Tasks: taskController } = require('../src/api/components/routes');

describe('TaskController', () => {
  describe('createTask', () => {
    it('should create a new task', async () => {
      // Arrange
      const req = {
        body: { title: 'Task 1', description: 'This is a task', userId: 1 },
      };
      const res = {};

      // Act
      const result = await taskController.create(req);

      // Assert
      // assert.strictEqual(result.status, '201 Created');
      assert.strictEqual(result.dataValues.title, 'Task 1');
      assert.strictEqual(result.dataValues.description, 'This is a task');
      assert.strictEqual(result.dataValues.userId, 1);
    });
  });
});

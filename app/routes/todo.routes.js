module.exports = app => {
  const toDo = require("../controllers/todo.controller.js");

  var router = require("express").Router();

  /**
   * @swagger
   * /api/todo:
   *   post:
   *     summary: Create a new ToDo
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               title:
   *                 type: string
   *               description:
   *                 type: string
   *               dueDate:
   *                 type: string
   *                 format: date
   *               priority:
   *                 type: string
   *     responses:
   *       200:
   *         description: ToDo created
   */
  router.post("/", toDo.create);

  /**
   * @swagger
   * /api/todo:
   *   get:
   *     summary: Retrieve all ToDos
   *     parameters:
   *       - name: page
   *         in: query
   *         description: The page number for pagination
   *         required: false
   *         schema:
   *           type: integer
   *           example: 1
   *       - name: limit
   *         in: query
   *         description: The number of items per page
   *         required: false
   *         schema:
   *           type: integer
   *           example: 1
   *     responses:
   *       200:
   *         description: A list of ToDos
   *         content:
   *           application/json:
   *             schema:
   *               type: array
   *               items:
   *                 type: object
   *                 properties:
   *                   id:
   *                     type: string
   *                   title:
   *                     type: string
   *                   description:
   *                     type: string
   *                   dueDate:
   *                     type: string
   *                     format: date-time
   *                   priority:
   *                     type: string
   *                   status:
   *                     type: integer
   */
  router.get("/", toDo.findAll);

  /**
   * @swagger
   * /api/todo/update-todo:
   *   post:
   *     summary: Update a ToDo
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               id:
   *                 type: string
   *               title:
   *                 type: string
   *               description:
   *                 type: string
   *               dueDate:
   *                 type: string
   *                 format: date-time
   *               priority:
   *                 type: string
   *     responses:
   *       200:
   *         description: ToDo updated
   */
  router.post("/update-todo", toDo.update);

  /**
   * @swagger
   * /api/todo/update-status:
   *   post:
   *     summary: Update status of a ToDo
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               id:
   *                 type: string
   *               status:
   *                 type: integer
   *     responses:
   *       200:
   *         description: Status updated
   */
  router.post("/update-status", toDo.updateStatus);

  // Mount the router to the /api/todo path
  app.use("/api/todo", router);
};

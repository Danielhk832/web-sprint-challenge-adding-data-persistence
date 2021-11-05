exports.seed = function (knex, Promise) {
  return knex("tasks").insert([
    {
      task_description: "make the things ",
      task_notes: "ayy bada bing",
      task_completed: false,
      project_id: 1,
    },
    {
      task_description: "do the stuff",
      task_notes: "ayy bada bing1",
      task_completed: false,
      project_id: 2,
    },
    {
      task_description: "profit",
      task_notes: "ayy bada bing2",
      task_completed: false,
      project_id: 3,
    },
  ]);
};

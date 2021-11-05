exports.seed = function (knex, Promise) {
  return knex("projects").insert([
    {
      project_name: "sando",
      project_description: "ayy bada bing",
      project_completed: false,
    },
    {
      project_name: "sando1",
      project_description: "ayy bada bing",
      project_completed: true,
    },
    {
      project_name: "sando2",
      project_description: "ayy bada bing",
      project_completed: false,
    },
  ]);
};

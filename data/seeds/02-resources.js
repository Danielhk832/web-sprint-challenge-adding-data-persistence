exports.seed = function (knex, Promise) {
  return knex("resources").insert([
    { resource_name: "minerals", resource_description: "ayy bada bing" },
    { resource_name: "oil", resource_description: "ayy bada bing1" },
    { resource_name: "gas", resource_description: "ayy bada bing2" },
  ]);
};

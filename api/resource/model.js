const db = require("../../data/dbConfig");

async function getResources() {
  return db("resources");
}

async function createResource(task) {
  const [resource_id] = await db("resources").insert(task);
  return db("resources").where({ resource_id }).first();
}

module.exports = {
  getResources,
  createResource,
};

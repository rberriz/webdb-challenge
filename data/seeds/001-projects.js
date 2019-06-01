exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex("projects")
      // .del()
      .then(function() {
        // Inserts seed entries
        return knex("projects").insert([
          {
            name: "build a deck",
            description: "made of pine and screws"
          },
  
          { name: "remodel a kitchen", description: "all new cabinets" },
  
          { name: "build a house", description: "made of straw" }
        ]);
      });
  };
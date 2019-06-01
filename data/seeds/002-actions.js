exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex("actions")
      .del()
      .then(function() {
        // Inserts seed entries
        return knex("actions").insert([
          {
            project_id: "1",
            description: "buy wood",
            notes: "all pressure treated pine"
          },
  
          {
            project_id: "1",
            description: "buy screws",
            notes: "5 boxes of 500"
          },
  
          {
            project_id: "2",
            description: "pick out cabinets",
            notes: "any type will do"
          },
          {
            project_id: "2",
            description: "pick out fixtures",
            notes: "all kohler"
          },
          {
            project_id: "3",
            description: "print out blueprints",
            notes: "on arch d paper"
          }
        ]);
      });
  };
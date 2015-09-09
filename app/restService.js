module.exports = function(options) {

  var
    router = require("express").Router(),
    sqlite3 = require("sqlite3").verbose(),
    fs = require("fs"),
    sqliteFileStats = null, db = null;

  try {
    sqliteFileStats = fs.statSync(options.fileName)
  } catch(err) {
    // checking to see if file exists, do nothing on error
  }

  // create and initialize the database if it does not exist
  if(!sqliteFileStats || !sqliteFileStats.isFile || !sqliteFileStats.isFile()) {

    console.log("Creating database file: " + options.fileName);
    fs.openSync(options.fileName, "w");

    db = new sqlite3.Database(options.fileName);
    db.serialize(function() {

      console.log("Creating table.");
      db.run("create table todos (id integer primary key, todo text not null, priority int not null, due_date int not null, completed int)");

      console.log("Creating sample data.");
      db.run("insert into todos (todo, priority, due_date, completed) values ('ToDo 1', 0, 1441800341787, 0)");
      db.run("insert into todos (todo, priority, due_date, completed) values ('ToDo 2', 10, 1441800341787, 1)");
    });

  } else {
    db = new sqlite3.Database(options.fileName);
  }

  router.route("/todos")
    .get(function(req, res) {

      db.all("select * from todos", function(err, todos) {
        if (err) {
          res.json(err);
        } else {
          res.json(todos);
        }
      });

    })
    .post(function(req, res) {

      var
        todo = req.body,
        stmt = db.prepare("insert into todos (todo, priority, due_date, completed) values (?, ?, ?, ?, ?)");

      stmt.run(todo.todo, todo.priority, todo.due_date, todo.completed, function(err) {
        if (err) {
          res.json(err);
        } else {
          res.json({ todo_id: this.lastID});
        }
      });

      stmt.finalize();

    });

  router.route("/todos/:id")
    .get(function(req, res) {

        db.get("select * from todos where id = ?", [req.params.id], function(err, todo) {
          if (err) {
            res.json(err);
          } else {
            res.json(todo);
          }
        });

    })
    .put(function(req, res) {

      var
        todo = req.body,
        stmt = db.prepare("update todos set todo = ?, priority = ?, due_date = ?, completed = ? where id = ?");

      stmt.run(todo.todo, todo.priority, todo.due_date, todo.completed, req.params.id, function(err) {
        if (err) {
          res.json(err);
        } else {
          res.json({ todos_updated: this.changes });
        }
      });

      stmt.finalize();

    })
    .delete(function(req, res) {

      var stmt = db.prepare("delete from todos where id = ?");

      stmt.run(req.params.id, function(err) {
        if (err) {
          res.json(err);
        } else {
          res.json({ todos_deleted: this.changes });
        }
      });

      stmt.finalize();

    });

  return router;

};

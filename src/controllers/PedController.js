function index(req, res) {
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM pedidos", (err, pedidos) => {
      if (err) {
        res.json(err);
      }
      res.render("pedidos/index", { pedidos });
    });
  });
}
function create(req, res) {
  res.render("pedidos/create");
}

function store(req, res) {
  const data = req.body;

  req.getConnection((err, conn) => {
    conn.query("INSERT INTO pedidos SET ?", [data], (err, rows) => {
      res.redirect("/pedidos");
    });
  });
}

function destroy(req, res) {
  const id = req.body.id;
  req.getConnection((err, conn) => {
    conn.query("DELETE FROM pedidos WHERE id = ?", [id], (err, rows) => {
      res.redirect("/pedidos");
    });
  });
}

function edit(req, res) {
  const id = req.params.id;

  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM pedidos WHERE id = ?", [id], (err, pedidos) => {
      if (err) {
        res.json(err);
      }
      res.render("pedidos/edit", { pedidos });
    });
  });
}

function update(req, res) {
  const id = req.params.id;
  const data = req.body;
  console.log(data);
  req.getConnection((err, conn) => {
    conn.query("UPDATE pedidos SET ? WHERE id = ?", [data, id], (err, rows) => {
      res.redirect("/pedidos");
      console.log(err);
    });
  });
}

module.exports = {
  index: index,
  create: create,
  store: store,
  destroy: destroy,
  edit: edit,
  update: update,
};

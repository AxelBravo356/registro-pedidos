const express = require("express");
const PedController = require("../controllers/PedController");
const router = express.Router();

router.get("/pedidos", PedController.index);
router.get("/create", PedController.create);
router.post("/create", PedController.store);
router.post("/pedidos/delete", PedController.destroy);
router.get("/pedidos/edit/:id", PedController.edit);
router.post("/pedidos/edit/:id", PedController.update);

module.exports = router;

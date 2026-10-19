const express = require("express");
const router = express.Router();
const { execFile } = require("child_process");
const net = require("net");

// GET /api/ping?host=<endereço> - diagnóstico de rede
router.get("/ping", (req, res) => {
  const { host } = req.query;
  if (!host) return res.status(400).json({ error: "Parâmetro 'host' é obrigatório" });

  if(typeof host !== "string" || !net.isIP(host)) {
    return res.status(400).json({ error: "Parâmetro 'host' deve ser um IP válido"});
  }

  execFile("ping", ["-c", "2", host], (error, stdout, stderr) => {
    if (error) return res.status(500).json({ error: "Falha ao executar ping" });
    res.json({ host, output: stdout });
  });
});

module.exports = router;

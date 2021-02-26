const db = require("../core/db");
const express = require("express");
const sql = require("mssql");
const router = express.Router();

const urlEncodedParser = express.urlencoded({ extended: false });

router.get("/register", (_, res) => {
  res.render("register");
});

router.post("/register", urlEncodedParser, async (req, res) => {
  try {
    const register = await db.poolPromise
      .request()
      .input("AccountName", sql.NVarChar(12), req.body.username)
      .input("Password", sql.VarChar(12), req.body.password)
      .execute("DNMembership.dbo.__CreateAccount");

    //res.json(register);
    res.redirect("./Success");
  } catch (err) {
    console.error(err);
    console.log(err);
    res.send("Account Already Exists!");
  }
});

module.exports = router;

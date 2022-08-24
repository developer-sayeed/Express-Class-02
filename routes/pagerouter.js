const express = require("express");
const path = require("path");
const { showhomepage, showblogpage, showfeaturepage, showservicepage, showpricingpage, showcontactpage, showsingleBlogpage } = require("../controller/pagecontroller");

// init Router
const router = express.Router();

// Routes

router.get("/",showhomepage);

router.get("/feature",showfeaturepage);

router.get("/service",showservicepage);

router.get("/pricing",showpricingpage);

router.get("/blog", showblogpage);

router.get("/single-blog",showsingleBlogpage);

router.get("/contact", showcontactpage);

// Export Router

module.exports = router;

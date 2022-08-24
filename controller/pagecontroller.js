const path = require("path")

// Show Home Page

const showhomepage = (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "../public/index.html"));
};

// Show blog Page

const showblogpage = (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "../public/blog.html"));
};
// Show Contact Page

const showcontactpage = (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "../public/contact.html"));
};
// Show feature Page

const showfeaturepage = (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "../public/feature.html"));
};
// Show Pricing Page

const showpricingpage = (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "../public/pricing.html"));
};
// Show service Page

const showservicepage = (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "../public/services.html"));
};
// Show Single Blog Page

const showsingleBlogpage = (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "../public/single-blog.html"));
};

module.exports = {
  showhomepage,
  showblogpage,
  showcontactpage,
  showfeaturepage,
  showpricingpage,
  showservicepage,
  showsingleBlogpage
};

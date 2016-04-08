var CONFIG = {
  // your website's title
  document_title: "UI FRAME",

  // index page
  index: "README.md",

  // sidebar file
  sidebar_file: "sidebar.md"
};

// **************************
// DON'T EDIT FOLLOWING CODES
// **************************

addConfig(ditto, CONFIG);

function addConfig(obj, conf) {
  Object.keys(conf).forEach(function (key) {
    obj[key] = conf[key];
  });
}


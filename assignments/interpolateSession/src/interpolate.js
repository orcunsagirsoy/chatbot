const interpolate = (value, session = {}, options = {}) => {
  let pattern = "";
  if (Object.keys(session).length === 0) {
    pattern = ".*?";
  } else {
    pattern = Object.keys(session).join("|");
  }

  return value.replace(
    new RegExp(
      options.leftDelimiter + "(" + pattern + ")" + options.rightDelimiter,
      "g"
    ),
    function (m, c) {
      return session[c] ? session[c] : "";
    }
  );
};

module.exports = { interpolate };

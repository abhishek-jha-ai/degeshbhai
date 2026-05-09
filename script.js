(function () {
  function query(name) {
    return new URLSearchParams(window.location.search).get(name) || "";
  }

  var fields = ["utm_source", "utm_medium", "utm_campaign"];
  fields.forEach(function (field) {
    var el = document.getElementById(field);
    if (el) el.value = query(field);
  });

  var key = "dogesh_buyer_vid";
  var existing = localStorage.getItem(key);
  if (!existing) {
    existing = "lead-" + Math.random().toString(36).slice(2, 10);
    localStorage.setItem(key, existing);
  }

  var visitor = document.getElementById("visitor_id");
  if (visitor) visitor.value = existing;
})();

(function () {
  var MIN_OFFER_USD = 2500;

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

  var form = document.getElementById("leadForm");
  var offerInput = document.getElementById("offer_usd");
  var offerError = document.getElementById("offerError");
  var offerQuality = document.getElementById("offer_quality");

  if (!form || !offerInput || !offerError || !offerQuality) return;

  function validateOffer() {
    var amount = Number(offerInput.value || 0);
    if (!amount || amount < MIN_OFFER_USD) {
      offerError.textContent =
        "Minimum opening offer is $" + MIN_OFFER_USD.toLocaleString() + " USD.";
      offerQuality.value = "below_minimum";
      return false;
    }
    offerError.textContent = "";
    offerQuality.value = "valid";
    return true;
  }

  offerInput.addEventListener("input", validateOffer);

  form.addEventListener("submit", function (event) {
    if (!validateOffer()) {
      event.preventDefault();
      offerInput.focus();
    }
  });
})();

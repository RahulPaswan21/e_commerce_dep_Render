const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AYGOSG9u0sFN4CgFixx3tlo3R4LOItYoo9lEHwpOG6UnfxVKAysrmYj48T3T4namXLoeAs4JhJ7mH7hN",
  client_secret: "EJkbXz0RIMsPFEkrolkYAD8J2ljZVW8fMlIeERwqiNWcb3TOpNY5vl9A4CBgb29W8bRwEVSli5akY0iM",
});

module.exports = paypal;
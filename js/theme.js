/* =========================================================
   The ReminderHood — theme restore
   Loaded (not deferred) in <head> so a visitor who chose the light theme
   doesn't see a flash of dark first. Dark is the default; nothing is stored
   until the visitor presses the toggle. The toggle itself lives in main.js.
   ========================================================= */
(() => {
  try {
    if (localStorage.getItem("rh-theme") === "light") document.documentElement.dataset.theme = "light";
  } catch (e) { /* storage blocked: stay dark */ }
})();

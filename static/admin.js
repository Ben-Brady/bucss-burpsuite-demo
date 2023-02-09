let isAdmin = false;

function attemptVistAdminControlPanel() {
    if (isAdmin) {
      window.location.pathname = "/hidden/bliss/admin/flag";
    }
}

attemptVistAdminControlPanel();
"use client";

import { useEffect, useState } from "react";

export default function AdminPage() {
  const [status, setStatus] = useState("CHECKING ADMIN CONFIGURATION…");

  useEffect(() => {
    fetch("/api/admin-config", { cache: "no-store" })
      .then(r => r.json())
      .then(c => setStatus(c.url && c.key ? "SUPABASE CONFIGURATION FOUND" : "SUPABASE NOT CONFIGURED"))
      .catch(() => setStatus("UNABLE TO READ ADMIN CONFIGURATION"));
  }, []);

  return (
    <main className="admin-page">
      <div className="admin-card">
        <p className="admin-kicker">SPARKY GRISWOLD / ADMIN</p>
        <h1>{status}</h1>
        <p>Admin configuration is now read at runtime from the Preview server.</p>
      </div>
    </main>
  );
}

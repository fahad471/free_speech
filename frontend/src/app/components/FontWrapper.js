"use client";

import { useState, useEffect } from "react";

export default function FontWrapper({ children, geistSansVar, geistMonoVar }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <body className={`${geistSansVar} ${geistMonoVar}`}>
      <div className={mounted ? "vsc-initialized" : ""}>
        {children}
      </div>
    </body>
  );
}

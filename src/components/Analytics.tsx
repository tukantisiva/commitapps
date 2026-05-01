"use client";

import { useEffect } from "react";
import posthog from "posthog-js";

export default function Analytics() {
  useEffect(() => {
    // Only initialize if the key is provided to prevent errors locally
    const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY;
    if (posthogKey) {
      posthog.init(posthogKey, {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://app.posthog.com",
        loaded: (posthog) => {
          if (process.env.NODE_ENV === 'development') posthog.debug();
        },
      });
    }
  }, []);

  return null;
}

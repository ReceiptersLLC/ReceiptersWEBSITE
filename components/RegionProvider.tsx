"use client";

import { createContext, useCallback, useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { REGION_COOKIE, type Region } from "@/lib/region";

type RegionState = { region: Region; setRegion: (region: Region) => void };

const RegionContext = createContext<RegionState>({ region: "ke", setRegion: () => {} });

export function RegionProvider({ initialRegion, children }: { initialRegion: Region; children: React.ReactNode }) {
  const [region, setRegionState] = useState<Region>(initialRegion);
  const router = useRouter();

  // The visitor asked for this version, so remembering it is part of the service they requested.
  const setRegion = useCallback(
    (next: Region) => {
      document.cookie = `${REGION_COOKIE}=${next}; Path=/; Max-Age=${60 * 60 * 24 * 365}; SameSite=Lax; Secure`;
      setRegionState(next);
      router.refresh();
    },
    [router],
  );

  return <RegionContext.Provider value={{ region, setRegion }}>{children}</RegionContext.Provider>;
}

export const useRegion = () => useContext(RegionContext);

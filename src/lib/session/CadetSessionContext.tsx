'use client';

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from 'react';
import { generateCadetKeypair, deriveCadetHandle } from '@/lib/webcrypto';

export interface CadetSessionState {
  cadetHandle: string;
  bookmarks: string[];
  completedLabs: string[];
  isInitialized: boolean;
  toggleBookmark: (resourceId: string) => void;
  markLabCompleted: (labSlug: string) => void;
}

const STORAGE_KEYS = {
  HANDLE: 'nova_cadet_handle',
  BOOKMARKS: 'nova_cadet_bookmarks',
  COMPLETED_LABS: 'nova_cadet_labs',
} as const;

const CadetSessionContext = createContext<CadetSessionState | undefined>(
  undefined
);

export function CadetSessionProvider({
  children,
}: {
  children: ReactNode;
}): React.JSX.Element {
  const [cadetHandle, setCadetHandle] = useState<string>('Anonymous_Cadet');
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [completedLabs, setCompletedLabs] = useState<string[]>([]);
  const [isInitialized, setIsInitialized] = useState<boolean>(false);

  useEffect(() => {
    async function initSession(): Promise<void> {
      try {
        let handle = localStorage.getItem(STORAGE_KEYS.HANDLE);

        if (!handle) {
          const keypair = await generateCadetKeypair();
          handle = await deriveCadetHandle(keypair.publicKey);
          localStorage.setItem(STORAGE_KEYS.HANDLE, handle);
        }

        setCadetHandle(handle);

        const savedBookmarks = localStorage.getItem(STORAGE_KEYS.BOOKMARKS);
        if (savedBookmarks) {
          setBookmarks(JSON.parse(savedBookmarks));
        }

        const savedLabs = localStorage.getItem(STORAGE_KEYS.COMPLETED_LABS);
        if (savedLabs) {
          setCompletedLabs(JSON.parse(savedLabs));
        }
      } catch {
        // Fallback for private browsing mode or environments with blocked storage
        setCadetHandle('Cadet_Guest_00');
      } finally {
        setIsInitialized(true);
      }
    }

    void initSession();
  }, []);

  const toggleBookmark = useCallback((resourceId: string): void => {
    setBookmarks((prev) => {
      const exists = prev.includes(resourceId);
      const next = exists
        ? prev.filter((id) => id !== resourceId)
        : [...prev, resourceId];

      try {
        localStorage.setItem(STORAGE_KEYS.BOOKMARKS, JSON.stringify(next));
      } catch {
        // Safe storage write fallback
      }

      return next;
    });
  }, []);

  const markLabCompleted = useCallback((labSlug: string): void => {
    setCompletedLabs((prev) => {
      if (prev.includes(labSlug)) return prev;
      const next = [...prev, labSlug];

      try {
        localStorage.setItem(STORAGE_KEYS.COMPLETED_LABS, JSON.stringify(next));
      } catch {
        // Safe storage write fallback
      }

      return next;
    });
  }, []);

  return (
    <CadetSessionContext.Provider
      value={{
        cadetHandle,
        bookmarks,
        completedLabs,
        isInitialized,
        toggleBookmark,
        markLabCompleted,
      }}
    >
      {children}
    </CadetSessionContext.Provider>
  );
}

export function useCadetSession(): CadetSessionState {
  const context = useContext(CadetSessionContext);
  if (!context) {
    throw new Error(
      'useCadetSession must be used within a CadetSessionProvider'
    );
  }
  return context;
}

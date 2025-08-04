"use client";

import { useEffect } from "react";
import { useAuthStore } from "@/store/authStore";
import { supabase } from "@/supabase/supabaseClient";
import { usePathname, useRouter } from "next/navigation";

export default function ClientAuthProvider({ children }: { children: React.ReactNode }) {
  const setUser = useAuthStore((state) => state.setUser);
  const clearUser = useAuthStore((state) => state.clearUser);
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const isAuthReady = useAuthStore((state) => state.isAuthReady);
  const setAuthReady = useAuthStore((state) => state.setAuthReady);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      const user = data?.user;
      if (user && user.id && user.email) {
        setUser({
          id: user.id,
          email: user.email,
        });
      } else {
        clearUser(null);
      }
      setAuthReady(true);
    };
    getUser();

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        setUser({
          id: session.user.id,
          email: session.user.email ?? "",
        });
      } else {
        clearUser(null);
      }
      setAuthReady(true);
    });

    return () => {
      listener?.subscription.unsubscribe();
    };
  }, [setUser, clearUser]);
    // **auth ready가 될 때만 리다이렉트**
    useEffect(() => {
      if (!isAuthReady) return; // 준비 안 됐으면 무시
      if (!isLoggedIn && !["/auth", "/auth/sign-in", "/auth/sign-up"].includes(pathname)) {
        router.replace("/auth");
      }
    }, [isAuthReady, isLoggedIn, pathname, router]);

  return <>{children}</>;
}

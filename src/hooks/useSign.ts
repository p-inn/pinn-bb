"use client";
import { signInEmail, signOut, signUp } from "@/api/auth";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export function useSignUp() {
  const router = useRouter();
  return useMutation({
    mutationFn: signUp,
    onSuccess: () => {
    toast.success('회원가입이 완료되었습니다!');
    router.push("/auth/sign-in");
  },
    onError: (error) => {
      toast.error(error.message || "회원가입에 실패했습니다 💦");
  }},
  );
}

export function useSignIn() {
    const router = useRouter();
  return useMutation({
    mutationFn: signInEmail,
    onSuccess: () => {
    router.push("/dashboard-page");
  },
  onError: (error) => {
  if (error.message.includes("Email not confirmed")) {
    toast.error("가입하신 이메일로 이메일 인증을 완료해 주세요!");
  } else {
    toast.error(error.message || "로그인에 실패했습니다 💦");
  }
},
  });
}

export function useSignOut() {
  const router = useRouter();
  return useMutation({
    mutationFn: signOut,
    onSuccess: () => {
    toast.success('로그아웃이 정상적으로 완료되었습니다!');
    router.push("/auth");
  },
    onError: (error) => {
      toast.error(error.message || "로그아웃에 실패했습니다 💦");
  }},
  );
}
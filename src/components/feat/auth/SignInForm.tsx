"use client";

import CommonButton from "@/components/common/button/CommonButton";
import CommonInput from "@/components/common/input/CommonInput";
import { useSignIn } from "@/hooks/useSign";
import { SignInData } from "@/types/user";
import { useForm } from "react-hook-form";

export default function SignInForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<SignInData>();
  const { mutate: signIn, isPending } = useSignIn();

  const onSubmit = (data: SignInData) => {
      signIn(
        {
          email: data.email,
          password: data.password,
        },
      );
    };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-20 flex flex-col items-center justify-center gap-4">
      <CommonInput
        classNames="bg-gray-100 border-none"
        type="text"
        placeholder="아이디를 입력해주세요 ✍🏻"
        {...register("email", { required: "이메일을 입력해 주세요." })}
      />
      <CommonInput
        classNames="bg-gray-100 border-none"
        type="password"
        placeholder="패스워드를 입력해주세요 ✍🏻"
        {...register("password", { required: "패스워드를 입력해 주세요." })}
      />
      <CommonButton type="submit" classNames="bg-mainColor-500 hover:bg-mainColor-600 text-white" disabled={isPending}>
        {isPending ? '로그인 중...' : '로그인'}
      </CommonButton>
    </form>
  )
}
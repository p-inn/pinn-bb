"use client";

import { useForm } from "react-hook-form";
import CommonInput from "@/components/common/input/CommonInput";
import { useSignUp } from "@/hooks/useSign";
import CommonButton from "@/components/common/button/CommonButton";
import ValidationError from "./ValidationError";
import { EMAIL_RULE, NICKNAME_RULE, PASSWORD_CHECK_RULE, PASSWORD_RULE, TEL_RULE } from "./useValidationRules";
import { SignUpData } from "@/types/user";

export default function SignUpForm () {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<SignUpData>({
  mode: "onChange",
});
  const { mutate: signUp, isPending, error } = useSignUp();

  // 비밀번호 불일치 체크
  const password = watch("password");

  const onSubmit = (data: SignUpData) => {
    signUp(
      {
        email: data.email,
        password: data.password,
        nickName: data.nickName,
        tel: data.tel,
      },
    );
  };

  return (
    <form className="mt-8" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col items-center justify-center gap-2">
          <CommonInput
            classNames="bg-gray-100 border-none"
            type="text"
            placeholder="사용하실 이메일을 입력해주세요 ✍🏻"
            {...register("email", EMAIL_RULE)}
          />
          <ValidationError error={errors.email?.message} />
          <CommonInput
            classNames="bg-gray-100 border-none"
            type="password"
            placeholder="사용하실 비밀번호를 입력해주세요 ✍🏻"
            {...register("password",PASSWORD_RULE)}
          />
          <ValidationError error={errors.password?.message} />
          <CommonInput
            classNames="bg-gray-100 border-none"
            type="password"
            placeholder="패스워드를 다시 한번 입력해주세요 ✍🏻"
            {...register("passwordCheck", PASSWORD_CHECK_RULE(password))}
          />
          <ValidationError error={errors.passwordCheck?.message} />
          <CommonInput
            classNames="bg-gray-100 border-none"
            type="text"
            placeholder="사용하실 닉네임을 입력해주세요 ✍🏻"
            {...register("nickName",NICKNAME_RULE)}
          />
          <ValidationError error={errors.nickName?.message} />
          <CommonInput
            classNames="bg-gray-100 border-none"
            type="tel"
            placeholder="휴대폰번호를 입력해주세요 ✍🏻"
            {...register("tel",TEL_RULE)}
          />
          <ValidationError error={errors.tel?.message} />
          <CommonButton
            type="submit"
            classNames="bg-mainColor-500 hover:bg-mainColor-600 text-white"
            disabled={isPending}
            >
            {isPending ? '가입 중...' : '가입하기'}
            </CommonButton>
        </div>
        
      </form>
  )
}
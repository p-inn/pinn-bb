"use client";

import CommonInput from "@/components/common/input/CommonInput";
import CommonButton from "@/components/common/button/CommonButton";

export default function SignUpForm () {
  return (
        <div className="flex flex-col items-center justify-center gap-2">
          <CommonInput
            classNames="bg-gray-100 border-none"
            type="text"
            placeholder="사용하실 이메일을 입력해주세요 ✍🏻"
          />
          <CommonInput
            classNames="bg-gray-100 border-none"
            type="password"
            placeholder="사용하실 비밀번호를 입력해주세요 ✍🏻"
          />
          <ValidationError error={errors.password?.message} />
          <CommonInput
            classNames="bg-gray-100 border-none"
            type="password"
            placeholder="패스워드를 다시 한번 입력해주세요 ✍🏻"
          />
          <CommonInput
            classNames="bg-gray-100 border-none"
            type="text"
            placeholder="사용하실 닉네임을 입력해주세요 ✍🏻"
          />
          <CommonInput
            classNames="bg-gray-100 border-none"
            type="tel"
            placeholder="휴대폰번호를 입력해주세요 ✍🏻"
          />
          <CommonButton
            type="submit"
            classNames="bg-mainColor-500 hover:bg-mainColor-600 text-white"
            >
            </CommonButton>
        </div>
        
      </form>
  )
}
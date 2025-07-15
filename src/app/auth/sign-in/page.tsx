import BackButton from "@/components/common/button/BackButton";
import CommonButton from "@/components/common/button/CommonButton";
import CommonInput from "@/components/common/input/CommonInput";
import SignInLogoSection from "@/components/common/logo/SignInLogoSection";

export default function SignInPage () {
  return (
    <div className="w-full max-w-[560px] mx-auto">
      <div className="flex justify-start px-4">
        <BackButton />
      </div>
      <SignInLogoSection />
      <div className="flex flex-col items-center justify-center">
        <CommonInput
          classNames="bg-gray-100 border-none"
          type="text"
          placeholder="아이디를 입력해주세용!"
        />
        <CommonInput
          classNames="bg-gray-100 border-none"
          type="password"
          placeholder="패스워드를 입력해주세용!"
        />
        <CommonButton type="submit" classNames="bg-mainColor-500 hover:bg-mainColor-600 text-white">
          로그인
        </CommonButton>
      </div>
    </div>
  )
}
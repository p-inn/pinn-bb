import CommonButton from "@/components/common/button/CommonButton";
import SignInLogoSection from "@/components/common/logo/SignInLogoSection";
import { BsChatFill } from "react-icons/bs";

export default function LoginPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white mx-auto px-4 py-8 items-center justify-between">
      <SignInLogoSection />
      
      {/* Button Section */}
      <div className="flex flex-col w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg space-y-3 sm:space-y-4 lg:space-y-5 mb-8 sm:mb-12">
        <CommonButton classNames="flex justify-center items-center bg-yellow-300 hover:bg-yellow-400 cursor-pointer">
          <BsChatFill className="text-black mr-2"/> 카카오로 로그인
        </CommonButton>
        <CommonButton classNames="bg-gray-100 hover:bg-gray-300 cursor-pointer" href="/auth/sign-in">
          이메일로 로그인
        </CommonButton>
        <CommonButton classNames="bg-gray-100 hover:bg-gray-300 cursor-pointer" href="/auth/sign-up">
          회원가입
        </CommonButton>
      </div>
    </div>
  )
}
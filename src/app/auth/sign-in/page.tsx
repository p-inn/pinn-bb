import BackButton from "@/components/common/button/BackButton";
import CommonButton from "@/components/common/button/CommonButton";
import CommonInput from "@/components/common/input/CommonInput";
import SignInLogoSection from "@/components/common/logo/SignInLogoSection";
import SignInForm from "@/components/feat/auth/SignInForm";

export default function SignInPage () {
  return (
    <div className="w-full max-w-[560px] mx-auto bg-white">
      <div className="flex justify-start px-4">
        <BackButton />
      </div>
      <SignInLogoSection />
      <SignInForm />
    </div>
  )
}
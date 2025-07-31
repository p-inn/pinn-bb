import BackButton from "@/components/common/button/BackButton";
import SignInLogoSection from "@/components/common/logo/SignInLogoSection";
import SignUpForm from "@/components/feat/auth/SignUpForm";


export default function SignUpPage () {
  return (
    <div className="w-full max-w-[560px] mx-auto">
      <div className="flex justify-start">
        <BackButton />
      </div>
      <SignInLogoSection />
      <SignUpForm />
    </div>
  )
}
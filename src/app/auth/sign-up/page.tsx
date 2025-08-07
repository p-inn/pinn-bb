import BackButton from "@/components/common/button/BackButton";
import SignInLogoSection from "@/components/common/logo/SignInLogoSection";
import SignUpForm from "@/components/feat/auth/SignUpForm";


export default function SignUpPage () {
  return (
    <div className="w-full min-h-screen max-w-[560px] mx-auto bg-white">
      <div className="flex justify-start">
        <BackButton />
      </div>
      <SignInLogoSection />
      <SignUpForm />
    </div>
  )
}
import SignInLogoSection from "@/components/common/logo/SignInLogoSection";
import SignInSection from "@/components/feat/auth/SignInSection";

export default function LoginPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black mx-auto px-4 py-8 items-center justify-between">
      <SignInLogoSection />
      <SignInSection />
    </div>
  )
}
import BackButton from "@/components/common/button/BackButton";
import CommonButton from "@/components/common/button/CommonButton";
import CommonInput from "@/components/common/input/CommonInput";
import SignInLogoSection from "@/components/common/logo/SignInLogoSection";


export default function SignUpPage () {
  return (
    <div className="w-full max-w-[560px] mx-auto">
      <div className="flex justify-start">
        <BackButton />
      </div>
      <SignInLogoSection />
      <form className="mt-8">
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
          <CommonInput
            classNames="bg-gray-100 border-none"
            type="password"
            placeholder="패스워드를 다시 한번 입력해주세요!"
          />
          <CommonInput
            classNames="bg-gray-100 border-none"
            type="text"
            placeholder="사용하실 닉네임을 입력해주세용!"
          />
          <CommonInput
            classNames="bg-gray-100 border-none"
            type="tel"
            placeholder="휴대폰번호를 입력해주세용!"
          />
          <CommonButton type="submit" classNames="bg-mainColor-500 hover:bg-mainColor-600 text-white">
            가입하기
            </CommonButton>
        </div>
        
      </form>
    </div>
  )
}
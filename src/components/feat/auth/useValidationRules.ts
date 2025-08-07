export const EMAIL_RULE = {
  required: "‼️ 이메일을 입력해 주세요.",
  pattern: {
    value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
    message: "유효한 이메일 주소를 입력해 주세요.",
  },
};

export const PASSWORD_RULE = {
  required: "‼️ 비밀번호를 입력해 주세요.",
  minLength: { value: 6, message: "6자 이상 입력해 주세요." },
};

export const PASSWORD_CHECK_RULE = (passwordValue: string) => ({
  required: "‼️ 패스워드를 올바르게 입력해 주세요.",
  validate: (value: string | undefined) =>
    !value
      ? "‼️ 패스워드를 올바르게 입력해 주세요."
      : value === passwordValue
        ? true
        : "비밀번호가 일치하지 않습니다!",
});

export const NICKNAME_RULE = {
  required: "‼️ 사용하실 닉네임을 입력해 주세요.",
  minLength: { value: 2, message: "닉네임은 2자 이상 입력!" },
  maxLength: { value: 10, message: "닉네임은 10자 이내!" },
};

export const TEL_RULE = {
  required: "‼️ 번호를 올바르게 입력해 주세요.",
  pattern: {
    value: /^01[016789]-?\d{3,4}-?\d{4}$/,
    message: "유효한 휴대폰 번호를 입력해 주세요.",
  },
};

import { supabase } from "@/supabase/supabaseClient";
import { SignInData, SignUpData } from "@/types/components";

export const signInEmail = async (signInData: SignInData) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: signInData.email,
    password: signInData.password,
  });

  if (error) throw error;
  return data;
};

export const signInGoogle = async () => {
  try {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    });
    if (error) console.error(error);
  } catch (error) {
    console.error(error);
  }
};

export const signUp = async (signUpData: SignUpData) => {
  try {
    const { data, error } = await supabase.auth.signUp({
      email: signUpData.email,
      password: signUpData.password,
      options: {
        data: {
          name: signUpData.name,
          nickName: signUpData.nickName,
          phone: signUpData.tel,

        },
      },
    });
    if (error) console.error(error);
    return { data, error };
  } catch (error) {
    console.error(error);
  }
};

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) console.error(error);
};

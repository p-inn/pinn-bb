import { redirect } from 'next/navigation';
import { createSupabaseServerClient } from "@/supabase/supabaseServer";
import MainPage from "./dashboard-page/page";

export default async function Home() {
    const supabase = createSupabaseServerClient();
  const { data: { session } } = await supabase.auth.getSession();

  if (!session) {
    redirect('/auth');
  }
  return <MainPage />;
}

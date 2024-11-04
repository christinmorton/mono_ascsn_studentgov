import ForgotPassword from "@/components/forms/ForgotPassword";

const instructions = 'Use this form to create a new account. If you already have an account please go ahead and login if you are a current csn student.'

export default function ForgotPasswordPage() {
  return (
    <main className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>ForgotPassword</h1>

      <ForgotPassword />
    </main>
  );
}

import { SignInForm } from "@/components/auth/SignInForm";

export default function SignInPage() {
  return (
    <div className="flex min-h-screen items-center justify-center p-16">
      <div className="w-full max-w-md space-y-6">
        <SignInForm />
      </div>
    </div>
  );
}

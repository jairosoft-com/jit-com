import { SignUpForm } from "@/components/auth/SignUpForm";

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen items-center justify-center p-16">
      <div className="w-full max-w-md space-y-6">
        <SignUpForm />
      </div>
    </div>
  );
}

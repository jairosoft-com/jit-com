"use client"

import { useState, useMemo } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Checkbox } from '@/components/ui/checkbox';
import { Eye, EyeOff, Loader2, Check, X } from 'lucide-react';

interface SignUpFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  terms: boolean;
}

const passwordSchema = z.string()
  .min(8, 'Password must be at least 8 characters')
  .regex(/[A-Z]/, 'Must contain at least one uppercase letter')
  .regex(/[a-z]/, 'Must contain at least one lowercase letter')
  .regex(/[0-9]/, 'Must contain at least one number');

const signUpSchema = z.object({
  firstName: z.string()
    .min(1, 'First name is required')
    .max(50, 'First name must be less than 50 characters')
    .regex(/^[a-zA-Z\s-']+$/, 'Please enter a valid first name'),
  lastName: z.string()
    .min(1, 'Last name is required')
    .max(50, 'Last name must be less than 50 characters')
    .regex(/^[a-zA-Z\s-']+$/, 'Please enter a valid last name'),
  email: z.string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address'),
  password: passwordSchema,
  confirmPassword: z.string(),
  terms: z.boolean().refine(val => val === true, {
    message: 'You must accept the terms and conditions',
  }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword'],
});

// API call to the mock endpoint
const signUpUser = async (data: Omit<SignUpFormData, 'confirmPassword' | 'terms'>) => {
  try {
    const response = await fetch(
      'https://5446fa86-16bf-48b6-a8c3-0f2dbafe5cb3.mock.pstmn.io/sign-up',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          password: data.password,
        }),
      }
    );

    const result = await response.json();
    
    if (!response.ok) {
      throw new Error(result.message || 'Sign up failed. Please try again.');
    }

    return result;
  } catch (error) {
    console.error('Sign up error:', error);
    throw new Error('Unable to connect to the server. Please try again later.');
  }
};

export function SignUpForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);
  const router = useRouter();
  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setError,
    reset
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema) as any, // Type assertion to handle the resolver type
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      terms: false
    },
  });

  const password = watch('password', '');
  
  // Password strength indicator
  const passwordStrength = useMemo(() => {
    if (!password) return { score: 0, label: 'Weak' };
    
    let score = 0;
    // Length check
    if (password.length >= 8) score += 1;
    // Uppercase check
    if (/[A-Z]/.test(password)) score += 1;
    // Lowercase check
    if (/[a-z]/.test(password)) score += 1;
    // Number check
    if (/[0-9]/.test(password)) score += 1;
    // Special character check
    if (/[^A-Za-z0-9]/.test(password)) score += 1;
    
    const strength = {
      score,
      label: score < 2 ? 'Weak' : score < 4 ? 'Moderate' : 'Strong'
    };
    
    return strength;
  }, [password]);

  const onSubmit: SubmitHandler<SignUpFormData> = async (data) => {
    setIsLoading(true);
    setApiError(null);
    
    try {
      // Call the mock endpoint
      const response = await signUpUser({
        firstName: data.firstName.trim(),
        lastName: data.lastName.trim(),
        email: data.email.trim().toLowerCase(),
        password: data.password
      });

      // On successful sign up, reset form and redirect to verification
      reset();
      router.push('/verify-email');
      toast.success('Account created successfully! Please check your email to verify your account.');
    } catch (error) {
      console.error('Sign up error:', error);
      const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
      setApiError(errorMessage);
      
      // Set form field errors
      if (errorMessage.toLowerCase().includes('email')) {
        setError('email', { type: 'manual', message: errorMessage });
      }
      
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  // Password requirement checks
  const passwordChecks = [
    { id: 'length', label: 'At least 8 characters', validate: (p: string) => p.length >= 8 },
    { id: 'uppercase', label: 'At least one uppercase letter', validate: (p: string) => /[A-Z]/.test(p) },
    { id: 'lowercase', label: 'At least one lowercase letter', validate: (p: string) => /[a-z]/.test(p) },
    { id: 'number', label: 'At least one number', validate: (p: string) => /[0-9]/.test(p) },
  ];

  return (
    <div className="w-full max-w-md mx-auto">
      <Card className="border-0 shadow-lg overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-primary to-primary/90 text-white p-8 pb-6">
          <CardTitle className="text-2xl font-bold">Create an Account</CardTitle>
          <CardDescription className="text-white/90">
            Join us today and get started
          </CardDescription>
        </CardHeader>
        
        <CardContent className="p-8 pt-6">
          {apiError && (
            <div className="mb-6 p-3 bg-destructive/10 border border-destructive/30 rounded-md text-destructive text-sm">
              {apiError}
            </div>
          )}
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-sm font-medium">First Name</Label>
                <Input
                  id="firstName"
                  {...register('firstName')}
                  className={`h-11 px-4 text-base ${errors.firstName ? 'border-destructive focus-visible:ring-destructive' : 'border-input'}`}
                  placeholder="John"
                  disabled={isLoading}
                />
                {errors.firstName && (
                  <p className="text-xs text-destructive mt-1">{errors.firstName.message}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-sm font-medium">Last Name</Label>
                <Input
                  id="lastName"
                  {...register('lastName')}
                  className={`h-11 px-4 text-base ${errors.lastName ? 'border-destructive focus-visible:ring-destructive' : 'border-input'}`}
                  placeholder="Doe"
                  disabled={isLoading}
                />
                {errors.lastName && (
                  <p className="text-xs text-destructive mt-1">{errors.lastName.message}</p>
                )}
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">Email Address</Label>
              <Input
                id="email"
                type="email"
                {...register('email')}
                className={`h-11 px-4 text-base ${errors.email ? 'border-destructive focus-visible:ring-destructive' : 'border-input'}`}
                placeholder="your@email.com"
                disabled={isLoading}
              />
              {errors.email && (
                <p className="text-xs text-destructive mt-1">{errors.email.message}</p>
              )}
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-sm font-medium">Password</Label>
                <div className="flex items-center">
                  <div className={`h-1.5 w-4 rounded-sm mx-0.5 ${
                    passwordStrength.score > 0 ? 'bg-green-500' : 'bg-gray-200'
                  }`}></div>
                  <div className={`h-1.5 w-4 rounded-sm mx-0.5 ${
                    passwordStrength.score > 2 ? 'bg-green-500' : 'bg-gray-200'
                  }`}></div>
                  <div className={`h-1.5 w-4 rounded-sm mx-0.5 ${
                    passwordStrength.score > 3 ? 'bg-green-500' : 'bg-gray-200'
                  }`}></div>
                  <span className="ml-2 text-xs text-muted-foreground">
                    {passwordStrength.label}
                  </span>
                </div>
              </div>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  {...register('password')}
                  className={`h-11 px-4 pr-10 text-base ${errors.password ? 'border-destructive focus-visible:ring-destructive' : 'border-input'}`}
                  placeholder="••••••••"
                  disabled={isLoading}
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setShowPassword(!showPassword)}
                  tabIndex={-1}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                  <span className="sr-only">Toggle password visibility</span>
                </button>
              </div>
              
              {/* Password requirements */}
              <div className="mt-2 space-y-1.5">
                {passwordChecks.map(check => {
                  const isValid = check.validate(password);
                  return (
                    <div key={check.id} className="flex items-start">
                      {isValid ? (
                        <Check className="h-3.5 w-3.5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      ) : (
                        <div className="h-3.5 w-3.5 rounded-full border border-muted-foreground/40 mr-2 mt-0.5 flex-shrink-0" />
                      )}
                      <span className={`text-xs ${isValid ? 'text-green-600' : 'text-muted-foreground'}`}>
                        {check.label}
                      </span>
                    </div>
                  );
                })}
              </div>
              
              {errors.password && (
                <p className="text-xs text-destructive mt-1">{errors.password.message}</p>
              )}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-sm font-medium">Confirm Password</Label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  {...register('confirmPassword')}
                  className={`h-11 px-4 pr-10 text-base ${errors.confirmPassword ? 'border-destructive focus-visible:ring-destructive' : 'border-input'}`}
                  placeholder="••••••••"
                  disabled={isLoading}
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  tabIndex={-1}
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                  <span className="sr-only">Toggle password visibility</span>
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="text-xs text-destructive mt-1">{errors.confirmPassword.message}</p>
              )}
            </div>
            
            <div className="space-y-4 pt-2">
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="terms"
                  {...register('terms')}
                  className={`h-4 w-4 mt-0.5 rounded border-input ${errors.terms ? 'border-destructive' : ''}`}
                  disabled={isLoading}
                />
                <div className="grid gap-1.5 leading-none">
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    I agree to the{' '}
                    <Link href="/terms" className="text-primary hover:underline">Terms of Service</Link>{' '}
                    and{' '}
                    <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
                  </label>
                  {errors.terms && (
                    <p className="text-xs text-destructive">{errors.terms.message}</p>
                  )}
                </div>
              </div>
              
              <Button 
                type="submit" 
                disabled={isLoading} 
                className="w-full h-11 text-base font-medium bg-primary hover:bg-primary/90 transition-colors"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Creating Account...
                  </>
                ) : (
                  'Create Account'
                )}
              </Button>
            </div>
          </form>
          
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">Or sign up with</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <Button variant="outline" type="button" disabled={isLoading} className="h-10">
              <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
              </svg>
              Google
            </Button>
            <Button variant="outline" type="button" disabled={isLoading} className="h-10">
              <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              GitHub
            </Button>
          </div>
        </CardContent>
        
        <CardFooter className="bg-muted/50 p-4 border-t">
          <p className="text-center text-sm text-muted-foreground w-full">
            Already have an account?{' '}
            <Link 
              href="/sign-in" 
              className="font-medium text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
            >
              Sign in
            </Link>
          </p>
        </CardFooter>
      </Card>
      
      <div className="mt-6 text-center text-xs text-muted-foreground">
        <p>By creating an account, you agree to our <Link href="/terms" className="underline hover:text-primary">Terms of Service</Link> and <Link href="/privacy" className="underline hover:text-primary">Privacy Policy</Link>.</p>
      </div>
    </div>
  );
}

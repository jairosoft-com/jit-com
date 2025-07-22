"use client"

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from 'sonner';
import { Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { fetchTrainingPrograms } from '@/lib/api';

// Form validation schema using Zod
const formSchema = z.object({
  fullName: z.string()
    .min(1, 'Full name is required')
    .max(100, 'Name must be less than 100 characters'),
  email: z.string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address'),
  phone: z.string()
    .min(1, 'Phone number is required')
    .regex(/^[0-9\-\+\(\)\s]+$/, 'Please enter a valid phone number'),
  trainingProgramId: z.string().min(1, 'Please select a training program')
});

type FormValues = z.infer<typeof formSchema>;

// API call to submit the form
export async function submitRegistration(data: {
  name: string;
  email: string;
  phone: string;
  trainingProgramId: string;
  trainingProgramTitle: string;
}) {
  try {
    const response = await fetch(
      'https://5446fa86-16bf-48b6-a8c3-0f2dbafe5cb3.mock.pstmn.io/register',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      throw new Error('Failed to submit registration');
    }

    return await response.json();
  } catch (error) {
    console.error('Registration error:', error);
    throw new Error('Unable to submit registration. Please try again later.');
  }
}

interface TrainingProgram {
  id: number;
  title: string;
}

export function RegistrationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [trainingPrograms, setTrainingPrograms] = useState<TrainingProgram[]>([]);
  const [isLoadingPrograms, setIsLoadingPrograms] = useState(true);
  const [programsError, setProgramsError] = useState<string | null>(null);

  useEffect(() => {
    const loadPrograms = async () => {
      try {
        const programs = await fetchTrainingPrograms();
        setTrainingPrograms(programs);
      } catch (error) {
        console.error('Failed to load training programs:', error);
        setProgramsError('Failed to load training programs. Please try again later.');
      } finally {
        setIsLoadingPrograms(false);
      }
    };

    loadPrograms();
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      trainingProgramId: ''
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    try {
      // Find the selected program
      const selectedProgram = trainingPrograms.find(p => p.id.toString() === data.trainingProgramId);
      
      // Submit with the program ID
      await submitRegistration({
        name: data.fullName,
        email: data.email,
        phone: data.phone,
        trainingProgramId: data.trainingProgramId,
        trainingProgramTitle: selectedProgram?.title || 'Unknown Program'
      });
      
      setIsSuccess(true);
      form.reset();
      toast.success('Registration submitted successfully!');
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred';
      toast.error(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="w-full max-w-md mx-auto">
        <Card className="text-center p-8">
          <div className="flex justify-center mb-4">
            <CheckCircle2 className="h-12 w-12 text-green-500" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
          <p className="text-muted-foreground">
            Your registration has been received. We'll be in touch shortly.
          </p>
        </Card>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <Card className="border-0 shadow-lg overflow-hidden">
        <CardContent className="p-10">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              {/* Full Name Field */}
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="John Doe" 
                        {...field} 
                        disabled={isSubmitting}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Email Field */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input 
                        type="email" 
                        placeholder="john@example.com" 
                        {...field} 
                        disabled={isSubmitting}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Phone Field */}
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input 
                        type="tel" 
                        placeholder="+1 (555) 123-4567" 
                        {...field} 
                        disabled={isSubmitting}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Training Program Dropdown */}
              <FormField
                control={form.control}
                name="trainingProgramId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Select Training Program</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      value={field.value}
                      disabled={isSubmitting || isLoadingPrograms}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder={
                            isLoadingPrograms 
                              ? 'Loading programs...' 
                              : programsError 
                                ? 'Error loading programs' 
                                : 'Select a program'
                          } />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {isLoadingPrograms ? (
                          <div className="py-2 text-center text-sm text-muted-foreground">
                            Loading programs...
                          </div>
                        ) : programsError ? (
                          <div className="py-2 text-center text-sm text-destructive">
                            {programsError}
                          </div>
                        ) : (
                          trainingPrograms.map((program) => (
                            <SelectItem key={program.id} value={program.id.toString()}>
                              {program.title}
                            </SelectItem>
                          ))
                        )}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button 
                type="submit" 
                className="w-full mt-6"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : 'Submit'}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}

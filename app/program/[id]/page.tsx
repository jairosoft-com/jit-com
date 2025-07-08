import { TrainingProgramLanding } from '../../../components/TrainingProgramLanding'
import { ScrollArea } from '../../../components/ui/scroll-area'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

// Mock data for programs - in a real app, this would come from a database
const programs = [
  {
    id: 'web-development',
    title: 'Web Development Fundamentals',
    description: 'Master modern web development with HTML, CSS, JavaScript, and React',
    duration: '12 weeks',
    level: 'Beginner to Intermediate',
    price: '$299',
    instructor: 'John Doe',
    rating: 4.8,
    students: 1250,
    image: '/images/web-dev.jpg',
    category: 'Web Development'
  },
  {
    id: 'react-advanced',
    title: 'Advanced React Development',
    description: 'Deep dive into React hooks, context, performance optimization, and advanced patterns',
    duration: '8 weeks', 
    level: 'Advanced',
    price: '$399',
    instructor: 'Jane Smith',
    rating: 4.9,
    students: 890,
    image: '/images/react-advanced.jpg',
    category: 'Frontend'
  },
  {
    id: 'nodejs-backend',
    title: 'Node.js Backend Development',
    description: 'Build scalable backend applications with Node.js, Express, and MongoDB',
    duration: '10 weeks',
    level: 'Intermediate',
    price: '$349',
    instructor: 'Mike Johnson',
    rating: 4.7,
    students: 756,
    image: '/images/nodejs.jpg',
    category: 'Backend'
  }
]

interface ProgramPageProps {
  params: Promise<{
    id: string
  }>
}

export async function generateMetadata({ params }: ProgramPageProps): Promise<Metadata> {
  const { id } = await params
  const program = programs.find(p => p.id === id)
  
  if (!program) {
    return {
      title: 'Program Not Found - JIT.com'
    }
  }

  return {
    title: `${program.title} - JIT.com`,
    description: program.description,
    openGraph: {
      title: `${program.title} - JIT.com`,
      description: program.description,
    },
  }
}

export function generateStaticParams() {
  return programs.map((program) => ({
    id: program.id,
  }))
}

export default async function ProgramPage({ params }: ProgramPageProps) {
  const { id } = await params
  const program = programs.find(p => p.id === id)

  if (!program) {
    notFound()
  }

  return (
    <ScrollArea className="h-screen">
      <TrainingProgramLanding program={program} />
    </ScrollArea>
  )
}
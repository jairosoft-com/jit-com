import { Skeleton } from '../../../components/ui/skeleton'
import { Card, CardContent, CardHeader } from '../../../components/ui/card'

export default function Loading() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Skeleton */}
      <div className="w-full bg-background/95 backdrop-blur border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <Skeleton className="w-8 h-8 rounded-full" />
              <Skeleton className="w-24 h-6" />
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <Skeleton className="w-16 h-4" />
              <Skeleton className="w-20 h-4" />
              <Skeleton className="w-18 h-4" />
              <Skeleton className="w-20 h-8 rounded-md" />
            </div>
            <div className="md:hidden">
              <Skeleton className="w-8 h-8" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Hero Section Skeleton */}
      <section className="bg-gradient-to-br from-primary/5 to-primary/10 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-3">
                <Skeleton className="w-10 h-10 rounded-lg" />
                <Skeleton className="w-32 h-6 rounded-full" />
              </div>
              
              <div className="space-y-6">
                <Skeleton className="w-full h-12" />
                <Skeleton className="w-3/4 h-8" />
                <div className="space-y-2">
                  <Skeleton className="w-full h-4" />
                  <Skeleton className="w-5/6 h-4" />
                  <Skeleton className="w-4/5 h-4" />
                </div>
              </div>
              
              <div className="flex flex-wrap items-center gap-6">
                <Skeleton className="w-24 h-6" />
                <Skeleton className="w-20 h-6" />
                <Skeleton className="w-28 h-6" />
              </div>
              
              <div className="flex items-baseline space-x-4">
                <Skeleton className="w-24 h-10" />
                <Skeleton className="w-20 h-6" />
                <Skeleton className="w-32 h-6 rounded-full" />
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Skeleton className="w-full sm:w-32 h-12 rounded-md" />
                <Skeleton className="w-full sm:w-36 h-12 rounded-md" />
              </div>
            </div>
            
            <div className="relative">
              <Skeleton className="w-full h-[400px] lg:h-[500px] rounded-2xl" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Content Sections Skeleton */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Skeleton className="w-64 h-10 mx-auto mb-4" />
            <Skeleton className="w-96 h-6 mx-auto" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="flex items-start space-x-3">
                <Skeleton className="w-6 h-6 rounded-full flex-shrink-0 mt-0.5" />
                <Skeleton className="flex-1 h-6" />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Curriculum Skeleton */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Skeleton className="w-72 h-10 mx-auto mb-4" />
            <Skeleton className="w-80 h-6 mx-auto" />
          </div>
          
          <div className="space-y-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <Card key={i} className="bg-card">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Skeleton className="w-12 h-12 rounded-lg" />
                      <div className="space-y-2">
                        <Skeleton className="w-48 h-6" />
                        <Skeleton className="w-64 h-4" />
                      </div>
                    </div>
                    <div className="text-right space-y-2">
                      <Skeleton className="w-20 h-6 rounded-full" />
                      <Skeleton className="w-16 h-4" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {Array.from({ length: 4 }).map((_, j) => (
                      <Skeleton key={j} className="w-20 h-6 rounded-full" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Footer Skeleton */}
      <div className="bg-muted/50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="w-32 h-6" />
                <div className="space-y-2">
                  {Array.from({ length: 4 }).map((_, j) => (
                    <Skeleton key={j} className="w-24 h-4" />
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 pt-8 border-t border-border">
            <Skeleton className="w-64 h-4 mx-auto" />
          </div>
        </div>
      </div>
    </div>
  )
}
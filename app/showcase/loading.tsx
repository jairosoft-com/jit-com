import { Skeleton } from '../../components/ui/skeleton'
import { Card } from '../../components/ui/card'

export default function Loading() {
  return (
    <div className="min-h-screen bg-muted/30 dark:bg-muted/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        {/* Header */}
        <header className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6">
            <Skeleton className="w-8 h-8" />
          </div>
          <Skeleton className="w-96 h-12 mx-auto mb-6" />
          <div className="space-y-2">
            <Skeleton className="w-full max-w-3xl h-6 mx-auto" />
            <Skeleton className="w-5/6 max-w-2xl h-6 mx-auto" />
          </div>
        </header>

        {/* Showcase Sections */}
        <div className="space-y-8 sm:space-y-12 lg:space-y-16">
          {Array.from({ length: 6 }).map((_, sectionIndex) => (
            <section key={sectionIndex} className="mb-8 sm:mb-12 lg:mb-16">
              <Skeleton className="w-48 h-8 mb-4 sm:mb-6" />
              <Card className="p-4 sm:p-6 lg:p-8">
                {sectionIndex === 0 && (
                  // Button showcase skeleton
                  <div className="space-y-6 sm:space-y-8">
                    <div className="space-y-3">
                      <Skeleton className="w-32 h-4" />
                      <div className="flex flex-wrap gap-3 sm:gap-4">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Skeleton key={i} className="w-20 h-10 rounded-md" />
                        ))}
                      </div>
                    </div>
                    <div className="space-y-3">
                      <Skeleton className="w-28 h-4" />
                      <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                        {Array.from({ length: 3 }).map((_, i) => (
                          <Skeleton key={i} className={`h-${8 + i * 2} w-20 rounded-md`} />
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                
                {sectionIndex === 1 && (
                  // Card showcase skeleton
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <Card key={i} className="p-4">
                        <div className="space-y-4">
                          <Skeleton className="w-12 h-12 rounded-xl" />
                          <div className="space-y-2">
                            <Skeleton className="w-32 h-6" />
                            <Skeleton className="w-full h-4" />
                          </div>
                          <div className="space-y-2">
                            <Skeleton className="w-full h-4" />
                            <Skeleton className="w-3/4 h-4" />
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                )}
                
                {sectionIndex === 2 && (
                  // Form elements skeleton
                  <div className="space-y-8">
                    <div className="space-y-4">
                      <Skeleton className="w-32 h-4" />
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {Array.from({ length: 3 }).map((_, i) => (
                          <div key={i} className="space-y-2">
                            <Skeleton className="w-16 h-4" />
                            <Skeleton className="w-full h-10 rounded-md" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                
                {(sectionIndex === 3 || sectionIndex === 4 || sectionIndex === 5) && (
                  // Generic content skeleton
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
                      {Array.from({ length: 12 }).map((_, i) => (
                        <div key={i} className="space-y-2">
                          <Skeleton className="w-full h-16 sm:h-20 rounded-xl" />
                          <Skeleton className="w-full h-4" />
                          <Skeleton className="w-3/4 h-3" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </Card>
            </section>
          ))}
        </div>

        {/* Quick Navigation Skeleton */}
        <div className="mt-16 sm:mt-20 lg:mt-24 p-6 sm:p-8 bg-card border border-border rounded-2xl">
          <Skeleton className="w-40 h-6 mx-auto mb-4" />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <Skeleton key={i} className="w-full h-8 rounded-lg" />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
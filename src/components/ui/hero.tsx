"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Button, ButtonProps } from "@/components/ui/button"
import Link from "next/link"

export interface HeroAction {
  label: string;
  href: string;
  variant?: ButtonProps['variant'];
}
export interface HeroProps extends React.HTMLAttributes<HTMLElement> {
  title: React.ReactNode
  subtitle?: React.ReactNode
  actions?: HeroAction[]
  titleClassName?: string
  subtitleClassName?: string
  actionsClassName?: string
}

const Hero = React.forwardRef<HTMLElement, HeroProps>(
  (
    {
      className,
      title,
      subtitle,
      actions,
      titleClassName,
      subtitleClassName,
      actionsClassName,
      ...props
    },
    ref,
  ) => {
    return (
      <section
        ref={ref}
        className={cn(
          "relative z-0 flex min-h-[80vh] w-full flex-col items-center justify-center overflow-hidden rounded-md bg-background",
          className,
        )}
        {...props}
      >
        <div className="relative z-50 container flex justify-center flex-1 flex-col px-5 md:px-10 gap-4 -translate-y-20">
          <div className="flex flex-col items-center text-center space-y-4">
            <h1
              className={cn(
                "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight",
                titleClassName,
              )}
            >
              {title}
            </h1>
            {subtitle && (
              <p
                className={cn(
                  "text-xl text-muted-foreground",
                  subtitleClassName,
                )}
              >
                {subtitle}
              </p>
            )}
            {actions && actions.length > 0 && (
              <div className={cn("flex gap-4", actionsClassName)}>
                {actions.map((action, index) => (
                  <Button
                    key={index}
                    variant={action.variant || "default"}
                    asChild
                    size="lg"
                    className="h-12 px-4 text-base font-bold md:px-8 md:text-lg"
                  >
                    <Link href={action.href}>{action.label}</Link>
                  </Button>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    )
  },
)
Hero.displayName = "Hero"

export { Hero }

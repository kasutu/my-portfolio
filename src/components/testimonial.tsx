"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Item, ItemContent, ItemTitle, ItemDescription } from "@/components/ui/item"

export type TestimonialItem = {
  name: string
  role: string
  company: string
  content: string
}

type TestimonialsProps = {
  testimonials: TestimonialItem[]
}

export function Testimonials({ testimonials }: TestimonialsProps) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  const t = testimonials[current]

  return (
    <Card className="w-full rounded-[32px]">
      <CardHeader>
        <CardTitle>Recommendations</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="flex flex-col gap-3"
          >
            <p className="text-sm text-muted-foreground leading-6 line-clamp-4">
              &ldquo;{t.content}&rdquo;
            </p>
            <Item className="p-0">
              <ItemContent>
                <ItemTitle>{t.name}</ItemTitle>
                <ItemDescription>
                  {t.role} at <span className="text-foreground font-semibold">{t.company}</span>
                </ItemDescription>
              </ItemContent>
            </Item>
          </motion.div>
        </AnimatePresence>
      </CardContent>
      <CardFooter className="pt-0">
        <div className="flex gap-1 items-center">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? "w-4 bg-foreground" : "w-1.5 bg-muted-foreground/30"
                }`}
            />
          ))}
        </div>
      </CardFooter>
    </Card>
  )
}
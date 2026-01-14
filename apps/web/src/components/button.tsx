import { cn } from "@/lib/utils"
import { ButtonHTMLAttributes, forwardRef } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "neon"
  size?: "default" | "sm" | "lg"
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-lg font-semibold transition-all",
          "disabled:opacity-50 disabled:pointer-events-none",
          {
            "bg-gradient-to-r from-neon-cyan to-neon-purple hover:opacity-90 text-white glow-cyan":
              variant === "default",
            "glass border border-white/20 hover:border-neon-cyan/50":
              variant === "outline",
            "hover:bg-white/5": variant === "ghost",
            "bg-neon-cyan text-black hover:bg-neon-cyan/90 glow-cyan":
              variant === "neon",
          },
          {
            "px-6 py-3 text-base": size === "default",
            "px-4 py-2 text-sm": size === "sm",
            "px-8 py-4 text-lg": size === "lg",
          },
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }

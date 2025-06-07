
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// VIBRANT & ENERGETIC Click It colors
				"electric-blue": "#00D4FF",      // Main brand - electric, energetic
				"neon-purple": "#8B5CF6",       // Secondary accent - vibrant purple  
				"hot-pink": "#FF0080",          // Call-to-action - attention grabbing
				"lime-green": "#00FF88",        // Success states - fresh energy
				"sunset-orange": "#FF4500",     // Warnings/highlights - warm energy
				"deep-space": "#0A0A23",        // Dark text - modern depth
				"pure-white": "#FFFFFF",        // Clean backgrounds
				"electric-gradient": "linear-gradient(135deg, #00D4FF 0%, #8B5CF6 50%, #FF0080 100%)",
				"glass-bg": "rgba(255, 255, 255, 0.1)",
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					from: {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					to: {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-in': {
					from: {
						opacity: '0',
						transform: 'translateX(-20px)'
					},
					to: {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'pulse-glow': {
					'0%, 100%': {
						boxShadow: '0 0 20px rgba(0, 212, 255, 0.3)'
					},
					'50%': {
						boxShadow: '0 0 40px rgba(0, 212, 255, 0.6)'
					}
				},
				'rainbow-shift': {
					'0%': { 
						background: 'linear-gradient(45deg, #00D4FF, #8B5CF6)' 
					},
					'33%': { 
						background: 'linear-gradient(45deg, #8B5CF6, #FF0080)' 
					},
					'66%': { 
						background: 'linear-gradient(45deg, #FF0080, #00FF88)' 
					},
					'100%': { 
						background: 'linear-gradient(45deg, #00FF88, #00D4FF)' 
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out',
				'slide-in': 'slide-in 0.4s ease-out',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'rainbow-shift': 'rainbow-shift 3s ease-in-out infinite',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

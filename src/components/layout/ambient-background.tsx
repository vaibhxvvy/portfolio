'use client'

import { useEffect, useRef, useCallback } from 'react'

export function AmbientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const rafRef = useRef(0)

  const draw = useCallback((ctx: CanvasRenderingContext2D, w: number, h: number) => {
    ctx.clearRect(0, 0, w, h)

    const time = Date.now() * 0.0005
    const count = 25

    for (let i = 0; i < count; i++) {
      const x =
        ((Math.sin(time + i * 1.5) * 0.5 + 0.5) * w + mouseRef.current.x * 0.02) % w
      const y =
        ((Math.cos(time * 0.7 + i * 2.3) * 0.5 + 0.5) * h + mouseRef.current.y * 0.02) % h
      const radius = 1 + Math.sin(time + i) * 0.5
      const opacity = 0.03 + Math.sin(time * 2 + i) * 0.01

      ctx.beginPath()
      ctx.arc(x, y, Math.max(0.5, radius), 0, Math.PI * 2)
      ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0, opacity)})`
      ctx.fill()
    }

    // Gradient orbs
    const g1 = ctx.createRadialGradient(
      w * 0.3 + Math.sin(time * 0.3) * 200,
      h * 0.3 + Math.cos(time * 0.2) * 100,
      0,
      w * 0.3 + Math.sin(time * 0.3) * 200,
      h * 0.3 + Math.cos(time * 0.2) * 100,
      600
    )
    g1.addColorStop(0, 'rgba(124, 58, 237, 0.03)')
    g1.addColorStop(0.5, 'rgba(124, 58, 237, 0.008)')
    g1.addColorStop(1, 'rgba(124, 58, 237, 0)')
    ctx.fillStyle = g1
    ctx.fillRect(0, 0, w, h)

    const g2 = ctx.createRadialGradient(
      w * 0.7 + Math.cos(time * 0.4) * 150,
      h * 0.6 + Math.sin(time * 0.35) * 150,
      0,
      w * 0.7 + Math.cos(time * 0.4) * 150,
      h * 0.6 + Math.sin(time * 0.35) * 150,
      500
    )
    g2.addColorStop(0, 'rgba(6, 182, 212, 0.02)')
    g2.addColorStop(0.5, 'rgba(6, 182, 212, 0.005)')
    g2.addColorStop(1, 'rgba(6, 182, 212, 0)')
    ctx.fillStyle = g2
    ctx.fillRect(0, 0, w, h)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    handleResize()
    window.addEventListener('resize', handleResize)

    const animate = () => {
      draw(ctx, canvas.width, canvas.height)
      rafRef.current = requestAnimationFrame(animate)
    }
    rafRef.current = requestAnimationFrame(animate)

    // Optional mouse tracking for subtle interaction
    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener('mousemove', onMouseMove, { passive: true })

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(rafRef.current)
    }
  }, [draw])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 opacity-60"
      style={{ mixBlendMode: 'screen' }}
      aria-hidden="true"
    />
  )
}

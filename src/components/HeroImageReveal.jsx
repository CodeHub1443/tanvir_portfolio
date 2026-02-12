import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

export default function HeroImageReveal({
    src = '/assets/hero.png',
    gridDensity = 40,
    animationSpeed = 1,
    staggerAmount = 0.01,
    depthIntensity = 100,
    perspective = 1000,
    yOffset = 0,
}) {
    const canvasRef = useRef(null)
    const containerRef = useRef(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const [formationComplete, setFormationComplete] = useState(false)
    const animationFrameId = useRef(null)
    const fragments = useRef([])
    const imageObj = useRef(null)
    const mouse = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 })

    useEffect(() => {
        const img = new Image()
        img.src = src
        img.onload = () => {
            imageObj.current = img
            setIsLoaded(true)
        }
    }, [src])

    useEffect(() => {
        if (!isLoaded) return

        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d', { alpha: true })
        const img = imageObj.current

        let cols, rows, fragWidth, fragHeight, drawWidth, drawHeight, offsetX, offsetY

        const handleResize = () => {
            const container = containerRef.current
            if (!container) return
            const rect = container.getBoundingClientRect()

            const dpr = window.devicePixelRatio || 1
            canvas.width = rect.width * dpr
            canvas.height = rect.height * dpr
            ctx.scale(dpr, dpr)

            canvas.style.width = `${rect.width}px`
            canvas.style.height = `${rect.height}px`

            const imgAspect = img.width / img.height

            // Alignment: right side, slight height scale
            drawHeight = rect.height * 1.1
            drawWidth = drawHeight * imgAspect
            offsetX = rect.width - drawWidth + 40
            offsetY = (rect.height - drawHeight) / 2 + yOffset

            rows = gridDensity
            cols = Math.round(rows * (drawWidth / drawHeight))
            fragWidth = drawWidth / cols
            fragHeight = drawHeight / rows

            const newFragments = []
            for (let r = 0; r < rows; r++) {
                for (let c = 0; c < cols; c++) {
                    const centerX = offsetX + c * fragWidth + fragWidth / 2
                    const centerY = offsetY + r * fragHeight + fragHeight / 2

                    newFragments.push({
                        sx: (c * img.width) / cols,
                        sy: (r * img.height) / rows,
                        sw: img.width / cols,
                        sh: img.height / rows,
                        tx: centerX,
                        ty: centerY,
                        x: centerX + (Math.random() - 0.5) * 400,
                        y: centerY + (Math.random() - 0.5) * 400,
                        z: Math.random() * -depthIntensity * 5 - 200,
                        rotationX: (Math.random() - 0.5) * 1.5,
                        rotationY: (Math.random() - 0.5) * 1.5,
                        scale: 0.1,
                        opacity: 0
                    })
                }
            }
            fragments.current = newFragments
            startAnimation()
        }

        const startAnimation = () => {
            const tl = gsap.timeline({
                onComplete: () => setFormationComplete(true)
            })

            // Phase 1: Activation
            tl.to(fragments.current, {
                opacity: 0.4,
                z: '+=100',
                duration: 0.4 * animationSpeed,
                ease: 'sine.inOut',
                stagger: {
                    grid: [rows, cols],
                    from: 'center',
                    amount: 0.3 * animationSpeed
                }
            })

            // Phase 2: Assembly
            tl.to(fragments.current, {
                x: (i, target) => target.tx,
                y: (i, target) => target.ty,
                z: 0,
                rotationX: 0,
                rotationY: 0,
                scale: 1,
                opacity: 1,
                duration: 1.2 * animationSpeed,
                ease: 'power3.out',
                stagger: {
                    grid: [rows, cols],
                    from: 'center',
                    amount: 0.8 * animationSpeed
                }
            }, "-=0.2")
        }

        const render = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            const p = perspective
            mouse.current.x += (mouse.current.targetX - mouse.current.x) * 0.04
            mouse.current.y += (mouse.current.targetY - mouse.current.y) * 0.04

            if (formationComplete) {
                ctx.save()
                ctx.translate(canvas.width / (2 * (window.devicePixelRatio || 1)), canvas.height / (2 * (window.devicePixelRatio || 1)))
                ctx.rotate(mouse.current.y * 0.015)
                ctx.rotate(mouse.current.x * 0.015)
                ctx.scale(1.02, 1.02)
                ctx.translate(-canvas.width / (2 * (window.devicePixelRatio || 1)), -canvas.height / (2 * (window.devicePixelRatio || 1)))
                ctx.globalAlpha = 1
                ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight)
                ctx.restore()
            } else {
                fragments.current.forEach(f => {
                    if (f.opacity <= 0) return

                    ctx.save()
                    const scaleZ = p / (p - f.z)
                    const x = (f.x - canvas.width / (2 * (window.devicePixelRatio || 1))) * scaleZ + canvas.width / (2 * (window.devicePixelRatio || 1))
                    const y = (f.y - canvas.height / (2 * (window.devicePixelRatio || 1))) * scaleZ + canvas.height / (2 * (window.devicePixelRatio || 1))

                    ctx.translate(x, y)
                    ctx.scale(f.scale * scaleZ, f.scale * scaleZ)
                    ctx.rotate(f.rotationX)
                    ctx.rotate(f.rotationY)

                    ctx.globalAlpha = f.opacity

                    ctx.drawImage(
                        img,
                        f.sx, f.sy, f.sw, f.sh,
                        -fragWidth / 2, -fragHeight / 2, fragWidth + 0.5, fragHeight + 0.5
                    )

                    ctx.restore()
                })
            }

            animationFrameId.current = requestAnimationFrame(render)
        }

        handleResize()
        render()

        window.addEventListener('resize', handleResize)
        const handleMouseMove = (e) => {
            mouse.current.targetX = (e.clientX / window.innerWidth - 0.5) * 2
            mouse.current.targetY = (e.clientY / window.innerHeight - 0.5) * 2
        }
        window.addEventListener('mousemove', handleMouseMove)

        return () => {
            window.removeEventListener('resize', handleResize)
            window.removeEventListener('mousemove', handleMouseMove)
            cancelAnimationFrame(animationFrameId.current)
        }
    }, [isLoaded, gridDensity, animationSpeed, depthIntensity, perspective, yOffset])

    return (
        <div ref={containerRef} className="hero-bg-image-container" style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden' }}>
            <canvas ref={canvasRef} style={{ display: 'block' }} />
            {!isLoaded && <div className="loader" style={{ position: 'absolute', inset: 0, background: '#000' }} />}
        </div>
    )
}

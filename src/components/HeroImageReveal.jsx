import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

export default function HeroImageReveal({
    src = '/assets/hero.png',
    gridDensity = 30, // Lowered slightly for performance with 3D cubes
    animationSpeed = 1.4,
    staggerAmount = 0.008,
    depthIntensity = 150,
    perspective = 1200,
    yOffset = 60,
    cubeDepth = 40, // Thickness of the particles
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
                        x: centerX + (Math.random() - 0.5) * 600,
                        y: centerY + (Math.random() - 0.5) * 600,
                        z: Math.random() * -depthIntensity * 10 - 400,

                        // 3D Rotations (radians)
                        rotationX: (Math.random() - 0.5) * Math.PI * 4, // High energy spin
                        rotationY: (Math.random() - 0.5) * Math.PI * 4,
                        rotationZ: (Math.random() - 0.5) * Math.PI * 2,

                        scale: 0.1,
                        opacity: 0,
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

            // Phase 1: Activation & Launch
            tl.to(fragments.current, {
                opacity: 0.6,
                z: '+=200',
                duration: 0.5 * animationSpeed,
                ease: 'power2.inOut',
                stagger: {
                    grid: [rows, cols],
                    from: 'center',
                    amount: 0.4 * animationSpeed
                }
            })

            // Phase 2: Assembly & Spin Stabilization
            tl.to(fragments.current, {
                x: (i, target) => target.tx,
                y: (i, target) => target.ty,
                z: 0,
                rotationX: 0,
                rotationY: 0,
                rotationZ: 0,
                scale: 1,
                opacity: 1,
                duration: 1.5 * animationSpeed,
                ease: 'power4.out',
                stagger: {
                    grid: [rows, cols],
                    from: 'center',
                    amount: 1.0 * animationSpeed
                }
            }, "-=0.2")
        }

        // 3D Projection Helper
        const project = (x, y, z, p) => {
            const scale = p / (p - z)
            return {
                x: (x - rectCenter.x) * scale + rectCenter.x,
                y: (y - rectCenter.y) * scale + rectCenter.y,
                scale
            }
        }

        let rectCenter = { x: 0, y: 0 }

        const render = () => {
            const rect = containerRef.current?.getBoundingClientRect()
            if (!rect) return
            rectCenter = { x: rect.width / 2, y: rect.height / 2 }

            ctx.clearRect(0, 0, canvas.width, canvas.height)
            const p = perspective
            mouse.current.x += (mouse.current.targetX - mouse.current.x) * 0.04
            mouse.current.y += (mouse.current.targetY - mouse.current.y) * 0.04

            if (formationComplete) {
                // High-quality static draw with parallax
                ctx.save()
                ctx.translate(rectCenter.x, rectCenter.y)
                ctx.rotate(mouse.current.y * 0.012)
                ctx.rotate(mouse.current.x * 0.012)
                ctx.scale(1.02, 1.02)
                ctx.translate(-rectCenter.x, -rectCenter.y)
                ctx.globalAlpha = 1
                ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight)
                ctx.restore()
            } else {
                // Sort fragments by Z for proper 3D depth rendering
                const sorted = [...fragments.current].sort((a, b) => a.z - b.z)

                sorted.forEach(f => {
                    if (f.opacity <= 0) return

                    const scaleZ = p / (p - f.z)

                    // Simple 3D Cube Projection logic
                    // We'll draw the front face and two side faces based on rotation
                    ctx.save()

                    const screenPos = project(f.x, f.y, f.z, p)
                    ctx.translate(screenPos.x, screenPos.y)
                    ctx.scale(f.scale * screenPos.scale, f.scale * screenPos.scale)

                    // Apply rotations
                    ctx.rotate(f.rotationZ)
                    // Note: We can't easily do true 3D rotation of the *content* in Canvas 2D 
                    // without drawing faces. We will draw the "box" now.

                    const w = fragWidth / 2
                    const h = fragHeight / 2
                    const d = cubeDepth * (f.scale * screenPos.scale) // Use a fixed-ish depth

                    // Faces of the cube (projected)
                    // For a premium feel, we simulate the 3D look by drawing the "thickness"

                    // Calculate rotation offsets for the "box" look
                    const cosX = Math.cos(f.rotationX)
                    const sinX = Math.sin(f.rotationX)
                    const cosY = Math.cos(f.rotationY)
                    const sinY = Math.sin(f.rotationY)

                    // Draw darker side faces first
                    ctx.fillStyle = 'rgba(40, 40, 40, ' + f.opacity + ')'

                    // Top/Bottom face
                    if (sinX > 0) {
                        ctx.beginPath()
                        ctx.moveTo(-w, -h)
                        ctx.lineTo(w, -h)
                        ctx.lineTo(w, -h + sinX * 20)
                        ctx.lineTo(-w, -h + sinX * 20)
                        ctx.fill()
                    } else {
                        ctx.beginPath()
                        ctx.moveTo(-w, h)
                        ctx.lineTo(w, h)
                        ctx.lineTo(w, h + sinX * 20)
                        ctx.lineTo(-w, h + sinX * 20)
                        ctx.fill()
                    }

                    // Left/Right face
                    if (sinY > 0) {
                        ctx.beginPath()
                        ctx.moveTo(w, -h)
                        ctx.lineTo(w, h)
                        ctx.lineTo(w + sinY * 20, h)
                        ctx.lineTo(w + sinY * 20, -h)
                        ctx.fill()
                    } else {
                        ctx.beginPath()
                        ctx.moveTo(-w, -h)
                        ctx.lineTo(-w, h)
                        ctx.lineTo(-w + sinY * 20, h)
                        ctx.lineTo(-w + sinY * 20, -h)
                        ctx.fill()
                    }

                    // Front face with image
                    ctx.globalAlpha = f.opacity
                    // Apply a slight transform to simulate X/Y rotation on the image face
                    ctx.transform(cosY, sinX * sinY, 0, cosX, 0, 0)

                    ctx.drawImage(
                        img,
                        f.sx, f.sy, f.sw, f.sh,
                        -w, -h, fragWidth + 1, fragHeight + 1
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
    }, [isLoaded, gridDensity, animationSpeed, depthIntensity, perspective, yOffset, cubeDepth])

    return (
        <div ref={containerRef} className="hero-bg-image-container" style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden' }}>
            <canvas ref={canvasRef} style={{ display: 'block' }} />
            {!isLoaded && <div className="loader" style={{ position: 'absolute', inset: 0, background: '#000' }} />}
        </div>
    )
}

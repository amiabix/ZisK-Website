import { useEffect, useRef } from "react";
import * as THREE from "three";

export const GeometricVisualization = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Initialize Three.js
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      50,
      container.clientWidth / container.clientHeight,
      5,
      2000
    );
    camera.position.z = 500;
    cameraRef.current = camera;

    // Fog effect with green tint
    scene.fog = new THREE.FogExp2(0x000000, 0.001);

    // Create particle geometry
    const geometry = new THREE.BufferGeometry();
    const vertices: number[] = [];
    const size = 2000;

    for (let i = 0; i < 20000; i++) {
      const x = (Math.random() * size + Math.random() * size) / 2 - size / 2;
      const y = (Math.random() * size + Math.random() * size) / 2 - size / 2;
      const z = (Math.random() * size + Math.random() * size) / 2 - size / 2;

      vertices.push(x, y, z);
    }

    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(vertices, 3)
    );

    // Material with ZisK green color
    const material = new THREE.PointsMaterial({
      size: 2,
      color: 0x00ff7c, // ZisK primary green
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);
    particlesRef.current = particles;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Mouse move handler
    const handlePointerMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const windowHalfX = rect.width / 2;
      const windowHalfY = rect.height / 2;
      mouseRef.current.x = (event.clientX - rect.left - windowHalfX);
      mouseRef.current.y = (event.clientY - rect.top - windowHalfY);
    };

    // Add event listener to window for better tracking
    window.addEventListener("pointermove", handlePointerMove);

    // Window resize handler
    const handleResize = () => {
      if (!container || !camera || !renderer) return;

      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener("resize", handleResize);

    // Animation loop
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!camera || !renderer || !particles) return;

      // Camera follows mouse - reversed (zoom in when mouse moves)
      const targetX = -mouseRef.current.x * 2;
      const targetY = mouseRef.current.y * 2;
      camera.position.x += (targetX - camera.position.x) * 0.05;
      camera.position.y += (targetY - camera.position.y) * 0.05;
      
      // Zoom in based on mouse distance from center (makes particles bigger)
      const mouseDistance = Math.sqrt(mouseRef.current.x ** 2 + mouseRef.current.y ** 2);
      const maxDistance = Math.sqrt((container.clientWidth / 2) ** 2 + (container.clientHeight / 2) ** 2);
      const normalizedDistance = Math.min(mouseDistance / maxDistance, 1);
      const zoomFactor = 1 - normalizedDistance * 0.4; // Zoom in up to 40% (closer = bigger)
      const targetZ = 500 * zoomFactor;
      camera.position.z += (targetZ - camera.position.z) * 0.05;
      
      camera.lookAt(scene.position);

      // Rotate scene
      scene.rotation.x += 0.001;
      scene.rotation.y += 0.002;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("pointermove", handlePointerMove);
      cancelAnimationFrame(animationFrameId);
      if (renderer) {
        renderer.dispose();
        if (container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }
      }
      if (geometry) geometry.dispose();
      if (material) material.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full z-0"
      style={{ touchAction: "none", pointerEvents: "auto" }}
    />
  );
};

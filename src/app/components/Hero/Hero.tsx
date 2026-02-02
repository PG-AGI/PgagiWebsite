'use client';

import { OrbitControls } from '@react-three/drei';
import { Canvas, useThree } from '@react-three/fiber';
import React, { Suspense, useEffect } from 'react';
import CanvasLoader from './CanvasLoader';
import Developer from './Developer';
import { ArrowUpRight } from 'lucide-react';
import { LayoutTextFlip } from '@/components/ui/layout-text-flip';
import styles from './Hero.module.scss';

function CameraController() {
  const { camera } = useThree();

  useEffect(() => {
    camera.position.set(0, 2, 9);
    camera.lookAt(0, -3, 0);
  }, [camera]);

  return null;
}

const Hero = () => {
  const isMobile = window.innerWidth <= 720;
  return (
    <div className={styles.hero}>
      <div className={styles.grid}>
        {/* LEFT SECTION */}
        <div className={styles.left}>
          <h1 className={styles.heading}>
            <LayoutTextFlip
              text="Building AI Systems for"
              words={['Enterprises', 'StartUps']}
            />
          </h1>

          <a
            href="https://www.upwork.com/agencies/pgagi/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.upworkLink}
          >
            Top 1% Recognized on Upwork
            <ArrowUpRight size={16} />
          </a>

          <p className={styles.paragraph}>
            PG-AGI helps startups and fast-growing teams design, build, and
            scale production-ready AI systems — from intelligent agents and
            automation workflows to LLM platforms, RAG pipelines, and real-time
            AI products.
          </p>

          <p className={styles.paragraph}>
            We work end-to-end: architecture, model orchestration, backend
            engineering, and polished frontends — turning complex AI ideas into
            reliable, scalable software.
          </p>

          <a href="/contact" className={styles.cta}>
            Get in touch
            <ArrowUpRight size={16} />
          </a>
        </div>

        {/* RIGHT SECTION */}
        <div className={styles.canvasWrapper}>
          <Canvas>
            <CameraController />

            <ambientLight intensity={7} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <directionalLight position={[10, 10, 10]} intensity={1} />

            <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />

            <Suspense fallback={<CanvasLoader />}>
              <Developer
                position={isMobile ? [0, -1.9, 0] : [0, -1.9, 0]}
                scale={4}
                animationName="idle"
              />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </div>
  );
};

export default Hero;

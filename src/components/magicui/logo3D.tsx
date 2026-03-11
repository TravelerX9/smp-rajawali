'use client';

import Image from 'next/image';
import React, { useEffect, useRef } from 'react';

interface Logo3DProps {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
  sizes?: string;
}

const Logo3D: React.FC<Logo3DProps> = ({
  src,
  alt = 'Logo',
  width = 200,
  height = 200,
  className = '',
  sizes
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Wait for Next.js Image to load
    const timer = setTimeout(() => {
      const originalImg = container.querySelector('img');
      if (!originalImg) return;

      const thickness = 8;
      const layersCount = 20;

      // Clone the image before clearing
      const imgClone = originalImg.cloneNode(true) as HTMLImageElement;
      container.innerHTML = '';

      const createLayer = (z: number, type: string) => {
        const div = document.createElement('div');
        div.className = `layer ${type}`;
        div.style.transform = `translateZ(${z}px)`;

        const img = imgClone.cloneNode(true) as HTMLImageElement;
        div.appendChild(img);

        if (type === 'back') {
          div.style.transform = `translateZ(${z}px) rotateY(180deg) scaleX(-1)`;
        }

        container.appendChild(div);
      };

      // Create front layer
      createLayer(thickness / 2, 'front');

      // Create middle layers
      const step = thickness / layersCount;
      for (let i = 1; i < layersCount; i++) {
        const z = (thickness / 2) - (i * step);
        createLayer(z, 'middle');
      }

      // Create back layer
      createLayer(-thickness / 2, 'back');
    }, 100);

    return () => clearTimeout(timer);
  }, [src]);

  return (
    <div className={`logo-3d-wrapper ${className}`}>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes spinny-token-yayyy {
              0%, 83.33% { transform: rotateY(0deg); animation-timing-function: ease-in-out; }
              100% { transform: rotateY(360deg); }
            }
            @keyframes rotate-twice {
              0% { transform: rotateY(0deg); }
              100% { transform: rotateY(720deg); }
            }
            @keyframes thumb-thumb {
              0%, 10%, 100% { transform: scale(100%); }
              5% { transform: scale(103%); }
              7% { transform: scale(97%); }
            }
            .logo-3d-wrapper {
              perspective: 1000px;
              cursor: pointer;
            }
            .token-container { 
              transform-style: preserve-3d; 
              animation: 8s spinny-token-yayyy infinite;
            }
            .logo-3d-wrapper:hover .token-container {
              animation: rotate-twice 2s ease-in-out;
            }
            .layer { 
              position: absolute; 
              top: 0; 
              left: 0; 
              width: 100%; 
              height: 100%; 
            }
            .layer img { 
              width: 100%; 
              height: 100%; 
              display: block; 
            }
            .layer.middle img { 
              filter: brightness(0.3); 
            }
          `,
        }}
      />

      <div
        ref={containerRef}
        className="token-container"
        style={{ width, height, position: 'relative' }}
      >
        <Image src={src} alt={alt} width={width} height={height} sizes={sizes} />
      </div>
    </div>
  );
};

export default Logo3D;

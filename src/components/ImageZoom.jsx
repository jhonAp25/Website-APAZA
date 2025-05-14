import { useRef, useState } from 'react';

export const ImageZoom=({ src, zoom = 2 })=>{

    const imgRef = useRef(null);
    const magnifierRef = useRef(null);
    const [showMagnifier, setShowMagnifier] = useState(false);
    
   const handleMouseMove = (e) => {
     const img = imgRef.current;
     const magnifier = magnifierRef.current;
     if (!img || !magnifier) return;
 
     const { left, top, width, height } = img.getBoundingClientRect();
     const x = e.clientX - left;
     const y = e.clientY - top;
 
     // Mover la lupa
     magnifier.style.left = `${x - magnifier.offsetWidth / 2}px`;
     magnifier.style.top = `${y - magnifier.offsetHeight / 2}px`;
 
     // Ajustar la imagen de fondo dentro de la lupa
     const backgroundX = (x / width) * 100;
     const backgroundY = (y / height) * 100;
     magnifier.style.backgroundPosition = `${backgroundX}% ${backgroundY}%`;
   };
 
   const handleMouseEnter = () => {
     setShowMagnifier(true);
   };
 
   const handleMouseLeave = () => {
     setShowMagnifier(false);
   };
 
   return (
     <div
       className=" image_product_selected"
       onMouseMove={handleMouseMove}
       onMouseEnter={handleMouseEnter}
       onMouseLeave={handleMouseLeave}
      
     >
       <img
         ref={imgRef}
         src={src}
         alt=""
         style={{ width: '100%', height: '100%', objectFit: 'cover' }}
       />
       {showMagnifier && (
         <div
           ref={magnifierRef}
           className="magnifier"
           style={{
             position: 'absolute',
             pointerEvents: 'none',
             width: '120px',
             height: '120px',
             borderRadius: '50%',
             backgroundImage: `url(${src})`,
             backgroundRepeat: 'no-repeat',
             backgroundSize: `${100 * zoom}% ${100 * zoom}%`, // <-- Aquí el zoom
             border: '2px solid #000',
             boxShadow: '0 0 5px rgba(0,0,0,0.3)',
           }}
         />
       )}
     </div>
   );
 };
import React, { useEffect, useState } from "react";

const ImagenBlackblaze = ({ src, alt, className }) => {
    const [imageUrl, setImageUrl] = useState(null);

    useEffect(() => {
        if (!src) return;

        // Aquí se construye directamente la URL pública al backend
        const fullUrl = `https://gateway-delicate-dust-1135.fly.dev/api/profesores/public/imagen?fileName=${src}`;

        setImageUrl(fullUrl);
    }, [src]);

    if (!imageUrl) return null;

    return <img src={imageUrl} alt={alt || "Imagen"} className={className} />;
};

export default ImagenBlackblaze;

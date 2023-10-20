import React from "react";

interface MapProps {
  urlMap: string;
  width?: string;
  height?: string;
}

const Map: React.FC<MapProps> = ({ urlMap, width, height }) => {
  return (
    <iframe
      src={urlMap}
      width={width}
      height={height}
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="map"
    />
  );
};

export default Map;

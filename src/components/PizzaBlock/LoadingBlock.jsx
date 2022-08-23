import React from "react";
import ContentLoader from "react-content-loader";

function LoadingBlock() {
  return (
    <ContentLoader
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="135" cy="122" r="113" />
      <rect x="0" y="272" rx="6" ry="6" width="280" height="26" />
      <rect x="0" y="309" rx="6" ry="6" width="280" height="84" />
      <rect x="0" y="415" rx="6" ry="6" width="90" height="31" />
      <rect x="137" y="408" rx="25" ry="25" width="140" height="43" />
    </ContentLoader>
  );
}

export default LoadingBlock;

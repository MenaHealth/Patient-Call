// PatientViewModels/videocall/AppBuilderWrapper.tsx
import React from 'react';
import AgoraAppBuilder from "@appbuilder/react";

const AppBuilderWrapper = () => {
  return (
    <div style={{ display: "flex", width: "100vw", height: "550px" }}>
      <AgoraAppBuilder.View />
    </div>
  );
};

export default AppBuilderWrapper;

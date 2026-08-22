import React from "react";

// Some browsers/devices have WebGL disabled or unavailable (flagged by
// Lighthouse as uncaught console errors on this site). Without this,
// react-three-fiber's Canvas throws and takes the section down with it.
// This just swallows that failure and renders nothing instead of a crash.
class CanvasErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error) {
    console.warn("3D canvas failed to render (likely no WebGL support):", error);
  }

  render() {
    if (this.state.hasError) return null;
    return this.props.children;
  }
}

export default CanvasErrorBoundary;

import { varSlide, varZoom } from "../animate";

export default function getVariant(variant = "zoomInUp") {
  return {
    // Zoom
    zoomInUp: varZoom({ distance: 80 }).inUp,
    // Slide
    slideInUp: varSlide().inUp,
  }[variant]
}
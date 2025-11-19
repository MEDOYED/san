import type { Slide } from "@shared/types/types";
import type { Position } from "@shared/types/types";

function addHeading(
  slide: Slide,
  text: string
  // options: {
  //   position: Position;
  //   fontSize: number;
  //   color: string;
  //   bold?: boolean;
  //   align?: "left" | "center" | "right";
  //   valign?: "top" | "middle" | "bottom";
  // }
): void {
  slide.addText(text, {
    // x: options.position.x,
    // y: options.position.y,
    // w: options.position.w,
    // h: options.position.h,
    fontSize: 48,
    color: "000000",
    bold: true,
    // position: { x: 1, y: 1.5, w: 8, h: 1 } as Position,
    // fontFace: SLIDE_CONFIG.font.family,
    // align: options.align || "center",
    // valign: options.valign || "top",
    // bold: options.bold || false,
  });
}

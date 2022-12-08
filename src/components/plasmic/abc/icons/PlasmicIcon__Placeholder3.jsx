// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Placeholder3Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 246 86"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",
        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g filter={"url(#erMOsY1Faa)"}>
        <path
          fillRule={"evenodd"}
          clipRule={"evenodd"}
          d={
            "M41.973 16C32.047 16 24 24.047 24 33.973c0 9.926 8.047 17.973 17.973 17.973h162.054c.101 0 .201 0 .301-.002 6.068 2.142 10.85 2.148 13.214 1.95.859-.073 1.338-.17 1.358-.173a.55.55 0 00.436-.399.478.478 0 00-.226-.514c-2.847-1.787-3.933-3.461-4.345-4.421C219.157 45.11 222 39.874 222 33.973 222 24.047 213.953 16 204.027 16H41.973z"
          }
          fill={"currentColor"}
        ></path>
      </g>

      <defs>
        <filter
          id={"erMOsY1Faa"}
          x={"0"}
          y={"0"}
          width={"246"}
          height={"85.975"}
          filterUnits={"userSpaceOnUse"}
          colorInterpolationFilters={"sRGB"}
        >
          <feFlood floodOpacity={"0"} result={"BackgroundImageFix"}></feFlood>

          <feColorMatrix
            in={"SourceAlpha"}
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}
            result={"hardAlpha"}
          ></feColorMatrix>

          <feOffset dy={"8"}></feOffset>

          <feGaussianBlur stdDeviation={"12"}></feGaussianBlur>

          <feColorMatrix
            values={"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"}
          ></feColorMatrix>

          <feBlend
            in2={"BackgroundImageFix"}
            result={"effect1_dropShadow_4548_407"}
          ></feBlend>

          <feBlend
            in={"SourceGraphic"}
            in2={"effect1_dropShadow_4548_407"}
            result={"shape"}
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export default Placeholder3Icon;
/* prettier-ignore-end */

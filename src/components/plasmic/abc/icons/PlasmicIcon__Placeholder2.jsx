// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Placeholder2Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 240 86"}
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

      <g filter={"url(#hpbuoHzpcna)"}>
        <path
          fillRule={"evenodd"}
          clipRule={"evenodd"}
          d={
            "M198.357 16C208.101 16 216 23.899 216 33.643s-7.899 17.643-17.643 17.643H54.567c-10.501 2.822-18.752 2.865-22.842 2.622-1.496-.09-2.33-.212-2.364-.218-.382-.057-.678-.262-.756-.523-.077-.26.08-.527.4-.68 2.18-1.042 3.772-2.053 4.935-2.967C28.056 46.66 24 40.625 24 33.643 24 23.899 31.899 16 41.643 16h156.714z"
          }
          fill={"currentColor"}
        ></path>
      </g>

      <defs>
        <filter
          id={"hpbuoHzpcna"}
          x={"0"}
          y={"0"}
          width={"240"}
          height={"86"}
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
            result={"effect1_dropShadow_4548_418"}
          ></feBlend>

          <feBlend
            in={"SourceGraphic"}
            in2={"effect1_dropShadow_4548_418"}
            result={"shape"}
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export default Placeholder2Icon;
/* prettier-ignore-end */

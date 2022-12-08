// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function PlaceholderIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 173 86"}
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

      <g filter={"url(#8BhP4QZRdya)"}>
        <path
          fillRule={"evenodd"}
          clipRule={"evenodd"}
          d={
            "M41.973 16C32.047 16 24 24.047 24 33.973c0 9.926 8.047 17.973 17.973 17.973h89.054c9.926 0 17.973-8.047 17.973-17.973C149 24.047 140.953 16 131.027 16H41.973zm105.203 36.808c-2.243-2.23-2.755-4.284-2.869-4.994 1.496-1.539-7.181 3.95-6.884 3.887 4.03 2.385 7.216 2.398 8.763 2.192.542-.072.844-.168.857-.172.138-.045.246-.201.275-.399.029-.197-.027-.399-.142-.514z"
          }
          fill={"currentColor"}
        ></path>
      </g>

      <defs>
        <filter
          id={"8BhP4QZRdya"}
          x={"0"}
          y={"0"}
          width={"173"}
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
            result={"effect1_dropShadow_4548_429"}
          ></feBlend>

          <feBlend
            in={"SourceGraphic"}
            in2={"effect1_dropShadow_4548_429"}
            result={"shape"}
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export default PlaceholderIcon;
/* prettier-ignore-end */

// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3zC4fkbXrqgM7fa4uUQ6gc
// Component: upGhw7grZoRY
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_abc.module.css"; // plasmic-import: 3zC4fkbXrqgM7fa4uUQ6gc/projectcss
import sty from "./PlasmicButton5.module.css"; // plasmic-import: upGhw7grZoRY/css

export const PlasmicButton5__VariantProps = new Array("type", "border", "size");

export const PlasmicButton5__ArgProps = new Array();

function PlasmicButton5__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const currentUser = p.useCurrentUser?.() || {};
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "type",
        type: "private",
        initFunc: ($props, $state, $ctx) => $props.type
      },
      {
        path: "border",
        type: "private",
        initFunc: ($props, $state, $ctx) => $props.border
      },
      {
        path: "size",
        type: "private",
        initFunc: ($props, $state, $ctx) => $props.size
      }
    ],

    [$props, $ctx]
  );

  const $state = p.useDollarState(stateSpecs, $props, $ctx);
  const [$queries, setDollarQueries] = React.useState({});
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.__wab_text,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        sty.root,
        {
          [sty.rootborder_link]: hasVariant($state, "border", "link"),
          [sty.rootborder_rounded]: hasVariant($state, "border", "rounded"),
          [sty.rootsize_large]: hasVariant($state, "size", "large"),
          [sty.rootsize_small]: hasVariant($state, "size", "small"),
          [sty.roottype_danger]: hasVariant($state, "type", "danger"),
          [sty.roottype_primary]: hasVariant($state, "type", "primary")
        }
      )}
    >
      {"Click me"}
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicButton5__ArgProps,
          internalVariantPropNames: PlasmicButton5__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicButton5__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicButton5";
  } else {
    func.displayName = `PlasmicButton5.${nodeName}`;
  }
  return func;
}

export const PlasmicButton5 = Object.assign(
  // Top-level PlasmicButton5 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicButton5
    internalVariantProps: PlasmicButton5__VariantProps,
    internalArgProps: PlasmicButton5__ArgProps
  }
);

export default PlasmicButton5;
/* prettier-ignore-end */

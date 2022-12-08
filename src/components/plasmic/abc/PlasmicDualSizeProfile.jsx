// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3zC4fkbXrqgM7fa4uUQ6gc
// Component: BTxNxkf2a_gqO
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
import sty from "./PlasmicDualSizeProfile.module.css"; // plasmic-import: BTxNxkf2a_gqO/css
import image1180SzOtooXPbsc from "./images/image11.png"; // plasmic-import: 80SZOtooXPbsc/picture

export const PlasmicDualSizeProfile__VariantProps = new Array("expanded");

export const PlasmicDualSizeProfile__ArgProps = new Array();

function PlasmicDualSizeProfile__RenderFunc(props) {
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
        path: "expanded",
        type: "private",
        initFunc: ($props, $state, $ctx) => $props.expanded
      }
    ],

    [$props, $ctx]
  );

  const $state = p.useDollarState(stateSpecs, $props, $ctx);
  const [$queries, setDollarQueries] = React.useState({});
  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        sty.root,
        { [sty.rootexpanded]: hasVariant($state, "expanded", "expanded") }
      )}
    >
      <p.PlasmicImg
        data-plasmic-name={"img"}
        data-plasmic-override={overrides.img}
        alt={""}
        className={classNames(sty.img, {
          [sty.imgexpanded]: hasVariant($state, "expanded", "expanded")
        })}
        displayHeight={"50px"}
        displayMaxHeight={"none"}
        displayMaxWidth={"none"}
        displayMinHeight={"0"}
        displayMinWidth={"0"}
        displayWidth={"50px"}
        src={{
          src: image1180SzOtooXPbsc,
          fullWidth: 150,
          fullHeight: 184,
          aspectRatio: undefined
        }}
      />

      <p.Stack
        as={"div"}
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox, {
          [sty.freeBoxexpanded]: hasVariant($state, "expanded", "expanded")
        })}
      >
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__cZrF,
            {
              [sty.textexpanded__cZrFhcIfO]: hasVariant(
                $state,
                "expanded",
                "expanded"
              )
            }
          )}
        >
          {"Totoro"}
        </div>

        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__sdja4,
            {
              [sty.textexpanded__sdja4HcIfO]: hasVariant(
                $state,
                "expanded",
                "expanded"
              )
            }
          )}
        >
          {"@friendlyneighbor"}
        </div>
      </p.Stack>
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root", "img", "freeBox"],
  img: ["img"],
  freeBox: ["freeBox"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicDualSizeProfile__ArgProps,
          internalVariantPropNames: PlasmicDualSizeProfile__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicDualSizeProfile__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicDualSizeProfile";
  } else {
    func.displayName = `PlasmicDualSizeProfile.${nodeName}`;
  }
  return func;
}

export const PlasmicDualSizeProfile = Object.assign(
  // Top-level PlasmicDualSizeProfile renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    freeBox: makeNodeComponent("freeBox"),
    // Metadata about props expected for PlasmicDualSizeProfile
    internalVariantProps: PlasmicDualSizeProfile__VariantProps,
    internalArgProps: PlasmicDualSizeProfile__ArgProps
  }
);

export default PlasmicDualSizeProfile;
/* prettier-ignore-end */

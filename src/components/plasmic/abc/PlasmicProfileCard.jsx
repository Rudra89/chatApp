// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3zC4fkbXrqgM7fa4uUQ6gc
// Component: y033EJ2gvGOP
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_abc.module.css"; // plasmic-import: 3zC4fkbXrqgM7fa4uUQ6gc/projectcss
import sty from "./PlasmicProfileCard.module.css"; // plasmic-import: y033EJ2gvGOP/css
import image1180SzOtooXPbsc from "./images/image11.png"; // plasmic-import: 80SZOtooXPbsc/picture

export const PlasmicProfileCard__VariantProps = new Array();

export const PlasmicProfileCard__ArgProps = new Array();

function PlasmicProfileCard__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const currentUser = p.useCurrentUser?.() || {};
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
        sty.root
      )}
    >
      <p.PlasmicImg
        data-plasmic-name={"img"}
        data-plasmic-override={overrides.img}
        alt={""}
        className={classNames(sty.img)}
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
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__esrNa)}
      >
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__opY5E)}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__gQC3
            )}
          >
            {"Totoro"}
          </div>
        </p.Stack>

        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__fArtp
          )}
        >
          {"@friendlyneighbor"}
        </div>
      </p.Stack>
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root", "img"],
  img: ["img"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicProfileCard__ArgProps,
          internalVariantPropNames: PlasmicProfileCard__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicProfileCard__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicProfileCard";
  } else {
    func.displayName = `PlasmicProfileCard.${nodeName}`;
  }
  return func;
}

export const PlasmicProfileCard = Object.assign(
  // Top-level PlasmicProfileCard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    // Metadata about props expected for PlasmicProfileCard
    internalVariantProps: PlasmicProfileCard__VariantProps,
    internalArgProps: PlasmicProfileCard__ArgProps
  }
);

export default PlasmicProfileCard;
/* prettier-ignore-end */

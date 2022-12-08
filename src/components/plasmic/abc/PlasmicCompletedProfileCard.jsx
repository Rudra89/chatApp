// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3zC4fkbXrqgM7fa4uUQ6gc
// Component: aWJJKtgQmWYG
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
import sty from "./PlasmicCompletedProfileCard.module.css"; // plasmic-import: aWJJKtgQmWYG/css
import image1180SzOtooXPbsc from "./images/image11.png"; // plasmic-import: 80SZOtooXPbsc/picture

export const PlasmicCompletedProfileCard__VariantProps = new Array();

export const PlasmicCompletedProfileCard__ArgProps = new Array(
  "name",
  "username",
  "profilePicture"
);

function PlasmicCompletedProfileCard__RenderFunc(props) {
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
      {p.renderPlasmicSlot({
        defaultContents: (
          <p.PlasmicImg
            alt={""}
            className={classNames(sty.img__hhFih)}
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
        ),

        value: args.profilePicture
      })}

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__ltljl)}
      >
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__rjgX)}
        >
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__t4BWp)}
          >
            {p.renderPlasmicSlot({
              defaultContents: "Totoro",
              value: args.name,
              className: classNames(sty.slotTargetName)
            })}
          </p.Stack>
        </p.Stack>

        {p.renderPlasmicSlot({
          defaultContents: "@friendlyneighbor",
          value: args.username,
          className: classNames(sty.slotTargetUsername)
        })}
      </p.Stack>
    </p.Stack>
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
          internalArgPropNames: PlasmicCompletedProfileCard__ArgProps,
          internalVariantPropNames: PlasmicCompletedProfileCard__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicCompletedProfileCard__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCompletedProfileCard";
  } else {
    func.displayName = `PlasmicCompletedProfileCard.${nodeName}`;
  }
  return func;
}

export const PlasmicCompletedProfileCard = Object.assign(
  // Top-level PlasmicCompletedProfileCard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicCompletedProfileCard
    internalVariantProps: PlasmicCompletedProfileCard__VariantProps,
    internalArgProps: PlasmicCompletedProfileCard__ArgProps
  }
);

export default PlasmicCompletedProfileCard;
/* prettier-ignore-end */

// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3zC4fkbXrqgM7fa4uUQ6gc
// Component: BIgZw3EfZ7QsC
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
import sty from "./PlasmicCompletedLandmarks.module.css"; // plasmic-import: BIgZw3EfZ7QsC/css
import Icon12Icon from "./icons/PlasmicIcon__Icon12"; // plasmic-import: qyDbFYfpaFHMy/icon

export const PlasmicCompletedLandmarks__VariantProps = new Array("variants");

export const PlasmicCompletedLandmarks__ArgProps = new Array();

function PlasmicCompletedLandmarks__RenderFunc(props) {
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
        path: "variants",
        type: "private",
        initFunc: ($props, $state, $ctx) => $props.variants
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
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        sty.root,
        { [sty.rootvariants_wide]: hasVariant($state, "variants", "wide") }
      )}
    >
      <div
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.text__f2Brt,
          {
            [sty.textvariants_wide__f2BrTzHr1T]: hasVariant(
              $state,
              "variants",
              "wide"
            )
          }
        )}
      >
        {"Landmarks"}
      </div>

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__zsLaT, {
          [sty.freeBoxvariants_wide__zsLaTzHr1T]: hasVariant(
            $state,
            "variants",
            "wide"
          )
        })}
      >
        <div
          className={classNames(projectcss.all, sty.freeBox__kwFi7, {
            [sty.freeBoxvariants_wide__kwFi7ZHr1T]: hasVariant(
              $state,
              "variants",
              "wide"
            )
          })}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__euaut
            )}
          >
            {"Mission Dolores Park"}
          </div>

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__tndg6
            )}
          >
            {"Park"}
          </div>

          <Icon12Icon
            className={classNames(projectcss.all, sty.svg___17RkB)}
            role={"img"}
          />
        </div>

        <div
          className={classNames(projectcss.all, sty.freeBox__f2Kj, {
            [sty.freeBoxvariants_wide__f2KjZHr1T]: hasVariant(
              $state,
              "variants",
              "wide"
            )
          })}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__l3Kz0,
              {
                [sty.textvariants_wide__l3Kz0ZHr1T]: hasVariant(
                  $state,
                  "variants",
                  "wide"
                )
              }
            )}
          >
            {"Mission Dolores Park"}
          </div>

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__dsHq4
            )}
          >
            {"Park"}
          </div>

          <Icon12Icon
            className={classNames(projectcss.all, sty.svg__xhIjY)}
            role={"img"}
          />
        </div>

        <div
          className={classNames(projectcss.all, sty.freeBox__iLiA2, {
            [sty.freeBoxvariants_wide__iLiA2ZHr1T]: hasVariant(
              $state,
              "variants",
              "wide"
            )
          })}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__fYcLp
            )}
          >
            {"Mission Dolores Park"}
          </div>

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__onaPs
            )}
          >
            {"Park"}
          </div>

          <Icon12Icon
            className={classNames(projectcss.all, sty.svg__pCgh1)}
            role={"img"}
          />
        </div>
      </p.Stack>
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
          internalArgPropNames: PlasmicCompletedLandmarks__ArgProps,
          internalVariantPropNames: PlasmicCompletedLandmarks__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicCompletedLandmarks__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCompletedLandmarks";
  } else {
    func.displayName = `PlasmicCompletedLandmarks.${nodeName}`;
  }
  return func;
}

export const PlasmicCompletedLandmarks = Object.assign(
  // Top-level PlasmicCompletedLandmarks renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicCompletedLandmarks
    internalVariantProps: PlasmicCompletedLandmarks__VariantProps,
    internalArgProps: PlasmicCompletedLandmarks__ArgProps
  }
);

export default PlasmicCompletedLandmarks;
/* prettier-ignore-end */

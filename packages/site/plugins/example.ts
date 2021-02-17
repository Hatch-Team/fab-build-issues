import { FABRuntime } from "@fab/core";
import { getEnvironment } from "@hatch-team/ui-config";

export default function example({ Router }: FABRuntime) {
  console.log(getEnvironment());
  Router.onAll(async () => {
    return undefined;
  });
}

import dynamic from "next/dynamic";
import { getEnvironment } from "@hatch-team/ui-config";
dynamic(() => import("bad-package") as any, { ssr: false });

export default function ErrorPage(props: {
  statusCode: number;
  title: string;
}) {
  return <div>error {getEnvironment()}</div>;
}

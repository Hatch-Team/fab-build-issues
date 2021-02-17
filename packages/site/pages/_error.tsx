import { getEnvironment } from "@hatch-team/ui-config";

export default function ErrorPage(props: {
  statusCode: number;
  title: string;
}) {
  return <div>error {getEnvironment()}</div>;
}

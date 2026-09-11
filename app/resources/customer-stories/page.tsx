import { redirect } from "next/navigation";

/** Back-compat redirect: the page lives at /customer-stories. */
export default function CustomerStoriesRedirect() {
  redirect("/customer-stories");
}

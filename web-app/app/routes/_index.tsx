import { useLoaderData } from "@remix-run/react";

export default function Index() {
  const { fruits } = useLoaderData<typeof loader>();

  return (
    <div className="h-screen py-4 container mx-auto max-w-screen-sm">
      <div className="h-full px-4 py-6 ring-2 rounded-lg">
        <h1 className="text-2xl font-semibold tracking-tight text-center">
          Hello from Remix
        </h1>
        <pre className="mt-4">{JSON.stringify(fruits, null, 2)}</pre>
      </div>
    </div>
  );
}

export const loader = async () => {
  const response = await fetch("http://product-service/");
  const fruits = await response.json();
  return { fruits };
};

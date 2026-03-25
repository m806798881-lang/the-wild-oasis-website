"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Filter() {
  return (
    <div className="flex border border-primary-800">
      <Button filter="all">All cabins</Button>
      <Button filter="small">2&mdash;3 guests</Button>
      <Button filter="medium">4&mdash;7 guests</Button>
      <Button filter="large">8&mdash;12 guests</Button>
    </div>
  );
}

function Button({ children, filter }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const activeFilter = searchParams?.get("capacity") ?? "all";
  const params = new URLSearchParams(searchParams);

  function handleFilter(filter) {
    params.set("capacity", filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <button
      className={`px-5 py-2 hover:bg-primary-700 ${
        activeFilter === filter ? "bg-primary-700" : ""
      }`}
      onClick={() => handleFilter(filter)}
    >
      {children}
    </button>
  );
}

export default Filter;

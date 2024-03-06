"use client";

import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { fetchNews } from "@/utils/api";
import NewsCard from "@/components/NewsCard";
import Image from "next/image";

export default function Home() {
  const router = useRouter();
  const [data, setData] = useState<any>([]);

  const getData = useCallback(async () => {
    try {
      const result = await fetchNews();
      setData(result);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="py-12 min-h-screen flex flex-col items-center justify-center w-full dark:bg-gray-950">
      <div className="pb-12">
        <Image
          src="/seeds-logo.svg"
          alt="Seeds Logo"
          className="dark:invert pb-6"
          width={180}
          height={50}
          priority
        />
        <p className="text-white text-3xl font-bold">Market News</p>
      </div>

      <div className="flex flex-wrap justify-center">
        {data?.map((item: any, index: number) => {
          return <NewsCard key={item?.id} item={item} />;
        })}
      </div>
    </div>
  );
}

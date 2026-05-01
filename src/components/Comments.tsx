"use client";

import Giscus from "@giscus/react";

export default function Comments() {
  return (
    <div className="mt-16 pt-10 border-t border-zinc-200 dark:border-zinc-800">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
        Discussion & Reactions
      </h2>
      <Giscus
        id="comments"
        repo="tukantisiva/commitapps"
        repoId="R_kgDOL2WimA"
        category="General"
        categoryId="DIC_kwDOL2WimM4C8Gzy"
        mapping="pathname"
        term="Welcome to @giscus/react component!"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="preferred_color_scheme"
        lang="en"
        loading="lazy"
      />
    </div>
  );
}

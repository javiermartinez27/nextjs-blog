import clsx from "clsx";

type ArticleMiniProps = {
  title: string;
  tags: string[];
  image: JSX.Element;
  main?: boolean;
}

function ArticleMini({ title, tags, image, main }: ArticleMiniProps){
  return (
    <div className="flex flex-col mx-4">
      {image}
      <div className="pt-2 pb-1">
        {tags.map((tag, index) => (
          <div
            key={index}
            className={clsx("rounded-xl border-2 border-green-700", "bg-transparent", "w-20", "text-sm text-center")}
          >
            {tag}
          </div>
        ))}
      </div>
      <div className={clsx("font-bold text-xl", !main && "!text-base")}>{title}</div>
      <div>Ver nota completa...</div>
    </div>
  )
}

export default ArticleMini;

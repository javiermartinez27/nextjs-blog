import clsx from "clsx";

type ArticleMiniProps = {
  title: string;
  tags: string[];
  image: JSX.Element;
}

function ArticleMini({ title, tags, image }: ArticleMiniProps){
  return (
    <div className="flex flex-col gap-y-1 p-2 m-2">
      <div className="w-full mb-3 lg:pr-10">{image}</div>
      {tags.map((tag, index) => (
        <div
          key={index}
          className={clsx("rounded-xl border-2 border-green-700", "bg-transparent", "w-20", "text-sm text-center")}
        >
          {tag}
        </div>
      ))}
      <div className="font-bold text-xl">{title}</div>
      <div>Ver nota completa...</div>
    </div>
  )
}

export default ArticleMini;
type ArticleMiniProps = {
  title: string;
}

function ArticleMini({ title }: ArticleMiniProps){
  return (
    <div className="flex flex-col gap-y-1 p-2 m-2">
      <div className="bg-gray-200 rounded-xl p-2 h-10"/>
      <div className="rounded-xl border-2 bg-transparent border-green-700 w-20 text-center">hola</div>
      <div>{title}</div>
      <div>Ver nota completa...</div>
    </div>
  )
}

export default ArticleMini;
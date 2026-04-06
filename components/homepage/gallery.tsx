import { Block } from "@/types/block-types";
import { SectionData } from "@/types/section-types";

function Image({
  block,
  onClick,
}: {
  block: Block;
  onClick: (id: string) => void;
}) {
  if (!block.data) return null;

  const aspect =
    block.width && block.height ? block.height / block.width : undefined;

  return (
    <div
      className="w-full bg-gray-100 overflow-hidden rounded-md cursor-pointer"
      style={
        aspect
          ? { paddingBottom: `${aspect * 100}%`, position: "relative" }
          : {}
      }
      onClick={() => onClick(block.block_id)}
    >
      <img
        src={block.data.fileName}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  );
}

export default function Gallery({
  isMobile,
  data,
  onImageClick,
}: {
  isMobile: boolean;
  data: SectionData;
  onImageClick: (id: string) => void;
}) {
  return (
    <div>
      <h1 className="font-bold text-2xl my-6 mx-4">{data.title}</h1>

      {isMobile ? ( // Single column on mobile, ordered col-by-col
        <div key={data.sectionId} className="flex flex-col gap-2">
          {data.ordered.map((block) => (
            <Image key={block.block_id} block={block} onClick={onImageClick} />
          ))}
        </div>
      ) : (
        // Multi-column grid on desktop
        <div
          key={data.sectionId}
          className="grid gap-2"
          style={{
            gridTemplateColumns: `repeat(${data.numColumns}, 1fr)`,
          }}
        >
          {data.columns.map((col, colIdx) => (
            <div
              key={`section-${data.sectionId}-col-${colIdx}`}
              className="flex flex-col gap-2"
            >
              {col.map((block) => (
                <Image
                  key={block.block_id}
                  block={block}
                  onClick={onImageClick}
                />
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function ImageColumn({
  images,
  direction = "up",
  durationSeconds = 30,
  className = "",
}) {
  const track = [...images, ...images];

  return (
    <div
      className={`group/col relative h-auto overflow-hidden rounded-2xl
        [mask-image:linear-gradient(to_bottom,transparent,black_3%,black_95%,transparent)]
        lg:h-[90%]
        ${className}`}
    >
      <div
        className={`image-scroll-track ${
          direction === "up"
            ? "image-scroll-track-up"
            : "image-scroll-track-down"
        }`}
        style={{
          animationDuration: `${durationSeconds}s`,
        }}
      >
        {track.map((src, i) => (
          <div
            key={`${src}-${i}`}
            className="
              relative
              h-[180px] w-[85%]
              shrink-0
              self-center
              overflow-hidden
              rounded-2xl
              bg-transparent
              md:h-[220px]
              lg:h-[260px]
            "
          >
            <img
              src={src}
              alt=""
              draggable={false}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageColumn;

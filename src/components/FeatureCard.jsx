// export function FeatureCard({
//   number,
//   title,
//   description,
//   icon: Icon,
//   stackIndex,
//   numberPositionClassName = "",
//   className = "",
// }) {
//   return (
//     <div
//       tabIndex={0}
//       className={`
//         group
//         relative
//         z-30
//         w-full
//         overflow-visible
//         outline-none
//         hover:z-50
//         focus-visible:z-50
//         ${className}
//       `}
//     >
//       {/* NUMBER BEHIND CARD */}

//       <span
//         aria-hidden="true"
//         className={`
//     pointer-events-none
//     absolute
//     z-0

//     -top-5

//     select-none
//     font-display
//     text-7xl
//     font-bold
//     leading-none

//     bg-gradient-to-br
//     from-[#6F5A82]
//     via-[#574466]
//     to-[#49364F]
//     bg-clip-text
//     text-transparent
//     opacity-35

//     transition-all
//     duration-700
//     ease-premium

//     group-hover:-top-19
//     group-hover:opacity-75
//     group-hover:scale-110

//     group-hover:from-[#9A7FB2]
//     group-hover:via-[#765B8D]
//     group-hover:to-[#60465F]

//     group-focus-visible:-top-16
//     group-focus-visible:opacity-75
//     group-focus-visible:scale-110

//     group-focus-visible:from-[#9A7FB2]
//     group-focus-visible:via-[#765B8D]
//     group-focus-visible:to-[#60465F]

//     ${numberPositionClassName}
//   `}
//       >
//         {number}
//       </span>

//       {/* CARD */}

//       <div
//         className="
//           relative
//           z-10
//           overflow-hidden
//           rounded-2xl

//           border
//           border-[#D8C8F0]/10

//           bg-[#241A2F]
// bg-gradient-to-l
// from-[#3A2945]/40
// via-[#241A2F]
// to-[#241A2F]

//           p-4

//           shadow-[0_12px_40px_-18px_rgba(36,26,47,0.8)]
//           backdrop-blur-md

//           transition-all
//           duration-500
//           ease-premium

//           group-hover:-translate-y-1.5
//           group-hover:border-[#D8C8F0]/40
//           group-hover:bg-[#30213D]/50
//           group-hover:shadow-[0_20px_50px_-20px_rgba(191,167,222,0.35)]

//           group-focus-visible:-translate-y-1.5
//           group-focus-visible:border-[#D8C8F0]/40
//           group-focus-visible:bg-[#30213D]/95
//           group-focus-visible:shadow-[0_20px_50px_-20px_rgba(191,167,222,0.35)]
//         "
//       >
//         {/* Soft pastel glow */}

//         <div
//           aria-hidden="true"
//           className="
//             pointer-events-none
//             absolute
//             -right-12
//             -top-12
//             h-24
//             w-24
//             rounded-full
//             bg-[#D8C8F0]/10
//             blur-2xl
//             transition-all
//             duration-700

//             group-hover:bg-[#D8C8F0]/20
//           "
//         />

//         {/* Icon */}

//         <div
//           className="
//             relative
//             flex
//             h-9
//             w-9
//             items-center
//             justify-center
//             rounded-lg

//             bg-[#D8C8F0]/8
//             text-[#D8C8F0]

//             ring-1
//             ring-[#D8C8F0]/10

//             transition-all
//             duration-500
//             ease-premium

//             group-hover:bg-[#D8C8F0]/15
//             group-hover:text-[#E8C8BC]
//             group-hover:ring-[#D8C8F0]/20

//             group-focus-visible:bg-[#D8C8F0]/15
//             group-focus-visible:text-[#E8C8BC]
//             group-focus-visible:ring-[#D8C8F0]/20
//           "
//         >
//           {Icon && <Icon className="h-4 w-4" strokeWidth={1.75} />}
//         </div>

//         {/* Title */}

//         <h3
//           className="
//             relative
//             mt-3
//             font-display
//             text-base
//             font-semibold
//             leading-tight
//             text-[#F4EEE8]

//             transition-colors
//             duration-500

//             group-hover:text-[#FFFFFF]
//             group-focus-visible:text-[#FFFFFF]
//           "
//         >
//           {title}
//         </h3>

//         {/* Description */}

//         <p
//           className="
//             relative
//             mt-1.5
//             text-xs
//             leading-relaxed
//             text-[#D8CEDB]/60

//             transition-colors
//             duration-500
//             ease-premium

//             group-hover:text-[#E4DAE8]/85
//             group-focus-visible:text-[#E4DAE8]/85
//           "
//         >
//           {description}
//         </p>
//       </div>
//     </div>
//   );
// }

// export default FeatureCard;

export function FeatureCard({
  number,
  title,
  description,
  icon: Icon,
  stackIndex,
  numberPositionClassName = "",
  className = "",
}) {
  return (
    <div
      tabIndex={0}
      className={`
        group
        relative
        z-30
        w-full
        overflow-visible
        outline-none
        hover:z-50
        focus-visible:z-50
        ${className}
      `}
    >
      {/* NUMBER BEHIND CARD */}

      {/* <span
        aria-hidden="true"
        className={`
          pointer-events-none
          absolute
          z-0

          -top-5

          select-none
          font-poppins
          text-6xl
          font-bold
          leading-none

          text-ivory/10

          transition-all
          duration-700
          ease-premium

          group-hover:-top-19
          group-hover:text-gold/35
          group-hover:scale-110

          group-focus-visible:-top-16
          group-focus-visible:text-gold/35
          group-focus-visible:scale-110

          ${numberPositionClassName}
        `}
      >
        {number}
      </span> */}

      {/* CARD */}

      <div
        className="
          relative
          z-10
          overflow-hidden
          rounded-2xl
          border
          border-lavender/15
          bg-charcoal/95
          p-4
          shadow-[0_10px_30px_-15px_rgba(0,0,0,0.6)]
          backdrop-blur-md
          transition-all
          duration-500
          ease-premium
          group-hover:-translate-y-1.5
          group-hover:border-gold/50
          group-hover:shadow-glow
          group-focus-visible:-translate-y-1.5
          group-focus-visible:border-gold/50
          group-focus-visible:bg-plum/50
          group-focus-visible:shadow-glow
        "
      >
        {/* Icon */}

        <div className="flex items-center gap-3">
  <div
    className="
      flex
      h-9
      w-9
      shrink-0
      items-center
      justify-center
      rounded-lg
      bg-ivory/5
      text-lavender
      transition-all
      duration-500
      ease-premium
      group-hover:bg-gold/15
      group-hover:text-gold
      group-focus-visible:bg-gold/15
      group-focus-visible:text-gold
    "
  >
    {Icon && <Icon className="h-4 w-4" strokeWidth={1.75} />}
  </div>

  <h3
    className="
      text-[18px]
      font-bold
      leading-tight
      text-ivory
      font-sora
      tracking-tight
    "
  >
    {title}
  </h3>
</div>

        {/* Title */}


        {/* Description */}

        <p
          className="
            mt-1.5
            text-xs
            leading-relaxed
            text-beige/60

            transition-colors
            duration-500
            ease-premium

            group-hover:text-beige/85
            group-focus-visible:text-beige/85
            font-inter
            font-semibold
          "
        >
          {description}
        </p>
      </div>
    </div>
  );
}

export default FeatureCard;

import { SVGProps } from "react";

export const RemoveImage = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <rect x="0" fill="none" width="24" height="24" />
      <g>
        <path d="M20.587 3.423L22 4.837 20 6.84V18c0 1.105-.895 2-2 2H6.84l-2.007 2.006-1.414-1.414 17.167-17.17zM12.42 14.42l1 1 1-1c.63-.504 1.536-.456 2.11.11L18 16V8.84l-5.58 5.58zM15.16 6H6v6.38l2.19-2.19 1.39 1.39L4 17.163V6c0-1.105.895-2 2-2h11.162l-2 2z" />
      </g>
    </svg>
  );
};

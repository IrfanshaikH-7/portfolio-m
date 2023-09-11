import { LinkProps } from "next/link";
export type MouseEve = MouseEvent & {
    target: (MouseEvent['target'] )
}


export type TestProps = React.ForwardRefExoticComponent<Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> & LinkProps & {
    children?: React.ReactNode;
} & React.RefAttributes<HTMLAnchorElement>>;

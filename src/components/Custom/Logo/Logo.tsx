//import './Logo.css'

export default function Logo(props: {
  href: string;
  src: string;
  addClassname?: string;
  alt: string;
}) {
  const { href, src, addClassname, alt } = props;
  const classname = "logo" + addClassname

  return (
    <a href={href} target="_blank">
      <img src={src} width="25" height="25" className={classname} alt={alt} />
    </a>
  );
}

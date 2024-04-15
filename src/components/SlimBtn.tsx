type Props = {
  color?: string;
};
function SlimBtn({ color }: Props) {
  return <div className={`small_btn`} style={{ backgroundColor: color }}></div>;
}
export default SlimBtn;

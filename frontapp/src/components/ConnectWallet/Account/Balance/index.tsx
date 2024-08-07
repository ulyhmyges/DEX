import { Address, formatEther } from "viem";
import { useBalance } from "wagmi";

type IProps = {
  address: Address;
  chainId: number;
};
// npm install --save-dev @wagmi/cli --force
// npx wagmi init
export default function Balance(props: IProps) {
  const { data } = useBalance({
    address: props.address,
    chainId: props.chainId,
  });

  if (!data) return null;
  return (
    <div>{`${parseFloat(formatEther(data.value)).toFixed(2)} ${data.symbol}`}</div>
  );
}

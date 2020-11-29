import { useRecoilState } from 'recoil';

import { numState } from 'stores/Page1Store';

import './index.scss';

const Page1 = () => {
  const [num, setNum] = useRecoilState(numState);

  const incNum = () => setNum(num + 1);

  const decNum = () => setNum(num - 1);

  return (
    <div className="page1">
      this is Page1 component!
      <p>{num}</p>
      <div>
        <button onClick={incNum}>++</button>
        <button onClick={decNum}>- -</button>
      </div>
    </div>
  );
};

export default Page1;

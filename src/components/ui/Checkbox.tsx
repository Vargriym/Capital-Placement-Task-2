import { useState } from 'react';
import { Checkbox } from 'antd';

const MyCheckbox = () => {
  const [isChecked, setIsChecked] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleCheckboxChange = (e: any) => {
    setIsChecked(e.target.checked);
  };

  return (
    <div>
      <Checkbox
        checked={isChecked}
        onChange={handleCheckboxChange}
      >
      </Checkbox>
    </div>
  );
};

export default MyCheckbox;

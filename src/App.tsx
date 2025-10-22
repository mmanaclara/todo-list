import Text from "./components/Text";
import Icon from "./components/Icon";

import TrashIcon from "./assets/icons/trash.svg?react";
import CheckIcon from "./assets/icons/check.svg?react";
import Badge from "./components/Badge";

export default function App() {
  return (
    <>
      <Text variant="body-md" className="text-pink-dark">
        Hello World <Icon svg={TrashIcon} className="fill-pink-base" />
      </Text>
      <Icon svg={CheckIcon} className="w-8 fill-green-base" />
      <div>
        <Badge variant="secondary">5</Badge>
        <Badge>2 de 5</Badge>
      </div>
    </>
  );
}

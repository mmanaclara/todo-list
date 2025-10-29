import Text from "./components/Text";
import Icon from "./components/Icon";

import TrashIcon from "./assets/icons/trash.svg?react";
import CheckIcon from "./assets/icons/check.svg?react";
import PlusIcon from "./assets/icons/plus.svg?react";
import PencilIcon from "./assets/icons/pencil.svg?react";
import Badge from "./components/Badge";
import Button from "./components/Button";
import ButtonIcon from "./components/ButtonIcon";
import InputText from "./components/InputText";
import InputCheckbox from "./components/InputCheckbox";
import Card from "./components/Card";

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
        <Button icon={PlusIcon}>Land a job</Button>

        <div>
          <ButtonIcon className="mx-4" icon={TrashIcon} />
          <ButtonIcon className="mx-4" icon={TrashIcon} variant="secondary" />
        </div>
        <Card className="px-8 py-6 mx-4 flex">
          <InputCheckbox />
          <InputText className="grow" />
          <ButtonIcon className="mx-4" icon={TrashIcon} variant="tertiary" />
          <ButtonIcon className="mx-4" icon={PencilIcon} variant="tertiary" />
        </Card>
      </div>
    </>
  );
}

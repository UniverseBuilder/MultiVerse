import { DropdownButton } from "./DropdownButton";
import { DropdownDivider } from "./DropdownDivider";
import { DropdownItem } from "./DropdownItem";
import { DropdownMenu } from "./DropdownMenu";

const Dropdown = ({ children }) => <div className="btn-group">{children}</div>;

Dropdown.Button = DropdownButton;
Dropdown.Menu = DropdownMenu;
Dropdown.Item = DropdownItem;
Dropdown.Divider = DropdownDivider;

export { Dropdown };
